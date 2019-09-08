import React from "react";

import QRCode from "react-native-qrcode";

import Icon from "react-native-vector-icons/MaterialIcons";

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText
} from "./styles";

export default function Menu({ translateY }) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1]
        })
      }}
    >
      <Code>
        <QRCode
          value="https://nubank.com.br"
          size={80}
          fgColor="#fff"
          bgColor="#8A05BE"
        />
      </Code>
      {/* <One style={{
       color: #fff; }}>
        Banco 260 - Nu Pagamentos S.A.
      </One> */}
      {/* <Two style={{}}>Agência 0001</Two>
      <Three style={{}}>Conta 110887-4</Three> */}
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#fff" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#fff" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#fff" />
          <NavText>Configurar NuConta</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#fff" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
