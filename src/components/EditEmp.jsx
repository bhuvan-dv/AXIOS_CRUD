import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../libraries/Axios";
const EditEmp = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let [name, setName] = useState("");
  let [designation, setDesignation] = useState("");
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    let FetchData = async () => {
      let payload = await Axios.get(`/employees/${id}`);
      let { data } = payload;
      let { name, designation } = data;
      setName(name);
      setDesignation(designation);
    };
    FetchData();
  }, [id]);
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      let payload2 = { name, designation };
      await Axios.put(`/employees/${id}`, payload2);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    setName("");
    setDesignation("");
    setLoading(false);
  };
  return (
    <section id="authBlock">
      <article>
        <div>
          <h2>Update Emp</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="emp_name">emp name</label>
              <input
                type="text"
                id="emp_name"
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="emp_dest">Designation</label>
              <input
                type="text"
                id="emp_dest"
                required
                value={designation}
                onChange={e => setDesignation(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button
                style={
                  loading
                    ? { background: "#fff", color: "#111" }
                    : { background: "yellow", color: "#111" }
                }
              >
                {loading ? "loading..." : "Update Employee"}
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default EditEmp;
