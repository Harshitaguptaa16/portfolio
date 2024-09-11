import React,{useState,useEffect} from 'react';
import '../Footer/Footer.css';


export default function Footer(){
    const [showTopBtn, setShowTopBtn] = useState(false);
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000);
      });
    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    },[])
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return(
        <div className='footer' id="footer">
            <div className='foot poppins-bold'>
            <span>GET IN T</span><span className='circle'></span><span>UCH</span>
            </div>
            <div className='row footer-content'>
                <div className='col-md-6'>
                    <p>NAVIGATION</p>
                    <hr></hr>
                    <ul className='m-0 p-0'>
                        <li><a href="#firstpage">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#service">Services</a></li>
                        <li><a href="#project">Projects</a></li>
                        <li><a href="#footer">Contacts</a></li>
                    </ul>
                </div>
                <div className='col-md-6'>
                    <p>SOCIAL</p>
                    <hr></hr>
                    <ul className='m-0 p-0'>
                        <li ><a href="https://www.linkedin.com/in/harshita-gupta-5702a0203/">Linkedin</a></li>
                        <li><a href="https://github.com/Harsihita">Github</a></li>


                    </ul>
                </div>
            </div>
            <div className='copyright row '>
                <div className='col-md-6 copy-name'>
                <span className=''>2024
                <p>Harshita Gupta</p>
                </span>
                </div>
                
                <div className='col-md-4 time'>
                    <span>LOCAL TIME</span>
                    <p>{time}</p>
                </div>
                <div className='col  dot'>
                    {showTopBtn &&(
                        <span><i class='bx bx-up-arrow-alt arrow' onClick={goToTop} ></i></span>
                    )}
                    
                </div>
                
            </div>
        </div>
        
    )
}