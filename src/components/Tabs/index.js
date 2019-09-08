import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Container, TabsContainer, TabsItem, TabsText } from "./styles";

export default function Tabs({ translateY }) {
  return (
    <Container style={{
      transform: [{
        translateY: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [0, 30],
          extrapolate: 'clamp',
        }),
      }],
      opacity: translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [1, 0.3],
        extrapolate: 'clamp',
      }),
    }}
    >
      <TabsContainer>
        <TabsItem>
          <Icon name="person-add" size={24} color="#fff" />
          <TabsText>Indecar amigos</TabsText>
        </TabsItem>
        <TabsItem>
          <Icon name="attach-money" size={24} color="#fff" />
          <TabsText>Cobrar</TabsText>
        </TabsItem>
        <TabsItem>
          <Icon name="arrow-downward" size={24} color="#fff" />
          <TabsText>Depositar</TabsText>
        </TabsItem>
        <TabsItem>
          <Icon name="arrow-upward" size={24} color="#fff" />
          <TabsText>Transferir</TabsText>
        </TabsItem>
        <TabsItem>
          <Icon name="payment" size={24} color="#fff" />
          <TabsText>Pagar</TabsText>
        </TabsItem>
      </TabsContainer>
    </Container>
  );
}
