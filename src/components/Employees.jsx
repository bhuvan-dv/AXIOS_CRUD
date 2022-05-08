// import React, { useEffect, useState, Fragment } from "react";
// import Axios from "../libraries/Axios";
// import Spinner from "./Spinner";
// const Employees = () => {
//   let [emp, setEmp] = useState([]);
//   let [loading, setLoading] = useState(false);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let body = await Axios.get("/users");
//         let { data } = body;
//         setEmp(data);
//         setLoading(true);
//       } catch (error) {
//         console.log(error);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, []);
//   return (
//     <Fragment>
//       {loading ===true ? (
//         <Spinner />
//       ) : (
//         emp.map(user => {
//           return (
//             <Fragment key={user.id}>
//               <h2>{user.name}</h2>
//             </Fragment>
//           );
//         })
//       )}
//     </Fragment>
//   );
// };

// export default Employees;

import React, { useEffect, useState } from "react";
import Axios from "../libraries/Axios";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import { FcEditImage, FcDeleteDatabase } from "react-icons/fc";
const Employees = () => {
  let [emp, setEmp] = useState([]);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchEmp = async () => {
      try {
        let payload = await Axios.get("/employees");
        let { data } = payload;
        setEmp(data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchEmp();
  }, []);
  let removeEmp = async id => {
    await Axios.delete(`/employees/${id}`);
    window.location.assign("/");
  };
  return (
    <section id="empTable">
      <article>
        <table>
          <thead>
            <tr>
              <th>emp id</th>
              <th>emp name</th>
              <th>Designation</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <Spinner />
            ) : (
              emp.map(user => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.designation}</td>
                    <td>
                      <Link to={`edit-emp/${user.id}`}>
                        <span>
                          <FcEditImage />
                        </span>
                        <span>edit</span>
                      </Link>
                    </td>
                    <td onClick={() => removeEmp(user.id)} style={{ color: "red" }}>
                      <span>
                        <FcDeleteDatabase />
                      </span>
                      <span>Delete</span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </article>
    </section>
  );
};

export default Employees;
