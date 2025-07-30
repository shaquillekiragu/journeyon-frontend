const ProgressHome: () => React.ReactElement = () => {
    return (
    <div className="bg-orange-100 px-5 rounded-lg p-2">
        <h2 className="text-center underline text-neutral-950">Progress</h2>
        <div className="grid grid-cols-2">
            <div className="text-left">
                <h3 className="font-bold">Placeholder Entry - 1/1/1970</h3>
                <p>This is some placeholder text.</p>
                <br />
                <h3 className="font-bold">Placeholder Entry - 2/1/1970</h3>
                <p>This is some placeholder text.</p>
            </div>
            <div className="text-center">
                <p>ok</p>
            </div>
        </div>
    </div>
    )
}

export default ProgressHome;