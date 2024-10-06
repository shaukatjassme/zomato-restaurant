import React from 'react'

const index = () => {
  return (
    <>


      <div className="container mx-auto w-85 mt-10 ">
        <div className="grid grid-cols-12 gap-4">
          {/* Blurb covering 6 columns */}
          <div className="col-span-12 md:col-span-6 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition duration-400 hover:scale-105">
            {/* Full-width Image */}
            <img
              src="/images/blurb.jpg"
              alt="Feature Image"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              {/* Title */}
              <h3 className="text-left text-xl font-semibold text-gray-800 mb-1">
                Order Online
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-left">
                Stay home and order to your doorstep
              </p>
            </div>
          </div>


        </div>

        <div className="grid grid-cols-12 gap-4 mt-10">
          <div className="col-span-12 md:col-span-8 bg-white  ">
            <p className="custom-okra-color  text-3xl">Popular localities in and around <span className='font-bold'>Baramulla</span></p>
          </div>
        </div>
      </div>

    </>
  )
}

export default index