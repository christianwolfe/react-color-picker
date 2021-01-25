import React from 'react'

function ColorPicker(props) {
    return(
        <>
       {props.label}: <input type="range" min="0" max="255"
        value={props.color}
        onChange={(event) => {
          console.log(event.target.value);
          props.setColor(event.target.value);
        }}
        />
        {props.color}
        </>
    );
}

export default ColorPicker;