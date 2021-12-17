import { Button } from '@mui/material'
import { useFormikContext } from 'formik'
import React from 'react'
import { ToastContainer, toast  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const SubmitButtonWrapper = ({
    children,...otherprops
}) => {
    const {submitForm}=useFormikContext()
    const handleSubmit=()=>{
        submitForm()
        
       
    }
    const config={
        onClick:handleSubmit,variant:'outlined',color:'success',
    }
    return (<>
        <Button {...config}{...otherprops}>
            {children}
        </Button>
        {/* <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/> */}
       </>
    )
}

export default SubmitButtonWrapper
