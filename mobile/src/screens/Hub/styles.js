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
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  btn: {
    backgroundColor: "#ff8C00",
    padding: 10,
    margin: 20,
    borderRadius: 6,
    width: 100,
    height: 40,
  },
  btnUser: {
    backgroundColor: "#1ca8c9",    
    padding: 10,
    margin: 20,
    borderRadius: 6,
    width: 120,
    height: 40,
  },
  textoUser: {
    fontSize: 13,
    color:"#fff",
    textAlign: "center",
    fontWeight: "bold"
  },
  texto: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
  atividades:{
    backgroundColor: "white",
    width:90,
    height:80,
    borderRadius:20,
    margin:15,
    display:"flex",
    alignItems: "center",
    justifyContent:"center"
  },
  textoAtividades: {
    fontSize: 15,
    color:"#ff8C00",
    fontWeight:"bold"
  }
});

export default styles;