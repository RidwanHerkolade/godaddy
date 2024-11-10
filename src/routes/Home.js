import FormfacadeEmbed from '@formfacade/embed-react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assets/12.jpg";
import mockup1 from "../assets/notifications_mockup.jpg"
import mockup2 from "../assets/in-app-mockup.jpg"
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Pinny from "../assets/Pinny.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ExplorePinny from "../components/ExplorePinny";

function Home() {
  const pinnyStyle = {
      width: "350px",
      height: "auto",
      boxShadow: "0 5px 25px 2px rgba(0, 0, 0, 0.11)",
        borderRadius:"10px"
  };

  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Hi, I'm Pinny - your travel buddy!"
        text="Just arrived a new city? Let Pinny be your guide!"
        buttonText="Get Started"
        url="/about"
        btnClass="show"
      />
      <Destination title={"Whats Pinny?"} paragraph={'Imagine stepping into a new city and instantly knowing all the best spots. Pinny is like your personal travel buddy, always ready to show you the coolest things around.'}/>
      <img src={Pinny} style={pinnyStyle}/>
      <Destination title={"Here's how Pinny Works"} paragraph={''}/>

      <ExplorePinny heading={"1. Open Pinny - Ready, Set, Explore!"} image={mockup2} paragraph={"The moment you open Pinny, it's like unlocking a treasure chest of the city's hidden chest"} />
      <Trip/>
      <ExplorePinny heading={'3. Personalized Just for You!'} image={mockup1} paragraph={'Pinny learns what you like and sends you instant updates. No searching—just exciting ideas delivered straight to your phone!'} />
      <ContactForm />

      <FormfacadeEmbed formFacadeURL="https://formfacade.com/include/109920972763234061995/form/1FAIpQLSf2vfZ8dvi8K0hy8BdyfBKEcY9ndEuJFMCVyB5GtfuJ85qY6Q/classic.js/?div=ff-compose" 
        onSubmitForm={ 
          () => console.log('Form submitted')
        } />


      {/* <Trip /> */}
      <Footer />
    </>
  );
}

export default Home;
