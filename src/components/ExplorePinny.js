
const ExplorePinny = (props) =>{

    const imageStyle = {
        width: "350px",
        height: "auto",
        marginTop: "60px",
        marginBottom: "30px",
        boxShadow: "0 5px 25px 2px rgba(0, 0, 0, 0.11)",
        borderRadius:"10px"
    };

    const paragraphStyle = {
        marginTop: "30px"
    }

    const headingStyle = {
        marginTop: "80px",
        color: "#2a2a2a"

    }


    return(
        <div>
            <h2 style={headingStyle}>{props.heading} </h2>
            <p style={paragraphStyle}>{props.paragraph}</p>
            <img src={props.image} alt="image of illustration" className="pinnyMockps" style={imageStyle}/>
        </div>
    )
} 

export default ExplorePinny;