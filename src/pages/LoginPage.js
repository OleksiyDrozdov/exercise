import React from "react";

const LoginPage = () => {
  return (
    <div>
      <label htmlFor="">
        Podaj login
        <input type="text" />
      </label>
      <label htmlFor="">
        Podaj haslo
        <input type="text" />
      </label>
      <button>Zaloguj</button>
    </div>
  );
};

export default LoginPage;
