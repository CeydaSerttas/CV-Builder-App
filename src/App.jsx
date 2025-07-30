import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import CVForm from "./components/CVForm";
import CVPreview from "../CVPreview";

export default function App() {
  const [cvData, setCvData] = useState({
    personal: {
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
    },
    education: [],
    experience: [],
    skills: [],
  });

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="container kawaii">
      <h1>🌸 CV Builder 🧚‍♀️</h1>
      <div className="layout">
        <CVForm cvData={cvData} setCvData={setCvData} />
        <div>
          <button className="download-btn" onClick={handlePrint}>
            📄 Download PDF
          </button>
          <CVPreview cvData={cvData} ref={componentRef} />
        </div>
      </div>
    </div>
  );
}
