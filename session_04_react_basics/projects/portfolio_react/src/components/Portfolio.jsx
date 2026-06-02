// src/components/Portfolio.jsx
function Portfolio({ projects }) {
  return (
      <section id="portfolio" className="container">
          <h2>Featured Projects</h2>
          <div className="project-grid" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              {projects.map((project) => (
                  <div key={project.id} className="project-card" style={{ background: '#fff', padding: '1rem', borderRadius: '6px', width: 'calc(50% - 0.75rem)' }}>
                      <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: '4px' }} />
                      <h3 style={{ margin: '0.5rem 0' }}>{project.title}</h3>
                      <p style={{ fontSize: '0.9rem', color: '#64748b' }}>{project.category.toUpperCase()}</p>
                      <p>{project.description}</p>
                  </div>
              ))}
          </div>
      </section>
  );
}

export default Portfolio;