import { StyleSheet, Platform } from "react-native";


const styles = StyleSheet.create({
  caixa: {
     height: "100%",
     width: "100%",
     backgroundColor: "#1ca8c9"

  },
    fundo: {
    width: "100%",
    height: "100%",
},
  label: {
          color: "black",
          fontSize: 20,
          textAlign: "center",
          marginTop: 5,
          color: "#fff",
          fontWeight: "bold",
          fontStyle:"italic"
        
  },
  label2: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
    marginLeft:18,
    marginRight:18,
    padding:0,
  
},
label3: {
  color: "white",
  fontSize: 20,
  textAlign: "center",
  marginTop: 5,

},
  inputs: {
    width: "100%",
    padding: 8,
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    padding: 8,
    marginTop: 12,
    borderRadius: 8,
  },
img: {
    width: 230,
    height: 250,
    borderRadius: 10,
    marginLeft: 10
  },
  imgcurso: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },

  abertura: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  container_row: {
    display:"flex",
    flexDirection: 'row',
    justifyContent:"space-between",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#e6aa65"
  },
  container_normal: {
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  container: {
    marginBottom: 10,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  
  },
  btn: {
    backgroundColor: "#ff8C00",
    margin: 5,
    padding: 10,
    borderRadius: 6,
    width: 95,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  
  },
  btn1: {
    backgroundColor: "#ff8C00",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 136,
    padding: 10,
    borderRadius: 6,
    width: 90,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  titulo: {
    color: "#ff8C00",
    fontSize: 40,
    textAlign: "center",
    marginTop: 40,
    marginBottom: 20,
    fontWeight: "bold",
  },
});

export default styles;
