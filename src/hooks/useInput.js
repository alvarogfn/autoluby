import React from "react";
import * as yup from "yup";

function useInput(type) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  let schema = yup.object().shape({
    email: yup.string().email("Email inválido.").required("Email requerido."),
    password: yup.string().required("Senha requerida."),
  });

  function onChange(value) {
    setValue(value);
    if (error) {
      validate(value);
    }
  }

  async function validate(value) {
    if (type === undefined) return;
    try {
      await yup.reach(schema, type).validate(value);
      setError(false);
      return true;
    } catch (e) {
      setError(e.errors[0]);
      return false;
    }
  }

  return {
    value,
    setValue,
    onChange,
    setError,
    error,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
}

export default useInput;
