// src/App.jsx
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import dữ liệu tĩnh từ data file
import { skills, projects } from './data/portfolio';

function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <Hero />
                <About />
                {/* Truyền trực tiếp mảng dữ liệu tĩnh qua props */}
                <Skills skills={skills} />
                <Portfolio projects={projects} />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;