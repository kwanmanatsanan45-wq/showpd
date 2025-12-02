import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-fuchsia-950 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center flex-wrap">
          
          <div>
            <h1 className="text-1xl font-bold">My Web</h1>
            <p className="text-blue-100 text-sm mt-1">
              Thank you for using the website.
            </p>
          </div>

          <div className="text-sm text-gray-100 mt-4 md:mt-0">
            <h1 className="text-1xl font-bold">AboutWed</h1>
            <p className="text-blue-100 text-sm mt-1">
                Supernatural Shop
            </p>
          </div>

          <div className="text-sm text-gray-100 mt-4 md:mt-0">
            <h1 className="text-1xl font-bold">Wed</h1>
            <p className="text-blue-100 text-sm mt-1">
                Please help me. What should I do I'm confused.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer