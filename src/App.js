import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";

class App extends React.Component  {
  render() {
    return(
      <p> '' </p>
    )
  }
}
export default App;
function manageUsername(state = "", action) {
  switch (action.type) {
    case "ADD_USERNAME":
      return state.concat([action.text])

    default:
      return state
  }
}

const store = createStore(manageUsername, "")

store.dispatch({
  type: "ADD_USERNAME",
  text: "Dummy Username"
})
console.log(store.getState())
