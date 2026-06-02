// src/components/Portfolio.jsx
import { useState } from 'react';
import { projects as initialProjects } from '../data/projects';
import ProjectCard from './ProjectCard';
import styles from './Portfolio.module.css';

function Portfolio() {
    const [items] = useState(initialProjects);
    
    // 1. Khởi tạo state quản lý danh mục đang lọc (mặc định là 'all')
    const [filter, setFilter] = useState('all');

    // Mảng danh sách các bộ lọc danh mục đề bài yêu cầu
    const categories = ['all', 'web', 'mobile', 'design'];

    // 2. Xử lý logic lọc dữ liệu dựa trên state hiện tại (Luôn tạo array reference mới)
    const filteredItems = filter === 'all'
        ? items
        : items.filter(item => item.category === filter);

    return (
        <section id="portfolio" style={{ padding: '5rem 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <h2 style={{ fontSize: '2rem', textAlign: 'center', color: '#1e293b', marginBottom: '0.5rem' }}>Featured Projects</h2>
                <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '2rem' }}>Danh sách dự án được quản lý động bằng State & Filter</p>
                
                {/* 3. Hiển thị hàng nút bấm Filter */}
                <div className={styles['filter-buttons']}>
                    {categories.map(category => (
                        <button
                            key={category}
                            // Gắn class 'active' điều kiện nếu category trùng với state
                            className={`${styles['filter-btn']} ${filter === category ? styles.active : ''}`}
                            // Sự kiện onClick cập nhật lại state filter thông qua arrow function
                            onClick={() => setFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* 4. Render danh sách đã qua bộ lọc (filteredItems) thay vì mảng gốc */}
                <div className={styles['portfolio-grid']}>
                    {filteredItems.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            category={project.category}
                            image={project.image}
                            description={project.description}
                            tags={project.tags}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;