import React, { useState } from 'react';
import { StatusBar, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import ApiRequest from '../services/Api';

const convertTimeToTimestamp = (time) => {
  return new Date(time).getTime() /1000;
}

const calculateWhenPostedWasCreated = (time) => {
  const createdTime = convertTimeToTimestamp(time);
  const now = new Date().getTime() /1000;

  const hoursSubtract = Math.floor((now - createdTime) / 3600);

  if(hoursSubtract < 24) {
    return hoursSubtract.toString() + " horas atrás";
  }else {
    const daysSubtract = Math.floor(hoursSubtract / 24);
    return daysSubtract.toString() + " dias atrás";
  }
}

const Home = () => {
  const theme = useSelector((state) => state.themeReducer.theme);
  const [posts, setPosts] = useState(undefined);
  const [selectedPost, setSelectedPosts] = useState(undefined);

  if(posts === undefined) {
    ApiRequest.mainPage(setPosts);
  }

  return (
  <ThemeProvider theme={theme}>
    <StatusBar barStyle={theme.STATUS_BAR_STYLE} />
    <Container>
      <ItemContainer>
        <FlatList  
          contentContainerStyle={{
            paddingBottom: "32%",
          }} 
          data={posts}
          renderItem={({item}) =>

            <Item style={(item === posts[0] ? {} :{borderTopWidth: 1})}>
              <TitleContainer onPress={() =>{
                ApiRequest.posts({
                username: item.username,
                slug: item.slug
              }, setSelectedPosts);
              }}>
                <Title>{(item.title).toString()}</Title>
              </TitleContainer>
              <DataContainer>
                <Text>{(item.tabcoins)+ " tabcoins"}</Text>
                <Separator>·</Separator>
                <Text>{(item.children_deep_count) + " comentários"}</Text>
                <Separator>·</Separator>
                <Text>{(item.username)}</Text>
                <Separator>·</Separator>
                <Text>{calculateWhenPostedWasCreated(item.created_at).toString()}</Text>
              </DataContainer>
            </Item>
          }>
        </FlatList>
      </ItemContainer>
    </Container>
  </ThemeProvider>
  );
};


const Container = styled.SafeAreaView`  
  background-color: ${props => props.theme.mainBackgroundColor};
  flex: 1;
`;

const ItemContainer = styled.View`
  width: 100%;
`;

const Item = styled.View`  
  display: flex;
  width: 100%;
  flex-direction: column;
  border-color:  ${props => props.theme.transparentBar};
  padding-horizontal: 5%;
`;

const TitleContainer = styled.TouchableOpacity`  
  display: flex;
  flex-direction: row;
  margin-top: ${10};

`;
const DataContainer = styled.View`  
  display: flex;
  flex-direction: row;
  margin-top: ${5};
  margin-bottom: ${10};
  flex-wrap: wrap;
`;
const Title = styled.Text`
  color: ${props => props.theme.mainTextColor};
  font-weight: bold;
  font-size:  ${18};
`;
const Text = styled.Text`
color: ${props => props.theme.mainTextColor};
text-align: center;
font-size:   ${14};
margin-horizontal: ${1};
`;
const Separator = styled.Text`
color: ${props => props.theme.mainTextColor};
text-align: center;
font-size:   ${14};
margin-horizontal: ${3};
`;

export default Home;