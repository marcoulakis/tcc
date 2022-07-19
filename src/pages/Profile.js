import React from 'react';
import { useTranslation } from 'react-i18next';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

const Profile = () => {
  const {t, i18n} = useTranslation();
  const theme = useSelector((state) => state.themeReducer.theme);

  return (
  <ThemeProvider theme={theme}>
    <StatusBar barStyle={theme.STATUS_BAR_STYLE} />
    <Container>
      <Text>{t("translation.profile")}</Text>
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
  color: ${props => props.theme.mainTextColor};
  font-weight: bold;
  text-align: center;
  font-size:  70;
`;

export default Profile;