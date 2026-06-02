// src/components/ProjectCard.jsx
import styles from './Portfolio.module.css';

function ProjectCard({ title, category, image, description, tags }) {
    return (
        <div className={styles['project-card']}>
            <div className={styles['project-image']}>
                <img src={image} alt={title} />
            </div>
            <div className={styles['project-content']}>
                <span className={styles['project-category']}>{category}</span>
                <h3 className={styles['project-title']}>{title}</h3>
                <p className={styles['project-description']}>{description}</p>
                <div className={styles['project-tags']}>
                    {tags.map(tag => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;