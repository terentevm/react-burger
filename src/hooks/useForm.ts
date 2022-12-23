import { useState, SyntheticEvent } from "react";

const useForm = <T>(inputValues: T) => {

  const [values, setValues] = useState<T>(inputValues);
  const handleChange = (event: SyntheticEvent) => {
    const {value, name} = (event.target as HTMLInputElement);
    setValues({...values, [name]: value});

  };
  return { values, handleChange, setValues };
}

export { useForm }