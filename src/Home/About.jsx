import Title from "./components/Title";
import vscode from "./assets/vscode.png";

const About = () => {
    return (
        <div>
            <Title label="ABOUT" text="Hello! I'm Kevin," />
            <div className="text-gray-400 space-y-2 md:text-lg xl:text-xl">
                <p>a computer science student from Brooklyn. From a young age, I've been fascinated by the internet. I remember coming home from school everyday to checkout beautiful websites and play awesome flash games.</p>
                <p>Today, I take my adventure with the internet one step further. I'm an experienced web developer who specializes in building beautiful and unique websites, capable of elevating your brand and conveying your message across to millions of others.</p>
            </div>
            <div>
                <img src={vscode} alt="VScode stock image" />
                <div className="relative z-10 rounded-lg p-8 2xl:px-10 shadow-2xl shadow-black/75 space-y-2 background
                -top-24 -mb-24
                md:-top-40 md:-mb-40
                lg:-top-52 lg:-mb-52
                2xl:-top-64 2xl:-mb-64">
                    <h1 className="font-medium text-lg lg:text-xl 2xl:text-3xl text-white tracking-wide 2xl:leading-relaxed">Technologies I work with:</h1>
                    <p className="text-gray-400 pb-2 lg:text-lg 2xl:text-xl lg:tracking-wide">Here are some of the technologies I work with: I'm learning more everyday!</p>
                    <div className="space-y-3 sm:flex sm:justify-between sm:pr-24 md:pr-36 2xl:pr-48">
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
        <ul className="text-gray-500 lg:text-lg 2xl:text-xl lg:tracking-wide">
            {elements}
        </ul>
    )
}

export default About;