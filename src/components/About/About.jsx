import "./about.css"
import man from "../../img/man.jpg"

const About = () => {
  return (
    <div className="about">
     <div className="a-left"> 
     <div className="a-card-bg"></div> 
         <div className="a-card">
             <img src={man} alt="" className="a-img" />
         </div>
     </div>
     <div className="a-right">
         <h1 className="a-title">About Me</h1>
         <h3 className="a-sub">“This above all: to thine own self be true”</h3>
         <p className="a-tell">I am an Electrical Engineering student at Netaji Subash University Of Technology. I have a great interest in coding and development. Currently at begginer level on learning the things.</p>
         <div className="provalue">
           <div className="provalue1">
             <p>HTML/CSS</p>
           </div>
          
         </div>
         <div className="provalue">
           <div className="provalue2">
             <p>C++</p>
           </div>
          
         </div>
         <div className="provalue">
           <div className="provalue3">
             <p>BootStarp</p>
           </div>
          
         </div>
         <div className="provalue">
           <div className="provalue4">
             <p>Javascript</p>
           </div>
          
         </div>
         <div className="provalue">
           <div className="provalue5">
             <p>React</p>
           </div>
          
         </div>
     </div>
    </div>

  )
}

export default About
