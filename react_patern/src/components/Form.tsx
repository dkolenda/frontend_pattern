import React from "react"

interface IProps {
    children: (obj:any)=>any,
    initialValue: any,
    validate: (a:any)=> {},
    onSubmit: ()=>any
}

interface IState{
    values:any;
    error:any
}


class Form extends React.Component<IProps, IState> {
    state = {
        values: this.props.initialValue,
        error: {}
    }

    onChange = (e:any) => {
        const name = e.target.name;
        const value= e.target.value;

        this.setState((oldState:any)=>{
            return {
                values:{
                    ...oldState.values,
                    [name]:value
                }
            }
        }); 

        
       this.setState((oldState:any)=> {
          return {
             error:this.props.validate(oldState.values)
          }
        }) 
    }  

    onSubmit= (e:any)=>{
        e.preventDefault()
        this.setState((oldState:any)=> {
            return {
               error:this.props.validate(oldState.values)
            }
        },()=>{
            if (!Object.keys(this.state.error).length){
                this.props.onSubmit();
            }
        });
    }

    render() {
        return this.props.children({
            onChange: this.onChange,
            values: this.state.values,
            error:this.state.error,
            onSubmit: this.onSubmit
        })
    }
}

export default Form
