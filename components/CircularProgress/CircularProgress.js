const CircularProgress = props => {
    const { className, ...rest } = props

    return (
        <div className={`loader ${className ? className : ''}`}>
            <svg className="circular" viewBox="25 25 50 50">
                <circle className="path" cx="50" cy="50" r="15" fill="none" strokeWidth="2" strokeMiterlimit="10" />
            </svg>
        </div>
    )
}

export default CircularProgress;