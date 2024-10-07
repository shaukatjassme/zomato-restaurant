import { React, useState,  } from 'react'
import optionsData from '../data/options.json';

const index = () => {
  // State to track the selected method and input value
  const [contactMethod, setContactMethod] = useState('email');
  const [inputValue, setInputValue] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);
 

  // Handle radio button change
  const handleContactMethodChange = (method) => {
    setContactMethod(method);
    setInputValue(''); // Clear the input when method changes
  };








  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };


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

        <div className="grid grid-cols-12 gap-4 mt-5 mb-5">
          <div className="col-span-12 md:col-span-4 bg-white  ">
            {/* Button with title, subtitle, and arrow */}
            <button className="mt-4 w-full flex justify-between items-center bg-white border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300">
              {/* Title and Subtitle on the left */}
              <div className="text-left">
                <p className="text-xl  text-gray-800">Baramulla Locality</p>
                <p className="text-sm text-gray-500">28 places</p>
              </div>

              {/* Arrow icon on the right */}
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>


      {/* Hero-mobile-section */}

      <section className="text-gray-600 body-font bg-mobile-text-color">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 pl-20">
            <img className="object-cover object-center rounded" alt="hero" src="/images/mobile.png" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Get the Zomato app</h1>
            <p className="mb-8 leading-relaxed">We will send you a link, open it on your phone to download the app</p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">


                {/* Radio buttons for selecting email or phone */}
                <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 mb-2">
                  {/* Radio buttons for selecting email or phone */}
                  <div className=" flex items-center">
                    <div className="flex items-center mr-4">
                      <input
                        id="email"
                        type="radio"
                        name="contact-method"
                        className="custom-radio mr-2"
                        checked={contactMethod === 'email'}
                        onChange={() => handleContactMethodChange('email')}
                      />
                      <label htmlFor="email" className="text-gray-600">Email</label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="phone"
                        type="radio"
                        name="contact-method"
                        className="custom-radio mr-2"
                        checked={contactMethod === 'phone'}
                        onChange={() => handleContactMethodChange('phone')}
                      />
                      <label htmlFor="phone" className="text-gray-600">Phone</label>
                    </div>

                  </div>




                </div>

                {/* Input field for email or phone */}
                <input
                  type={contactMethod === 'email' ? 'email' : 'text'}
                  id="contact-field"
                  name="contact-field"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={
                    contactMethod === 'email' ? 'Enter your email' : 'Enter your phone number'
                  }
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <button className="inline-flex bg-red-500 text-white px-6 py-2 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Share App Link</button>
            </div>
            <p className="text-black-600 text-sm mt-5 ">Download app from</p>
            <div className="flex lg:flex-row md:flex-col">
              <button className="inline-flex py-3 rounded-lg items-center focus:outline-none">
                <img
                  src="/images/google-black.png"
                  alt="Google Play Badge"
                  className="w-32" // Adjust size as needed
                />
              </button>
              <button className="inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 focus:outline-none">
                <img
                  src="/images/apple-black.png"
                  alt="App Store Badge"
                  className="w-32" // Adjust size as needed
                />
              </button>
            </div>

          </div>
        </div>
      </section>

      <div className="container mx-auto w-85 mt-10 mb-10">
        <div className="grid grid-cols-12 gap-4 mt-10">
          <div className="col-span-12 md:col-span-12 bg-white">
            <p className="custom-okra-color text-3xl">Explore options near me</p>

            {optionsData.map((option, index) => (
              <div key={index} className="mt-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center rounded w-full p-4 border-2 border-gray-100"
                >
                  <span className="text-xl">{option.option}</span> {/* Added text-2xl class here */}
                  <svg
                    className={`w-6 h-6 text-gray-600 transition-transform ${activeIndex === index ? 'transform rotate-180' : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Down arrow icon */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>


                {activeIndex === index && (
                  <div className="p-4 bg-white-50 text-gray-700">
                    <div className='flex' dangerouslySetInnerHTML={{ __html: option.content }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default index