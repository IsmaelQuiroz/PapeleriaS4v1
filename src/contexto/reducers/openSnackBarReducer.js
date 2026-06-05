import { FlashOffRounded } from "@material-ui/icons";

const snackInitialState = {
    open: false,
    mensaje: "",
    error: false
}

const openSnackBarReducer =  (mystate = snackInitialState, myaction) => {
    switch(myaction.type){
        case "OPEN_SNACKBAR" :
        return{
            ...mystate,
            open: myaction.openMensaje.open,
            mensaje: myaction.openMensaje.mensaje,
            error: myaction.openMensaje.error
        };
        default:
            return mystate;
    }
}

export default openSnackBarReducer;