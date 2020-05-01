import React from 'react';
import logo from './logo.svg';
import './App.css';
import { IndexKey } from './indexKey/IndexKey';
import { ArrowFunctionProps } from './arrowFunctionProps/ArrowFunctionProps';
import { ArrowFunctionProps2 } from './arrowFunctionProps/ArrowFunctionProps2';
import { ArrowFunctionProps3 } from './arrowFunctionProps/ArrowFunctionProps3';
import { ArrowFunctionProps4 } from './arrowFunctionProps/ArrowFunctionProps4';
import { ArrowFunctionProps5 } from './arrowFunctionProps/ArrowFunctionProps5';
import { ArrowFunctionProps6 } from './arrowFunctionProps/ArrowFunctionProps6';
import { SetStateFunction } from './setStateFunction/SetStateFunction';

class App extends React.Component<any,{page:PageType}> {

  state = {
    page:PageType.KEY_INDEX
  }

  render(){
    const {page} = this.state;

    return (
      <div className="App">
        <button onClick={this.keyOnClick}>Key index</button>
        <button onClick={this.arrowOnClick}>Arrow Function</button>
        <button onClick={this.arrowOnClick2}>Bind in props</button>
        <button onClick={this.arrowOnClick3}>Arrow in Props</button>
        <button onClick={this.arrowOnClick4}>FC without useCallback</button>
        <button onClick={this.arrowOnClick5}>FC with useCallback</button>
        <button onClick={this.arrowOnClick6}>FC with useCallback but new obj in render</button>
        <button onClick={this.setStateFuncOnClick}>SetState without function overload</button>
        
        <hr/>

        {
          page == PageType.KEY_INDEX &&
          <IndexKey />
        }


        {
          page == PageType.ARROW_FUN &&
          <ArrowFunctionProps />
        }

        {
          page == PageType.ARROW_FUN2 &&
          <ArrowFunctionProps2 />
        }
       
        {
          page == PageType.ARROW_FUN3 &&
          <ArrowFunctionProps3 />
        }

        {
          page == PageType.ARROW_FUN4 &&
          <ArrowFunctionProps4 />
        }

        {
          page == PageType.ARROW_FUN5 &&
          <ArrowFunctionProps5 />
        }

        {
          page == PageType.ARROW_FUN6 &&
          <ArrowFunctionProps6 />
        }

        {
          page == PageType.SETSTATE_FUNC &&
          <SetStateFunction />
        }

      </div>
    );
  }

  private onClick = (page:PageType)=>{
    return ()=>{
      this.setState({page})
    }
  }

  keyOnClick = this.onClick(PageType.KEY_INDEX);
  arrowOnClick = this.onClick(PageType.ARROW_FUN);
  arrowOnClick2 = this.onClick(PageType.ARROW_FUN2);
  arrowOnClick3 = this.onClick(PageType.ARROW_FUN3);
  arrowOnClick4 = this.onClick(PageType.ARROW_FUN4);
  arrowOnClick5 = this.onClick(PageType.ARROW_FUN5);
  arrowOnClick6 = this.onClick(PageType.ARROW_FUN6);
  setStateFuncOnClick = this.onClick(PageType.SETSTATE_FUNC);
}

export default App;




enum PageType {
  KEY_INDEX = "keyIndex",
  ARROW_FUN = "arrowFunction",
  ARROW_FUN2 = "arrowFunction2",
  ARROW_FUN3 = "arrowFunction3",
  ARROW_FUN4 = "arrowFunction4",
  ARROW_FUN5 = "arrowFunction5",
  ARROW_FUN6 = "arrowFunction6",
  SETSTATE_FUNC = "setStateFunc"
}
