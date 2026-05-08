import React from 'react';
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuAppBar from "./components/navegacion/MenuAppBar";
import theme from "./theme/theme";
import FindMonographs from "./components/screens/FindMonographs"
import AddCategories from './components/screens/admin/AddCategories';
import CategoriesList from './components/screens/admin/CategoriesList';
import EditCategory from './components/screens/admin/EditCategory';

function App() {
  return (
    <ThemeProvider theme={theme}>

        {/*SnackBar */}

        <Router>
          <MenuAppBar/>
          <Switch>
            <Route exact path="/findMonographs" component={FindMonographs} />
            <Route exact path="/admin/addCategory" component={AddCategories} />
            <Route exact path="/admin/categories" component={CategoriesList} />
            <Route exact path="/admin/category/:id" component={EditCategory}/>
          </Switch>
        </Router>

    </ThemeProvider>
  );
}

export default App;