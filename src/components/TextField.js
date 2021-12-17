import React from 'react'
import { TextField } from '@mui/material'
import { useField } from 'formik'
const TextFieldWrapper = ({name,...otherprops}) => {
    const [field,meta]=useField(name)
    const configTextField = {
        ...field,
        ...otherprops,
        fullWidth: true,
        variant: "outlined",
        autoComplete: "off",
      };
      if (meta && meta.touched && meta.error){
configTextField.error=true;
configTextField.helperText=meta.error;
      }

    return (
        <>
        <TextField {...configTextField}/>
            
        </>
    )
}

export default TextFieldWrapper
