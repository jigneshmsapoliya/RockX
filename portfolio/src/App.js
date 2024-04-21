// Developed by Jignesh Sapoliya, Lakshit Gajera, Nikhil Lathiya, Jaydip Talaviya
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home.";
import AboutUs from "./components/AboutUs";
import OurProducts from "./components/OurProducts";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './CSS/App.css';
import { Puff } from 'react-loader-spinner';


function App() {
  const [Loading, SetLoading] = useState(true);
  useEffect(() => {
    SetLoading(true);

    setTimeout(() => {
      SetLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {Loading ? (<div className="loader">
        <Puff
          visible={true}
          height="80"
          width="80"
          color="#474787"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>) : (
        <div>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" Component={Home}/>
              <Route path="/AboutUs" Component={AboutUs} />
              <Route path="/OurProducts" Component={OurProducts} /> 
            </Routes>
          </Router>
          <Footer/>
        </div>
      )}
    </>
  );
}

export default App;
