import React from 'react';
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuAppBar from "./components/navegacion/MenuAppBar";
import theme from "./theme/theme";
import FindMonographs from "./components/screens/FindMonographs"

function App() {
  return (
    <ThemeProvider theme={theme}>

        {/*SnackBar */}

        <Router>
          <MenuAppBar/>
          <Switch>
            <Route exact path="/findMonographs" component={FindMonographs} />
          </Switch>
        </Router>

    </ThemeProvider>
  );
}

export default App;