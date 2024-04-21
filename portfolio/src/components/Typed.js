// Developed by Jignesh Sapoliya, Lakshit gajera
import React from "react";
import Typewriter from "typewriter-effect";
import '../CSS/App.css';

const Typed = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ["Jignesh Sapoliya", "Jaydip Talaviya", "Lakshit Gajera", "Nikhil Lathiya"],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};

export default Typed;