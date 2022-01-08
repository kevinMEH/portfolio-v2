const Title = ({label, text, center = false}) => {
    return (
        <div className={center ? "text-center mb-3 space-y-2 xl:mb-5 xl:space-y-3" : "mb-3 space-y-2 xl:mb-5 xl:space-y-3"}>
            <h1 className="text-gray-600 font-black tracking-wide uppercase text-sm md:text-base lg:text-lg 2xl:text-xl">{center ? label : "— " + label}</h1>
            <h1 className="text-gray-300 font-semibold tracking-wide text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">{text}</h1>
        </div>
    )
}

export default Title;