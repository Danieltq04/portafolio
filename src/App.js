import { makeStyles } from "@material-ui/styles";




function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      
      <h1>Pruebas</h1>
    </div>
  );
}

const useStyles = makeStyles((theme) =>({
  /* En este objeto escribo todas las clases y sus estilos */
  root: {

  }
}))

export default App;
