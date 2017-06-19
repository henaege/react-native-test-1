// indexedDB.ios.js - place code here for ios!

// 1. Import a library to help create a component
import React from 'react';
import { AppRegistry, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// 2. Create a component
const App = ()=> {
  return(
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};

// 3. Render the component to the device
AppRegistry.registerComponent('albums', ()=> App);