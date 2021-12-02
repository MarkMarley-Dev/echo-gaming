import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/App.scss";
import Forum from "./pages/Forum";
import ForumTopic from "./pages/Forum";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Forum} />
            <Route
              path="/topic/:topicId/"
              exact
              render={(routerProps) => {
                return <ForumTopic {...routerProps} />;
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
