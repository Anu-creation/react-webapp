import React,{useState} from "react";
import { createRoot } from "react-dom/client";
import SearchArea from "./searchArea";
import { Router } from "@reach/router";
import WatchArea from "./watchArea";
import ColorContext from "./ColorContext";


const App = () => {
  const themeColor = useState("darkblue");
  return (
    <ColorContext.Provider value={themeColor}>
    <div>
    <header>
    <a href="/">BringWay</a>
    </header>
    <Router>
    <SearchArea path="/"/> 
    <WatchArea path="/watch/:id"/>
    </Router>
    
  </div>
  </ColorContext.Provider>
  );
  

  // return React.createElement("div", {}, [
  //   React.createElement("h2", {}, "WeTube"),
  //   }),
  //   React.createElement(Video, {
  //     title: "the cool video on youtube",
  //     dateadded: "3 days ago",
  //     channel: "local channel",
  //   }),
  //   React.createElement(Video, {
  //     title: "the best video on youtube",
  //     dateadded: "5 days ago",
  //     channel: "learning channel",
  //   }),
  // ]);
};

// this is for advance version of react
//their is some different code that is use for render the result

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
const root = createRoot(document.getElementById("root"));
root.render(React.createElement(App)); 
