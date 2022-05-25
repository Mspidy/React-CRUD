import './App.css';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUsers';
import EditUser from './components/users/EditUsers';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* <Route element={<NotFound />} /> */}
          <Route exact path='/users/add' element={<AddUser/>}/>
          <Route exact path='/users/edit/:id' element={<EditUser/>}/> {/*dynamic routing*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
