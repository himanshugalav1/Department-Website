import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre.js";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";

import Home from "./components/home/home.js";
import About from "./components/about/about.js";

import Faculty from "./components/people/faculty/faculty.js";
import Staff from "./components/people/staff/staff.js";
import Students from "./components/people/students/students.js";

import Areas from "./components/research/areas/areas.js";
import Facilities from "./components/research/facilities/facilities.js";
import Labs from "./components/research/labs/labs.js";
import Projects from "./components/research/projects/projects.js";
import Publications from "./components/research/publications/publications.js";

import Btech from "./components/courses/btech/btech.js";
import Mtech from "./components/courses/mtech/mtech.js";
import Ms from "./components/courses/ms/ms.js";
import Phd from "./components/courses/phd/phd.js";

import Admission from "./components/admission/admission.js";
import Achievements from "./components/achievements/achievements.js";
import Committees from "./components/committees/committees.js";
import Contact from "./components/contact/contact.js";
import LoginForm from "./components/login/login.js";
import Addpubs from "./components/login/addpubs.js";

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/people/faculty" element={<Faculty />} />
          <Route path="/people/staff" element={<Staff />} />
          <Route path="/people/students" element={<Students/>} />

          <Route path="/courses/btech" element={<Btech/>} />
          <Route path="/courses/mtech" element={<Mtech/>} />
          <Route path="/courses/ms" element={<Ms/>} />
          <Route path="/courses/phd" element={<Phd/>} />

          <Route path="/research/areas" element={<Areas/>} />
          <Route path="/research/facilities" element={<Facilities/>} />
          <Route path="/research/labs" element={<Labs/>} />
          <Route path="/research/projects" element={<Projects/>} />
          <Route path="/research/publications" element={<Publications/>} />

          <Route path="/admission" element={<Admission />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/addpubs" element={<Addpubs />} />
          <Route path="*" element={<Navigate to="/"/>} />

        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
