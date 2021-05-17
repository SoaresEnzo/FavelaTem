
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
// import BtnMenu from '../../Components/Menu';
// import MenuUsuario from '../../Components/MenuUsuario/Index';
// import CardCurso from '../../screens/Cursos/Card/';

import styles from "./styles";

function Hub({ navigation }) {
  function home() {
    navigation.navigate("Home");
  }
   function servico() {
     navigation.navigate("Servico");
  }
  function cursos() {
    navigation.navigate("Cursos");
  }
  function loja() {
    navigation.navigate("FormularioLojas");
  }
  function servicos() {
    navigation.navigate("FormularioServicos");
  }

  return (
    <ScrollView style={{backgroundColor:"#fff", height:"100%"}} >

      <TouchableOpacity style={{display:"flex", flexDirection:"row"}} onPress={home}>
         <Image
          style={styles.imagem}
          source={require("../../../assets/logofavelatem.png")} />
       
      </TouchableOpacity> 

      <View style={{display:"flex", alignItems:"center", marginLeft: 5, marginRight: 10, marginTop:25}}>
        <Image style={styles.imagemCurso} source={require("../../../assets/pedreiro.png")} />
        <Text style={{fontSize:18, fontWeight:"bold", fontStyle:"italic", color: "#ff8c00"}}>Rafael</Text>
      </View>      

     <View style={{display:"flex", flexDirection:"row", justifyContent:"space-around", marginTop:20}}>
        
        <TouchableOpacity style={styles.btnUser} >
          <Text style={styles.textoUser}>Meu Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnUser} >
          <Text style={styles.textoUser}>Portifólio</Text>
        </TouchableOpacity>
      </View>

      <View style={{display:"flex", flexDirection:"row", justifyContent:"space-around" }}>      

        <TouchableOpacity style={styles.btnUser} >
          <Text style={styles.textoUser}>Anúncios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnUser} >
          <Text style={styles.textoUser}>Atualizar Perfil</Text>
        </TouchableOpacity>
        
      </View>

      <View style={{alignItems:"center"}}>
      <TouchableOpacity style={styles.btn} onPress={cursos}>
          <Text style={styles.texto}>Cursos</Text>
        </TouchableOpacity>
      </View>

    <View style={styles.containerCursos}>      

      <View style={{display:"flex", alignItems:"center", marginLeft: 5, marginRight: 10,}}>
         <Image style={styles.imagemCurso} source={require("../../../assets/financas.png")} />
        <Title style={{fontSize:14, fontWeight:"900"}}>Empreededorismo</Title>
      </View>

      <View style={{display:"flex", alignItems:"center", marginLeft: 5, marginRight: 10,}}>
        <Image style={styles.imagemCurso} source={require("../../../assets/mktdigital.png")} />
        <Title style={{fontSize:14, fontWeight:"900"}}>Marketing</Title>
      </View>

      <View style={{display:"flex", alignItems:"center", marginLeft: 5, marginRight: 10,}}>
        <Image style={styles.imagemCurso} source={require("../../../assets/consultoria.png")} />
        <Title style={{fontSize:14, fontWeight:"900"}}>Administração</Title>
      </View>    
      
    </View>  

    
    <View style={{display:"flex", flexDirection:"row", justifyContent:"space-around" }}>
      
      <View style={styles.atividades}>
        <Text style={styles.textoAtividades}>Pontos</Text>
        <Text>50</Text>
      </View>
      <View style={styles.atividades}>
        <Text style={styles.textoAtividades}>Atividades</Text>
        <Text>1/3</Text>
      </View>
      <View style={styles.atividades}>
        <Text style={styles.textoAtividades}>Anúncios</Text>
        <Text> 0 </Text>
      </View>
      

    </View>  

     <View style={{display:"flex", flexDirection:"row", justifyContent:"space-around" }}>
        
        <TouchableOpacity style={styles.btn} onPress={loja}>
          <Text style={styles.texto}>Criar Loja</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={servicos}>
          <Text style={styles.texto}>Criar Serviço</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={servico}>
          <Text style={styles.texto}>Serviços</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={home}>
          <Text style={styles.texto}>Sair</Text>
        </TouchableOpacity>      
        
      </View>
        

      </ScrollView>
    );
  }
  
  export default Hub;