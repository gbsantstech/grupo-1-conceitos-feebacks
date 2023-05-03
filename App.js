import React from 'react';
import { View } from 'react-native';
import Accordion from './Accordion';

const App = () => {
  return (
    <View>
      <Accordion grupoId={1} estudanteId={1} />
    </View>
  );
};

export default App;
