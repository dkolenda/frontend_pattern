import React from 'react';

interface IProps {
    imageName:string;
    onClick:()=>void
}

export const ControllButton = (props:IProps)=>{
    return (
        <div className="ControllButton-wrapper" onClick={props.onClick}>
            <img src={`/image/${props.imageName}`} className="ControllButton-icon" />
        </div>
    )
}