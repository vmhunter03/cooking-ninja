import { BrowserRouter, Switch, Route } from "react-router-dom";

//importing components
import Home from "./page/home/Home";
import Create from "./page/create/Create";
import Recipe from "./page/recipe/Recipe";
import Search from "./page/search/Search";
import Navbar from "./components/Navbar";
import ThemeSelector from "./components/ThemeSelector";

//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
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
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
