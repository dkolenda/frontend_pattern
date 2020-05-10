import React, {useReducer} from 'react';

export interface Product{
    name:string;
    price:string;
}


interface ProductsState{
    products:Product[]
}

const productsState:ProductsState = {
    products: []
}


export const ContextProducts = React.createContext<{productsState: ProductsState, dispatch: React.Dispatch<any>}>({
    productsState,
    dispatch: () => null,
});

const productsReducer = (state:ProductsState, action:any) => {
    switch(action.type) {
        case 'add_product':
            console.log(action, state)
            return {...state, products:[...state.products, action.payload] }
        default:
            throw new Error();
    }
}


export const ProductsProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(productsReducer, productsState)

    
    return(
        <ContextProducts.Provider value={{productsState: state, dispatch}}>
        {children}
        </ContextProducts.Provider>
    )
}