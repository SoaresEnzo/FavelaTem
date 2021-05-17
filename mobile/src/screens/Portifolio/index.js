
import React from 'react';
import {
    View, Text, Image, TouchableOpacity,
    ScrollView, TextInput
} from 'react-native';
import { Card, Title } from "react-native-paper";

import styles from "./styles";

function Portifolio({ navigation }) {
    function home() {
        navigation.navigate("Home");
    }
    function servico() {
        navigation.navigate("Servico");
    }
    return (
        <ScrollView style={styles.caixa}>

        <TouchableOpacity style={{display:"flex", flexDirection:"row"}} onPress={home}>
         <Image
          style={{marginTop: 40,
            padding: 10,
            borderRadius: 6,
            marginTop: 20,
            marginLeft: 20,}}
          source={require("../../../assets/logofavelatem.png")} />       
        </TouchableOpacity> 

            <View style={styles.abertura}>
                <Text style={styles.titulo}> PORTIFÓLIO</Text>
            </View>

            <View style={{ display: "flex", alignItems: "center", marginLeft: 15, marginRight: 15, }}>
                <Image
                    style={styles.portifolioImg}
                    source={require("../../../assets/sublimelogo.jpeg")}
                />
            </View>
          
           <View>
            <Card style={styles.container_normal}>
                <Card.Content style={styles.container0} >
                    <Title style={styles.tituloCard1}>SUBLIME QUITUTES</Title>
                </Card.Content>
                <Text style={styles.textoCard55}>
                    Confeitaria Artesanal
        </Text>
        <Text style={styles.textoCard}>
                    Cozinhar é uma forma de amar os outros. 
        </Text>
      
            </Card>
            </View>

   
            <Card style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor:"#fff"}}>
                <View style={{
                    display: "flex", flexDirection: "row", justifyContent: "space-between",
                }}
                >
                    <Card style={styles.container_row}>

                        <Card.Content style={styles.container}>
                            <Title style={styles.tituloCard}>ENDEREÇO</Title>
                        </Card.Content>
                        <Text style={styles.textoCard}>
                            Beco Julia 45C
        </Text>
                        <Text style={styles.textoCard}>
                            Paraisópolis SP
        </Text>
                    </Card>


                    <Card style={styles.container_row}>
                        <Card.Content style={styles.container}>
                            <Title style={styles.tituloCard}>CONTATO</Title>
                        </Card.Content>
                        <Text style={styles.textoCard}>
                            (11) 98271-4925
        </Text>
                        <Text style={styles.textoCard}>
                            sublimes@mail.com
        </Text>
                    </Card>
                </View>
            </Card>

            <View style={{ display: "flex", alignItems: "center", marginLeft: 15, marginRight: 15, }}>
                <Image
                    style={styles.portifolioImg2}
                    source={require("../../../assets/sublimebolo.jpeg")}
                />
            </View>
            <View style={{backgroundColor: "#e6aa65", marginTop:10, padding: 10}}>

                <Text style={styles.labels}>Deixe seu Comentário</Text>
                <TextInput
                    style={styles.textArea}
                    numberOfLines={20}
                    multiline={true}
                />
              
            </View>
            <TouchableOpacity style={styles.btn1} onPress={home}>
                    <Text style={styles.texto}> Enviar</Text>
                </TouchableOpacity>

            <Text style={styles.labelComentarios}>Comentários Recebidos:</Text>
            <Card style={styles.card}>
                <Card.Content >
                    <Title style={styles.tituloCard3}>Ótimo atendimento, entrega no prazo, sabor delicioso. Tudo impecável!</Title>
                </Card.Content>
                <Text style={styles.textoCard3}>
                Sueli Gomes - 19/02/21
        </Text>
            </Card>

            <Card style={styles.card}>
                <Card.Content >
                    <Title style={styles.tituloCard3}> Recomendo o bolo floresta negra, estava delicioso!</Title>
                </Card.Content>
                <Text style={styles.textoCard3}>
                Joana Prado - 15/01/21
        </Text>
            </Card>
            

        <View style={{display:"flex", flexDirection: "row", justifyContent:"space-around"}}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.btn} onPress={home}>
                    <Text style={styles.texto}>Home</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                <TouchableOpacity style={styles.btn} onPress={servico}>
                    <Text style={styles.texto}>Serviços</Text>
                </TouchableOpacity>
            </View>
        </View> 
            


            <View>
                <Text
                    style={{
                        marginBottom: "auto",
                        textAlign: "center",
                        fontSize: 14,
                        color: "white",
                    }}>
                    © Squad 04 SP 2 -Recode Pro 2020 - 2021
          </Text>
         </View>
        </ScrollView>
    );
}

export default Portifolio;