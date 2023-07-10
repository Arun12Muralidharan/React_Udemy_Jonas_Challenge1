import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <picture>
        <img className="avatar" src="./image-product-mobile.jpg" alt="image" />
      </picture>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Arun Muralidharan</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML+CSS 😄" color="violet" />
      <Skill name="Javascript 😜" color="yellow" />
      <Skill name="Web Design 😍" color="green" />
      <Skill name="Git and Github 😎" color="red" />
      <Skill name="React 🏆" color="blue" />
      <Skill name="Sass ❤️" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <p>{props.name}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
