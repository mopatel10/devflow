"use client"

import { useParams, useRouter } from 'next/navigation';
import { api } from "~/trpc/react";
import { RefreshCw, Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function PostPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);

  const { data: post, isLoading, error } = api.post.getById.useQuery({
    id,
  }, {
    enabled: !!id,
    retry: (failureCount, error) => {
      if (error.message?.includes("Invalid value")) return false;
      return failureCount < 3;
    }
  });

  // Function to format the date
  const formatDate = (dateString) => {
    if (!dateString) return new Date().toLocaleDateString();
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Function to toggle share menu
  const toggleShareMenu = () => {
    setIsShareMenuOpen(!isShareMenuOpen);
  };

  // Function to share the post
  const sharePost = (platform) => {
    const url = window.location.href;
    const title = post?.title || 'Check out this post';
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        setIsShareMenuOpen(false);
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank');
      setIsShareMenuOpen(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <div className="h-8 w-32 bg-gray-200 rounded animate-pulse mb-4"></div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse mb-6"></div>
          <div className="flex space-x-4 mb-8">
            <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
          </div>
          
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-4 bg-gray-200 rounded animate-pulse mb-4" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
          ))}
          
          <div className="mt-8 space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={`p${i}`} className="space-y-3">
                {[1, 2, 3, 4].map((j) => (
                  <div key={`p${i}l${j}`} className="h-4 bg-gray-200 rounded animate-pulse" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-lg mx-auto bg-red-50 border border-red-100 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-red-700 mb-4">Unable to Load Post</h2>
          <p className="text-red-600 mb-6">{error.message}</p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => router.back()}
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium"
            >
              <ArrowLeft size={18} className="inline mr-2" /> Go Back
            </button>
            <button
              onClick={() => window.location.reload()}
              className="flex items-center justify-center px-6 py-3 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors font-medium"
            >
              <RefreshCw size={18} className="mr-2" /> Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-lg mx-auto bg-blue-50 border border-blue-100 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Post Not Found</h2>
          <p className="text-blue-600 mb-6">The post you're looking for doesn't exist or has been removed.</p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors font-medium"
          >
            <ArrowLeft size={18} className="mr-2" /> Back to All Posts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            <ArrowLeft size={18} className="mr-2" /> Back to All Posts
          </Link>
        </div>
        
        {/* Post Content */}
        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Header */}
          <header className="p-6 md:p-8 border-b border-gray-100">
            <div className="flex items-center space-x-2 mb-4">
              <span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                {post.category || "Article"}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-gray-500 flex items-center">
                <Calendar size={14} className="mr-1" />
                {formatDate(post.createdAt)}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-gray-500 flex items-center">
                <Clock size={14} className="mr-1" />
                {post.readTime || "5 min read"}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
            
            {post.excerpt && (
              <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>
            )}
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  {post.author?.substring(0, 1) || "A"}
                </div>
                <div className="ml-3">
                  <div className="font-medium text-gray-800">{post.author || "Anonymous"}</div>
                  <div className="text-sm text-gray-500">{post.authorTitle || "Author"}</div>
                </div>
              </div>
              
              <div className="relative">
                <button 
                  onClick={toggleShareMenu} 
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Share post"
                >
                  <Share2 size={20} className="text-gray-500" />
                </button>
                
                {isShareMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-100">
                    <button 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      onClick={() => sharePost('twitter')}
                    >
                      Share on Twitter
                    </button>
                    <button 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      onClick={() => sharePost('facebook')}
                    >
                      Share on Facebook
                    </button>
                    <button 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      onClick={() => sharePost('linkedin')}
                    >
                      Share on LinkedIn
                    </button>
                    <button 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      onClick={() => sharePost('copy')}
                    >
                      Copy Link
                    </button>
                  </div>
                )}
              </div>
            </div>
          </header>
          
          {/* Cover Image (if available) */}
          {post.coverImage && (
            <div className="w-full h-64 md:h-96 overflow-hidden">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          {/* Post Body */}
          <div className="p-6 md:p-8 prose prose-lg max-w-none">
            {/* If content is markdown, you might want to use a markdown renderer here */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          {/* Footer */}
          <footer className="p-6 md:p-8 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between items-center">
              <div>
                {post.tags && Array.isArray(post.tags) && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <button 
                onClick={toggleShareMenu} 
                className="inline-flex items-center px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md transition-colors"
              >
                <Share2 size={16} className="mr-2" /> Share
              </button>
            </div>
          </footer>
        </article>
        
      </div>
    </div>
  );
}