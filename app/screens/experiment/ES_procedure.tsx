import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Header2 from '../Header2';
import ArrowButtonNext from '../components/ArrowButtonNext';
import { supabase } from '../../lib/supabase';

const dummyExperiment = {
  num1: 'A thin layer of transparent nail varnish is applied on an area of 5mm x 5mm on the upper surface of the hibiscus leaf and water lily plant.',
  num2: 'The varnished leaves are left to dry.',
  num3: 'The layer of nail varnish is peeled off the surface of the leaves with a pair of forceps.',
  num4: 'The layer of nail varnish is placed in a drop of water on the microscope slide.',
  num5: 'A cover slip is used to cover the slide.',
  num6: 'The surface of the hibiscus leaf and water lily leaf is observed using low power.',
  num7: 'The number of stomata present is counted and recorded.',
};

const ES_procedure = ({ route, navigation }) => {
  const id = route.params.id; // Get the id from the route parameters

  const [procedureSet, setProcedureSet] = useState(dummyExperiment);

  const fetchProcedureSet = async (id) => {
    const { data, error } = await supabase.from('exp_procedure_set').select().eq('exp_id', id);
    if (error) console.log("Data fetching error: ", error);
    else setProcedureSet(data[0] || dummyExperiment); // Use dummyExperiment if data[0] is undefined
  };

  useEffect(() => {
    fetchProcedureSet(1); // Fetch procedure set with exp_id=id
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <>
        <Header2 navigation={navigation} />
        <Text style={styles.container}>
          <Text style={styles.heading}>Procedures:</Text>
          {'\n\n'}
          <Text style={styles.step}>1: </Text>
          {procedureSet.num1}
          {'\n\n'}
          <Text style={styles.step}>2: </Text>
          {procedureSet.num2}
          {'\n\n'}
          <Text style={styles.step}>3: </Text>
          {procedureSet.num3}
          {'\n\n'}
          <Text style={styles.step}>4: </Text>
          {procedureSet.num4}
          {'\n\n'}
          <Text style={styles.step}>5: </Text>
          {procedureSet.num5}
          {'\n\n'}
          <Text style={styles.step}>6: </Text>
          {procedureSet.num6}
          {'\n\n'}
          <Text style={styles.step}>7: </Text>
          {procedureSet.num7}
          {'\n\n'}
        </Text>
        <ArrowButtonNext onPress={() => navigation.navigate('startExperiment')} />
      </>
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
      textAlign:'center'
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
    heading: {
      textDecorationLine: 'underline',
      fontSize: 20,
    },
  });

export default ES_procedure
