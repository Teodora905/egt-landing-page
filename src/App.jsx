import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import InfoSection from "./components/InfoSection";
import Products from "./components/Products";
import BasedSolutions from "./components/BasedSolutions";
import Footer from "./components/Footer";
import SiteRights from "./components/SiteRights";
import SocialMedia from "./components/SocialMedia";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "" : "dark"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <ImageSlider />
      <SocialMedia />
      <InfoSection />
      <Products />
      <BasedSolutions />
      <Footer />
      <SiteRights />
    </div>
  );
}

export default App;
