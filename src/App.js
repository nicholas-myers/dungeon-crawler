import GameMenu from "./GameMenu";
import Grid from "./components/Grid"

const App = () => {
  return (
    <div className="App">
      <GameMenu />
      <main>
        <Grid />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
