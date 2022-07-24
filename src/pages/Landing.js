import React from "react";
import { selectForecastData } from "../redux/slices/forecastSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import GetForecastForm from "../components/GetForecastForm";
import ForecastBanner from "../Layouts/ForecastBanner";
import Forecast from "../Layouts/Forecast";

const Landing = () => {
  const forecast = useSelector(selectForecastData);
  return (
    <>
      <ForecastBanner />
      <GetForecastForm />
      {forecast.length ? <Forecast />: null}
    </>
  );
};

export default Landing;
