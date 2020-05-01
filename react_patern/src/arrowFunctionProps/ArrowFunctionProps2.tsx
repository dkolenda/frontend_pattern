import React from 'react';

export class ArrowFunctionProps2 extends React.Component<any,{count:number}>{
    state={
        count:0,
        buttons:new Array(4000).fill(1)
    }

    onClick(){
        this.setState(({count})=>({
            count:count + 1
        }))
    }

    render(){
        return (
            <div style={{display:"flex",flexDirection:"column"}}>
                Function bind in props
                <hr/>
                {this.state.count}
                <hr/>
                {
                  this.state.buttons.map((el,index)=>{
                    return (<ButtonItem key={index} onClick={this.onClick.bind(this)} />)
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