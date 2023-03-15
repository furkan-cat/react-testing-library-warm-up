import PropTypes from "prop-types";
import { useState } from "react";
/* 
  Note: When rendering the Register component, create an anonymous function
  to resolve the handleRegister dependency. Here is an example:
  <Register handleRegister={values => console.log(values)} />
*/
const Register = (props) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setValues({ ...values, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleRegister(values);
  };

  return (
    <main>
      <h1>Register here</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="password">Create Password</label>
          <input
            value={values.password}
            onChange={handleChange}
            type="password"
            className="form-control"
            id="password"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Register;

Register.propTypes = {
  handleRegister: PropTypes.func.isRequired,
};
