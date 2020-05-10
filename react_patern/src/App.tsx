import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form"
import Input from "./components/Input";
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Form 
        initialValue={{text: "", password: ""}}
        validate={(values: any) => { 
          if(values.text?.length < 5){
            return {text: "błąd"}
          } else {
            return {}
          }
        }}
        onSubmit={()=>{

        }}
        >
        {({onChange, values, error,onSubmit}) => ( 
          <form onSubmit={onSubmit}>
            <Input type="text" value={values.text} name="text" onChange={onChange} placeholder={"Name:"}/>
            {error.text}
            <br/>
            <Input type="password" value={values.password} name="password" onChange={onChange} placeholder={"Password:"}/>
            <br/>
            <Button title="Submit"/>
            {console.log(values)}
          </form>
        )}
      </Form>
    </div>
  );
}

export default App;
