import React from 'react';
import { ControllButton } from './ControllButton';

export class PlayButton extends React.Component{
    playVideo=async ()=>{
        const test = await fetch("https://exempledaomain.pl/video/show");
    }

    render(){
        return <ControllButton imageName={"play.png"} onClick={this.playVideo}/>
    }
}
