import React, { useState } from "react";
import { Snackbar, SnackbarContent, ThemeProvider, StylesProvider } from "@material-ui/core";
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
import LandingPage from "./components/screens/LandingPage";
import AutenticacionContext from "./features/seguridad/utilidades/AutenticacionContext";
import RutaProtegida from "./features/seguridad/componentes/RutaProtegida";

function App() {
  const cls = useStyles();
  const [{ openSnackBarFromMain }, dispatch] = useStatateValueMy();

  //para que cuando cambien los Claims se pueda actualizar el estado
  const [claims, setClaims] = useState([{nombre:'esadmin', valor:'true'}]);

  function actualizar(){
    setClaims(claims);
  }

  return (
    <StylesProvider injectFirst>
    <ThemeProvider theme={theme} >
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
        {/* //Se configura el proveedor para poder propagar los valores */}
      <AutenticacionContext.Provider value={{claims,actualizar}}> 
            <MenuAppBar />
            <Switch>
              
              <RutaProtegida claims={['esadmin']} >
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
              </RutaProtegida>
              

              <Route exact path="/" component={LandingPage}/>
            </Switch>
          </AutenticacionContext.Provider>
      </Router>
    </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
