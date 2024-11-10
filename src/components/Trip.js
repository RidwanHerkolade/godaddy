import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/20.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/21.jpg";
import foods from "../assets/must_try_foods2.jpg"
import events from "../assets/events2.jpg"
import fun from "../assets/fun_activities.jpg"

function Trip(props) {
    const paragraphStyle ={
        marginTop: "30px"
    };

    const titleStyle ={
        marginTop: "80px"
    }

    return (
        <div className="trip">
            <h2 style={titleStyle}>2. Instant Ideas From Pinny</h2>
            <p className="ideas-paragraph" style={paragraphStyle}>Get real-time notifications about:</p>
            {/* <p>You can discover unique destinations using Google Maps.</p> */}
            <div className="tripcard">
                <TripData
                   image={foods}
                   heading="Must-Try Foods"
                   text="Find the tastiest local snacks and treats."
                />
                <TripData
                   image={Trip1}
                   heading="Top Attractions"
                   text="Discover awesome parks, museums, and iconic spots!"
                />
                <TripData
                   image={events}
                   heading="Local Events"
                   text="From live music to festivals, dicover what's happening nearby!"
                />
                <TripData
                   image={fun}
                   heading="Fun Activities"
                   text="Adventures and activities you’ll love, just for YOU!"
                />
            </div>
        </div>
    );
};

export default Trip;