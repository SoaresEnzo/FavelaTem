
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import CardServico from '../../Components/CardServico/CardBolo';
import CardFood from '../../Components/CardServico/CardFood';
import CardFotografia from '../../Components/CardServico/CardFotografia';
import CardInfo from '../../Components/CardServico/CardInfo';
// import MenuUsuario from '../../Components/MenuUsuario/Index';


import styles from "./styles";

function Servico({ navigation }) {
  function portifolio() {
    navigation.navigate("Portifolio");
  }
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
  function cursos() {
    navigation.navigate("Cursos");
  }
  return (

    <ScrollView style={{backgroundColor:"#fff", height:"100%"}} >

      <TouchableOpacity style={{display:"flex", flexDirection:"row"}} onPress={home}>
        <Image style={styles.imagemLogo}
          source={require("../../../assets/logofavelatem.png")} />       

      </TouchableOpacity>

      <View style={{backgroundColor:"#ff8c00",marginTop:10, height:50, display:"flex", justifyContent:"center", flexDirection:"row"}} >
        <View style={{margin:6}}>
          <Image source={require("../../../assets/bolo-de-aniversario.png")} style={{width:40, height:40}}/>
        </View>
        <View style={{margin:6}}>
          <Image source={require("../../../assets/camera-cb.png")} style={{width:40, height:40}}/>
        </View>
        <View style={{margin:6}}>
          <Image source={require("../../../assets/cuidados-de-saude.png")} style={{width:40, height:40}}/>
        </View>
        <View style={{margin:6}}>
          <Image source={require("../../../assets/uso-domestico-cb.png")} style={{width:40, height:40}}/>
        </View>
        <View style={{margin:6}}>
          <Image source={require("../../../assets/parede-de-tijolos.png")} style={{width:40, height:40}}/>
        </View>
        <View style={{margin:6}}>
          <Image source={require("../../../assets/prato-cb.png")} style={{width:40, height:40}}/>
        </View>
        <View style={{margin:6}}>
          <Image source={require("../../../assets/maquina-de-costura.png")} style={{width:40, height:40}}/>
        </View>        

      </View>

      <View >
        <CardServico />
        <View style={{alignItems:"center"}}>
          <TouchableOpacity style={styles.btn} onPress={portifolio}>
            <Text style={styles.texto}>Portifólio</Text>
          </TouchableOpacity>
        </View>        
      </View> 

      <View>
        <CardInfo />
        <View style={{alignItems:"center"}}>
          <TouchableOpacity style={styles.btn} >
            <Text style={styles.texto}>Portifólio</Text>
          </TouchableOpacity>
        </View>        
      </View>  

      <View>
        <CardFood />
        <View style={{alignItems:"center"}}>
          <TouchableOpacity style={styles.btn} >
            <Text style={styles.texto}>Portifólio</Text>
          </TouchableOpacity>
        </View>        
      </View>  

      <View>
        <CardFotografia />
        <View style={{alignItems:"center"}}>
          <TouchableOpacity style={styles.btn} >
            <Text style={styles.texto}>Portifólio</Text>
          </TouchableOpacity>
        </View>        
      </View>  


      <View style={styles.container}> 
      
        <TouchableOpacity style={styles.btn} onPress={hub}>
          <Text style={styles.texto}>Hub</Text>
        </TouchableOpacity>       

        <TouchableOpacity style={styles.btn} onPress={cursos}>
          <Text style={styles.texto}>Cursos</Text>
        </TouchableOpacity>
        
      </View>

    </ScrollView>
    
    );
  }
  
  export default Servico;