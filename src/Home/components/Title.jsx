const Title = ({label, text}) => {
    return (
        <div className="mb-4 space-y-2">
            <h1 className="text-gray-600 font-black tracking-wide uppercase text-sm">{"— " + label}</h1>
            <h1 className="text-gray-300 font-semibold tracking-wide text-2xl">{text}</h1>
        </div>
    )
}

export default Title;