import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import ApiRequest from '../services/Api';

import { MarkdownView } from 'react-native-markdown-view';

import RenderHtml from 'react-native-render-html';

import Markdown from 'react-native-markdown-package';

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

const Post = (props) => {
  const theme = useSelector((state) => state.themeReducer.theme);
  const [selectedPost, setSelectedPosts] = useState(undefined);
  const params = props.route.params; 

  if(selectedPost === undefined) {
    ApiRequest.posts({
        username: params.username,
        slug: params.slug
      }, setSelectedPosts);
  }

// ApiRequest.posts({
//     username: item.username,
//     slug: item.slug
//   }, setSelectedPosts);

    console.log(props)
  return (
  <ThemeProvider theme={theme}>
    <StatusBar barStyle={theme.STATUS_BAR_STYLE} />
    <Container>
      <ItemContainer>
        <Title>
            {params.username}
        </Title>
        <Title>
            {params.slug}
        </Title>
        {
            selectedPost &&
            // <MarkdownView styles={markdownStyle.dark}>
              <RenderHtml source={selectedPost.body}
              contentWidth={400}

              />
            // </MarkdownView>
        }
      </ItemContainer>
    </Container>
  </ThemeProvider>
  );
};


const Container = styled.SafeAreaView`  
  background-color: ${props => props.theme.mainBackgroundColor};
  flex: 1;
`;

const ItemContainer = styled.ScrollView`
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
font-size:   ${14};
margin-horizontal: ${1};
`;
const Separator = styled.Text`
color: ${props => props.theme.mainTextColor};
text-align: center;
font-size:   ${14};
margin-horizontal: ${3};
`;

const markdownStyle = {
  light: {
    heading1: {
      color: '#000000'
    },
    heading2: {
      color: '#000000',
    },
    strong: {
      color: '#000000'
    },
    em: {
      color: '#000000'
    },
    text: {
      color: '#000000',
    },
    blockQuoteText: {
      color: '#000000'
    },
    blockQuoteSection: {
      flexDirection: 'row',
    },
    blockQuoteSectionBar: {
      width: 3,
      height: null,
      backgroundColor: '#00000055',
      marginRight: 15,
    },
    codeBlock: {
      fontWeight: '500',
      backgroundColor: '#00000055',
    },
    tableHeader: {
      backgroundColor: 'grey',
    },
  },
  dark: {
    heading1: {
      color: '#E5E5E5'
    },
    heading2: {
      color: '#E5E5E5',
    },
    strong: {
      color: '#E5E5E5'
    },
    em: {
      color: '#E5E5E5'
    },
    text: {
      color: '#E5E5E5',
    },
    blockQuoteText: {
      color: '#E5E5E5'
    },
    blockQuoteSection: {
      flexDirection: 'row',
    },
    blockQuoteSectionBar: {
      width: 3,
      height: null,
      backgroundColor: '#00000055',
      marginRight: 15,
    },
    codeBlock: {
      fontWeight: '500',
      backgroundColor: '#00000055',
    },
    tableHeader: {
      backgroundColor: '#00000055',
    },
  }

};

export default Post;