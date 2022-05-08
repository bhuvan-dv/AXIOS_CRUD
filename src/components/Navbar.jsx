import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Component.module.css";
const Navbar = () => {
  return (
    <section id={Styles.navBlock}>
      <article className={Styles.navArticle}>
        <div className="logoBlock">
          <Link to="#">TESTYEANTRA</Link>
        </div>
        <div className="menuBlock">
          <ul>
            <li>
              <Link to="/">Employees</Link>
            </li>
            <li>
              <Link to="/create-emp">Create Employee</Link>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Navbar;
