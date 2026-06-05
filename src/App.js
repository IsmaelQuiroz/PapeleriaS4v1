import React from "react";
import { Snackbar, SnackbarContent, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuAppBar from "./components/navegacion/MenuAppBar";
import theme from "./theme/theme";
import FindMonographs from "./components/screens/FindMonographs";
import AddCategories from "./components/screens/admin/AddCategories";
import CategoriesList from "./components/screens/admin/CategoriesList";
import EditCategory from "./components/screens/admin/EditCategory";
import AddMonograph from "./components/screens/admin/AddMonograph";
import EditMonograph from "./components/screens/admin/EditMonograph";
import { useStatateValueMy } from "./contexto/mystore";
import useStyles from "./theme/useStyle";

function App() {
  const cls = useStyles();
  const [{ openSnackBarFromMain }, dispatch] = useStatateValueMy();

  return (
    <ThemeProvider theme={theme}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openSnackBarFromMain ? openSnackBarFromMain.open : false}
        autoHideDuration={3000}
        ContentProps={{ "aria-describedby": "message-id" }}
        onClose={() => {
          dispatch({ //dispatch es la función que cambia la variable de estado global openSnackBarFromMain del ContextAPI
            type: "OPEN_SNACKBAR",
            openMensaje: {
              open: false,
              mensaje:""
            }
          })
        }}
      >
        <SnackbarContent  
        className={openSnackBarFromMain  ?   
          openSnackBarFromMain.error ?  cls.snackBarError : cls.snackBarInfo
          : cls.snackBarInfo
        }
        message={openSnackBarFromMain ? openSnackBarFromMain.mensaje : ""} />

      </Snackbar>

      <Router>
        <MenuAppBar />
        <Switch>
          <Route exact path="/findMonographs" component={FindMonographs} />
          <Route exact path="/admin/addCategory" component={AddCategories} />
          <Route exact path="/admin/categories" component={CategoriesList} />
          <Route exact path="/admin/category/:id" component={EditCategory} />
          <Route exact path="/admin/addMonograph" component={AddMonograph} />
          <Route
            exact
            path="/admin/editMonograph/:id"
            component={EditMonograph}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
