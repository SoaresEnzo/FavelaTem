import * as React from 'react';
import {Image, View, Text} from "react-native";
import { Avatar, Button, Card, Title, Paragraph, } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="camera"/>

const CardFotografia = () => (
  <Card  style={{backgroundColor:"#fff",}}>
    <Card.Title  title="Carol Pictures" subtitle="Artes graficas" left={LeftContent} />
    
    <Card.Content>
      <Title>Serviço</Title>
      <Paragraph>Books, Eventos, serviços gráficos</Paragraph>
    </Card.Content>
    <View style={{display:"flex", alignItems:"center", borderRadius:10, }}>
        <Image source={require("../../../../assets/fotografia.jpg")} style={{width:350, height:250,}} />
    </View>    
    
  </Card>
);
export default CardFotografia;