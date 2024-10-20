import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useStore from "../store/useStore";
import productsApi from "../apis/product";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const Body = () => {
  const addUser = useStore((state) => state.addUser);
  const initialValues = {
    name: "",
    email: "",
    tel: "",
  };
  const onSubmit = (values, { resetForm }) => {
   
    addUser(values);
    resetForm();// call from formik.
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    tel:Yup.string()
    .required("Required")
    .matches(
      /^[0-9]{10}$/, 
      "Phone number is not valid"
    ),
  });
  
  // react -query  function
     const queryResult=()=>{
     
     }
 queryResult();
//   const fetchProduct=async()=>{
//     try{
//    const response=await productsApi.show();
//    console.log(response);
//     }
//     catch(error){
//  console.log(error);
//     }
//   }

//   useEffect(()=>{
//  fetchProduct();
//   },[])

  return (
    <section className="p-6">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="space-y-4">
          <Field
            type="text"
            placeholder="Enter your name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <ErrorMessage name="name" component="div" className="text-red-500" />
          <Field
            type="email"
            placeholder="Enter your email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />
          <Field
            type="tel"
            name="tel"
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <ErrorMessage name="tel" component="div" className="text-red-500" />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-darkblue to-darkblue  text-white py-2 rounded-2xl hover:bg-blue-700 transition-colors"
          >
            Get Started
          </button>
        </Form>
      </Formik>
    </section>
  );
};
export default Body;
