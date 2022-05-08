import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../libraries/Axios";
const CreateEmp = () => {
  let navigate = useNavigate();
  let [state, setState] = useState({
    name: "",
    designation: "",
    loading: false,
  });
  let { name, designation, loading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let payload = { name, designation };
      await Axios.post("/employees", payload);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    setState({ loading: false, name: "", designation: "" });
  };
  return (
    <section id="authBlock">
      <article>
        <div>
          <h2>Create Emp</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="emp_name">emp name</label>
              <input
                type="text"
                name="name"
                id="emp_name"
                value={name}
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="emp_dest">Designation</label>
              <input
                type="text"
                name="designation"
                id="emp_dest"
                value={designation}
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <button>
                {loading === true ? "loading..." : "Create Employee"}
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default CreateEmp;
