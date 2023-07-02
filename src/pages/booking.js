import React from "react";
import { Parallax } from "react-parallax";
import RegistrationForm from './components/registrationform'



const imag1 = "https://housing.com/news/wp-content/uploads/2022/11/hotel-room-design-compressed-1.jpg";


const Booking = () => {

return (
	<div className="contact">

<Parallax bgImage={imag1} strength={500}>
      <div style={{ height: 500 }}>
        <h1 style={{marginTop:"10%", fontWeight:"bold", fontSize:"100px", marginLeft:"34%", color:"black",}}>RESERVATIONS</h1>
		
      </div>
    </Parallax>

    <RegistrationForm/>
	</div>
);
};

export default Booking;
