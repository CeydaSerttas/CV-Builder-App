import React from "react";

export default function CVForm({ cvData, setCvData }) {
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setCvData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [name]: value,
      },
    }));
  };

  const handleArrayChange = (section, index, e) => {
    const { name, value } = e.target;
    const newSection = [...cvData[section]];
    newSection[index][name] = value;
    setCvData((prev) => ({
      ...prev,
      [section]: newSection,
    }));
  };

  const addItem = (section, itemTemplate) => {
    setCvData((prev) => ({
      ...prev,
      [section]: [...prev[section], itemTemplate],
    }));
  };

  const removeItem = (section, index) => {
    const newSection = [...cvData[section]];
    newSection.splice(index, 1);
    setCvData((prev) => ({
      ...prev,
      [section]: newSection,
    }));
  };

  return (
    <div className="form">
      <h2>Kişisel Bilgiler</h2>
      <input
        name="name"
        placeholder="Ad Soyad"
        value={cvData.personal.name}
        onChange={handlePersonalChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={cvData.personal.email}
        onChange={handlePersonalChange}
      />
      <input
        name="phone"
        placeholder="Telefon"
        value={cvData.personal.phone}
        onChange={handlePersonalChange}
      />
      <input
        name="linkedin"
        placeholder="LinkedIn"
        value={cvData.personal.linkedin}
        onChange={handlePersonalChange}
      />
      <input
        name="github"
        placeholder="GitHub"
        value={cvData.personal.github}
        onChange={handlePersonalChange}
      />

      <h2>Eğitim</h2>
      {cvData.education.map((edu, idx) => (
        <div key={idx}>
          <input
            name="school"
            placeholder="Okul"
            value={edu.school}
            onChange={(e) => handleArrayChange("education", idx, e)}
          />
          <input
            name="field"
            placeholder="Bölüm"
            value={edu.field}
            onChange={(e) => handleArrayChange("education", idx, e)}
          />
          <input
            name="year"
            placeholder="Yıl"
            value={edu.year}
            onChange={(e) => handleArrayChange("education", idx, e)}
          />
          <button onClick={() => removeItem("education", idx)}>Sil</button>
        </div>
      ))}
      <button
        onClick={() =>
          addItem("education", { school: "", field: "", year: "" })
        }
      >
        Ekle
      </button>

      <h2>Deneyim</h2>
      {cvData.experience.map((exp, idx) => (
        <div key={idx}>
          <input
            name="company"
            placeholder="Şirket"
            value={exp.company}
            onChange={(e) => handleArrayChange("experience", idx, e)}
          />
          <input
            name="role"
            placeholder="Pozisyon"
            value={exp.role}
            onChange={(e) => handleArrayChange("experience", idx, e)}
          />
          <input
            name="duration"
            placeholder="Süre"
            value={exp.duration}
            onChange={(e) => handleArrayChange("experience", idx, e)}
          />
          <textarea
            name="desc"
            placeholder="Açıklama"
            value={exp.desc}
            onChange={(e) => handleArrayChange("experience", idx, e)}
          />
          <button onClick={() => removeItem("experience", idx)}>Sil</button>
        </div>
      ))}
      <button
        onClick={() =>
          addItem("experience", {
            company: "",
            role: "",
            duration: "",
            desc: "",
          })
        }
      >
        Ekle
      </button>

      <h2>Yetenekler</h2>
      {cvData.skills.map((skill, idx) => (
        <div key={idx}>
          <input
            value={skill}
            onChange={(e) => {
              const newSkills = [...cvData.skills];
              newSkills[idx] = e.target.value;
              setCvData((prev) => ({
                ...prev,
                skills: newSkills,
              }));
            }}
          />
          <button onClick={() => removeItem("skills", idx)}>Sil</button>
        </div>
      ))}
      <button onClick={() => addItem("skills", "")}>Ekle</button>
    </div>
  );
}
