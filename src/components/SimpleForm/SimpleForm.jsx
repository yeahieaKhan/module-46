import React from "react";

const SimpleForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" name="name" placeholder="Enter your name" />
        <br />
        <br />
        <input type="email" name="email" placeholder="Enter your name" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
