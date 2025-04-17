import React, { use, useState } from "react";

const CollectedForm = () => {
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  const formHander = (e) => {
    e.preventDefault();
  };
  const eventTrager = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    if (password.length < 6) {
      setError("passeord must be 6 digit");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <form onSubmit={formHander}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <p style={{ color: "red" }}>
          <small>{error}</small>
        </p>
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your email"
          required
          defaultValue={password}
          onChange={eventTrager}
        />
        <br />
        <br />
        <input type="submit" value="Sumbit" />
      </form>
    </div>
  );
};

export default CollectedForm;
