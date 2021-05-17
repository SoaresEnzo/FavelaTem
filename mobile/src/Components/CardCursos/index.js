import * as React from 'react';
import {Image, View} from "react-native";
import { Avatar, Button, Card, Title, Paragraph, } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="video"/>

const CardCurso = () => (
  <Card  style={{backgroundColor:"#fff",}}>
    <Card.Title title="Quem somos" subtitle="Nosso objetivo" left={LeftContent} />
    <Card.Content>
      <Title>Video</Title>
      <Paragraph>Video orientação</Paragraph>
    </Card.Content>
    <View style={{display:"flex", alignItems:"center"}}>
        <Image source={require("../../../assets/pitch.jpeg")} style={{width:350, height:250,}} />
    </View>    
    
  </Card>
);

export default CardCurso;