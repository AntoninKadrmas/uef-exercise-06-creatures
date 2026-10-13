import { useState } from "react";
import { CONTAINER_SIZE } from "./CreatureField";

const CREATE_SIZE = 120;
const GAP = CREATE_SIZE/2 + 20;

function Creature(props) {
    const [coordinates, setCoordinates] = useState({x:props.x,y:props.y})
    const [isAwake, setIsAwake] = useState(false);
    
    const getRandomCoordinate = () => {
        const min = GAP, max = CONTAINER_SIZE-GAP;
        return Math.random()*(max-min)+min;
    }

    function toggleAwake(){
        setIsAwake((prev)=>!prev);
        const [newX,newY] = [getRandomCoordinate(),getRandomCoordinate()];
        setCoordinates({x:newX, y:newY})
    }

    let style = {
        position: 'absolute',
        left: coordinates.x + 'px',
        top: coordinates.y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated'
    };

    return (
        
        <div onClick={toggleAwake} style={style}>
            <img src={!isAwake ? props.sleepImageUrl : props.awakeImageUrl} alt={props.name} width={CREATE_SIZE} />
            <p>{props.name}, age {props.age}</p>
        </div>
    );
}

export default Creature;
