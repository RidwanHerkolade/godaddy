import { useState, useEffect } from "react";
import "./HeroStyles.css";

function Hero(props) {

  // const [details, setDetails] = useState(null)

  // const getUserGeolocationDetails = () => {
  //   fetch('https://geolocation-db.com/json/e18b48c0-6cef-11ef-be25-fdc8f1201945').then(response => response.json()).then(data => {

  //       // Send the location to Express server
  //       fetch('http://localhost:5000/api/location', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           country: data.country_name,
  //           city: data.country_code,
  //           ip: data.IPv4,
  //         }),
  //       }).then(response => response.json()).then(responseData => {
  //         console.log('Location sent to server:', responseData);
  //       })
  //       .catch(error => {
  //         console.error('Error sending location to server:', error);
  //       });
  //     })
  //     .catch(error => {
  //       console.error('Error fetching geolocation:', error);
  //     });
  // };

  // Trigger the geolocation fetch when the component mounts
  // useEffect(() => {
  //   getUserGeolocationDetails();
  // }, []); 



  return (
    <>
      <div className={props.cName}>
        <img alt="HeroImg" src={props.heroImg} />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href="#about-section" className={props.btnClass}>{props.buttonText}</a>
        </div>
      </div>
    </>
  );

}


export default Hero;