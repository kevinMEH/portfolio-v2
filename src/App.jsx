import Landing from "./Home/Landing"
import About from "./Home/About"

function App() {
	return (
        <div className="background">
            <Landing />
            <div className="container mx-auto p-8">
                <About />
            </div>
        </div>
	);
}

export default App;