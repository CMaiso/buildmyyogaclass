import { useState } from "react";

import Input from "../layout/input";

const AuthForm = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const { email, password } = inputValue;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form>
      <Input type="text" value={email} name="email" onChange={handleChange} />
      <Input
        type="password"
        value={password}
        name="password"
        onChange={handleChange}
      />
    </form>
  );
};

export default AuthForm;
