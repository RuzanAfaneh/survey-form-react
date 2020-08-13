import { useState } from 'react';

  export const useForm = () => {
    const [values, setValues] = useState({});

    return (
      values,
            e => {
        setValues({
          ...values,
          [e.target.name]: e.target.value
        });
      }
    );
  };
  export default useForm;