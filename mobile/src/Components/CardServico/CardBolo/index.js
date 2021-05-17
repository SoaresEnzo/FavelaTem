import * as React from 'react';
import {Image, View, Text} from "react-native";
import { Avatar, Button, Card, Title, Paragraph, } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="cake"/>

const CardServico = () => (
  <Card  style={{backgroundColor:"#fff",}}>
    <Card.Title  title="Sublime Quitutes" subtitle="Amor em forma de confeitos" left={LeftContent} />
    <Text style={{color:"#fff"}}>Sublime Quitutes</Text>
    <Card.Content>
      <Title>Serviço</Title>
      <Paragraph>Bolos, Doces e Salgados.</Paragraph>
    </Card.Content>
    <View style={{display:"flex", alignItems:"center", borderRadius:10, }}>
        <Image source={require("../../../../assets/sublimebolo.jpeg")} style={{width:350, height:250,}} />
    </View>    
    
  </Card>
);
export default CardServico;