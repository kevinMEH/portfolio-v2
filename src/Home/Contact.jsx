import Title from "./components/Title";

const Contact = () => {
	return (
		<div>
			<Title
				label={"CONTACT"}
				text={"Lets start working!"}
				center={true}
			/>
			<div className="space-y-4">
				<p className="text-gray-400 text-center">
					I'm always looking for opportunities to work on new projects.
                    Press the button below and let's start working!
				</p>
				<div className="flex justify-center pt-1">
					<a
						href="mailto:hello@liao.gg"
						className="px-5 py-2.5 rounded-lg text-indigo-100 
                        shadow-xl shadow-indigo-500/10 hover:shadow-indigo-500/20
                        bg-indigo-500/10 hover:bg-indigo-500/20 
                        border-2 border-indigo-500/70 hover:border-indigo-500
                        hover:scale-105
                        transition-all duration-300"
					>
						Get In Touch!
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
