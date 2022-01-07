import Title from "./components/Title";

const About = () => {
    return (
        <div>
            <Title label="ABOUT" text="Hello! I'm Kevin," />
            <div className="text-gray-400 space-y-2 md:text-lg">
                <p>a computer science student from Brooklyn. From a young age, I've been fascinated by the internet. I remember coming home from school everyday to checkout beautiful websites and play awesome flash games.</p>
                <p>Today, I take my adventure with the internet one step further. I'm an experienced web developer who specializes in building beautiful and unique websites, capable of elevating your brand and conveying your message across to millions of others.</p>
            </div>
            <div>
                <img src="./../../assets/vscode.png"/>
                <div className="relative z-10 rounded-lg p-8 shadow-2xl shadow-black space-y-2 background
                -top-24 -mb-24
                md:-top-40 md:-mb-40
                lg:-top-52 lg:-mb-52">
                    <h1 className="font-semibold text-lg lg:text-xl text-white tracking-wider">Technologies I work with:</h1>
                    <p className="text-gray-400 pb-2 lg:text-lg">Here are some of the technologies I work with: I'm learning more everyday!</p>
                    <div className="space-y-3 sm:flex sm:justify-between sm:pr-24 md:pr-36">
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
        <ul className="text-gray-500 lg:text-lg">
            {elements}
        </ul>
    )
}

export default About;