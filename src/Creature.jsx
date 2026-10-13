import { useState } from "react";
import { CONTAINER_SIZE } from "./CreatureField";

const CREATE_X = 120;
const CREATE_Y = 180;
const MIN_GAP = 20;

function Creature(props) {
    const [coordinates, setCoordinates] = useState({x:props.x,y:props.y})
    const [isAwake, setIsAwake] = useState(false);
    
    const getRandomCoordinates = () => {
        const minX = MIN_GAP, maxX = CONTAINER_SIZE - MIN_GAP - CREATE_X;
        const minY = MIN_GAP, maxY = CONTAINER_SIZE - MIN_GAP - CREATE_Y;
        return [Math.random()*(maxX-minX)+minX, Math.random()*(maxY-minY)+minY];
    }

    function toggleAwake(){
        const newAwake = !isAwake;
        setIsAwake(newAwake);
        props.onWake(newAwake);
        const [newX,newY] = getRandomCoordinates();
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
            <img src={!isAwake ? props.sleepImageUrl : props.awakeImageUrl} alt={props.name} width={CREATE_X} />
            <p>{props.name}, age {props.age}</p>
        </div>
    );
}

export default Creature;
