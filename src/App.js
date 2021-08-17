import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [meaning, setMeaning] = useState("");
  const emojiData = {
    "😀": "Grinning Face",
    "😂": "Tears of Joy",
    "😍": "Loved it",
    "🔥": "fire",
    "😑": "Expression Less",
    "🙃": "Upside down",
    "😕": "Confused",
    "👑": "Crown",
    "🤣": "Laughing Hard",
    "👍": "Thumbs up"
  };

  let keyData = [];
  for (let keys of Object.keys(emojiData)) {
    keyData.push(keys);
  }

  const inputChange = (event) => {
    let input = event.target.value;
    let meaning = emojiData[input];

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
      <div className="container">
        <div className="content">
          <h2>Find Meaning of Emojis</h2>
          <div className="grid eDisplay">
            {keyData.map((data) => {
              return <h3 className="ed">{data}</h3>;
            })}
          </div>
          <input type="text" onChange={inputChange} placeholder="Paste Emoji" />
          <h3>{meaning}</h3>
        </div>
      </div>
    </main>
  );
}
