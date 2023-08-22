const BalloonComponent = ({text, backgroundColor, color}) => {
    return <div className='balloon' style={{backgroundColor: backgroundColor, color: color}}>{text}</div>
}

export default BalloonComponent;
