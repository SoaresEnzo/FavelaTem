import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
   
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    display:"flex",
    flexDirection: "row",
    marginTop:20
    
  },
  imagemLogo: {
  marginTop: 40,
  padding: 10,
  borderRadius: 6,
  marginTop: 20,
  marginLeft: 20,
  },
  titulo: {
    color: "white",
    fontSize: 32,
    textAlign: "center",
    marginTop: 50,
  },
 
  btn: {
    backgroundColor: "#ff8C00",
    margin: 5,
    borderRadius: 6,
    width: 100,
    height: 30,
    justifyContent:"center"
    
  },
  texto: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
});

export default styles;
