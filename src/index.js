import React from 'react';
import { StatusBar } from 'react-native'

import AppContainer from './AppContainer'

// import { Container } from './styles';


export default class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor={'#000066'} />
        <AppContainer />
      </>
    );
  }
}
