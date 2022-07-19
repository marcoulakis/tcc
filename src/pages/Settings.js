import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StatusBar, Switch, Button } from 'react-native';
import { switchTheme } from '../redux/themesActions';
import { lightTheme, darkTheme } from '../components/theme';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(undefined);
  const [langList, setLangList] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    if(isEnabled !== undefined) {
      if(theme.mode === 'light') {
        dispatch(switchTheme(darkTheme));
      } else if(theme.mode === 'dark') {
        dispatch(switchTheme(lightTheme));
      } else {
      }
    }
  }, [isEnabled]);

  const {t, i18n} = useTranslation();
  const theme = useSelector((state) => state.themeReducer.theme);
  const dispatch = useDispatch();
  

  return (
  <ThemeProvider theme={theme}>
    <StatusBar barStyle={theme.STATUS_BAR_STYLE} />
    <Background>
        <Container>
          {      langList &&  
            <PopupContainer>
              <LanguageContainer >
                <PopupText onPress={()=>{setLangList(false)}}>English</PopupText>
              </LanguageContainer>
              <LanguageContainer>
                <PopupText onPress={()=>{setLangList(false)}}>Português</PopupText>
              </LanguageContainer>
            </PopupContainer>
          }
          <Item>
            <Title>{t("translation.settings.themeSwitcher.title")}</Title>
            <SwitchContainer>
              <Text>{t("translation.settings.themeSwitcher." +theme.mode)}</Text>
              <Switch onValueChange={toggleSwitch} value={isEnabled}/>
            </SwitchContainer>
          </Item>
          <Item>
            <Title>{t("translation.settings.languageSwitcher.title")}</Title>
            <Button onPress={()=>{setLangList(true)}} title={t("translation.settings.languageSwitcher.chosenLanguage")} />
          </Item>
        </Container>
    </Background>
  </ThemeProvider>
  );
};


const Container = styled.View`  
  flex: 1;
  margin-horizontal: 20px;
  flex-direction: column;
`;
const Background = styled.View`  
  background-color: ${props => props.theme.mainBackgroundColor};
  flex: 1;
`;
const SwitchContainer = styled.View`  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
 
const PopupContainer = styled.View`
  position: absolute;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  top: 40px;
  width: 100%;
  background-color:  ${props => props.theme.popupBackgroundColor};
  height: 30%;
  padding: 4%;
  border-radius: 30;
  z-index: 10;
`;
const Item = styled.View`  
  display: flex;
  width: 100%;
  height: 12%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border-color:  ${props => props.theme.transparentBar};
  border-bottom-width: 1px;
`;
const LanguageContainer = styled.TouchableOpacity`  
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color:  ${props => props.theme.mainBackgroundColor};
  padding: 10px;
`;
const Title = styled.Text`
  color: ${props => props.theme.mainTextColor};
  font-weight: bold;
  text-align: center;
  font-size:  ${30};
`;
const Text = styled.Text`
color: ${props => props.theme.mainTextColor};
text-align: center;
font-size:   ${18};
margin-horizontal: ${10};
`;
const PopupText = styled.Text`
color: ${props => props.theme.mainTextColor};
font-weight: bold;
text-align: center;
font-size:   ${18};
margin-horizontal: ${10};
`;

export default Settings;