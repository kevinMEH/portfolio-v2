import Title from "./components/Title";

const Projects = () => {
	return (
		<div>
			<Title label="Projects" text="Selected Works" />
			{/* TODO: Replace placeholder */}
			<div className="space-y-6 pt-2">
				<Work
					title="This Portfolio"
					desc="The second iteration of my personal portfolio built with ReactJS and Tailwind CSS. Open sourced on GitHub."
					url="https://images.unsplash.com/photo-1639793677434-b7c29536388a?fit=crop&w=900&q=80"
				/>
				<Work
					title="Hello World"
					desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					url="https://images.unsplash.com/photo-1567588344489-e1466a854e2e?fit=crop&w=900&q=80"
				/>
				<div className="github rounded-lg px-6 py-6 space-y-2 relative h-48">
					<h2 className="text-white text-xl font-semibold tracking-wide text-center">
						Ready to see more?
					</h2>
					<p className="text-white opacity-70 text-center text-sm">
						I open source most of my projects. Check out my GitHub
						page for a list of all my projects!
					</p>
					<div className="flex justify-center pt-1">
						<a href="https://github.com/kevinMEH" className="font-medium leading-relaxed text-white text-sm flex bg-black/10 px-6 py-2 rounded-full">
							GitHub
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

const Work = ({ title, desc, url }) => {
	return (
		<div className="relative rounded-lg overflow-hidden">
			<img className="object-cover w-full h-48" src={url} />
			<div className="absolute top-0 left-0 right-0 bottom-0 background opacity-70 hover:opacity-50 transition-opacity duration-500"></div>
			<div className="absolute bottom-6 left-6 pr-6">
				<h2 className="text-white text-xl font-semibold tracking-wide">
					{title}
				</h2>
				<p className="text-gray-300 text-sm">{desc}</p>
			</div>
		</div>
	);
};

export default Projects;
