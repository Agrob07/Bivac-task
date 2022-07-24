import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { coordsValidator } from "../helpers/coordsValidator";
import { getForecastAsync, resetForecast } from "../redux/slices/forecastSlice";
import Modal  from "./Modal";

const GetForecastForm = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });

  const onSubmit = async (data) => {
    const isValid = coordsValidator(data);
    isValid ? dispatch(getForecastAsync(data)) : setOpen(true);
  };
 
 
  return (
    <>
    <Modal  open={open} setOpen={setOpen}/>
    <div className="lg:container lg:mx-auto grid ">
      
      <div className=" bg-white h-auto  relative lg:px-10 p-6 lg:py-12">
        <div className="mt-7 lg:mt-20">
          <form
            className="mt-8"
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <input
                aria-label="latitude"
                className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
                type="number"
                step="0.0001"
                name="latitude"
                placeholder="Latitude"
                {...register("latitude", {
                  required: "Please enter latitude.",
                })}
              />
              <input
                aria-label="longitude"
                className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
                type="number"
                step="0.0001"
                name="longitude"
                placeholder="Longitude"
                {...register("longitude", {
                  required: "Please enter longitude.",
                })}
              />
            </div>
            <div className="flex justify-around">
              <button
                type="submit"
                className="focus:outline-none bg-green-500 transition duration-150 ease-in-out hover:bg-green-600 rounded text-white px-8 py-3 text-sm leading-6 text-white p-4 px-8 text-lg my-3 mt-10  "
              >
                Confirm
              </button>
              <button
                type="reset"
                className="focus:outline-none bg-blue-500 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-8 py-3 text-sm leading-6 text-white p-4 px-8 text-lg my-3 mt-10 "
                onClick={() => dispatch(resetForecast())}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default GetForecastForm;
