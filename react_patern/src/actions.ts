

export const addCustomer = (dispatch: any, value:any) => {
   dispatch({type:'add_customer', payload:value})
}

export const addProducts = (dispatch: any, value:any) => {
   dispatch({type:'add_product', payload:value})
}
