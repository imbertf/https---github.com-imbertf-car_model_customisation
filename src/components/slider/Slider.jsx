import React, { useState, useContext } from 'react';
import { ColorContext } from '../../utils/context'
import "./Slider.css";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Face_white from "../../medias/models/face_white.png"
import Face_black from "../../medias/models/face_black.png"
import Lateral_white from "../../medias/models/lateral_white.png"
import Lateral_black from "../../medias/models/lateral_black.png"

const modelsArray = [
    { path: Face_white, alt: "face white", color: "white" },
    { path: Face_black, alt: "face black", color: "black" },
    { path: Lateral_white, alt: "lateral white", color: "white" },
    { path: Lateral_black, alt: "lateral black", color: "black" }
]

const Slider = () => {
    const { color, setColor } = useContext(ColorContext)
    const [step, setStep] = useState(0)
    const filteredModelsArray = []
    
    
    modelsArray.filter((model) => {
        if(model.color === color) {
            filteredModelsArray.push(model)
        }
    })
    
    const modelsArrayLenght = filteredModelsArray.length - 1
    const nextSlide = () => {
        if (step < modelsArrayLenght) {
            setStep(step + 1);
        } else if (step >= modelsArrayLenght) {
            setStep(0);
        }
    };

    const previousSlide = () => {
        if (step > 0) {
            setStep(step - 1);
        } else if (step === 0) {
            setStep(modelsArrayLenght);
        }
    };

    return (
        <div className='slider'>
            <div className="slider-img">
                {
                    filteredModelsArray.map((image, index) => {
                        if (step === index) {
                            return (
                                <img src={image.path} alt={image.alt} key={index} />
                            )
                        }
                    })
                }
            </div>
            <div className='slider-btn'>
                <button onClick={previousSlide}><SlArrowLeft /></button>
                <button onClick={nextSlide}><SlArrowRight /></button>
            </div>
        </div>
    );
};

// {
//     modelsArray.map((image, index) => {
//         if (step === index) {
//             return (
//                 <img src={image.path} alt={image.alt} key={index} />
//             )
//         }
//     })
// }
export default Slider;