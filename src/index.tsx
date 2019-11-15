import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app";
import Person from "./models/person.model";

const Index: any = () => {
  const person: Person = {
    name: "Person 1",
    age: 23
  };

  return <App />;
};

ReactDOM.render(<Index />, document.getElementById("root"));
