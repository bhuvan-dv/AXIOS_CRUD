import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import EmpRoutes from "./Routes/EmployeeRoutes";

const App = () => {
  return (
    <section id="crudApp">
      <BrowserRouter>
        <Navbar />
        <main>
          <EmpRoutes />
        </main>
      </BrowserRouter>
    </section>
  );
};

export default App;
