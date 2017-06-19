// Index.android.js - place code here for android!

// 1. Import a library to help create a component
import React from 'react';
import { Text, AppRegistry} from 'react-native';

// 2. Create a component
const App = ()=> {
  return(
    <Text>Some Text</Text>
  );
};

// 3. Render the component to the device
AppRegistry.registerComponent('albums', ()=> App);