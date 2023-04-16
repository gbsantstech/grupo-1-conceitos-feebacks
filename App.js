import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Accordion = ({title, feedbacks}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleAccordion} style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
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
      feedbacks: ['Feedback da tarefa 1'],
    },
    {
      title: 'Tarefa 2',
      feedbacks: [ 'Feedback da tarefa 2'],
    },
    {
      title: 'Tarefa 3',
      feedbacks: ['Feedback da tarefa 3'],
    },
  ];

  return (
    <View style={styles.container}>
      {concepts.map((concept, index) => (
        <Accordion key={index} title={concept.title} feedbacks={concept.feedbacks} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    backgroundColor: '#205395',
    padding: 16,
    marginBottom: 8,
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
