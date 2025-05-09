import { Link } from "react-router-dom";
import "./root.css";
import { useMemo } from "react";
import pirateHat from "../img/pirate.png";
import boardgoggle from "../img/boardgoggle.png";
import jester from "../img/jester.png";
import wegahat from "../img/wegahat.png";
import colander from "../img/colander.png";

function About() {
  const todayHash = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today
      .toISOString()
      .split("")
      .reduce((a, b) => {
        a = (a << 5) - a + b.charCodeAt(0);
        return a & a;
      }, 0);
  }, []);

  return (
    <>
      <div className="body1">
        <h1>About The Devs:</h1>
        <div className="AboutGroup">
          <a className="hatlink" href={`/boardwalk?unlock=${todayHash}`}>
            <img className="hat" src={jester} alt="jester hat"></img>
          </a>
          <div className="AboutTitleAndDescription">
            <p className="AboutTitle">Jared</p>
            <p className="AboutDescription">
              The leader of the Boardshapes project. He started the project in
              late summer 2024, with the idea of creating a video game where you
              could draw anything on a whiteboard, take a picture of it, and
              play on it. That idea came to life in the form of Boardwalk. After
              developing the key algorithms used to generate levels in
              Boardwalk, he wanted to make the technology public by making
              Boardshapes open-source and always available for free through the
              boardshapes.com web API. He continues to develop and maintain
              every part of the project, and hopes to keep advancing the project
              with new technologies and new ideas. Outside of Boardshapes, Jared
              enjoys image and video editing, taking care of animals, playing
              (and creating) video games, experimenting with new tech, and
              teaching others.
            </p>
          </div>
        </div>
        <div className="AboutGroup">
          <img className="hat" src={boardgoggle} alt="goggles"></img>
          <div className="AboutTitleAndDescription">
            <p className="AboutTitle">Cohen</p>
            <p className="AboutDescription">
              An all-around developer for the project, and a very dedicated one.
              His main focus has been Boardwalk, having developed the core
              gameplay elements as well as many of the other features of the
              game. However, he was also the one to implement Boardshapes's
              first optimization algorithm as well as designing the website you
              are reading from right now. His passion for the project has driven
              him to build an entire community around Boardwalk, and he can even
              be credited with bringing the development team together in the
              first place. His hobbies include singing, graphic design, video
              editing, playing his guitar, and playing and developing video
              games.
            </p>
          </div>
        </div>
        <div className="AboutGroup">
          <img className="hat" src={wegahat} alt="purple cap"></img>
          <div className="AboutTitleAndDescription">
            <p className="AboutTitle">Luke</p>
            <p className="AboutDescription">
              Acting as our main consultant for Boardshapes's image processing
              algorithms, Luke is always open to brainstorming a solution to any
              problem. He prefers the low-level side of the project, and is
              currently in the midst of developing a command-line tool to
              harness the power of Boardshapes on your local computer, as well
              as working on implementing new ways to optimize the shapes
              generated by our algorithms. When not programming he enjoys
              guitar, cinema, and running.
            </p>
          </div>
        </div>
        <div className="AboutGroup">
          <img className="hat" src={pirateHat} alt="pirate hat"></img>
          <div className="AboutTitleAndDescription">
            <p className="AboutTitle">Zachary</p>
            <p className="AboutDescription">
              The main developer behind integrating our many systems together.
              Zachary built the most important parts of the web API for
              Boardshapes, allowing it to take any image and respond with the
              many shapes in the image that our algorithms have detected and
              identified. He then brought the power of Boardshapes to Boardwalk,
              creating the level generator that parses Boardshapes's shape data
              in order to build dynamic levels to be played on. He has also
              greatly improved the accessibility and overall polish of Boardwalk
              and its multiplayer server. Zachary enjoys playing video games,
              singing, playing drums and piano, and going on walks.
            </p>
          </div>
        </div>
        <div className="AboutGroup">
          <img className="hat" src={colander} alt="colander"></img>
          <div className="AboutTitleAndDescription">
            <p className="AboutTitle">Jonathan</p>
            <p className="AboutDescription">
              Previously our unofficial level designer for Boardwalk, Jonathan
              joins the developer team to take our project to new heights. He
              has already provided insight on many of the gameplay elements that
              have been added to Boardwalk, and plans to continue innovating to
              give Boardwalk a truly dynamic gameplay experience. He loves
              bowling, baseball, and video games (especially Wipeout on the
              Wii).
            </p>
          </div>
        </div>
        <br></br>
        <br></br>
        <Link to={`/`} className="link">
          Return Home!
        </Link>
      </div>
    </>
  );
}

export default About;
