import React, { useState } from 'react';

const App = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');

  const addStudent = () => {
    const newStudent = {
      id: students.length + 1,
      name,
      grade: parseFloat(grade),
    };
    setStudents([...students, newStudent]);
    setName('');
    setGrade('');
  };

  return (
    <div>
      <h1>Student Grade Tracker</h1>
      <div>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>
    </div>
  );
};

export default App;
