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
    "👍": "Thumbs up",
  };

  let keyData = Object.keys(emojiData);

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
  const emojiClicked = (data) => {
    // console.log(data.target.innerText);
    setMeaning(emojiData[data]);
  };

  return (
    <main>
      <div className="container">
        <div className="content">
          <h2>Find Meaning of Emojis</h2>
          <div className="grid eDisplay">
            {keyData.map((data) => {
              return (
                <h3 key={data} onClick={() => emojiClicked(data)}>
                  {data}
                </h3>
              );
            })}
          </div>
          <input type="text" onChange={inputChange} placeholder="Paste Emoji" />
          <h3>{meaning}</h3>
        </div>
      </div>
    </main>
  );
}
