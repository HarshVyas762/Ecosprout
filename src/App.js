import './App.css';
import logo from './img/logo.png';
import topview from './img/top-view-gardening-tools-flower-pot.png';
import arr from './img/Vector.svg';
import whitearr from './img/arrow.svg';
import propic from './img/propic.png';
import topview2 from './img/women-working-greenhouse-with-flowerpots.png';
import star1 from './img/Star 1.svg';
import star2 from './img/Star 2.svg';
import sec2svg from './img/Highlight_10.svg';
import map from './img/Map.svg';
import sec2img1 from './img/gardeners-aprons-growing-plants-greenhouse-using-hose-watering-man-apron-with-splashes-water-gardening-job-concept.png';
import continents from './img/continent.svg';
import volunteers from './img/volunteers.svg';
import sec4img1 from './img/sec4img1.svg';
import sec4img2 from './img//sec4img2.svg';
import sec4img3 from './img/sec4img3.svg';
import sec4img4 from './img/sec4img4.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";
import React, { useRef, useState, useEffect, Suspense } from 'react';
import Sidebar from './Sidebar';
import './loader.scss';
import emailjs from '@emailjs/browser';
import './btn.css'
import './submit.css'
import { Link as ScrollLink, Element } from "react-scroll";
import footerlogo from './img/footerlogo.png'
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'
// import Plant from './components/Plant'

// import ThreeScene from './components/ThreeScene';

function App() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const scrollToTop = () => {
    // Scroll to the top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [buttonText, setButtonText] = useState('Submit');
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setButtonText('Thanks');
    setIsActive(true);
  };


  const [inViewport, setInViewport] = useState(false);

  // Function to check if the element is in the viewport
  const handleScroll = () => {
    const title = document.querySelector('.home-title'); // Verify that .home-title exists
    if (title) {
      const rect = title.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      setInViewport(isVisible);
    }
  };

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tx8tdrh', 'template_qjpx87u', form.current, '4RDdZqPIfVfgn3cN8')
      .then((result) => {
        console.log(result.text);
        const successMessage = document.getElementById('successMessage');
        if (successMessage) {
          successMessage.style.display = 'block';
        }
        handleButtonClick();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (

    <div className="App">
      <Helmet>
        <title>EcoSprout</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.cdnfonts.com/css/montserrat" rel="stylesheet" />
      </Helmet>

      {loading ? (
        <div className="loading">
          <div className="arc"></div>
          <div className="arc"></div>
          <div className="arc"></div>
        </div>
      ) : (
        <>
          <button
            id="topbutton"
            style={{ opacity: isVisible ? 1 : 0 }}
            onClick={scrollToTop} />

          <div className="sec1">
            <div className='container'>
              <div className='header'>
                <div className='col-lg-3 col-md-3'><img className='logo' src={logo} alt='' /></div>
                <Sidebar />
                <div className='menu-item col-lg-6 col-md-7'>
                  <ScrollLink to="sec1" smooth={true} duration={500} offset={100}>Home</ScrollLink>
                  <ScrollLink to="sec2" smooth={true} duration={500} offset={100}>About</ScrollLink>
                  <ScrollLink to="sec3" smooth={true} duration={500} offset={100}>Endeavours</ScrollLink>
                  <ScrollLink to="sec5" smooth={true} duration={500} offset={200}>Contact Us</ScrollLink>
                </div>
              </div>
              <div className='div2 section'>
                <div className='div2sub col-md-10'>
                  <div className='topv'><img className='topview' src={topview} alt='' /></div>
                  <div><h1 className='bannertitle'>Make it <img className='star1' src={star1} alt='' /><br></br><span style={{ color: '#479C2B' }}><img className='arr' src={arr} alt='' />Green</span> Again</h1> <img className='star2' src={star2} alt='' /></div>
                </div>
              </div>

              <div className="div3">
                <div className='col-lg-4 col-md-4 div3sub'>
                  <p className='banner_desc'>Cultivating a greener world through sustainable practices, tree planting initiatives, and environmental stewardship to foster a harmonious coexistence with nature.</p>
                  <button className='banner_btn' style={{ marginTop: '42px' }}><span className='btn_txt'>Join Now</span><img className='whitearr' alt='' src={whitearr} style={{ paddingLeft: '10px', height: '12px' }} /></button>
                </div>
                <div className='modpc col-lg-4 col-md-4 col-sm-12'>
                  <iframe src='https://my.spline.design/untitled-0a2e7be5fee6d251d2f2741419a56a71/' aria-hidden="true" width='600px' height='900px'></iframe>
                </div>
                <div className='modtab col-lg-5 col-md-5 col-sm-12'>
                  <iframe src='https://my.spline.design/untitled-0a2e7be5fee6d251d2f2741419a56a71/' aria-hidden="true" width='473px' height='694px'></iframe>
                </div>
                <div className='modmob col-lg-4 col-md-4 col-sm-12'>
                  <iframe src='https://my.spline.design/untitled-0a2e7be5fee6d251d2f2741419a56a71/' aria-hidden="true" width='360px' height='504px'></iframe>
                </div>

                <div className='col-lg-3 col-md-5 community'>
                  <div className='comdiv'>
                    <img className='propic' src={propic} alt='' />
                    <p style={{ fontSize: '21px', fontWeight: '600' }}>Join Our Community</p>
                  </div>
                  <img className='topview2' src={topview2} alt='' />
                </div>
              </div>
            </div>
          </div>

          <div className='sec2 section'>
            <div className='container'>
              <div className='col-lg-5 col-md-5 col-sm-12'>
                <img className='imgsvg' src={sec2svg} alt='' />
                <img className='sec2img1' src={sec2img1} alt='' />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 ourmission' style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingLeft: '30px' }}>
                <h1 className={`home-title ${inViewport ? 'in-viewport' : ''}`}>
                  <span className='our'>OUR</span>
                  <span className='mission'>MISSION</span>
                </h1>
                <p className='sec2desc'>At our organization, we are dedicated to cultivating a greener world through a multi-faceted approach that encompasses sustainable practices, tree planting initiatives, and environmental stewardship. Our mission is to foster a harmonious coexistence with nature, recognizing that a thriving planet is essential for the well-being of current and future generations.</p>
                {/* <button className='sec2btn'>Help Us!</button> */}
                <div className="btn from-center">Help Us!</div>
                <img className='continents' src={continents} alt='' />
                <img className='volunteers' src={volunteers} alt='' />
              </div>
            </div>
          </div>

          <div className='sec3 section container'>
            <div className='col-lg-11 col-md-11 col-sm-12'>
              <span className='sec3_title'>Cultivating a Greener World through Sustainability, Tree Planting, and Stewardship</span>
            </div>
            <div className='sec3subdiv'>
              <div className='col-lg-8 col-md-12 col-sm-12'>
                <img className='map' src={map} alt='' width='100%' />
              </div>
              <div className='col-lg-2 col-md-12 col-sm-12 boxcol'>
                <div className='sec3box'>
                  <span className='sec3_boxtitle'>Volunteer</span>
                  <span className='sec3_boxdesc'>Our friendly team is here to help.</span>
                  <span className='sec3_boxmail'>volunteer@ecosprout.com</span>
                </div>
                <div className='sec3box'>
                  <span className='sec3_boxtitle'>Queries?</span>
                  <span className='sec3_boxdesc'>Questions or queries? Get in touch!</span>
                  <span className='sec3_boxmail'>queries@ecosprout.com</span>
                </div>
                <div className='sec3box'>
                  <span className='sec3_boxtitle'>Phone</span>
                  <span className='sec3_boxdesc'>Mon-Fri from 8am to 5pm.</span>
                  <span className='sec3_boxmail'>+1 (435) 345-7655</span>
                </div>
              </div>
            </div>
          </div>

          <div className='sec4 section container'>
            <div className='sec4div1'>
              <div className='col-md-3 col-md-3 col-sm-12 gogreen' style={{ textAlign: 'left' }}>
                <h1 className={`home-title ${inViewport ? 'in-viewport' : 'go-green'}`}>
                  <span className='sec4_title'>Go Green!</span>
                  <span><p className='sec4_desc'>Companies that we admire and have our inspiration</p>
                  </span>
                </h1>
              </div>
              <div className='col-md-2 col-md-2 col-sm-12'>
                <img className='sec4img1' src={sec4img1} alt='' />
              </div>
              <div className='col-md-2 col-md-2 col-sm-12'>
                <img className='sec4img2' src={sec4img2} alt='' />
              </div>
              <div className='col-md-2 col-md-2 col-sm-12'>
                <img className='sec4img3' src={sec4img3} alt='' />
              </div>
              <div className='col-md-2 col-md-2 col-sm-12'>
                <img className='sec4img4' src={sec4img4} alt='' />
              </div>
            </div>
          </div>

          <div className='container' style={{ height: '74em' }}>
            {/* <ThreeModelViewer /> */}
            {/* <canvas id="canvas3d"></canvas> */}
            <div className='sec5' style={{ marginTop: '100px', marginBottom: '100px' }}>
              <div style={{ display: 'flex', placeContent: 'center', paddingTop: '350px' }}>
                <div className='col-lg-11 col-md-11 col-sm-12 sec5col1'>
                  <span className='sec5_title'>Any Questions ?</span>
                  <p className='sec5_desc'>You can reach us anytime at <span style={{ color: '#479C2B' }}>support@ecosprout.com</span></p>
                  <form className='form' ref={form} onSubmit={sendEmail}>
                    <div style={{ display: 'flex', placeContent: 'space-between', flexWrap: 'wrap', rowGap: '30px' }}>
                      <div className='form_field col-lg-5 col-md-5 col-sm-12'>
                        <label>First name</label>
                        <input type="text" placeholder='First name' className='form_input' name="fname" />
                      </div>
                      <div className='form_field col-lg-6 col-md-6 col-sm-12'>
                        <label>Last name</label>
                        <input type="text" placeholder='Last name' className='form_input' name="lname" />
                      </div>
                    </div>
                    <div className='form_field'>
                      <label>Email</label>
                      <input type="Email" placeholder='Email' className='form_input' name="email" />
                    </div>
                    <div className='form_field'>
                      <label>Phone Number</label>
                      <input type="Number" placeholder='First name' className='form_input' name="num" />
                    </div>
                    <div className='form_field'>
                      <label>Message</label>
                      <textarea type="text" placeholder='Leave us a message...' className='form_input' name="message" id="message" />
                    </div>
                    <div>
                      {/* <button type='Submit' className='submit' value="Send">Get Started</button> */}
                      <button type='submit' className={`submit ${isActive ? 'active' : ''}`} value="Send">
                        {buttonText}
                        <div className="check-box">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </form>
                  <div id="successMessage" style={{ display: 'none' }}>Email sent successfully!</div>
                </div>
              </div>
            </div>
          </div>

          <div className='footer' style={{ marginTop: '100px', paddingTop: '100px', paddingBottom: '50px' }}>
            <div className='container'>
              <div className='footermain'>
                <div className='col-lg-8 col-md-8 col-sm-12'>
                  <span id='footertitle'>Cultivating a Greener world</span>
                  <div className='col-lg-8 col-md-8 col-sm-12'><p style={{ color: 'white', marginTop: '20px' }}>Cultivating a greener world through sustainable practices, tree planting initiatives, and environmental stewardship to foster a harmonious coexistence with nature.</p>
                  </div>
                </div>
                <div className='col-lg-2 col-md-2 col-sm-12'>
                  <button id='footerbtn'>Join Us Now</button>
                </div>
              </div>

              <div style={{ display: 'flex', marginTop: '100px' }}>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <img src={footerlogo} />
                  <p id='logodesc'>Inspiring change, one article at a time. Hub for insightful content, dedicated to cultivating a greener world. Dive into sustainability, tree planting initiatives, and environmental stewardship as we explore the path to a harmonious coexistence with nature. Join us on this journey toward a more eco-conscious tomorrow!</p>
                </div>
                <div style={{ display: 'flex', gap: '20px', placeContent: 'FLEX-END' }} className='col-lg-6 col-md-6 col-sm-12'>
                  <div className='footer-menucol'>
                    <p className='footersubmenu'>Company</p>
                    {/* <p className='footer_menulinks'>Home</p>
                    <p className='footer_menulinks'>About Us</p>
                    <p className='footer_menulinks'>Endeavours</p>
                    <p className='footer_menulinks'>Contact Us</p> */}
                    <p><ScrollLink className='footer_menulinks' to="sec1" smooth={true} duration={500} offset={100}>Home</ScrollLink></p>
                    <p><ScrollLink className='footer_menulinks' to="sec2" smooth={true} duration={500} offset={100}>About</ScrollLink></p>
                    <p><ScrollLink className='footer_menulinks' to="sec3" smooth={true} duration={500} offset={100}>Endeavours</ScrollLink></p>
                    <p><ScrollLink className='footer_menulinks' to="sec5" smooth={true} duration={500} offset={200}>Contact Us</ScrollLink></p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-12 col-md-12 col-sm-12' style={{ textAlign: 'center', background: '#1d1e25' }}>
              <p style={{ color: 'white', margin: '0', paddingTop: '100px' }}>@copyright Ecosprout 2024. Designed by <a style={{ color: '#479c2b', textDecoration: 'none' }} href="https://brewdmedia.com/">Brewdmedia</a></p>
            </div>
          </div>

          {/* <div>
            <Canvas>
              <Suspense fallback={null}>
                <Plant />
              </Suspense>
            </Canvas>
            </div> */}

        </>
      )}
    </div>
  );
}

export default App;
