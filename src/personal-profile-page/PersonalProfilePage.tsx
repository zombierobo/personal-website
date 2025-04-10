import "./PersonalProfilePage.css";
import hasmukhFrontPagePicture from "../assets/hasmukh-front-page-picture.jpeg";

function PersonalProfilePage() {
  return (
    <>
      <h3>Hi there, This is Hasmukh Kumar</h3>

      <img
        src={hasmukhFrontPagePicture}
        alt="Hasmukh's picture"
        className="hasmukh-front-page-picture"
      />

      <p className="read-the-docs">
        I'm a software engineer based in London, United Kingdom
      </p>

      <div className="links">
        <a
          href="https://www.linkedin.com/in/hasmukh-kumar-36b44688/"
          target="_blank"
        >
          LinkedIn
        </a>
        <br />
        <a href="https://github.com/zombierobo" target="_blank">
          Github
        </a>
        <br />
        <a
          href="https://drive.google.com/file/d/1LLFN3oSZCg9kQE6q_NrzMev2fXGEt7Dv/view?usp=sharing"
          target="_blank"
        >
          Download CV/Resume
        </a>
        <br />
        <a target="_blank">hasmukhsuthar98 @ gmail .com</a>
      </div>
    </>
  );
}

export default PersonalProfilePage;
