import Title from "./components/Title";

const Projects = () => {
	return (
		<div>
			<Title label="Projects" text="Selected Works" />
			{/* TODO: Replace placeholder */}
			<div className="space-y-6 md:space-y-7 lg:space-y-9 2xl:space-y-12 pt-2 md:pt-3 lg:pt-5">
				<Work
					title="This Portfolio"
					desc="The second iteration of my personal portfolio built with ReactJS and Tailwind CSS. Open sourced on GitHub."
					img="https://images.unsplash.com/photo-1639793677434-b7c29536388a?fit=crop&w=900&q=80"
                    url="https://github.com/kevinMEH/portfolio-v2"
				/>
				<Work
					title="Hello World"
					desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					img="https://images.unsplash.com/photo-1567588344489-e1466a854e2e?fit=crop&w=900&q=80"
				/>
				<div className="github flex flex-col justify-around p-6 2xl:p-8 relative 
                rounded-lg md:rounded-xl 2xl:rounded-2xl
                h-48 md:h-52 lg:h-56 2xl:h-60">
					<h2 className="text-white text-xl md:text-2xl 2xl:text-3xl font-semibold tracking-wide text-center">
						Ready to see more?
					</h2>
					<p className="text-white opacity-70 text-center text-sm md:text-base 2xl:text-lg sm:w-2/3 lg:w-3/5 sm:mx-auto">
						I open source most of my projects. Check out my GitHub
						page for a list of all my projects!
					</p>
					<div className="flex justify-center pt-2">
						<a href="https://github.com/kevinMEH" className="font-medium leading-relaxed tracking-wide text-white text-sm md:text-base 2xl:text-lg flex bg-black/10 hover:bg-black/20 px-6 py-2 lg:px-9 lg:py-3 rounded-full">
							GitHub
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

const Work = ({ title, desc, img, url }) => {
	return (
		<a href={url} className="relative block rounded-lg overflow-hidden md:rounded-xl 2xl:rounded-2xl">
			<img className="object-cover w-full h-48 md:h-52 lg:h-56 2xl:h-60" src={img} />
			<div className="absolute top-0 left-0 right-0 bottom-0 background opacity-70 hover:opacity-50 transition-opacity duration-500"></div>
			<div className="absolute bottom-6 left-6 pr-6 lg:bottom-8 lg:left-8 2xl:bottom-10 2xl:left-10 sm:w-2/3 2xl:w-3/5">
				<h2 className="text-white text-xl md:text-2xl 2xl:text-3xl md:leading-relaxed font-semibold tracking-wide">
					{title}
				</h2>
				<p className="text-gray-300 text-sm md:text-base 2xl:text-lg">{desc}</p>
			</div>
		</a>
	);
};

export default Projects;
