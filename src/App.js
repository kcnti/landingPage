import './App.css';
import NAVbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Aos from "aos";
import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { motion } from 'framer-motion';

import * as loadingData from "./json/Loading.json";

import Lottie from "react-lottie";


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

function App() {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ip, setIP] = useState('');

  useEffect(() => {
    setTimeout(() => {
      axios.get("https://geolocation-db.com/json/").then((response) => {
        setIP(response.data.IPv4)
      })
      // console.log(res)
      setLoading(true);
      setTimeout(() => {
        Aos.init({ duration: 2000})
        setSuccess(true);
      });
    }, 2000);
  }, []);

  return(
    <>
      {!success ? (
          <div>
            <div style={{ display: "flex", marginTop: "200px", justifyContent: "center" }}>
              {!loading ? (
                <motion.div
                  exit={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Lottie options={defaultOptions} height={300} width={300} />
                </motion.div>
              ) : (
                <></>
              )}
            </div>
          </div>
        ) : (
        <div>
          <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <NAVbar />
            <Landing ip={ip} />
            <br />
            <Footer />
          </motion.div>
        </div>
      )}
    </>
  );
}

export default App;
