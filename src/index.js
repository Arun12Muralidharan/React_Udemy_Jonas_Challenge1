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
      <Skill name="HTML+CSS" emoji="😄" color="violet" />
      <Skill name="Javascript" emoji="😜" color="yellow" />
      <Skill name="Web Design" emoji="😍" color="green" />
      <Skill name="Git and Github" emoji="😎" color="red" />
      <Skill name="React" emoji="🏆" color="blue" />
      <Skill name="Sass" emoji="❤️" color="orange" />
    </div>
  );
}

function Skill(props) {
  const style = props.color;

  return (
    <div className="skill" style={{ backgroundColor: style }}>
      <p>{props.name}</p>
      <p>{props.emoji}</p>
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
