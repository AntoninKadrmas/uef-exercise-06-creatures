import { useState } from "react";

function Creature(props) {
    function toggleAwake(){setIsAwake((prev)=>!prev)}

    const [isAwake, setIsAwake] = useState(false);

    const style = {
        position: 'absolute',
        left: props.x + 'px',
        top: props.y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated'
    };

    return (
        
        <div onCLick={toggleAwake} style={style}>
            <img src={!isAwake ? props.sleepImageUrl : props.awakeImageUrl} alt={props.name} width="120" />
            <p>{props.name}, age {props.age}</p>
        </div>
    );
}

export default Creature;
