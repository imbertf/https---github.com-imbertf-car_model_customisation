import React, { useContext } from 'react'
import "./OptionsMenu.css"
import Face_white from "../../medias/models/face_white.png"
import Face_black from "../../medias/models/face_black.png"
import Lateral_white from "../../medias/models/lateral_white.png"
import Lateral_black from "../../medias/models/lateral_black.png"
import { ColorContext } from '../../utils/context'

// const colorOptions = [
//     { "view": "face", "path1": { Face_white }, "path2": { Face_black } },
//     { "view": "lateral", "path1": { Lateral_white }, "path2": { Lateral_black } },
// ]

const OptionsMenu = () => {
    const { color, setColor } = useContext(ColorContext)
    // const [color, setColor] = useState("white")

    const handleColor = (e) => {
        setColor(e.target.dataset.color)
    }

    return (
        <div className='optionsMenu'>
            <h3>Couleur</h3>
            <ul className='colors'>
                <li className='white' onClick={handleColor} data-color='white'></li>
                <li className='black' onClick={handleColor} data-color='black'></li>
            </ul>
        </div>
    );
};

export default OptionsMenu;

// {
//     modelsArray.filter((model) => {
//         if (model.color != color) {
//             <img src={model.path} alt={model.alt} />
//         }
//     })
// }