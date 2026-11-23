import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Login</Button>
      <Button>Register</Button>
      <Button>Submit</Button>
      <Button>Cancel</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
