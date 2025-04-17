import React, { useRef } from "react";

const UnControlled = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(password);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          ref={emailRef}
          name="email"
          placeholder="Enter your email"
        />
        <br />
        <br />
        <input
          type="password"
          ref={passwordRef}
          name="password"
          placeholder="Enter your email"
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UnControlled;
