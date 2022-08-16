import React,{useState} from 'react'


 export function useForm( initialState = {} ){
    const [inputValues , setInputValues] = useState(initialState)
    

//  set Form 
const setForm = (newValues) => {
  setInputValues(newValues)
}

// reset
const resetForm = () => {
  setInputValues(initialState);
};


    // handling inputs
    const handleInputChange = ({target}) => {
     setInputValues({...inputValues , 
       [target.name] : target.value
    })
    }
  return {inputValues , handleInputChange , setForm, resetForm};
    
  
}


