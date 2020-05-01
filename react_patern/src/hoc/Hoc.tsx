import React, { useCallback } from 'react';

export const Form = {};
const TextInputView:React.FC<IInputViewProps> = (props)=>{

    const changeHandle = useCallback((event:any)=>{
        if(props.onChange)
        props.onChange(event.target.value)
    },[props.onChange]);

    return (
        <div>
            <input type="text" value={props.value} onChange={changeHandle} placeholder={props.placeholder} />
        </div>
    )
}


function withInputControll(inputComponent:React.Component<IInputViewProps> | React.FC<IInputViewProps>) {
    // ...i zwraca inny komponent...
    return class extends React.Component<IInputControllerProps>{

        state={value:""};
    
        changeValue=(value:any)=>{
            (Form as any)[this.props.name] = value;
            this.setState({value});
        }
    
        render(){
            const ViewComponent = inputComponent as any;
            return <ViewComponent {...this.props} onChange={this.changeValue} />
        }
    }
}

const TextInputViewWithControll = withInputControll(TextInputView);

export class Hoc extends React.Component {

    sendForm = (event:any)=>{
        console.log(Form);
        event.preventDefault();
    }

    render(){
        return(
        <div>
            HOC
            <hr/>
            <form onSubmit={this.sendForm}>
                <TextInputViewWithControll name={"name"} placeholder="Imie"/>
                <button type="submit">Wyślij</button>
            </form>
        </div>
        )
    }
}

interface IInputControllerProps {
    name:string;
    placeholder?:string;
}

interface IInputViewProps {
    name?:string;
    placeholder?:string;
    onChange?:(value?:any)=>void;
    value?:string;
}