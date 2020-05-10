import React, {useReducer} from 'react';


interface Customer{
    firstname:string;
    lastname:string;
    email:string
}

interface CustomersState{
    customers:Customer[]
}


const customersState:CustomersState = {
    customers: []
}


export const ContextCustomers = React.createContext<{customersState: CustomersState, dispatch: React.Dispatch<any>}>({
    customersState,
    dispatch: () => null
});


export const customersReducer = (state:CustomersState, action:any) => {
    switch(action.type) {
        case 'add_customer':
            console.log(action, state)
            return {...state, customers:[...state.customers, action.payload] }
        default:
            throw new Error();
    }
}



export const CustomersProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(customersReducer, customersState)

    
    return(
        <ContextCustomers.Provider value={{customersState: state, dispatch}}>
            {children}
        </ContextCustomers.Provider>
    )
}




