import Head from 'next/head'
import Image from 'next/image'
import {FaSearch} from 'react-icons/fa'
import {RiFacebookCircleFill} from 'react-icons/ri'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BiMenuAltLeft} from 'react-icons/bi'

export default function Home() {

  let iconStyles = {  fontSize: "1.45em"};
  let iconMobileStyles = {  fontSize: "1.65em"};

  return (
    <>
    <nav className="navbar sticky-top navbar-light bg-white p-4">
      <div className="container">

        <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="">
            <BiMenuAltLeft style={iconMobileStyles}/>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <a className="navbar-brand" href="#">Hidden brand</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          
        </div>
       
        <form className="d-none d-lg-block">
          <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                  <FaSearch/>
                </span>
                <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
             </div>
          </form>
          <a className="navbar-brand" href="#">
            <img src="/images/techsunk-logo.png" width="270" height="31"/>
          </a>

          <div className="d-block d-lg-none">
               <span>
                  <FaSearch style={iconMobileStyles}/>
                </span>
          </div>

          <div className="d-none d-lg-block">
            <a className="navbar-brand" href="#">
              <RiFacebookCircleFill style={iconStyles}/>
            </a>

            <a className="navbar-brand" href="#">
              <AiFillTwitterCircle style={iconStyles}/>
            </a>

            <a className="navbar-brand" href="#">
              <AiFillLinkedin style={iconStyles}/>
            </a>

            <a className="navbar-brand" href="#">
              <AiFillInstagram style={iconStyles}/>
            </a>
          </div>
      </div>
    </nav>

    <section className=" bg-lightblue wrapper block-big">
      <div className="container py-4 d-flex flex-column align-items-center">
      <h1 className="fw-bold text-center mt-5">5 Best Software For Call Recording- Now You Will No <br/> Longer Miss</h1>
      <div className="row mt-2">
        <div className="col-12 p-3">
        <img src="/images/header-devices-image.png" className="w-100"/>
        </div>
      </div>
      </div>
    </section>

    <section className="mt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-lg-8">
            <p>Jaya Bhattacharya’s claim to fame as one of the finest and versatile actresses of the Television industry with 
              a huge array of work has recently taken the OTT platform by storm with her performance in the popular Netflix show “Delhi Crime”.
              </p>
              <p> 
              She mostly played characters with shades of grey but in real life, she is nothing but a beacon of positivity and white light. 
              Like her on-screen avatars, Jaya is a no-nonsense personality in real life too, who doesn’t shy away from raising her voice against 
              issues like animal welfare and environmental concern. 
              </p>
              <p>
                Her empathy towards others and the need to constantly do good deeds, made her
               shave off her hair during the COVID-19 pandemic, which “was going to prohibit us from doing a work that gives us happiness” and 
               donating it for wigs for cancer survivors. This benevolent soul is quirky and always ready with her infectious laughter. 
               Jaya is an energy healer who lives her life by choosing tranquillity over materialism.
               </p>
               <p> The Voice of Woman recently got in 
               touch with the veteran actress who is known for her iconic roles in Kyunki Saas Bhi Kabhi Bahu Thi, Gangaa, Thapki Pyar Ki, 
               Jhansi Ki Rani, and also been part of films like Devdas, Lajja, and others.</p>
               <p> Read her exclusive interview here.</p>
               <p> What inspired 
               Jaya Bhattacharya to pursue acting as a career? Did you face any hurdles initially in the acting industry?</p>

               <img src="/images/header-devices-image.png" className="my-4 w-100"/>
               <p>Jaya Bhattacharya’s claim to fame as one of the finest and versatile actresses of the Television industry with a 
                 huge array of work has recently taken the OTT platform by storm with her performance in the popular Netflix show 
                 “Delhi Crime”.</p>
                 <p> She mostly played characters with shades of grey but in real life, she is nothing but a beacon of 
                   positivity and white light. Like her on-screen avatars, Jaya is a no-nonsense personality in real life too, 
                   who doesn’t shy away from raising her voice against issues like animal welfare and environmental concern. 
                   Her empathy towards others and the need to constantly do good deeds, made her shave off her hair during 
                   the COVID-19 pandemic, which “was going to prohibit us from doing a work that gives us happiness” and donating 
                   it for wigs for cancer survivors. This benevolent soul is quirky and always ready with her infectious laughter. 
                   </p>

                   <img src="/images/iMac-banner.png" className="my-4 w-100"/>

                   <p>Jaya Bhattacharya’s claim to fame as one of the finest and versatile actresses of the Television industry with 
              a huge array of work has recently taken the OTT platform by storm with her performance in the popular Netflix show “Delhi Crime”.
              </p>
              <p> 
              She mostly played characters with shades of grey but in real life, she is nothing but a beacon of positivity and white light. 
              Like her on-screen avatars, Jaya is a no-nonsense personality in real life too, who doesn’t shy away from raising her voice against 
              issues like animal welfare and environmental concern. 
              </p>
              <p>
                Her empathy towards others and the need to constantly do good deeds, made her
               shave off her hair during the COVID-19 pandemic, which “was going to prohibit us from doing a work that gives us happiness” and 
               donating it for wigs for cancer survivors. This benevolent soul is quirky and always ready with her infectious laughter. 
               Jaya is an energy healer who lives her life by choosing tranquillity over materialism.
               </p>
               <p> The Voice of Woman recently got in 
               touch with the veteran actress who is known for her iconic roles in Kyunki Saas Bhi Kabhi Bahu Thi, Gangaa, Thapki Pyar Ki, 
               Jhansi Ki Rani, and also been part of films like Devdas, Lajja, and others.</p>
               <p> Read her exclusive interview here.</p>
               <p> What inspired 
               Jaya Bhattacharya to pursue acting as a career? Did you face any hurdles initially in the acting industry?</p>
                   

          </div>
          <div className="col-md-5 col-lg-4">
               <div className="border  px-3  pt-md-2 pt-lg-3">
                 
                 <div className="row">
                   <div className="col-6 px-0">
                      <button className="border-0 bg-darkgreen w-100 text-white  py-1">popular</button>
                   </div>

                   <div className="col-6 ps-0">
                     <button className="border-0  ms-2 w-100 py-1 fw-bold">Recent</button>
                   </div>
                 </div>

                 <div className="d-flex my-md-2  my-lg-3">
                   <div className="row">
                     <div className="col-5 px-0">
                       <img src="/images/side-column-image.png" className="w-100"/>
                     </div>

                     <div className="col-7">
                     <h5 className="fw-bold text-small">Reopening America Won’t Fix the Educational Digital Divide</h5>
                     </div>
                   </div> 
                 </div>

                 <div className="d-flex my-md-2  my-lg-3">
                 <div className="row">
                     <div className="col-5 px-0">
                       <img src="/images/side-column-image.png" className="w-100"/>
                     </div>

                     <div className="col-7">
                     <h5 className="fw-bold text-small">Reopening America Won’t Fix the Educational Digital Divide</h5>
                     </div>
                   </div>
                 </div>

                 <div className="d-flex  my-md-2  my-lg-3">
                 <div className="row">
                     <div className="col-5  px-0">
                       <img src="/images/side-column-image.png" className="w-100"/>
                     </div>

                     <div className="col-7">
                     <h5 className="fw-bold text-small">Reopening America Won’t Fix the Educational Digital Divide</h5>
                     </div>
                   </div>
                 </div>

                 <div className="d-flex  my-md-2  my-lg-3">
                 <div className="row">
                     <div className="col-5 px-0">
                       <img src="/images/side-column-image.png" className="w-100"/>
                     </div>

                     <div className="col-7">
                     <h5 className="fw-bold text-small">Reopening America Won’t Fix the Educational Digital Divide</h5>
                     </div>
                   </div>
                 </div>
                
               </div>
               <img src="/images/Appira.png" className="w-100 my-3"/>
          </div>
        </div>
      </div>
    </section>

    <section className="mt-5">
      <div className="container">
        <div className="row">
          <div className=" col-md-7 col-lg-6 px-0">
             <img src="/images/developing-programmer.png" className="w-100"/>
          </div>

          <div className="col-md-5 col-lg-6 d-flex  bg-seagreen">
            <h2 className="fw-bold mt-3 ms-4 text-small">Reopening America <br/>
            Won’t Fix the <br/>Educational Digital 
            <br/> Divide</h2>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 col-lg-3">
          <img src="/images/mobile-phones-agencies.png" className="w-100" width="337"/>
          <p className="fw-bold mt-2">Reopening America Won’t Fix the Educational Digital Divide</p>
          </div>

          <div className="col-md-6 col-lg-3">
          <img src="/images/mobile-phones-agencies.png" className="w-100"/>
          <p className="fw-bold mt-2">Reopening America Won’t Fix the Educational Digital Divide</p>
          </div>

          <div className="col-md-6 col-lg-3">
          <img src="/images/mobile-phones-agencies.png" className="w-100"/>
          <p className="fw-bold mt-2">Reopening America Won’t Fix the Educational Digital Divide</p>
          </div>

          <div className="col-md-6 col-lg-3">
          <img src="/images/mobile-phones-agencies.png" className="w-100"/>
          <p className="fw-bold mt-2">Reopening America Won’t Fix the Educational Digital Divide</p>
          </div>
        </div>
      </div>

    </section>

    <section className=" bg-lightblue wrapper">
      <div className="container py-4 d-flex flex-column align-items-center">
      
      <h1 className="fw-bold text-center mt-5">5 Best Software For Call Recording- Now You Will No <br/> Longer Miss</h1>

      <div className="row mt-2">
        <div className="col-12 p-3">
        <img src="/images/header-devices-image.png" className="w-100"/>
        </div>
      </div>
      
      </div>
    </section>

    <section className="mt-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <p>Jaya Bhattacharya’s claim to fame as one of the finest and versatile actresses of the Television industry with 
              a huge array of work has recently taken the OTT platform by storm with her performance in the popular Netflix show “Delhi Crime”.
              </p>
              <p> 
              She mostly played characters with shades of grey but in real life, she is nothing but a beacon of positivity and white light. 
              Like her on-screen avatars, Jaya is a no-nonsense personality in real life too, who doesn’t shy away from raising her voice against 
              issues like animal welfare and environmental concern. 
              </p>
              <p>
                Her empathy towards others and the need to constantly do good deeds, made her
               shave off her hair during the COVID-19 pandemic, which “was going to prohibit us from doing a work that gives us happiness” and 
               donating it for wigs for cancer survivors. This benevolent soul is quirky and always ready with her infectious laughter. 
               Jaya is an energy healer who lives her life by choosing tranquillity over materialism.
               </p>
               <p> The Voice of Woman recently got in 
               touch with the veteran actress who is known for her iconic roles in Kyunki Saas Bhi Kabhi Bahu Thi, Gangaa, Thapki Pyar Ki, 
               Jhansi Ki Rani, and also been part of films like Devdas, Lajja, and others.</p>
               <p> Read her exclusive interview here.</p>
               <p> What inspired 
               Jaya Bhattacharya to pursue acting as a career? Did you face any hurdles initially in the acting industry?</p>

               <img src="/images/header-devices-image.png" className="my-4 w-100"/>
               <p>Jaya Bhattacharya’s claim to fame as one of the finest and versatile actresses of the Television industry with a 
                 huge array of work has recently taken the OTT platform by storm with her performance in the popular Netflix show 
                 “Delhi Crime”.</p>
                 <p> She mostly played characters with shades of grey but in real life, she is nothing but a beacon of 
                   positivity and white light. Like her on-screen avatars, Jaya is a no-nonsense personality in real life too, 
                   who doesn’t shy away from raising her voice against issues like animal welfare and environmental concern. 
                   Her empathy towards others and the need to constantly do good deeds, made her shave off her hair during 
                   the COVID-19 pandemic, which “was going to prohibit us from doing a work that gives us happiness” and donating 
                   it for wigs for cancer survivors. This benevolent soul is quirky and always ready with her infectious laughter. 
                   </p>

                   <img src="/images/iMac-banner.png" className="my-4 w-100"/>

                   <p>Jaya Bhattacharya’s claim to fame as one of the finest and versatile actresses of the Television industry with 
              a huge array of work has recently taken the OTT platform by storm with her performance in the popular Netflix show “Delhi Crime”.
              </p>
              <p> 
              She mostly played characters with shades of grey but in real life, she is nothing but a beacon of positivity and white light. 
              Like her on-screen avatars, Jaya is a no-nonsense personality in real life too, who doesn’t shy away from raising her voice against 
              issues like animal welfare and environmental concern. 
              </p>
              <p>
                Her empathy towards others and the need to constantly do good deeds, made her
               shave off her hair during the COVID-19 pandemic, which “was going to prohibit us from doing a work that gives us happiness” and 
               donating it for wigs for cancer survivors. This benevolent soul is quirky and always ready with her infectious laughter. 
               Jaya is an energy healer who lives her life by choosing tranquillity over materialism.
               </p>
               <p> The Voice of Woman recently got in 
               touch with the veteran actress who is known for her iconic roles in Kyunki Saas Bhi Kabhi Bahu Thi, Gangaa, Thapki Pyar Ki, 
               Jhansi Ki Rani, and also been part of films like Devdas, Lajja, and others.</p>
               <p> Read her exclusive interview here.</p>
               <p> What inspired 
               Jaya Bhattacharya to pursue acting as a career? Did you face any hurdles initially in the acting industry?</p>
                   

          </div>
          <div className="col-lg-4">

          </div>
        </div>
      </div>
    </section>

    <section className="mt-5">
      <div className="container">
      <div className="row">
          <div className=" col-md-7 col-lg-6 px-0">
             <img src="/images/developing-programmer.png" className="w-100"/>
          </div>

          <div className="col-md-5 col-lg-6 d-flex  bg-seagreen">
            <h2 className="fw-bold mt-3 ms-4 text-small">Reopening America <br/>
            Won’t Fix the <br/>Educational Digital 
            <br/> Divide</h2>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 col-lg-3">
          <img src="/images/mobile-phones-agencies.png" className="w-100" width="337"/>
          <p className="fw-bold mt-2">Reopening America Won’t Fix the Educational Digital Divide</p>
          </div>

          <div className="col-md-6 col-lg-3">
          <img src="/images/mobile-phones-agencies.png" className="w-100"/>
          <p className="fw-bold mt-2">Reopening America Won’t Fix the Educational Digital Divide</p>
          </div>

          <div className="col-md-6 col-lg-3">
          <img src="/images/mobile-phones-agencies.png" className="w-100"/>
          <p className="fw-bold mt-2">Reopening America Won’t Fix the Educational Digital Divide</p>
          </div>

          <div className="col-md-6 col-lg-3">
          <img src="/images/mobile-phones-agencies.png" className="w-100"/>
          <p className="fw-bold mt-2">Reopening America Won’t Fix the Educational Digital Divide</p>
          </div>
        </div>
      </div>

    </section>

    <section className="my-5">
      <div className="container py-3 border-top border-bottom">
        <h3 className="text-center fw-bolder gradient-green">Load More</h3>
      </div>
    </section>

    </>
  )
}
