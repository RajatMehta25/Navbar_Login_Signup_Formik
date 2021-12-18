import React from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Dialog } from "@mui/material";
import "./ModalNew.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import SubmitButtonWrapper from "./SubmitButtonWrapper";
import { Button as Button1 } from "@mui/material";
import { ToastContainer, toast  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const ModalNew = ({ value, fun, hel, Name , SomeText }) => {
  let validate;
let formValues;

Name==='Login'?
formValues={
  firstname: "",
    password: "",
 
}
:
formValues={
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};


Name==='Login'? 

 validate = Yup.object({
  firstname: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  password: Yup.string()
    .min(6,"Password Must be at least 6 characters")
    .required("Password is required"),
 
}) :

   validate = Yup.object({
    firstname: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastname: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("email is required"),
    password: Yup.string()
      .min(6,"Password Must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password"), null],
        "Password Do Not Match"
      )
      .required("Password is required"),
  });

  
  return (
    <>
      <Dialog open={value}>
        <DialogTitle>{Name}</DialogTitle>
        <DialogContent>
          <DialogContentText>{SomeText}</DialogContentText>
          <Formik
            initialValues={
             formValues
            }
            validationSchema={validate}
            onSubmit={values=> {
                    toast.success('Successful', {
             position: "top-center",
                autoClose: 3000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
              draggable: true,
                progress: undefined,
              
               });
             console.log(values);

            }}
            
          >
            <Form>
              
              {hel ? (
                <>
                  {hel[0].typ.map((ele, i) => {
                    
                    return (
                      <>
                        <TextField
                          className='modalnew_textfield'
                          key={i}
                          type={ele}
                          label={hel[0].label[i]}
                          name= {hel[0].name[i]}
                        
                        />
                       
                      </>
                    );
                  })}
                </>
              ) : (
                ""
              )}
             <div className="btn-align"> 
             <Button1
             style={{color:'primary'}} variant='outlined'  onClick={fun}>
                Close 
              </Button1>
             <SubmitButtonWrapper >Submit</SubmitButtonWrapper></div>
            </Form>
          </Formik>
        </DialogContent>
          <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
style={{width:'80%',textAlign:'center'}}
/> 
      </Dialog>
    </>
  );
};

export default ModalNew;
