
import React from 'react';
import "./App.css";
import Header from "./components/header/Header";
import Slider from './components/slider/Slider';
import OptionsMenu from "./components/optionsMenu/OptionsMenu";


const App = () => {
    return (
        <>
        <Header/>
        <main>
            <div id='slider-container'><Slider/></div>
            <div id='optionsMenu-container'><OptionsMenu/></div>
        </main>
        </>
    );
};

export default App;