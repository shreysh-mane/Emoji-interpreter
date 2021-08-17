import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [meaning, setMeaning] = useState("");
  const emojiData = {
    "😀": "Grinning Face",
    "😂": "Tears of Joy",
    "😍": "Loved it",
    "🔥": "fire",
    "😑": "Expression Less"
  };
  const inputChange = (event) => {
    let input = event.target.value;
    let meaning = emojiData[input];
    let message = "not in data";
    if (input) {
      if (meaning === undefined) {
        meaning = "not in data";
      }
      setMeaning(meaning);
    } else {
      setMeaning("");
    }
  };

  return (
    <main>
      <h2>Find Meaning of Emojis</h2>
      <input
        type="text"
        onChange={inputChange}
        placeholder="Paste your emoji here"
      />
      <h3>{meaning}</h3>
    </main>
  );
}
