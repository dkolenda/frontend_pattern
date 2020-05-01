import React, { useCallback, useState } from "react"

const UseStateComponent = ()=>{

    const [count,setCount] = useState(0)

    const onClickBad=useCallback(()=>{
        setCount(count+1);
    },[]);

    const onClickGood=useCallback(()=>{
        setCount(prevCount=>prevCount+1);
    },[]);

    return(
        <div>
            Count:{count}
            <hr/>
            <button onClick={onClickBad}>SetStateComponent BAD</button>
            <button onClick={onClickGood}>SetStateComponent GOOD</button>
        </div>
    )
}


class SetStateComponent extends React.Component<any,{count:number,echoCount:number}>{

    state={count:0, echoCount:0}

    onClickBad=()=>{
        this.setState({count:this.state.count+1});
        this.setState({echoCount:this.state.count+1});
    }

    onClickGood=()=>{
        this.setState((state)=>({count:state.count+1}));
        this.setState((state)=>({echoCount:state.count+1}));
    }

    render(){
        const {count,echoCount} = this.state;

        return(
            <div>
                Count:{count} EchoCount: {echoCount}
                <hr/>
                <button onClick={this.onClickBad}>SetStateComponent BAD</button>
                <button onClick={this.onClickGood}>SetStateComponent GOOD</button>
            </div>
        )
    }
}






export const SetStateFunction = () =>{
    return (
    <div>
        <SetStateComponent/>
        <hr/>
        <UseStateComponent/>
    </div>)
}