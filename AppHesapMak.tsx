import React from 'react';
import { StyleSheet} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
//Alt bileşeni içe aktardık
import HesapMakinesi from './component/HesapMakinesi';

export default function App() {
  return (
    <SafeAreaView style={stiller.kapsayici}>
      {/*Hesap Makinesi bileşenini çağırıyoruz*/}
      <HesapMakinesi />
    </SafeAreaView>
  );
}
const stiller = StyleSheet.create({
  kapsayici: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
