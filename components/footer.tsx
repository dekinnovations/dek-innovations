export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-blue-400 to-blue-600 text-white mt-10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold">DEK Innovations</h2>
              <p className="text-md mt-2">Innovating the future, one project at a time.</p>
            </div>
            {/* Social Media Links */}
            <div className="flex justify-center items-center space-x-3">
              <a target="_blank" rel="noopener noreferrer">
                <img src="/images/instagram.svg" alt="Instagram" className="hover:scale-110 transition-transform w-6 h-6"/>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img src="/images/facebook.svg" alt="Facebook" className="hover:scale-110 transition-transform w-6 h-6"/>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img src="/images/x.svg" alt="X" className="hover:scale-110 transition-transform w-6 h-6"/>
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="/" className="hover:text-blue-200 transition-colors duration-300">Home</a>
              <a href="/about" className="hover:text-blue-200 transition-colors duration-300">About</a>
              <a href="/ads" className="hover:text-blue-200 transition-colors duration-300">Ad Campaigns</a>
              <a href="/websites" className="hover:text-blue-200 transition-colors duration-300">Websites</a>
              <a href="/login" className="hover:text-blue-200 transition-colors duration-300">Sign In</a>
            </div>
          </div>
          <div className="text-center mt-8">
            <p>&copy; {new Date().getFullYear()} DEK Innovations. All rights reserved.</p>
          </div>
        </div>
        
      </footer>
    )
  }
  