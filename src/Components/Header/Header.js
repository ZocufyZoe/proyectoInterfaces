import StatusBar from "../StatusBar/StatusBar";
import "./Header.css";

function Header({petName,affection,hungriness,cleanliness}) {

  function colorHandler(affection) {
      if (affection < 30) return "red";
      if (affection < 70) return "orange";
      if (affection <= 100) return "lime";
  }

  return (
    <header>
      <h1 className="pet-name">{petName}</h1>
        <StatusBar value={affection} max={100} color={colorHandler(affection)} />
        <StatusBar value={hungriness} max={100} color={colorHandler(hungriness)} />
        <StatusBar value={cleanliness} max={100} color={colorHandler(cleanliness)} />
        <button className="help-button">?</button>
    </header>
  );
}

export default Header;
