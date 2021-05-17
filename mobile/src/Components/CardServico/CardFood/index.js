import * as React from 'react';
import {Image, View, Text} from "react-native";
import { Avatar, Button, Card, Title, Paragraph, } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="food"/>

const CardFood = () => (
  <Card  style={{backgroundColor:"#fff",}}>
    <Card.Title  title="Mari Food" subtitle="Comidas saudável" left={LeftContent} />
    
    <Card.Content>
      <Title>Serviço</Title>
      <Paragraph>Lanches Naturais, Marmitas Fit</Paragraph>
    </Card.Content>
    <View style={{display:"flex", alignItems:"center", borderRadius:10, }}>
        <Image source={require("../../../../assets/marmitasfit.jpg")} style={{width:350, height:250,}} />
    </View>    
    
  </Card>
);
export default CardFood;