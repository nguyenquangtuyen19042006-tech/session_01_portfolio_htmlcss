// src/components/Skills.jsx
function Skills({ skills }) {
  return (
      <section id="skills" className="container">
          <h2>My Skills</h2>
          <div className="skill-list" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              {skills.map((skill, index) => (
                  <div key={index} className="skill-card" style={{ background: '#fff', padding: '1rem', borderRadius: '6px' }}>
                      <strong>{skill.name}</strong> — {skill.level}% ({skill.category})
                  </div>
              ))}
          </div>
      </section>
  );
}

export default Skills;