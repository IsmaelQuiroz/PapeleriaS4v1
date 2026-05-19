import { createTheme, makeStyles } from "@material-ui/core";

const theme = createTheme();

const useStyles = makeStyles({
    containermt:{
        marginTop: 30
    },
    card:{
        padding: 30
    },
    avatar:{
        backgroundColor: '#0f80aa',
        width: 80,
        height: 80
    },
    icon : {
        fontSize: 60
    },
    form :{
        marginTop: 40,
        marginBottom: 10
    },
    gridmb : {
        marginBottom: 20
    },
    link: {
        marginTop: 8,
        fontSize:"1.1rem",
        fontFamily:"Roboto",
        lineHeight:1.5,
        color: theme.palette.primary.main,
        textDecoration: "none"
    },
    appBar: {
        paddingTop:8,
        paddingBottom:8
    },
    grow:{
        flexGrow: 0, // si es menor a md (960px) que no tome ningun espacio
        [theme.breakpoints.up('md')]:{
            flexGrow: 1  /* El elemento crezca hasta llegar al punto de interrupción, es decir el elemento tome todo el espacio */
        }
    },
    linkAppBarLogo: {
        display:"inline-flex", /*Elementos en una sola línea sin relleno */
        alignItems: "center", /* colocar sus elementos al centro verticalmente */
        color:"inherit",
        textDecoration:"none"
    },
    mr: {
        marginRight: 3
    },
    buttonIcon: {
        fontSize : 14,
        padding: 0
    },
    linkAppBarDesktop: {
        display: "inline-flex",
        alignItems: "center",
        padding: "6px 16px",
        color: "inherit",
        textDecoration:"none"
    },
    list : {
        width: 250
    },
    ListItem: {
        pading: 0
    },
    linkAppBarMobile : {
        display: "inline-flex",
        alignItems: "center",
        width: "100%",
        padding: "8px 16px",
        color: "inherit",
        textDecoration: "none"
    },
    ListItemIcon: {
        minWidth: 35
    },
    sectionDesktop : {
        display: "none", //si es menor que md (960px) oculta los elementos
        [theme.breakpoints.up('md')] : { /* Si el ancho de pantalla es mayor que md(960px) */
            display: "flex" //Se muestran los elementos
        }
    },
    sectionMobile : {
        display: "flex",
        flexGrow: 1,
        [theme.breakpoints.up('md')] : {
            display:'none'
        }
    },
    text_title : {
        fontWeight: 600, //relleno de texto
        color: "#494949",
        marginBottom: 10
    },
    media : {
        height: 320,
        backgroundColor : "#F2F2F2",
        margin: "15px 15px 0 15px"
    },
    price : {
        float: "right", //que flote hacia la derecha
        padding: "0 20px 0 20px",
        backgroundColor: "#0f80aa"
    },
    text_card: {
        fontWeight: "bold",
        color: "#656565",
        marginBottom: 8
    },
    PaperImg : {
        backgroundColor: "#F2F2F2"
        
    },
    mediaDetalle: {
        width: 380,
        height: 380,
        margin: "auto"
    },
    text_detalle: {
        fontWeight: 500,
        color: "#494949",
        marginBottom: 5
    },
    imgProductoCC : {
        backgroundColor: "#F2F2F2",
        width: 80,
        height: 70
    },
    papperPadding: {
        padding: 20
    },
    gridPC: {
        margin: "auto",
        marginTop: 20
    },
    buttonAnterior : {
        marginRight : 8
    },
    formControl: {
        /*margin: 12*/
        margin: theme.spacing(1),
        minWidth: 120
    },
    gridLR :{
        paddingLeft: 30,
        paddingBottom:20,
        paddingRight: 30
    },
    divider: {
        marginTop: 12,
        marginBottom: 12
    },
    imgProductoPC: {
        background: "#F2F2F2",
        width: 50,
        height: 40
    },
    text_envio: {
        lineHeight: 3
    },
    alertNotDelivered : {
        marginTop: 5,
        padding: "15px 15px 5px 15px",
        marginBottom: 20,
        backgroundColor: "#ffcccc"
    },
    alertDelivered : {
        marginTop: 5,
        padding: "15px 15px 5px 15px",
        marginBottom: 20,
        backgroundColor: "#d6f5d6"
    },
    imageUploader: {
        padding: 0,
        margin: "-25px auto 15px",
        width: 0
    },
    avatarPerfil:{
        width: 130,
        height: 130,
        backgroundColor: "#0f80aa"    
    },
    table: {
        border: "1px solid #e0e0e0"
    },
    iconDelivery:{
        color: "green",
        fontWeight: 900
    },
    iconNotDelivery:{
        color: "red",
        fontWeight: 900
    },
    avatarPerfilAppBar:{
        marginRight : 8,
        backgroundColor : "#f2f2f2"
    },
    listSubItem: {
        padding: "0 0 0 30px"
    },
    checkbox: {
        display: "block",
        padding: 0,
        marginTop: 5,
        marginBottom: 5
    },
    buttonAgregar : {
        float: "right"
    },
    avatarProducto: {
        width: 175,
        height: 175,
        backgroundColor: "#F2F2F2"
    }

})

export default useStyles;