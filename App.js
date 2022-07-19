console.disableYellowBox = true
import React from 'react';
import  Routes  from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import i18next from './src/languages';
import themeReducer from './src/redux/themeReducer';


const store = createStore(combineReducers({themeReducer}), applyMiddleware(thunk));

export default function App () {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <Routes />
        </Provider>
      </NavigationContainer>
  );
}