const DayView = () => {

    const lines = [];

    for (let i = 1; i <=24; i++) {
        lines[i] = i;
    }

    return (
        <div>
            <div className="mt-3">
                {lines.map(line => (
                    <div className=" flex justify-center w-full h-20">
                        <div className="text-LinesColor flex justify-center w-20 -mt-3">{line <= 12? line + " AM" : line-12 + " PM"}</div>
                        <div className = "w-full h-0.5 bg-LinesColor mr-4"/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DayView;