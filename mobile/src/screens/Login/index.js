import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, Alert, Platform, Image} from 'react-native';

import Fundo from '../../../assets/paraisopolisfoto.png';

import styles from './styles';

const apiUsuario = {
    id: 1,
    email: "rafael@favelatem.com",
    senha: "123456"
}

function Login({navigation}) {

    function autenticacao() {
        // fetch("")
        if (apiUsuario.email === usuario && apiUsuario.senha === senha) {
            navigation.navigate("Hub");
        }else {
            Alert.alert("Usuario inválido", "É necessário informar um usuário válido.")
        }
     
    }
    function home() {
        navigation.navigate("Home");
      }

    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");

    return (
        <View style={styles.caixa}>

            

        <ImageBackground source={Fundo} style={styles.fundo}   >

            <TouchableOpacity style={{display:"flex", flexDirection:"row"}} onPress={home}>
                    <Image style={styles.imagemLogo}
                    source={require("../../../assets/logofavelatem.png")} />                   
            </TouchableOpacity>


            
                <View>
                    <Text style={styles.titulo}>Login</Text>
                </View>

                <View style={styles.inputs}>

                    <TextInput 
                        placeholder="Digite o email..." 
                        style={styles.input}
                        value={usuario}
                        onChangeText={(text) => setUsuario(text)}
                    />

                    <TextInput 
                        placeholder="Digite o senha..." 
                        style={styles.input} 
                        secureTextEntry={true}
                        value={senha}
                        onChangeText={(text) => setSenha(text)}
                    />

                    <TouchableOpacity style={styles.btn} onPress={autenticacao}>
                        <Text style={styles.texto}>Entrar</Text>
                    </TouchableOpacity>

                </View>

                                 
                
            
                
        </ImageBackground>

            

        </View>
    )
}


export default Login;