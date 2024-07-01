import React, { useState } from 'react';
import { ScrollView, View, Image, StyleSheet, Text, Alert } from 'react-native';
import Draggable from 'react-native-draggable';
import ArrowButtonNext from '../components/ArrowButtonNext';
import ArrowButtonPrevious from '../components/ArrowButtonPrevious';
import FinishButton from '../components/FinishButton';
import Header2 from '../Header2';

const ExperimentScreen = ({ navigation }) => {
  const [combined, setCombined] = useState({}); // Tracks combined state for each procedure
  const [activeProcedure, setActiveProcedure] = useState(0); // Active procedure index

  const procedures = [
    {
      id: 1,
      text:
        '1. Apply a thin layer of transparent nail varnish on an area of 5mm x 5mm on the upper surface of the hibiscus leaf and water lily plant.',
      apparatus: ['hibiscus', 'waterlily', 'nail_varnish1', 'nail_varnish2'],
    },
    {
      id: 2,
      text:
        '2. Allow the varnished leaves to dry.',
      apparatus: ['hibiscus', 'waterlily', 'sun'],
    },
    {
      id: 3,
      text:
        '3. Carefully peel off the layer of nail varnish from the surface of the leaves using a pair of forceps.',
      apparatus: ['hibiscus', 'waterlily', 'forceps1', 'forceps2'],
    },
    {
      id: 4,
      text:
        '4. Place the peeled-off layer of nail varnish in a drop of water on a microscope slide.',
      apparatus: ['nailvarnishstroke', 'm_slip'],
    },
    {
      id: 5,
      text:
        '5. Cover the slide with a cover slip.',
      apparatus: ['m_slip', 'm_slip'],
    },
    {
      id: 6,
      text:
        '6. Observe the surface of the hibiscus leaf and water lily leaf using low power on a microscope.',
      apparatus: ['microscope1', 'microscope2', 'hibiscus', 'waterlily'],
    },
    {
      id: 7, 
      text:
        '7. Observe and record the number of stomata present.',
      apparatus: ['dicot', 'monocot'],
    },
    // Add more procedures as needed
  ];

  const images = {
    nail_varnish1: require('./apparatus/nailvarnish.png'),
    nail_varnish2: require('./apparatus/nailvarnish.png'),
    nailvarnishstroke1: require('./apparatus/nailvarnishstroke.png'),
    nailvarnishstroke2: require('./apparatus/nailvarnishstroke.png'),
    hibiscus: require('./apparatus/hibiscus.png'),
    waterlily: require('./apparatus/waterlily.png'),
    m_slip: require('./apparatus/m_slip.png'),
    forceps1: require('./apparatus/forceps.png'),
    forceps2: require('./apparatus/forceps.png'),
    microscope1: require('./apparatus/microscope.png'),
    microscope2: require('./apparatus/microscope.png'),


    nailvarnishstroke: require('./apparatus/nailvarnishstroke.png'),
    sun: require('./apparatus/sun.png'),
    microscope: require('./apparatus/microscope.png'),
    dicot: require('./microscopic/dicot.png'),
    monocot: require('./microscopic/monocot.png'),
    // Add more as needed
  };

  const combinationRules = {
    // id:1
    'nail_varnish1': 'hibiscus',
    'nail_varnish2': 'waterlily',
    // id:2
    'sun': 'sun',
    'waterlily': 'waterlily',
    'hibiscus': 'hibiscus',
    // id:3
    'forceps1': 'waterlily',
    'forceps2': 'hibiscus',
    // id:4
    'nailvarnishstroke': 'm_slip',
    // id:5
    'm_slip':'m_slip',
    // id:6
    'microscope1': 'hibiscus',
    'microscope2': 'waterlily',
    // id:7 - none
  };

  const combinedImages = {
    // id:1
    'nail_varnish1_hibiscus': 'nailvarnishstroke1',
    'nail_varnish1_waterlily': 'nailvarnishstroke2',
    // id:2
    'sun': 'sun',
    // id:3
    'forceps1_hibiscus': 'nailvarnishstroke1',
    'forceps2_waterlily': 'nailvarnishstroke2',
    // id:4
    'nailvarnishstroke_m_slip':'m_slip',
    // id:5
    'm_slip_m_slip':'m_slip',
    // id:6
    'microscope_hibiscus': 'dicot',
    'microscope_waterlily': 'monocot',
    // id:7 - none
  };

  const handleCombination = (draggedApparatus, event, procedureId) => {
    let success = false; // Flag to track if the combination was successful
    const ruleTarget = combinationRules[draggedApparatus];

    procedures[procedureId]?.apparatus.forEach((targetApparatus) => {
      if (ruleTarget && ruleTarget === targetApparatus) {
        // Check if the dragged apparatus is within the target drop zone
        if (event.nativeEvent.pageX > 100 && event.nativeEvent.pageX < 900 &&
            event.nativeEvent.pageY > 100 && event.nativeEvent.pageY < 900) {
          const combinedKey = `${draggedApparatus}_${targetApparatus}`;
          setCombined((prev) => ({
            ...prev,
            [procedureId]: combinedKey
          }));
          success = true; // Set success to true as the combination is correct
          Alert.alert('Success!', `You have successfully combined ${draggedApparatus} with ${targetApparatus}.`);
        }
      }
    });

    // If no success, show failure alert
    if (!success) {
      Alert.alert('Incorrect Combination', `The combination of ${draggedApparatus} is not correct. Try again!`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <>
      <Header2 navigation={navigation} />

      <View style={styles.container}>
      <FinishButton onPress={handleExitChapter} /> {/* Add the FinishButton */}

        <View style={styles.dropZone} />

        <View style={styles.draggableContainer}>
          {procedures[activeProcedure]?.apparatus?.map((apparatus, index) => (
            <Draggable 
              key={index} 
              style={styles.draggableItem}
              onDragRelease={(event) => {
                handleCombination(apparatus, event, activeProcedure);
              }}
            >
              <Image 
                source={
                  combined[activeProcedure] === `${apparatus}_${combinationRules[apparatus]}` 
                    ? images[combinedImages[combined[activeProcedure]]] 
                    : images[apparatus]
                } 
                style={styles.image} 
              />
            </Draggable>
          ))}
        </View>

        <Text style={styles.instructions}>{procedures[activeProcedure].text}</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <ArrowButtonPrevious onPress={() => setActiveProcedure(prev => Math.max(prev - 1, 0))} />
          <ArrowButtonNext onPress={() => setActiveProcedure(prev => Math.min(prev + 1, procedures.length - 1))} />
        </View>
      </View>
      </>
        
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 50, // Adjust the position as needed
    left: 100,
    opacity: 0.7, // Set the desired opacity
  },
  dropZone: {
    width: 350,
    height: 300,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 20,
  },
  draggableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  draggableItem: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    padding: 30,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default ExperimentScreen;
