
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
// import BtnMenu from '../../Components/Menu';
import CardCurso from '../../Components/CardCursos/';

import styles from "./styles";

function Cursos({ navigation }) {

  function home() {
    navigation.navigate("Home");
  }
   function servico() {
     navigation.navigate("Servico");
  }
  function login() {
    navigation.navigate("Login");
  }
  function hub() {
    navigation.navigate("Hub");
  }

  return (
    <ScrollView style={{backgroundColor:"#fff", height:"100%"}} >

      <TouchableOpacity style={{display:"flex", flexDirection:"row"}} onPress={home}>

        <Image style={styles.imagem}
          source={require("../../../assets/logofavelatem.png")} />

      </TouchableOpacity> 

      {/* <BtnMenu navigation={navigation} /> */}

      <View style={styles.containerCursos}>        

        <View style={{display:"flex", alignItems:"center", marginLeft: 15, marginRight: 15,}}>
          <Image style={styles.imagemCurso} source={require("../../../assets/financas.png")} />
          <Title style={{fontSize:14, fontWeight:"900"}}>Empreededorismo</Title>
        </View>

        <View style={{display:"flex", alignItems:"center", marginLeft: 15, marginRight: 15,}}>
          <Image style={styles.imagemCurso} source={require("../../../assets/mktdigital.png")} />
          <Title style={{fontSize:14, fontWeight:"900"}}>Marketing</Title>
        </View>

        <View style={{display:"flex", alignItems:"center", marginLeft: 15, marginRight: 15,}}>
          <Image style={styles.imagemCurso} source={require("../../../assets/consultoria.png")} />
          <Title style={{fontSize:14, fontWeight:"900"}}>Administração</Title>
        </View>    
        
      </View> 

      <CardCurso />

      <View style={{display:"flex", flexDirection:"row", justifyContent:"space-around" }}>
          
        <TouchableOpacity style={styles.btn} onPress={home}>
          <Text style={styles.texto}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={servico}>
          <Text style={styles.texto}>Serviços</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={hub}>
          <Text style={styles.texto}>Hub</Text>
        </TouchableOpacity>
          
      </View>        

    </ScrollView>
  );
}
  
  export default Cursos;