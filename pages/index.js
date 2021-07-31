import user from "../editthis";
import HEAD from "next/head";
import Aos from "aos";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import About from "../components/About";
import Skill from "../components/Skill";
import Connect from "../components/Connect";
import "aos/dist/aos.css";
let g = [];
const cardtitles = user.projects[1];
const cardLinks = user.projects[0];
const cardDesc = user.projects[2];
let i;

for (let i = 0; i < cardLinks.length; i++) {
  g[i] = (
    <li className="card">
      {" "}
      <h2>{cardtitles[i]}</h2> <p>{cardDesc[i]} </p>{" "}
      <a href={cardLinks[i]} className="visit">
        Visit
      </a>{" "}
    </li>
  );
}

export default function Hello() {
  return (
    <>
      <HEAD>
        <title>
          {user.name} | {user.job}
        </title>
        <script
          src="https://kit.fontawesome.com/4019246ab4.js"
          crossorigin="anonymous"
        ></script>
        <meta name="description" content={user.description}></meta>
        <meta name="theme-color" content={user.color} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          type="image/png"
          href="https://img.icons8.com/emoji/32/000000/alien-monster-emoji.png"
        />
      </HEAD>
      <div className="main">
        <div className="wrapper">
          {/* <Navbar></Navbar> */}
          <Landing />
          <About></About>
          <Skill></Skill>
          <Connect></Connect>
        </div>
      </div>
    </>
  );
}
