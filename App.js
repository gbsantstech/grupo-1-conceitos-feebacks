import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {DownOutlined} from '@ant-design/icons';

const Accordion = ({title, feedbacks,conceito}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleAccordion} style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.larger}>
        <Text style={styles.conceito}>{conceito}</Text>
        <DownOutlined style={styles.DownOutlined} />
        </View>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.feedbackContainer}>
          {feedbacks.map((feedback, index) => (
            <Text key={index} style={styles.feedback}>
              {feedback}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

const App = () => {
  const concepts = [
    {
      title: 'Tarefa 1',
      conceito: 'bom',
      feedbacks: ['Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma galera de tipos e os embaralhou para fazer um livro de espécimes de tipos. Ele sobreviveu não apenas a cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker, incluindo versões de Lorem Ipsum.'],
    },
    {
      title: 'Tarefa 2',
      conceito: 'ótimo',
      feedbacks: [ 'Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma galera de tipos e os embaralhou para fazer um livro de espécimes de tipos. Ele sobreviveu não apenas a cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker, incluindo versões de Lorem Ipsum.'],
    },
    {
      title: 'Tarefa 3',
      conceito: 'regular',
      feedbacks: ['Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma galera de tipos e os embaralhou para fazer um livro de espécimes de tipos. Ele sobreviveu não apenas a cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker, incluindo versões de Lorem Ipsum.'],
    },
  ];

  return (
    <View style={styles.container}>
      {concepts.map((concept, index) => (
        <Accordion key={index} title={concept.title} feedbacks={concept.feedbacks} conceito={concept.conceito}/>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  larger:{
    flexDirection: 'row',
    color: 'white'
  },
  container: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    backgroundColor: '#205395',
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  conceito:{
    fontSize: 12,
    color: 'white',
    marginRight: 50
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color:"#fff"
  },
  feedbackContainer: {
    backgroundColor: '#D9D9D9',
    padding: 16,
  },
  feedback: {
    fontSize: 14,
    marginBottom: 8,
  },
});

export default App;
