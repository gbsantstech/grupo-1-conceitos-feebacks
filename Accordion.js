import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const Accordion = ({ grupoId, estudanteId }) => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://academico3.rj.senac.br/api/Acompanhamento/filterByBrupoIdByEstudanteId/${grupoId}/${estudanteId}`);
      setDados(result.data);
    };

    fetchData();
  }, []);

  const renderHeader = (item) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{item.conceito}</Text>
      </View>
    );
  };

  const renderContent = (item) => {
    return (
      <View style={styles.content}>
        <Text style={styles.contentText}>{item.feedback}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        renderItem={({ item }) => (
          <TouchableOpacity>
            {renderHeader(item)}
            {renderContent(item)}
          </TouchableOpacity>
        )}
      />
    </View>
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
