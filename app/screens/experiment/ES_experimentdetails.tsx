import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Draggable from 'react-native-draggable';
import Header2 from '../Header2';
import ArrowButtonNext from '../components/ArrowButtonNext';

// Dummy experiment data (replace with actual data from Supabase)
const dummyExperiment = {
  exp_title: 'Comparing Stomatal Distribution on Leaves',
  problem_statement: 'Investigate the stomatal distribution on upper and lower epidermis of monocotyledon and eudicotyledon leaves',
  hypothesis: 'Plants exposed to more sunlight will grow taller.',
  mv: 'Type of leaves',
  rv: 'Number of stomata',
  cv: 'Nail varnish layer',
  materials: 'Water lily leaf, Nail varnish, Hibiscus laef',
  apparatus: 'Light microscope, forceps, magnifying lens, microscope slides and cover slips',
};

const ES_experimentdetails = ({ route, navigation }) => {
  const id = route.params.id; // Get the id from the route parameters

  // Use dummyExperiment as initial state
  const [experiment, setExperiment] = useState(dummyExperiment);

  // Fetch instructions (you can remove this part if using real data)
  const fetchInstructions = async (id) => {
    // Simulate fetching data from Supabase
    // Replace with actual Supabase query
    // ...
  };

  useEffect(() => {
    fetchInstructions(1); // Fetch experiment with id=1
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Header2 navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.title}>{experiment.exp_title}</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.heading}>Aim:</Text> {'\n'}
          {experiment.problem_statement}
          {'\n\n'}
          <Text style={styles.heading}>Problem Statement:</Text>{'\n'}
          {experiment.problem_statement}
          {'\n\n'}
          <Text style={styles.heading}>Hypothesis:</Text> {'\n'}
          {experiment.hypothesis}
          {'\n\n'}
          <Text style={styles.heading}>Variables:</Text>{'\n'}
          Manipulated variable: {experiment.mv + '\n'}
          Responding variable: {experiment.rv + '\n'}
          Constant variable: {experiment.cv + '\n'}
          {'\n'}
          <Text style={styles.heading}>Materials:</Text>{'\n'}
          {experiment.materials}
          {'\n\n'}
          <Text style={styles.heading}>Apparatus:</Text> {'\n'}
          {experiment.apparatus}
        </Text>
        <ArrowButtonNext onPress={() => navigation.navigate('procedure', { id: 2 })} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  heading: {
    textDecorationLine: 'underline',
    fontSize: 20,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default ES_experimentdetails;
