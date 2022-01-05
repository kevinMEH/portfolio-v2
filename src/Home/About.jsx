import Title from "./components/Title";

const About = () => {
    return (
        <div>
            <Title label="ABOUT" text="Hello! I'm Kevin," />
            <div className="text-gray-400 space-y-2">
                <p>a computer science student from Brooklyn.</p>
                <p>From a young age, I've been fascinated by the internet. I remember coming home from school everyday to checkout beautiful websites and play awesome flash games.</p>
                <p>Today, I take my adventure with the internet one step further. I'm an experienced web developer who specializes in building beautiful and unique websites, capable of elevating your brand and conveying your message across to millions of others.</p>
            </div>
            <div>
                <img src="./../../assets/vscode.png"/>
                <div className="relative -top-24 z-10 rounded-lg p-8 shadow-2xl shadow-black space-y-2 background">
                    <h1 className="font-semibold text-lg text-white tracking-wide">Technologies I work with:</h1>
                    <p className="text-gray-400 pb-2">Here are some of the technologies I work with: I'm learning more everyday!</p>
                    <div className="space-y-3">
                        <List items={["JavaScript (ES7+)", "TypeScript", "React", "Tailwind CSS"]} />
                        <List items={["NodeJS", "Java", "Rust"]} />
                        <List items={["Photoshop", "Framer", "UI/UX Tools"]} />
                    </div>
                </div>
            </div>
        </div>
    );
}

const List = ({ items }) => {
    let elements = [];
    for(let item of items) {
        elements.push(<li>{item}</li>)
    }
    return (
        <ul className="text-gray-500">
            {elements}
        </ul>
    )
}

export default About;