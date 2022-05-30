import { BrowserRouter, Switch, Route } from "react-router-dom";

//importing components
import Home from "./page/home/Home";
import Create from "./page/create/Create";
import Recipe from "./page/recipe/Recipe";
import Search from "./page/search/Search";

//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipe/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
