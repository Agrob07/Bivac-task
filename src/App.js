import React, {useEffect} from "react";
import "./App.css";
import { useRoutes, useLocation } from "react-router-dom";
import { routes } from "./router/routes";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";


function App() {
  let element = useRoutes(routes);
  let location = useLocation();
  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
})
  }, [location]);

  return (
    <div className="App h-screen  ">
      <Header />
      
      {element}
      
      <Footer />
    </div>
  );
}

export default App;
