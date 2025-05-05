import routes from "./routes/routes";
import { useRoutes } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
function App() {
  let router = useRoutes(routes);

  return (
    <div className="App">
      <AppBar>{router}</AppBar>
    </div>
  );
}

export default App;
