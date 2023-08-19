import React from "react";
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  return (
    <div className="mt-4">
      <h1 className="text-4xl font-semibold text-center">Login</h1>
      <form className="max-w-2xl mx-auto border" action="">
        <input type="email" placeholder="your@email.com" name="" />
        <input type="password" placeholder="password" name="" />
        <button className="primary">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
