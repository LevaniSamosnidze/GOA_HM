import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

// ProfileCard Component
const ProfileCard = ({ name, age, occupation }) => {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
    </div>
  );
};

// ProfileList Component
const ProfileList = ({ profiles }) => {
  return (
    <div className="profile-list">
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name}
          age={profile.age}
          occupation={profile.occupation}
        />
      ))}
    </div>
  );
};

// App Component
const App = () => {
  const profiles = [
    { name: 'John Doe', age: 30, occupation: 'Software Developer' },
    { name: 'Jane Smith', age: 28, occupation: 'Graphic Designer' },
    { name: 'Sam Wilson', age: 35, occupation: 'Product Manager' },
  ];

  return (
    <div className="App">
      <h1>User Profiles</h1>
      <ProfileList profiles={profiles} />
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
