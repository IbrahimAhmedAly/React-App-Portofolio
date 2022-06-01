import React from "react";

import { About, Footer, Header, Skils, Testimonials, Work } from "./container";
import { Navbar } from "./components";
import './App.scss';

const App = () => {
    return ( 
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skils />
            <Testimonials />
            <Footer />
            
        </div>
     );
}
 
export default App;
