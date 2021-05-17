import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, Image} from 'react-native';
import Fundo from '../../../assets/paraisopolisfoto.png';

import styles from './styles';



function Cadastro({navigation}) {

    function login() {   
        navigation.navigate("Login");    
    }
    function home() {   
        navigation.navigate("Home");    
    }

    
    return (
        <View style={styles.caixa}>
            <ImageBackground source={Fundo} style={styles.fundo}>

            <TouchableOpacity style={{display:"flex", flexDirection:"row", marginTop:20, marginLeft:20}} onPress={home}>
                <Image style={styles.imagem}
                    source={require("../../../assets/logofavelatem.png")} />
                </TouchableOpacity>

                <View>
                    <Text style={styles.titulo}>CADASTRO</Text>
                </View>

                <View style={styles.container0}>
            
                <Text style={styles.labelcadastro}>Nome:</Text>
                        <TextInput
                    placeholder="Digite seu nome"
                    style={styles.inputcadastro}
                    />

                <Text style={styles.labelcadastro}>Sobrenome:</Text>
                    <TextInput
                    placeholder="Digite seu sobrenome"
                    style={styles.inputcadastro}
                    />
            
                <Text style={styles.labelcadastro}>Email:</Text>
                    <TextInput 
                        placeholder="Digite seu email" 
                        style={styles.inputcadastro}
                        
                    />

              <Text style={styles.labelcadastro}>Senha:</Text>
                    <TextInput 
                        placeholder="Digite sua senha" 
                        style={styles.inputcadastro} 
                        secureTextEntry={true}
                        
                    />

                 <Text style={styles.labelcadastro}>Confirme sua senha:</Text>
                    <TextInput 
                        placeholder="Confirme sua senha" 
                        style={styles.inputcadastro} 
                        secureTextEntry={true}
                        
                    />

                    <TouchableOpacity style={styles.btnX} onPress={login}>
                        <Text style={styles.textobotao}>Cadastrar</Text>
                    </TouchableOpacity>

                </View>
                 {/* </Card> */}
                 <View>
                <Text
                    style={{
                        marginBottom: "auto",
                        marginTop: 80,
                        textAlign: "center",
                        fontSize: 14,
                        color: "white",
                    }}>
                    © Squad 04 SP 2 -Recode Pro 2020 - 2021
          </Text>
         </View>
            </ImageBackground>

        </View>
        
    )
}


export default Cadastro;
