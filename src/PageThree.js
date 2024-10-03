import "./PageThree.css";
import lineImg from "./asset/line.png";
import sinaImg from "./asset/Sina.jpg";
export default function PageThree() {
  return (
    <div className="containerThree">
      <div className="aboutMeSection">
        <h2>About me</h2>
        <p>
          I am a motivated user interface and user experience designer who loves
          to create memorable user experiences. With more than 3 years of
          experience in this field, I believe in designing attractive and
          efficient user interfaces for applications and websites by analyzing
          the needs of users and creating amazing designs. According to the
          principles of UI / UX, I always try to create a unique and pleasant
          experience for users. I love innovative challenges and seek continuous
          improvement in my knowledge and skills. My goal is to make the digital
          world more beautiful, simple and lovely through my designs. I look
          forward to working with you to create unforgettable experiences
        </p>
        <div className="resumeBotton">
          <p>Resume</p>
        </div>
      </div>
      <img id="lineImg" src={lineImg} alt="line" />
      <div className="aboutMeRightSide">
        <img id="sinaImg" src={sinaImg} alt="sina" />
        <p>Take the risk or lose the chance</p>
      </div>
    </div>
  );
}
