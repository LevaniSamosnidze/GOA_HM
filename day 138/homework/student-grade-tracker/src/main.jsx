import React, { useState } from 'react';

const App = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [threshold, setThreshold] = useState(60); // Threshold for highlighting performance

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

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const highlightStudent = (grade) => {
    return grade >= threshold ? 'good' : 'poor';
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

      <div>
        <label>Grade Threshold: </label>
        <input
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className={highlightStudent(student.grade)}>
              <td>{student.name}</td>
              <td>{student.grade}</td>
              <td>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
