import React from 'react';
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuAppBar from "./components/navegacion/MenuAppBar";
import theme from "./theme/theme";
import FindMonographs from "./components/screens/FindMonographs"
import AddCategories from './components/screens/admin/AddCategories';
import CategoriesList from './components/screens/admin/CategoriesList';
import EditCategory from './components/screens/admin/EditCategory';
import AddMonograph from './components/screens/admin/AddMonograph';
import EditMonograph from './components/screens/admin/EditMonograph';

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
            <Route exact path="/admin/addMonograph" component={AddMonograph}/>
            <Route exact path="/admin/editMonograph/:id" component={EditMonograph}/>
          </Switch>
        </Router>

    </ThemeProvider>
  );
}

export default App;