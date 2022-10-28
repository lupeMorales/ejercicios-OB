/* import logo from "./logo.svg"; */
import "./App.css";
/* import Clock from "./components/Clock";
import ClockTipoFuncion from "./components/ClockTipoFuncion"; */
/* import ContactList from "./components/contactList"; */
/* import Square from "./components/ejercicio10_11_12"; */
/* import TaskFormFormik from "./components/form/taskFormFormik"; */
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Tasks from "./components/Tasks";
import Home from "./components/Home";
function App() {
  const logged = false;
  return (
    <div className="App">
     
        {/* <p>Hello World</p>
        <Clock />
        <ClockTipoFuncion /> */}
        {/*  <ContactList /> */}
        {/* exercise 10-11-12 */}
        {/*   <Square /> */}
        {/* exercise 13-14-15 FORMIK FORM */}
        {/*         <TaskFormFormik /> */}
   

    {    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
         <Route path="/tasks" element=  {logged ? (
              <Tasks />
            ) : (
              <Navigate replace to={"/login" }/>
              
            )}>
          
          </Route>
        </Routes>}
   
    </div>
  );
}

export default App;
