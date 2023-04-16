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
      title: 'Conceito 1',
      feedbacks: ['Feedback 1 para Conceito 1', 'Feedback 2 para Conceito 1'],
    },
    {
      title: 'Conceito 2',
      feedbacks: ['Feedback 1 para Conceito 2', 'Feedback 2 para Conceito 2'],
    },
    {
      title: 'Conceito 3',
      feedbacks: ['Feedback 1 para Conceito 3', 'Feedback 2 para Conceito 3'],
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
    backgroundColor: '#e0e0e0',
    padding: 16,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  feedbackContainer: {
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  feedback: {
    fontSize: 14,
    marginBottom: 8,
  },
});

export default App;
