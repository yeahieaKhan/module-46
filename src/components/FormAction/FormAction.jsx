import React from "react";

const FormAction = () => {
  const formhandler = (event) => {
    console.log(event);
    console.log(event.get("name"));
    console.log(event.get("email"));
  };
  return (
    <div>
      <h2>Form handler</h2>

      <form action={formhandler}>
        <input type="text" name="name" placeholder="Enter your name" /> <br />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormAction;
