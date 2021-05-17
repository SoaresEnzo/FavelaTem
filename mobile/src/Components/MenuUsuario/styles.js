import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 300,    
  },
  containerCursos: {
    display:"flex",
    marginTop:20,
    width: "100%",
    justifyContent:"center",
    flexDirection: "row",
  },
  containerCard:{
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
  },
  titulo: {
    color: "white",
    fontSize: 32,
    textAlign: "center",
    marginTop: 50,
  },
  introducao: {
    color: "black",
    fontSize: 25,
    textAlign: "center",
    marginTop: 50,
  },
  imagem: {
    marginTop: 40,
    padding: 10,
    borderRadius: 6,
    marginTop: 20,
    marginLeft: 20,
  },
  imagemCurso: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  btn: {
    backgroundColor: "#ff8C00",
    // marginTop: 20,
    // marginBottom: 20,
    padding: 10,
    margin: 20,
    borderRadius: 6,
    width: 100,
    height: 40,
  },
  texto: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});

export default styles;