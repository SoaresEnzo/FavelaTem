import * as React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Button, Menu, Divider, Provider, Avatar } from 'react-native-paper';
import { FontAwesome } from "@expo/vector-icons";


function BtnMenu({ navigation }) {

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

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);


  return (
    <Provider>
      <View
        style={{
          paddingTop: 10,
          flexDirection: 'row',
          justifyContent:"center",
          marginLeft:10,
          width:52,
          backgroundColor:"red"       
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<FontAwesome.Button onPress={openMenu} name="bars"></FontAwesome.Button>}>
         
          <Menu.Item onPress={(navigation) => {home()}} title="Home" />
          <Menu.Item onPress={(navigation) => {login()}} title="Login" />
          <Menu.Item onPress={(navigation) => {servico()}} title="Serviços" />
          <Menu.Item onPress={(navigation) => {hub()}} title="Hub" />
         
        </Menu>
      </View>
    </Provider>
  );
};

export default BtnMenu;