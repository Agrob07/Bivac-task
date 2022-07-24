import React from 'react'

const ForecastBanner = () => {
  return (
    <div className="py-6 px-4">
    <div className="mx-auto bg-white relative ">
      <div className="mx-auto bg-gray-100">
        <div className="flex  block justify-evenly items-center">
          <div className="md:p-10 p-4">
          
            <p className="text-3xl  font-semibold leading-9 text-gray-600 py-4">
            Weather Forecast
            </p>
            <p className="text-base leading-normal text-gray-600">
            Accurate 7 Day Weather Forecasts for thousands of places
              <br />
            around the World.
            </p>
          </div>
          <div className="md:p-0 p-4 w-fit">
            <img src="/assets/main.png" alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ForecastBanner