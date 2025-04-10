import "./PersonalProfilePage.css";
import hasmukhFrontPagePicture from "../assets/hasmukh-front-page-picture.jpeg";

function PersonalProfilePage() {
  return (
    <>
      <img
        src={hasmukhFrontPagePicture}
        alt="Hasmukh's picture"
        className="hasmukh-front-page-picture"
      />

      <h3 className="title">Hi there, This is Hasmukh Kumar</h3>
      <p className="description">
        I'm a software engineer based in London, United Kingdom. See my profile
        👇 and lets get in touch.
      </p>

      <div className="links">
        <a
          href="https://www.linkedin.com/in/hasmukh-kumar-36b44688/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a href="https://github.com/zombierobo" target="_blank">
          Github
        </a>
        <a
          href="https://drive.google.com/file/d/1LLFN3oSZCg9kQE6q_NrzMev2fXGEt7Dv/view?usp=sharing"
          target="_blank"
        >
          Download CV/Resume
        </a>
        <a target="_blank">hasmukhsuthar98 @ gmail .com</a>
        <a target="_blank" href="https://calendly.com/hasmukhsuthar98/30min">
          Calendly | Let's chat
        </a>
      </div>
    </>
  );
}

export default PersonalProfilePage;
