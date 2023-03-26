import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

function Text(props) {

//          for color shfting




  // function to add data in the text area and preview papa
  let AddText = (event) => {
    SetText(event.target.value);
    document.getElementById("PreviewPara").innerText = event.target.value;
  };

  // Function for funcationallity

  let ToCapatial = (event) => {
    let Ntext = texts.charAt(0).toUpperCase() + texts.slice(1).toLowerCase();
    SetText(Ntext);
  };
  let ToReset = () => {
    SetText(" ");
  };
  let ToTrim = (event) => {
    let Ntext = texts.trim();

    SetText(Ntext);
  };
  let Tolower = () => {
    let Ntext = texts.toLowerCase();
    SetText(Ntext);
  };
  let ToUpper = () => {
    let Ntext = texts.toUpperCase();
    SetText(Ntext);
  };
  let ToCopy = () => {
    navigator.clipboard.writeText(texts);
  };

  const [texts, SetText] = useState("Enter your text here");

  return (
    <>
      <div id="TextAreaContainer" >
        <textarea id="TextArea" value={texts} onChange={AddText}></textarea>
      </div>
      <div id="ButtonConatiner" >
        <button onClick={ToCapatial}>Capatilize</button>
        <button onClick={Tolower}>Lowercase</button>
        <button onClick={ToUpper}>UpperCase</button>
        <button onClick={ToTrim}>trim</button>
        <button onClick={ToReset}>reset</button>
        <button onClick={ToCopy}>Copy to clip board </button>
      </div>
      <div id="PreviewArea" >
        <h1 id="PreviewAreaTitle">Text Preview</h1>
        <p id="PreviewPara"> this is a preview text </p>
      </div>
      <div id="TextAnalysis" >
       
        <h2>
        Text Analysis
        </h2>
      
        <p>
          number of words used :{" "}
          {
            texts
              .toString()
              .split(/\s+/)
              .filter((ele) => {
                return ele.length !== 0;
              }).length
          }
        </p>
        <p>number of letters used : {texts.length}</p>
        <p>
          time rerquired to speak :{" "}
          {texts
            .toString()
            .split(" ")
            .filter((ele) => {
              return ele.length !== 0;
            }).length * 0.0042}{" "}
          minutes
        </p>
      </div>
    </>
  );
}

export default Text;
