// src/components/Contact.jsx
import { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
        if (isSubmitted) setIsSubmitted(false);
    };

    // 1. Logic kiểm tra tính đúng đắn của dữ liệu đầu vào
    const validateForm = () => {
        const newErrors = {};

        // Kiểm tra tên (Yêu cầu không trống và tối thiểu 2 ký tự)
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Kiểm tra định dạng Email theo Regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Kiểm tra nội dung tin nhắn
        if (!formData.message.trim()) {
            newErrors.message = 'Message cannot be empty';
        }

        setErrors(newErrors);
        // Trả về true nếu object lỗi rỗng (Form hoàn toàn hợp lệ)
        return Object.keys(newErrors).length === 0;
    };

    // 2. Hàm xử lý nộp form
    const handleSubmit = (e) => {
        e.preventDefault(); // Ngăn chặn hành vi mặc định làm tải lại trang của thẻ form

        if (validateForm()) {
            console.log('Form Submitted successfully:', formData);
            setIsSubmitted(true);
            
            // Khôi phục form về trạng thái trống ban đầu sau khi thành công
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            setErrors({});
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

                {/* Gắn sự kiện onSubmit trực tiếp vào thẻ form */}
                <form onSubmit={handleSubmit}>
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
                        {errors.name && <span className={styles['error-msg']}>{errors.name}</span>}
                    </div>

                    <div className={styles['form-group']}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className={`${styles['form-control']} ${errors.email ? styles.error : formData.email ? styles.valid : ''}`}
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@gmail.com"
                        />
                        {errors.email && <span className={styles['error-msg']}>{errors.email}</span>}
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
                        {errors.message && <span className={styles['error-msg']}>{errors.message}</span>}
                    </div>

                    <button type="submit" className={styles['submit-btn']}>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;