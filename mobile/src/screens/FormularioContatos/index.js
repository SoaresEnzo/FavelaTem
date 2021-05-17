import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, Image} from 'react-native';
import Fundo from '../../../assets/paraisopolisfoto.png';

import styles from './styles';



function Contatos({navigation}) {

    function home() {   
        navigation.navigate("Home");    
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

        
        <Text style={styles.label}>
         Alguma dúvida, comentário ou sugestão?
        </Text>
        <Text style={styles.label2}>
        Conte para gente!
        </Text>
     

                <View style={styles.container0}>
            
                <Text style={styles.labelcadastro}>Nome:</Text>
                        <TextInput
                    placeholder="Digite seu nome"
                    style={styles.inputcadastro}
                    />
            
                <Text style={styles.labelcadastro}>Email:</Text>
                    <TextInput 
                        placeholder="Digite seu email" 
                        style={styles.inputcadastro}
                        
                    />


                    <Text style={styles.labelcadastro}>Deixe sua mensagem:</Text>
                    <TextInput
                        style={styles.textArea}
                        placeholder="Mensagem..." 
                        numberOfLines={20}  
                        multiline={true}
                    />


                    <TouchableOpacity style={styles.btnX} onPress={home}>
                        <Text style={styles.textobotao}>Enviar</Text>
                    </TouchableOpacity>

                </View>
        
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


export default Contatos;
