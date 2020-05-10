import React, {useContext} from 'react';
import { Formik } from 'formik';
import { ContextProducts } from '../productsContext';
import { addProducts } from '../actions';

export const Products = () =>{
    const newProductContext = useContext(ContextProducts)

    return <div>
        <h1>Dodaj produkt</h1>
        <Formik
        initialValues={{ name: '', price: '' }}
        onSubmit={(value) => {
            addProducts(newProductContext.dispatch, value)
        }}
        >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
        }:any) => (
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Nazwa"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
                type="text"
                name="price"
                placeholder="Cena"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit">
                Submit
            </button>
            </form>
        )}
        </Formik>
    </div>
}