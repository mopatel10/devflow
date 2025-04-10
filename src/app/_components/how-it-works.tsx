  export default function HowItWorks() {
      
      return(
      <section id="how-it-works" className="py-12 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center text-[#D45D27] mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="flex flex-col items-center md:w-1/4">
            <div className="w-16 h-16 bg-[#D45D27] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">1</div>
            <h3 className="text-xl font-bold mb-2 text-center">Download</h3>
            <p className="text-center">Get the app from your app store of choice</p>
          </div>
          
          <div className="hidden md:block w-8 h-1 bg-[#D45D27]"></div>
          
          <div className="flex flex-col items-center md:w-1/4">
            <div className="w-16 h-16 bg-[#D45D27] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">2</div>
            <h3 className="text-xl font-bold mb-2 text-center">Create Profile</h3>
            <p className="text-center">Set up profiles for you and your pets</p>
          </div>
          
          <div className="hidden md:block w-8 h-1 bg-[#D45D27]"></div>
          
          <div className="flex flex-col items-center md:w-1/4">
            <div className="w-16 h-16 bg-[#D45D27] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">3</div>
            <h3 className="text-xl font-bold mb-2 text-center">Start Managing</h3>
            <p className="text-center">Enjoy peace of mind knowing where your pets are</p>
          </div>
        </div>
      </section>
      )}