"use client"

import { api } from "../trpc/react"
import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, Clock, Search, ChevronRight, RefreshCw } from "lucide-react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { data, isLoading, error, refetch } = api.post.getAll.useQuery();

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  // Filter posts based on search term
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsSearching(e.target.value.length > 0);
  };

  // Function to clear search
  const clearSearch = () => {
    setSearchTerm("");
    setIsSearching(false);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Latest Posts</h1>
          <div className="w-64 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-md animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-lg mx-auto bg-red-50 border border-red-100 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-red-700 mb-4">Unable to Load Posts</h2>
          <p className="text-red-600 mb-6">{error.message}</p>
          <button
            onClick={() => refetch()}
            className="flex items-center justify-center mx-auto px-6 py-3 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors font-medium"
          >
            <RefreshCw size={18} className="mr-2" /> Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-800">
          {isSearching ? `Search Results: "${searchTerm}"` : "Latest Posts"}
        </h1>
        
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 pl-10 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
          {searchTerm && (
            <button 
              onClick={clearSearch} 
              className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>
      </div>
      
      {isSearching && filteredPosts.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-100">
          <p className="text-gray-600 mb-4">No posts found matching "{searchTerm}"</p>
          <button 
            onClick={clearSearch}
            className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md transition-colors"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <>
          {!isSearching && posts.length > 0 && (
            <div className="mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl overflow-hidden shadow-lg">
                <div className="p-6 md:p-8 text-white">
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4">Featured Post</span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">{posts[0].title}</h2>
                  <p className="text-white/80 mb-6 line-clamp-2">{posts[0].excerpt}</p>
                  <div className="flex items-center text-white/70 text-sm mb-6">
                    <Calendar size={14} className="mr-1" />
                    <span className="mr-4">{new Date().toLocaleDateString()}</span>
                    <Clock size={14} className="mr-1" />
                    <span>5 min read</span>
                  </div>
                  <Link 
                    href={`/posts/${posts[0].id}`} 
                    className="inline-flex items-center px-5 py-2.5 bg-white text-blue-600 rounded-md hover:bg-blue-50 transition-colors font-medium"
                  >
                    Read Article <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {(isSearching ? filteredPosts : posts.slice(1)).map((post) => (
              <Link key={post.id} href={`/posts/${post.id}`}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full border border-gray-100 hover:border-blue-100 group">
                  <div className="mb-4">
                    <span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                      {post.category || "Article"}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="text-sm text-gray-500">
                      {new Date().toLocaleDateString()}
                    </div>
                    <span className="text-blue-500 group-hover:text-blue-700 flex items-center text-sm font-medium">
                      Read more <ChevronRight size={14} className="ml-1 group-hover:ml-2 transition-all" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">No posts available yet</h3>
              <p className="text-gray-600 mb-6">Check back later for new content!</p>
            </div>
          )}
        </>
      )}
    </main>
  );
}