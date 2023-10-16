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
// import ThreeScene from './components/ThreeScene'; 


function App() {

  return (
    <div className="App">
 <Helmet>
        <title>Page Title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div className="sec1">
        <div className='container'>
          <div className='header'>
            <div className='col-lg-3 col-md-3'><img className='logo' src={logo} alt='' /></div>
            <div className='menu-item col-lg-6 col-md-6'>
              <p>Home</p>
              <p>About</p>
              <p>Blog</p>
              <p>Endeavours</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className='div2 section'>
            <div className='div2sub col-md-10'>
              <div className='topv'><img className='topview' src={topview} alt='' /></div>
              <div><h1 className='bannertitle'>Make it <img className='star1' src={star1} alt='' /><br></br><span style={{ color: '#479C2B' }}><img className='arr' src={arr} alt='' />Green</span> Again</h1> <img className='star2' src={star2} alt='' /></div>
            </div>
          </div>

          <div className="div3">
            <div className='col-lg-3 col-md-5'>
              <p className='banner_desc'>Cultivating a greener world through sustainable practices, tree planting initiatives, and environmental stewardship to foster a harmonious coexistence with nature.</p>
              <button className='banner_btn' style={{ marginTop: '42px' }}><span className='btn_txt'>Join Now</span><img className='whitearr' alt='' src={whitearr} style={{ paddingLeft: '10px', height: '12px' }} /></button>
            </div>
            <div className='modpc col-lg-4 col-md-4 col-sm-12'>
            <iframe src='https://my.spline.design/plant02copy-f16d9c5b030775e08d0354a699dc29ca/' aria-hidden="true" width='600px' height='900px'></iframe>
</div>  
<div className='modmob col-lg-4 col-md-4 col-sm-12'>
            <iframe src='https://my.spline.design/plant02copy-f16d9c5b030775e08d0354a699dc29ca/' aria-hidden="true" width='200px' height='450px'></iframe>
</div>  

            <div className='col-lg-3 col-md-12 community'>
             <div className='comdiv'>
              <img className='propic' src={propic} alt='' />
              <p style={{ fontSize: '18px', fontWeight: '900' }}>Join Our Community</p>
              </div>
              <img className='topview2' src={topview2} alt='' />
            </div>
          </div>

        </div>
      </div>

      <div className='sec2 section'>
        <div className='container' style={{ display: 'flex', gap: '70px', flexWrap:'wrap' }}>
          <div className='col-lg-5 col-md-5 col-sm-12'>
            <img className='imgsvg' src={sec2svg} alt='' />
            <img className='sec2img1' src={sec2img1} alt='' />
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12' style={{ display: 'flex', flexDirection: 'column',gap:'20px',paddingLeft:'30px' }}>
            <span  className='our'>OUR</span>
            <span className='mission'>MISSION</span>
            <p className='sec2desc'>At our organization, we are dedicated to cultivating a greener world through a multi-faceted approach that encompasses sustainable practices, tree planting initiatives, and environmental stewardship. Our mission is to foster a harmonious coexistence with nature, recognizing that a thriving planet is essential for the well-being of current and future generations.</p>
            <button className='sec2btn'>Help Us!</button>
            <img className='continents' src={continents} alt='' />
            <img className='volunteers' src={volunteers} alt='' />
          </div>
        </div>
      </div>

      <div className='sec3 section container'>
        <div><span className='sec3_title'>Cultivating a Greener World through Sustainability, Tree Planting, and Stewardship</span></div>
        <div style={{ display: 'flex', placeContent: 'space-between', marginTop: '100px', flexWrap:'wrap' }}>
          <div className='col-lg-8 col-md-12 col-sm-12'>
            <img className='map' src={map} alt=''   width= '100%'/>
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
            <span className='sec4_title'>Go Green!</span>
            <p className='sec4_desc'>some big companies that we work with, and trust us very much</p>
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


      <div className='sec5 container' style={{ marginTop: '100px', marginBottom: '100px' }}>
        {/* <ThreeModelViewer /> */}
        {/* <canvas id="canvas3d"></canvas> */}
        <div style={{ display: 'flex' }}>
          <div className='col-lg-6 col-md-6 col-sm-12 sec5col1'>
            <span className='sec5_title'>Any Questions ?</span>
            <p className='sec5_desc'>You can reach us anytime at <span style={{ color: '#479C2B' }}>support@ecosprout.com</span></p>
            <form className='form'>
              <div style={{ display: 'flex', placeContent: 'space-between',flexWrap:'wrap',rowGap:'30px' }}>
                <div className='form_field col-lg-5 col-md-5 col-sm-12'>
                  <label>First name</label>
                  <input type="text" placeholder='First name' className='form_input' ></input>
                </div>
                <div className='form_field col-lg-6 col-md-6 col-sm-12'>
                  <label>Last name</label>
                  <input type="text" placeholder='Last name' className='form_input'></input>
                </div>
              </div>
              <div className='form_field'>
                <label>Email</label>
                <input type="Email" placeholder='Email' className='form_input'></input>
              </div>
              <div className='form_field'>
                <label>Phone Number</label>
                <input type="Number" placeholder='First name' className='form_input'></input>
              </div>
              <div className='form_field'>
                <label>Message</label>
                <textarea type="text" placeholder='Leave us a message...' className='form_input' id="message"></textarea>
              </div>
              <div>
                <button type='Submit' className='submit'>Get Started</button>
              </div>
            </form>
          </div>
        </div>
      </div>



    </div>
  );
}

export default App;
