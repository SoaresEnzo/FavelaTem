import * as React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';


function MenuUsuario({ navigation }) {

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
          justifyContent: 'center',        
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu} >Menu</Button>}>
        {/* <Image source={require('../../../assets/pedreiro.jpg')} /> */}
          <Menu.Item onPress={(navigation) => {home}} title="Home" />
          <Menu.Item onPress={(navigation) => {login}} title="Login" />
          <Menu.Item onPress={(navigation) => {servico}} title="Serviços" />
          <Menu.Item onPress={() => {}} title="Quem Somos" />
        </Menu>
      </View>
    </Provider>
  );
};

export default MenuUsuario;