import React, { useState } from 'react';

const buttons = new Array(4000).fill(1);

export const ArrowFunctionProps5:React.FC=()=>{

    const [count,setCount] = useState(0);


    const onClick = React.useCallback(()=>{
        setCount(prevCount => prevCount + 1)
    },[])

    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            Function Component with useCallback
            <hr/>
            {count}
            <hr/>
            {
              buttons.map((el,index)=>{
                return (<ButtonItem key={index} onClick={onClick} />)
              })  
            }
        </div>
    )
}




//Helpers
class ButtonItem extends React.PureComponent<{onClick:any}> {
    render(){
        console.log("renderButtonItem")
        return(
            <button onClick={this.props.onClick}>Text</button>
        )
    }
}