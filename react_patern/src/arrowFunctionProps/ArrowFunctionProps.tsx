import React from 'react';

export class ArrowFunctionProps extends React.Component<any,{count:number}>{
    state={
        count:0,
        buttons:new Array(4000).fill(1)
    }

    onClick = ()=>{
        this.setState(({count})=>({
            count:count + 1
        }))
    }

    render(){
        return (
            <div style={{display:"flex",flexDirection:"column"}}>
                Array Function out render
                <hr/>
                {this.state.count}
                <hr/>
                {
                  this.state.buttons.map((el,index)=>{
                    return (<ButtonItem key={index} onClick={this.onClick} />)
                  })  
                }
            </div>
        )
    }

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