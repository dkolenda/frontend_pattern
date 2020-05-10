import React, { useContext } from 'react';
import { ContextProducts, Product } from './productsContext';

function Table() {
const {productsState} = useContext(ContextProducts);
    return (<div>
        <h2>Products</h2>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {productsState.products.map((product:Product, index)=>( 
                <tr key={index}>
                    <td>
                        {product.name}
                    </td>
                    <td>
                        {product.price}
                    </td>
                </tr>)
            )}
            </tbody>
        </table>
    </div>);
}

export default Table;
