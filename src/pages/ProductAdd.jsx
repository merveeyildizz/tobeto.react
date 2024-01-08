import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { Button, FormField, Label } from 'semantic-ui-react';
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';

export default function ProductAdd() {
    const initialValues={title:"",price:10}

    const schema=Yup.object({
        title: Yup.string().required("Ürün adı zorunlu"),
        price: Yup.number().required("Ürün fiyatı zorunlu")
    })

  return (
    
        <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values)=>{
            console.log(values)
        }}
        >
        <Form className='ui form'>
            <KodlamaIoTextInput name="title" placeholder="Ürün adı"/>
            <KodlamaIoTextInput name="price" placeholder="Ürün fiyatı"/>

    <Button color='green' type='submit'>Ekle</Button>
        </Form>
        </Formik>
    
  )
}
