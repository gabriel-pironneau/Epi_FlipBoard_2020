import React, { Component } from 'react';
import {Button,Image, View, StyleSheet,Text,ScrollView,FlatList,Platform} from 'react-native';
import { WebView } from 'react-native-webview';

class MyWebComponent extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://github.com/expo/expo' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}


export function WebV({navigation}) {
  console.log('fuck you')
  return (Platform.OS === 'web'?<iframe src='https://docs.expo.io/versions/latest/sdk/webview/' height={'100%'} width={'100%'}/>:<View style={{flex:1}}>:<WebView originWhitelist={['*']}
      source={{ uri: 'https://docs.expo.io/versions/latest/sdk/webview/',baseUrl:'' }}
     style={{flex:1,height:2}}
     />
  </View>)
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    minWidth: '100vw',
    minHeight: '100vh',

  },
});
