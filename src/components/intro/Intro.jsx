import "./intro.css"
import Me from "../../img/Me.png"
const intro = () => {

  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello,my name is</h2>
                <h1 className="i-name">Mehul Garg</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">Student</div>
                        <div className="i-title-item">Music Lover</div>
                    </div>
                </div>
                <div className="i-desc">
                    I am a second year engineering Student
                    at Netaji Subhash University of Technology.
                    My hobbies include music,snooker,volleyball.
                </div>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img" />
        </div>

    </div>
  )
}

export default intro
