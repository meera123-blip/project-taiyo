import React, { Suspense } from "react";
import "./App.css";
import Header from "./components/Header";
import NoContacts from "./components/NoContacts";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { Route, Routes } from "react-router-dom";
import MapsCharts from "./components/MapsCharts";
import ContactEdit from "./components/ContactEdit.js";

function App() {
  return (
    <div>
    <Header/>
    <Routes>
   <Route path="/" element={<NoContacts />} />
   <Route path="/ContactForm" element={<ContactForm />} />
   <Route path="/ContactList" element={<ContactList />} />
   <Route path="/ContactEdit/:id" element={<ContactEdit />} />
   <Route path="/MapsCharts" element={<Suspense><MapsCharts/></Suspense>}/>
  </Routes>
      
    </div>
  );
}

export default App;
