const ColorCard = props => {
    const{color} = props;

    return <div className = "box">
        <div className = "box-color" style = {{backgroundColor: props.color, height: "150px", width: "150px"}}>

        </div>
    </div>



}

export default ColorCard;