import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StatusBar, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import ApiRequest from '../services/Api';

const Profile = () => {
  const {t, i18n} = useTranslation();
  const theme = useSelector((state) => state.themeReducer.theme);
  const [passwordVerifier, setPasswordVerifier] = useState('');
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [response, setResponse] = useState({});

  const oldState = userData;


  return (
  <ThemeProvider theme={theme}>
    <StatusBar barStyle={theme.STATUS_BAR_STYLE} />
    <Container>
      <TextInput
        onSubmitEditing={Keyboard.dismiss}
        returnKeyType="next"
        blurOnSubmit={false}
          placeholder={t("Nome")}
        onChangeText={(name) => {
          setUserData({name, username: oldState.username, email: oldState.email, password: oldState.password});
          console.log(userData);
        }} 
        placeholderTextColor={theme.mainTextColor}
        value={userData.name}
      />
      <TextInput
        onSubmitEditing={Keyboard.dismiss}
        returnKeyType="next"
        blurOnSubmit={false}
          placeholder={t("Username")}
          onChangeText={(username) => {
            setUserData({username, name: oldState.name, email: oldState.email, password: oldState.password});
            console.log(userData);
          }} 
        placeholderTextColor={theme.mainTextColor}
        value={userData.username}
      />
      <TextInput
        onSubmitEditing={Keyboard.dismiss}
        returnKeyType="next"
        blurOnSubmit={false}
          placeholder={t("Email")}
        onChangeText={(email) => {
          setUserData({email, name: oldState.name, username: oldState.username, password: oldState.password});
            console.log(userData);
        }} 
        placeholderTextColor={theme.mainTextColor}
        value={userData.email}
      />
      <TextInput
        onSubmitEditing={Keyboard.dismiss}
        returnKeyType="next"
        blurOnSubmit={false}
          placeholder={t("Senha")}
        onChangeText={(password) => {
          setUserData({password, name: oldState.name, username: oldState.username, email: oldState.email});
          console.log(userData);

        }} 
        placeholderTextColor={theme.mainTextColor}
        secureTextEntry={true}
        value={userData.password}
      />
      <TextInput
        onSubmitEditing={Keyboard.dismiss}
        returnKeyType="done"
        blurOnSubmit={false}
          placeholder={t("Repetir Senha")}
        onChangeText={( name) => {
          setPasswordVerifier(name);
        }} 
        placeholderTextColor={theme.mainTextColor}
        secureTextEntry={true}
        value={passwordVerifier}
      />   
      <Button onPress={() =>{if(passwordVerifier == userData.password){
        Keyboard.dismiss();
        ApiRequest.signup(userData, setResponse)
        console.log(response)
      }}}>
        <Text>
            Enviar
        </Text>
      </Button>
    </Container>
  </ThemeProvider>
  );
};


const Container = styled.View`  
  background-color: ${props => props.theme.mainBackgroundColor};
  flex: 1;
  justify-content: center;
`;

const Text = styled.Text`
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  font-size:  30;
`;
const Button = styled.TouchableOpacity`
  margin: 5px;
  border-radius: 4px;
  padding-vertical: 10px;
  padding-horizontal: 35px;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.confirmBackgroundColor};
  border-radius: 22px;
`;
const TextInput = styled.TextInput`
  font-size: 20px;
  color: ${props => props.theme.mainTextColor};
  padding: 10px;
  border-color: ${props => props.theme.transparentBar};
  border-style: solid;
  border-width: 2px;
  border-radius: 21px;
  margin-bottom: 5%;
  margin-horizontal: 5%;
`;

export default Profile;