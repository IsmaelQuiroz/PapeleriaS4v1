import { ThemeProvider } from "@material-ui/core";
import MenuAppBar from "./components/navegacion/MenuAppBar";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <MenuAppBar/>
    </ThemeProvider>
  );
}

export default App;
