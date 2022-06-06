//hooks
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";

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
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
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
