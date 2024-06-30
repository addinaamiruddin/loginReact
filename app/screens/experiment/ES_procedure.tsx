import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Draggable from 'react-native-draggable';
import Header2 from '../Header2';
import ArrowButtonNext from '../components/ArrowButtonNext'
import { supabase } from '../../lib/supabase';

const ES_procedure = ({ route, navigation }) => {
  const id = route.params.id; // Get the id from the route parameters

  console.log(id);

  const [procedureSet, setProcedureSet] = useState(null);

  const fetchProcedureSet = async (id) => {
    const { data, error } = await supabase.from('exp_procedure_set').select().eq('exp_id', id);
    if (error) console.log("Data fetching error: ", error)
    else setProcedureSet(data[0]);
  };

  useEffect(() => {
    fetchProcedureSet(1); // Fetch procedure set with exp_id=id
  }, []);

  console.log(procedureSet);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <>
        <Header2 navigation={navigation} />
        {procedureSet && procedureSet.map((procedure, index) => (
          <View key={index} style={styles.procedureItem}>
            <Text style={styles.instructionNum}>{procedure.instruction_num}</Text>
            <Text style={styles.instruction}>{procedure.instruction}</Text>
          </View>
        ))}
        <ArrowButtonNext onPress={() => navigation.navigate('startExperiment')} />
      </>
    </ScrollView>
  )
}

// <ArrowButtonNext onPress={() => navigation.navigate('startExperiment')}/>

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
 
  });

export default ES_procedure
