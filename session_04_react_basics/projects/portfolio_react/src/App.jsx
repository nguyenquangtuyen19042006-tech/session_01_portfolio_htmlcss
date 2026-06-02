// src/App.jsx
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio'; // Gọi trực tiếp không cần truyền prop projects cũ
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Portfolio />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;