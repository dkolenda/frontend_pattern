import React, { useState } from 'react';



export const ArrowFunctionProps6:React.FC=()=>{

    const [count,setCount] = useState(0);


    const onClick = React.useCallback(()=>{
        setCount(prevCount => prevCount + 1)
    },[])

    const obj = {
        name:funcTest()
    }

    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            FC with useCallback but new obj in render
            <hr/>
            {count}
            <hr/>
            {
              buttons.map((el,index)=>{
                return (<ButtonItem key={index} onClick={onClick} obj={obj}/>)
              })  
            }
        </div>
    )
}

const buttons = new Array(4000).fill(1);
const funcTest = () => {
    return "test";
}


//Helpers
class ButtonItem extends React.PureComponent<{onClick:any,obj:{name:string}}> {
    render(){
        console.log("renderButtonItem")
        return(
            <button onClick={this.props.onClick}>Text {this.props.obj.name} </button>
        )
    }
}