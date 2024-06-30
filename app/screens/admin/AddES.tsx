// AddExperimentScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { supabase } from '../../lib/supabase';
import Header3 from '../Header3';
import COLORS from '../constants/COLORS';
import Button from "../components/Button";


const AddES = ({ navigation }: any) => {
  const [title, setTitle] = useState('');
  const [hypothesis, setHypothesis] = useState('');
  const [variables, setVariables] = useState('');
  const [apparatus, setApparatus] = useState('');
  const [materials, setMaterials] = useState('');
  const [expName, setExpName] = useState('');


  const handleAddExperiment = () => {
    // Save experiment data to the database (e.g., via an API)
    // Implement your logic here
    console.log('Experiment added:', { title, hypothesis, variables, apparatus, materials });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Header3 navigation={navigation} />
      <>
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            
        {/* Flashcard Form */}
        <View style={styles.flashcardForm}>
            <Text style={styles.sectionLabel}>Add New Experiment</Text>
            {/* Chapter Name Input */}
            <View style={{ marginBottom: 12 }}>
              <Text style={{ fontSize: 16, fontWeight: "400", marginVertical: 8 }}>
                Experiment Name :
              </Text>
              
            <TextInput
              style={styles.input}
              value={expName}
              onChangeText={setExpName}
              style={{
                width: "100%",
                paddingVertical:10,
              }}
            />
        </View>
  
        <View style={styles.form}>
        <View>
          <Text style={styles.label}>Hypothesis</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter hypothesis"
          value={hypothesis}
          onChangeText={setHypothesis}
        />
        </View>
        
  
        <Text style={styles.label}>Variables</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter constant variables"
          value={variables}
          onChangeText={setVariables}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter manipulated variables"
          value={variables}
          onChangeText={setVariables}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter dependent variables"
          value={variables}
          onChangeText={setVariables}
        />
  
        <Text style={styles.label}>Apparatus</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter apparatus"
          value={apparatus}
          onChangeText={setApparatus}
        />
  
        <Text style={styles.label}>Materials</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter materials"
          value={materials}
          onChangeText={setMaterials}
          
        />

        <Text style={styles.label}>Procedures</Text>
        <TextInput
          style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
          placeholder="Enter materials"
          value={materials}
          onChangeText={setMaterials}
          multiline // Enable multiline input
        />

        <View  style={{alignSelf:'center', width:"50%"}}>
          <Button 
        title="Add Experiment" 
        onPress={handleAddExperiment}
        style={{
          width: "100%",
          margin:20,
        }} />
        </View>
        
        </View>
  
        </View>
        </SafeAreaView>
      </>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  flashcardForm: {
    padding:20,
    fontSize:14,
},
  container: {
    padding: 16,
  },
  sectionLabel: {
    fontSize: 22,
    marginBottom: 5,
    color: COLORS.black,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    marginBottom:20,
    borderRadius:10
  },
  form:{
    backgroundColor:COLORS.gray,
    borderRadius:20,
    padding:20,
    borderColor:COLORS.black,
  },

});

export default AddES;


