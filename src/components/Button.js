import React, { useState } from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import ModalNew from "./ModalNew";
export function Button({ Name }) {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <Link to="/modal">
        <button className="btn" onClick={openModal}>
          {Name}
        </button>
      </Link>

      {Name === "Login" ? (
        <ModalNew
          value={open}
          fun={openModal}
          hel={[
            {
              typ: ["text", "password"],
              label: ["FirstName", "Password"],
              name:["firstname",'password']
            },
          ]}
          Name="Login"
          SomeText='Indian'
        />
      ) : (
        <ModalNew
          value={open}
          fun={openModal}
          hel={[
            {
              typ: ["text","text" ,"email", "password", "password"],
              label: ["FirstName","LastName" ,"Email", "Password", "Confirm Password"],
              name:["firstname","lastname",'email','password','confirmPassword']
            },
          ]}
          Name="Sign Up"
          SomeText='code'
        />
      )}
    </>
  );
}
