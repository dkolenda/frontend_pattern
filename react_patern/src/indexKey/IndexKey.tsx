import React from 'react';


export class IndexKey extends React.Component<any, IState> {

    state = {
        list: [
          {name: 'Foo1444610101010', id: 1444610101010},
          {name: 'Bar1444600000000', id: 1444600000000}
        ]
    };
      
    public addItem = ()=>{
        const id = + new Date();
        this.setState((state)=>({list: [{name: 'Baz' + id, id} , ...state.list]}));
    }


    render(){
        return (
        <div>
            Key index <br/>
            <hr/>
            <button onClick={this.addItem}><b>Dodaj element</b></button>
          
    
            <h3>Źle <code style={{color:'red'}}>key=index</code></h3>
            <form>
                {this.state.list.map((todo:any, index:number) =>
                  <Item {...todo}
                  key={index} />
                )}
            </form>
            
    
            <h3>Dobrze <code style={{color:'red'}}>key=id</code></h3>
            <form>
                {this.state.list.map((todo:any) =>
                  <Item {...todo}
                  key={todo.id} />
                )}
            </form>
          </div>
        )
    }
}


//HELPERS
interface IState {
    list:Array<{
        name:string,
        id:number  
    }>  
}
interface IProps {
    name:string
}
const Item = ({name}:IProps)=>{
    return (
    <div>
        <label>{name}</label>
        <div>
          <input type='text'/>
        </div>
      </div>   
    )
}