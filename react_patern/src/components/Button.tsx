import React from "react"

interface IProps {
    title: string, 
}

class Button extends React.Component<IProps,any> {
    render(){
        return (
            <button type="submit">{this.props.title}</button>
        )
    }
}

export default Button;
