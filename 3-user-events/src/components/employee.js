import { useState } from "react";

const Employee = () => {
  const [email, setEmail] = useState("");
  const handleChange = (event) =>
    setEmail(event.target.value.split(" ").join("."));

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="enter your name"
          aria-label="enter your name"
          onChange={handleChange}
        />
        <div>
          <span>@software-plus.com</span>
        </div>
      </div>
      {email ? <span>{`${email}@software-plus.com`}</span> : null}
    </div>
  );
};

export default Employee;
