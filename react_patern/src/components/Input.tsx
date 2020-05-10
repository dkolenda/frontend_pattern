import React from "react"

interface IProps {
    type: string,
    value: string,
    name: string, 
    onChange: any,
    placeholder?:string;
}

class Input extends React.Component<IProps,any> {
    render(){
        return (
            <input 
            type={this.props.type} 
            name={this.props.name} 
            value={this.props.value || ''} 
            onChange={this.props.onChange} 
            placeholder={this.props.placeholder}/>
        )
    }
}

export default Input;
