import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Draggable from 'react-native-draggable';
import Header2 from '../Header2';
import ArrowButtonNext from '../components/ArrowButtonNext'
import { supabase } from '../../lib/supabase';

const ES_experimentdetails = ({ route, navigation }) => {

  const id = route.params.id; // Get the id from the route parameters

  console.log(id);


  const [experiment, setExperiment] = useState(null);

  const fetchInstructions = async (id) => {
    const { data, error } = await supabase.from('exp_details').select().eq('id', id);
    if (error) console.log("Data fetching error: ", error)
    else setExperiment(data[0]); // Assuming that id is unique and only one row is returned
  };
  
  useEffect(() => {
    fetchInstructions(1); // Fetch experiment with id=1
  }, []);

  // if (!experiment) {
  //   return <Text>Loading...</Text>;
  // } 

  // console.log(experiment);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Header2 navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.title}>{experiment.exp_title}</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.heading}>
          Aim:</Text> {'\n'}
          {experiment.problem_statement}
          {'\n\n'}
          <Text style={styles.heading}>
          Problem Statement:</Text>{'\n'} 
          {experiment.problem_statement}
          {'\n\n'}
          <Text style={styles.heading}>
          Hypothesis:</Text> {'\n'}
          {experiment.hypothesis}
          {'\n\n'}
          <Text style={styles.heading}>
          Variables:</Text>{'\n'}
          Manipulated variable: {experiment.mv+'\n'}
          Responding variable: {experiment.rv+'\n'}
          Constant variable: {experiment.cv+'\n'}
          {'\n'}
          <Text style={styles.heading}>
          Materials:</Text>{'\n'}
          {experiment.materials}
          {'\n\n'}
          <Text style={styles.heading}>
          Apparatus: </Text> {'\n'}
          {experiment.apparatus}
        </Text>
        <ArrowButtonNext onPress={() => navigation.navigate('procedure', { id: 1 })} />
      </View>
    </ScrollView>
  );
}

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
    textAlign:'center'
  },
  heading: {
    textDecorationLine: 'underline',
    fontSize:20
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

export default ES_experimentdetails
