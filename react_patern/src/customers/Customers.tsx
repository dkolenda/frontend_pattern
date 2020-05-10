
import React, {useContext} from 'react';
import { Formik } from 'formik';
import { ContextCustomers,CustomersProvider } from '../context';
import {addCustomer} from '../actions'

export const Customers = () => {
    const newContextCustomer = useContext(ContextCustomers);
    console.log(newContextCustomer)
    return (<div>
        <h1>Dodaj Klienta</h1>
        
        <Formik
            initialValues={{ email: '', firstname: '', lastname:'' }}
            onSubmit={(value) => {
                addCustomer(newContextCustomer.dispatch, value)
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
            }: any) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <input
                            type="text"
                            name="firstname"
                            placeholder="Imie"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        <input
                            type="text"
                            name="lastname"
                            placeholder="Nazwisko"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        <button type="submit" >
                            Submit
                        </button>
                    </form>
                )}
        </Formik>
       
    </div>)
}
