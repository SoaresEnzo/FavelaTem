import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  
} from "react-native";

import { Picker } from "@react-native-picker/picker";

import Fundo from "../../../assets/paraisopolisfoto.png";

import styles from "./stylesServ";

function Servicos ({ navigation }) {
  function servicos() {
    navigation.navigate("Hub");
  }
  function home() {
    navigation.navigate("Home");
  }

  return (
    <ScrollView style={styles.caixa}>
      <ImageBackground source={Fundo} style={styles.fundo}>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 20,
            marginLeft: 20,
          }}
          onPress={home}
        >
          <Image
            style={styles.imagem}
            source={require("../../../assets/logofavelatem.png")}
          />
        </TouchableOpacity>

        <Text style={styles.titulo}>Dados do serviço:</Text>

        <View style={styles.container0}>
          <View></View>
          <Text style={styles.labelcadastro}>Nome do Serviço:</Text>
          <TextInput
            placeholder="Digite seu nome "
            style={styles.inputcadastro}
          />


          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              padding: 0,
              marginTop: 0,
            }}
          >
            <View>
              <Text style={styles.labelcadastro}>Categoria:</Text>
              <Picker
                itemStyle={{
                  marginLeft: 10,
                  height: 50,
                  width: 115,
                }}
              >
                <Picker.Item label="Arte, Papelaria e Armarinho" />
                <Picker.Item label="Assistência Técnica" />
                <Picker.Item label="Serviços Gerais" />
                <Picker.Item label="Alimentação" />
                <Picker.Item label="Moda" />
                <Picker.Item label="Saúde e Bem-estar" />
                <Picker.Item label="Outros" />
                
              </Picker>
            </View>
            <View>
              <Text style={styles.labelcadastro}>Subcategoria:</Text>
              <Picker
                itemStyle={{
                  marginLeft: 8,
                  height: 50,
                  width: 100,
                }}
              >
                <Picker.Item label="Artesanato" />
                <Picker.Item label="Fotografia" />
                <Picker.Item label="Música" />
                <Picker.Item label="Eletrodomésticos" />
                <Picker.Item label="Eletrônicos" />
                <Picker.Item label="Informática" />
                <Picker.Item label="Barbeiro" />
                <Picker.Item label="Cabeleireira" />
                <Picker.Item label="Depilação" />
                <Picker.Item label="Limpeza de pele" />
                <Picker.Item label="Maquiagem" />
                <Picker.Item label="Manicure" />
                <Picker.Item label="Pedicure" />
                <Picker.Item label="Sobrancelha" />
                <Picker.Item label="Tranças" />
                <Picker.Item label="Consultoria" />
                <Picker.Item label="Reformas e Reparos" />
                <Picker.Item label="Serviços Automotivos" />
                <Picker.Item label="Serviços de Limpeza" />
                <Picker.Item label="Entrega/Carreto" />
                <Picker.Item label="Cuidador" />
                <Picker.Item label="Doces" />
                <Picker.Item label="Salgados" />
                <Picker.Item label="Refeições" />
                <Picker.Item label="Corte e Costura" />


              </Picker>
            </View>

          </View>
          <Text style={styles.labelcadastro}>Descreva o seu serviço aqui:</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Insira aqui sua descrição..."
            numberOfLines={20}
            multiline={true}
          />

          <View>
          <Text style={styles.labelcadastro}>Atendimento:</Text>
          <Picker
                itemStyle={{
                  marginLeft: 8,
                  height: 50,
                  width: 115,
                }}
              >
                <Picker.Item label="Domicílio" />
                <Picker.Item label="No Local" />
                <Picker.Item label="Ambos" />
                <Picker.Item label="Selecione" />
               
              </Picker>
          </View>

          <View>
          <Text style={styles.labelcadastro}>Pagamento:</Text>
          <Picker
                itemStyle={{
                  marginLeft: 10,
                  height: 50,
                  width: 115,
                }}
              >
                <Picker.Item label="Dinheiro" />
                <Picker.Item label="Cartão" />
                <Picker.Item label="Ambos" />
                <Picker.Item label="Selecione" />

                
              </Picker>
          </View>
          <View>
          <Text style={styles.labelcadastro}>Horário de Atendimento:</Text>
                </View>
                <View>
          <Text style={styles.labelcadastro}>Das:</Text>
          <TextInput
            placeholder=""
            style={styles.inputcadastro2}
          />
           <Text style={styles.labelcadastro}>Até:</Text>
          <TextInput
            placeholder=""
            style={styles.inputcadastro2}
          />
          </View>

          <TouchableOpacity style={styles.btnX} onPress={servicos}>
            <Text style={styles.textobotao}>Cadastrar Serviço</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text
            style={{
              marginBottom: "auto",
              marginTop: 60,
              textAlign: "center",
              fontSize: 14,
              color: "white",
            }}
          >
            © Squad 04 SP 2 -Recode Pro 2020 - 2021
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

export default Servicos;