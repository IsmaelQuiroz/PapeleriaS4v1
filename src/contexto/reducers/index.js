import openSnackBarReducer from "./openSnackBarReducer";

export const mainReducer = ({openSnackBar}, action) => {
    return{
        openSnackBarFromMain : openSnackBarReducer(openSnackBar, action)
    }
}


// export const mainReducer = (state, action) => {
//     const openSnackBar = state.openSnackBar; 
//     // ... el resto de tu lógica
// }


