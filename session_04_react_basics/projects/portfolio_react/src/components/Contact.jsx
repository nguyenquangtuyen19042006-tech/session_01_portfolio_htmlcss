// src/components/Contact.jsx
import { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
    // 1. Quản lý chung các trường dữ liệu bằng 1 Object duy nhất
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Quản lý lỗi cục bộ cho từng ô
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // 2. Hàm bắt sự kiện thay đổi dữ liệu của toàn bộ input/textarea
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData(prev => ({
            ...prev,
            [name]: value // Cập nhật động theo thuộc tính name của thẻ
        }));

        // Xóa lỗi ngay khi người dùng bắt đầu sửa sai/gõ tiếp tục
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    return (
        <section id="contact" className={styles['contact-section']}>
            <div className={styles['form-container']}>
                <h2 style={{ textAlign: 'center', marginBottom: '0.5rem', color: '#1e293b' }}>Contact Me</h2>
                <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '2rem' }}>Hãy để lại lời nhắn, tôi sẽ phản hồi sớm nhất có thể.</p>

                {isSubmitted && (
                    <div className={styles['success-banner']}>
                        🎉 Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công.
                    </div>
                )}

                <form>
                    <div className={styles['form-group']}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={`${styles['form-control']} ${errors.name ? styles.error : formData.name ? styles.valid : ''}`}
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Nhập họ và tên..."
                        />
                    </div>

                    <div className={styles['form-group']}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={`${styles['form-control']} ${errors.email ? styles.error : formData.email ? styles.valid : ''}`}
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@gmail.com"
                        />
                    </div>

                    <div className={styles['form-group']}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            className={`${styles['form-control']} ${errors.message ? styles.error : formData.message ? styles.valid : ''}`}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Nội dung lời nhắn..."
                        ></textarea>
                    </div>

                    <button type="button" className={styles['submit-btn']}>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;