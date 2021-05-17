import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import styles from "./styles";

function Home({ navigation }) {
  function home() {
    navigation.navigate("Home");
  }
  function servico() {
    navigation.navigate("Servico");
  }
  function login() {
    navigation.navigate("Login");
  }
  function cursos() {
    navigation.navigate("Cadastro");
  }
  function cadastrar() {
    navigation.navigate("FormularioCadastro");
  }
  function contatos() {
    navigation.navigate("FormularioContatos");
  }

  return (
    <ScrollView style={styles.caixa}>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 10,
          marginLeft: 10,
        }}
        onPress={home}
      >
        <Image source={require("../../../assets/logofavelatem.png")} />
      </TouchableOpacity>

      <View style={styles.abertura}>
        {/* <Text style={styles.titulo}>FAVELA TEM</Text> */}
        <Text style={styles.label}>
          A Plataforma de publicidade de serviços dos moradores de Paraisópolis
        </Text>
      </View>

      <View style={styles.inputs}>
        <TextInput placeholder="O que você procura?" style={styles.input} />
        <TouchableOpacity style={styles.btn1} onPress={servico}>
          <Text style={styles.texto}> Buscar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container_normal}>
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={require("../../../assets/mocaboloroxo.jpg")}
          />
          <Text style={styles.label2}>
            64 Clientes compartilharam suas experiências
          </Text>
          <Text style={styles.label2}>42 profissionais registrados</Text>
          <Text style={styles.label2}> Dezenas de possibilidades</Text>
        </View>
      </View>

      <View style={styles.container_normal}>
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={require("../../../assets/costura.jpg")}
          />
          <Text style={styles.label2}>+ Negócios</Text>
          <Text style={styles.label2}>
            Traga seu anúncio para cá e comece a conquistar clientes também pela
            internet
          </Text>
        </View>
      </View>

      <View style={styles.container_row}>
        <View style={styles.container}>
          <Text style={styles.label2}>
            Ao fazer o cadastro você passará por uma trilha de aprendizado que
            te ensinará a fazer o melhor anúncio do universo!
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ margin: 10 }}>
              <Image
                style={styles.imgcurso}
                source={require("../../../assets/empreendedorismo2.png")}
              />
            </View>

            <View style={{ margin: 10 }}>
              <Image
                style={styles.imgcurso}
                source={require("../../../assets/financas.png")}
              />
            </View>

            <View style={{ margin: 10 }}>
              <Image
                style={styles.imgcurso}
                source={require("../../../assets/mktdigital.png")}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.container_normal}>
        <View style={styles.container}>
          <Text style={styles.label3}>Tudo isso, totalmente Gratuito!!!</Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity style={styles.btn} onPress={cadastrar}>
            <Text style={styles.texto}>Cadastro</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={login}>
            <Text style={styles.texto}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={contatos}>
            <Text style={styles.texto}>Contato</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container_normal}>
        <View style={styles.container}>
          <Text
            style={{
              marginBottom: "auto",
              textAlign: "center",
              fontSize: 14,
              color: "white",
            }}
          >
            © Squad 04 SP 2 -Recode Pro 2020 - 2021
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;
