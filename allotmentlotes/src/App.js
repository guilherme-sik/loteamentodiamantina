import React from "react";
/* Import para utiização do State e useEffect */
import { useState, useEffect } from "react";
/* Componentização do elementos da página */
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/sobre";
import { Services } from "./components/servicos";
import { Portfolio } from "./components/portfolio";
import { Contact } from "./components/contato";
/* Importação do data em Json*/
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";



export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


/* Setando estados vindo do DATA.Json */
const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation                                         />
      <Header       data={landingPageData.Header}         />     
      <Features     data={landingPageData.Features}       />
      <About        data={landingPageData.Sobre}          />
      <Services     data={landingPageData.Servicos}       />
      <Portfolio    data={landingPageData.Portfolio}      />
      <Contact      data={landingPageData.Contato}        />

    </div>
  );
};

export default App;
