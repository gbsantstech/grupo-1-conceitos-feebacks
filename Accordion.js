import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import axios from 'axios';

const api=axios.create({
  baseURL:'http://academico3.rj.senac.br/api/',
})

const Accordion = ({ grupoId, estudanteId }) => {
  const [dados, setDados] = useState([]);

  const Item = ({item}) => (
    <View>
      <Text style={styles.title}>{item.id}</Text>
      <Text style={styles.title}>{item.dataInicio}</Text>
      <Text style={styles.title}>{item.dataFim}</Text>
    </View>
  );

  useEffect(() => {
    api.get(`/Acompanhamento/filterByBrupoIdByEstudanteId/${1}/${1}`)
      .then(data=>{
        setDados(data.data)
        // dados.push(data.request._response)
      });
    }, []);
                

  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      data={dados}
      renderItem={({item}) => <Item item={item} />}
      keyExtractor={item => item.id}
    />
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: '#fff',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  contentText: {
    fontSize: 14,
  },
});

export default Accordion;
