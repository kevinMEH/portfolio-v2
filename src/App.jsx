import Landing from "./Home/Landing"
import About from "./Home/About"
import Projects from "./Home/Projects";
import Contact from "./Home/Contact";

function App() {
	return (
        <div className="background">
            <Landing />
            <div className="container mx-auto p-8">
                <About />
                <Projects />
                <Contact />
            </div>
        </div>
	);
}

export default App;