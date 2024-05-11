import StatusBar from "../StatusBar/StatusBar";
import "./Header.css";

function Header({petName,affection,hungriness,cleanliness}) {
  return (
    <header>
      <h1 className="pet-name">{petName}</h1>
        <StatusBar value={affection} max={100} color="red" />
        <StatusBar value={hungriness} max={100} color="orange" />
        <StatusBar value={cleanliness} max={100} color="#00f0f8" />
        <button className="help-button">?</button>
    </header>
  );
}

export default Header;
