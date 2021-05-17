import * as React from 'react';
import {Image, View, Text} from "react-native";
import { Avatar, Button, Card, Title, Paragraph, } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="chip"/>

const CardInfo = () => (
  <Card  style={{backgroundColor:"#fff",}}>
    <Card.Title  title="EnzoTec" subtitle="" left={LeftContent} />
    
    <Card.Content>
      <Title>Serviço</Title>
      <Paragraph>Sites, APPs, Manutenção de computadores e muito mais.</Paragraph>
    </Card.Content>
    <View style={{display:"flex", alignItems:"center", borderRadius:10, }}>
        <Image source={require("../../../../assets/enzotec.jpg")} style={{width:350, height:250,}} />
    </View>    
    
  </Card>
);
export default CardInfo;