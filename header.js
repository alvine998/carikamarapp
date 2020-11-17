import React from 'react';
import {View} from 'react-native';
import { Header } from 'react-native-elements';


const Atas = () => {
    return ( 
    <View>
      <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
      />
    </View>
      
     );
  }
 
export default Atas;