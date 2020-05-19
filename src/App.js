import React from 'react';
import './App.css';

function App() {

  var content = document.getElementById('content');

  function covid() {
    removeChildren(content);

    var text = document.createElement("h2");
    text.innerHTML = "loading...";
    content.appendChild(text);

    const display = document.querySelector('h2');

    fetch("https://covidtracking.com/api/states/daily")
      .then(function(response) {
        response.json()
      .then(function(text) {
        for (var i = 0; i < 56; i++) {
          if (text[i].state === 'IA') {
            display.innerHTML = (
              "State: " + text[i].state +
              "<br>Cases: " + text[i].positive +
              "<br>New Cases: " + text[i].positiveIncrease +
              "<br>Recovered: " + text[i].recovered +
              "<br>Hospitalized Currently: " + text[i].hospitalizedCurrently +
              "<br>Hospitalized Increase: " + text[i].hospitalizedIncrease);
          }
        }
      });
      });
}

  function frog() {
    removeChildren(content);

    var frame = document.createElement("iframe");
    frame.setAttribute("src", "frog/frog.html");
    frame.setAttribute('scrolling', 'no');
    content.appendChild(frame);
  }

  function hl() {
    removeChildren(content);

    var frame = document.createElement("iframe");
    frame.setAttribute("src", "hl/index.html");
    frame.setAttribute('scrolling', 'no');
    content.appendChild(frame);
  }

  function rps() {
    removeChildren(content);

    var frame = document.createElement("iframe");
    frame.setAttribute("src", "rps/index.html");
    frame.setAttribute('scrolling', 'no');
    content.appendChild(frame);
  }

  function removeChildren(a) {
    var child = a.lastElementChild;
    while (child) {
        a.removeChild(child);
        child = a.lastElementChild;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Central Academy Computer Science 2</h1>
        <div className="nav">
          <button onClick={covid}>COVID19</button>
          <button onClick={frog}>PokeFrogs</button>
          <button onClick={hl}>Too High/Too Low</button>
          <button onClick={rps}>Rock Paper Scissors</button>
        </div>
      </header>
    </div>
  );
}

export default App;
