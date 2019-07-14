import React, { createRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import debounce from "lodash.debounce";

import "./styles.css";
import * as mobilenet from "@tensorflow-models/mobilenet";

import { translateClassName } from "./translate-class-name";

function initApp(videoElement, setPredictions) {
  const modelPromise = mobilenet.load();
  const streamPromise = startVideoStream(videoElement);
  Promise.all([modelPromise, streamPromise]).then(([model]) => {
    classify(model, videoElement, setPredictions);
  });
}

function startVideoStream(videoElement) {
  const streamPromise = navigator.mediaDevices.getUserMedia({
    audio: false,
    video: { facingMode: "user", width: 412, height: 891 }
  });
  return streamPromise.then(stream => {
    videoElement.srcObject = stream;
    return new Promise(resolve => {
      videoElement.onloadedmetadata = () => {
        resolve();
      };
    });
  });
}

const classify = debounce((model, videoElement, setPredictions) => {
  model.classify(videoElement).then(predictions => {
    setPredictions(predictions);
    requestAnimationFrame(() => classify(model, videoElement, setPredictions));
  });
}, 1000);

function App() {
  const videoRef = createRef();
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    initApp(videoRef.current, setPredictions);
  }, []);

  return (
    <div className="App">
      <video
        ref={videoRef}
        className="App__stack"
        autoPlay
        playsInline
        muted
        width="412"
        height="891"
      />
      <div className="App__stack">
        <PredictionFrame predictions={predictions} />
      </div>
    </div>
  );
}

function Splash() {
  return (
    <div className="App">
      <div classNAme="App__stack" onClick={mountApp}>
        <Frame
          frameSrc="assets/frame_unchi.png"
          kaedeText="やるか？"
          mitoText={
            <>
              画面をクリック
              <br />
              してください
            </>
          }
        />
      </div>
    </div>
  );
}

function PredictionFrame({ predictions }) {
  const isCertain = p => p >= 0.7;

  const prediction = predictions[0] || null;

  const frameSrc =
    prediction && isCertain(prediction.probability)
      ? "assets/frame_certain.png"
      : "assets/frame_uncertain.png";

  const mitoText = (
    <MitoPredictionText prediction={prediction} isCertain={isCertain} />
  );

  return (
    <Frame
      frameSrc={frameSrc}
      kaedeText="ミトちゃん、これなに？"
      mitoText={mitoText}
    />
  );
}

function MitoPredictionText({ prediction, isCertain }) {
  if (!prediction) {
    return <>これは…</>;
  }

  const color = `hsl(0, 100%, ${Math.round(
    100 - prediction.probability * 50
  )}%)`;

  const classNameText = (
    <span style={{ color }}>{translateClassName(prediction.className)}</span>
  );

  return (
    <>
      これは…
      <br />
      {classNameText}
      <br />
      {isCertain(prediction.probability) ? "ですねぇ" : "でしょうか"}
      {` (${(prediction.probability * 100).toPrecision(3)}%)`}
    </>
  );
}

function Frame({ frameSrc, kaedeText, mitoText }) {
  return (
    <div className="App__frame">
      <img src={frameSrc} alt="frame" width="412" height="891" />
      <p className="App__frame__kaedeText">{kaedeText}</p>
      <p className="App__frame__mitoText">{mitoText}</p>
    </div>
  );
}

function mountApp() {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Splash />, rootElement);
