import React from 'react';
import {

  Button,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';





const App = () => {


  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Hello
      </Text>
      <Button title='React Native' onPress={()=>{Linking.openURL('https://www.google.com/')}}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f00fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
color:'#ffffff',
fontSize:20,
fontStyle:"italic",
margin:10,
  },
});

export default App;
