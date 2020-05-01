import React, { useCallback } from 'react';

//Singletony traktujemy jak classy z polami statycznymi i zapisujemy z dużej literami
export const Form = {};


export const RenderProps = () =>{

    const sendForm = useCallback((event)=>{
        console.log(Form);
        event.preventDefault();
    },[]);

    return  <div>
                Render Props
                <hr/>
                <form onSubmit={sendForm}>
                        <InputController viewInput={TextInputView} name={"firstName"} placeholder="Imię"/>
                        <InputController viewInput={TextInputView} name={"lastName"} placeholder="Nazwisko"/>
                        <InputControllerSupportHook viewInput={PasswordInputView} name={"password"} placeholder="Haslo"/>
                        <button type="submit">Wyślij</button>
                </form>
            </div>
}


//Contener
export class InputController extends React.Component<IInputControllerProps>{

    state={value:""};

    changeValue=(value:any)=>{
        (Form as any)[this.props.name] = value;
        this.setState({value});
    }

    render(){
        return this.props.viewInput({...this.props,onChange:this.changeValue})
    }
}

export class InputControllerSupportHook extends InputController{
    render(){
        const ViewComponent = this.props.viewInput;

        return <ViewComponent {...this.props} onChange={this.changeValue} />
    }
}


//View
export const TextInputView:React.FC<IInputViewProps> = (props)=>{

    const onChange = (event:any)=>{
        if(props.onChange)
        props.onChange(event.target.value)
    };

    return (
        <div>
            <input type="text" value={props.value} onChange={onChange} placeholder={props.placeholder} />
        </div>
    )
}

export const PasswordInputView:React.FC<IInputViewProps> = ({onChange,value,placeholder})=>{

    const changeHandle = useCallback((event:any)=>{
        if(onChange)
        onChange(event.target.value)
    },[onChange]);

    return (
        <div>
            <input type="password" value={value} onChange={changeHandle} placeholder={placeholder} />
        </div>
    )
}

interface IInputControllerProps {
    name:string;
    viewInput:React.FC<IInputViewProps>
    placeholder?:string;
}

interface IInputViewProps {
    name?:string;
    placeholder?:string;
    onChange?:(value?:any)=>void;
    value?:string;
}