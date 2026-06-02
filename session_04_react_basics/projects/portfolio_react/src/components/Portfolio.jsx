// src/components/Portfolio.jsx
import { useState } from 'react';
import { projects as initialProjects } from '../data/projects';
import ProjectCard from './ProjectCard';
import styles from './Portfolio.module.css';

function Portfolio() {
    // Chuyển đổi từ nhận props tĩnh sang quản lý trạng thái bằng useState nội bộ
    const [items] = useState(initialProjects);

    return (
        <section id="portfolio" className="container" style={{ padding: '5rem 0' }}>
            <h2 style={{ textAlign: 'center', color: '#1e293b', fontSize: '2rem' }}>Featured Projects</h2>
            <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '2rem' }}>Danh sách dự án được quản lý bằng State</p>
            
            {/* Vòng lặp hiển thị danh sách qua phương thức .map() */}
            <div className={styles['portfolio-grid']}>
                {items.map((project) => (
                    <ProjectCard
                        key={project.id} // Unique key bắt buộc cho Virtual DOM
                        title={project.title}
                        category={project.category}
                        image={project.image}
                        description={project.description}
                        tags={project.tags}
                    />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;