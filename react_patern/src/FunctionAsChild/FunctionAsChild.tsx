import React from "react";

export class FormController extends React.Component<{children:(props:IViewComponentProps)=>any},IFormControllerState>{

    state={};

    sendForm = (event:any)=>{
        console.log(this.state);
        event.preventDefault();
    }
    
    handleChange = (event:any)=>{
        this.setState({[event.target.getAttribute('name')]:event.target.value});
    }

    render(){
        const ViewComponent = this.props.children as React.FC<IViewComponentProps>;
        return  <ViewComponent value={this.state} sendForm={this.sendForm} handleChange={this.handleChange} />
    }
}

export const FunctionAsChild = () =>{

    return (<div>
        Function As Child
        <hr/>
        <FormController>
            {({sendForm,value,handleChange})=>(
                <form onSubmit={sendForm}>
                    <input name="name" placeholder="Imie" onChange={handleChange} value={value.name || ''} />
                    <button type="submit">Wyslij</button>
                </form>
            )}
        </FormController>

    </div>)
}


interface IViewComponentProps {
    sendForm:(event:any)=>void,
    handleChange:(value:any)=>void
    value:{[name:string]:any}
}

interface IFormControllerState {
    [name:string]:any
}