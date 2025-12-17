import React from 'react';
import '../App.css';

function Classes() {
  const classes = [
    { id: 1, name: 'Musculação', description: 'Treino com pesos para fortalecimento muscular', time: '06:00 - 22:00' },
    { id: 2, name: 'CrossFit', description: 'Treino funcional de alta intensidade', time: '07:00 - 20:00' },
    { id: 3, name: 'Yoga', description: 'Prática para mente e corpo', time: '08:00 - 19:00' },
    { id: 4, name: 'Pilates', description: 'Exercícios para postura e flexibilidade', time: '09:00 - 18:00' },
  ];

  return (
    <div className="classes-container">
      <h2>Nossas Aulas</h2>
      <div className="classes-grid">
        {classes.map(cls => (
          <div key={cls.id} className="class-card">
            <h3>{cls.name}</h3>
            <p>{cls.description}</p>
            <p>Horário: {cls.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Classes;