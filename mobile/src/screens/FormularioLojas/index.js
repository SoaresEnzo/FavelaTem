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

import styles from "./styles";

function Lojas({ navigation }) {
  function hub() {
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

        <Text style={styles.titulo}>Cadastre-se para divulgar seu serviço</Text>

        <View style={styles.container0}>
          <View></View>
          <Text style={styles.labelcadastro}>Seu nome ou nome fantasia:</Text>
          <TextInput
            placeholder="Digite seu nome "
            style={styles.inputcadastro}
          />

          <Text style={styles.labelcadastro}>Endereço:</Text>
          <TextInput
            placeholder="Digite seu endereço"
            style={styles.inputcadastro}
          />

          <Text style={styles.labelcadastro}>Número:</Text>
          <TextInput
            placeholder="Digite seu número"
            style={styles.inputcadastro}
          />

          <Text style={styles.labelcadastro}>Cep:</Text>
          <TextInput
            placeholder="Digite seu cep"
            style={styles.inputcadastro}
          />

          <Text style={styles.labelcadastro}>Telefone:</Text>
          <TextInput
            placeholder="Digite seu telefone"
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
              <Text style={styles.labelcadastro}>Bairro:</Text>
              <Picker
                itemStyle={{
                  marginLeft: 10,
                  height: 50,
                  width: 115,
                }}
              >
                <Picker.Item label="Paraisópolis" />
              </Picker>
            </View>
            <View>
              <Text style={styles.labelcadastro}>Cidade:</Text>
              <Picker
                itemStyle={{
                  marginLeft: 8,
                  height: 50,
                  width: 100,
                }}
              >
                <Picker.Item label="São Paulo" />
              </Picker>
            </View>

            <View>
              <Text style={styles.labelcadastro}>Estado:</Text>
              <Picker
                itemStyle={{
                  marginLeft: -17,
                  height: 50,
                  width: 120,
                }}
              >
                <Picker.Item label="SP" />
              </Picker>
            </View>
          </View>
          <Text style={styles.labelcadastro}>Descreva seu trabalho:</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Insira aqui sua descrição..."
            numberOfLines={20}
            multiline={true}
          />

          <TouchableOpacity style={styles.btnX} onPress={hub}>
            <Text style={styles.textobotao}>Cadastrar</Text>
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

export default Lojas;
