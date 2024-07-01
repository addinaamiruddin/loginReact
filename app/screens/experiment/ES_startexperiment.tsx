import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Draggable from 'react-native-draggable';
import Header2 from '../Header2';
import ArrowButtonNext from '../components/ArrowButtonNext';
import ArrowButtonPrevious from '../components/ArrowButtonPrevious';

const ES_LandingPage = ({ navigation }) => {
  const [activeProcedure, setActiveProcedure] = useState(0);
  const [combined, setCombined] = useState({});

  const procedures = [
    {
      id: 1,
      text:
        '1. Apply a thin layer of transparent nail varnish on an area of 5mm x 5mm on the upper surface of the hibiscus leaf and water lily plant.',
      apparatus: ['hibiscus', 'waterlily', 'nail_varnish', 'nail_varnish'],
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
      apparatus: ['hibiscus', 'waterlily', 'forceps'],
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
      apparatus: ['microscope', 'hibiscus', 'waterlily'],
    },
    {
      id: 7, 
      text:
        '7. Count and record the number of stomata present.',
      apparatus: ['microscope', 'hibiscus', 'waterlily'],
    },
    // Add more procedures as needed
  ];

  const images = {
    nail_varnish: require('./apparatus/nailvarnish.png'),
    hibiscus: require('./apparatus/hibiscus.png'),
    waterlily: require('./apparatus/waterlily.png'),
    m_slip: require('./apparatus/m_slip.png'),
    forceps: require('./apparatus/forceps.png'),
    nailvarnishstroke: require('./apparatus/nailvarnishstroke.png'),
    sun: require('./apparatus/sun.png'),
    microscope: require('./apparatus/microscope.png'),




    // Add more as needed
  };


  const combinationRules = {
    1: {
      'nailvarnish': {
        target: 'waterlily',
        combinedImage: 'nailvarnishstroke'
      },
      'nailvarnish': {
        target: 'hibiscus',
        combinedImage: 'nailvarnishstroke'
      }
    },
    2: {
      'nailvarnish': {
        target: 'hibiscus',
        combinedImage: 'nailvarnishstroke'
      }
    },
    // ...
  };

  const handleCombination = (apparatus, targetApparatus, procedureId, event) => {
    const rule = combinationRules[procedureId]?.[apparatus];

    if (rule && targetApparatus === rule.target) {
      // Adjust these coordinates to match your drop zone
      if (event.nativeEvent.pageX > 200 && event.nativeEvent.pageX < 900 && 
          event.nativeEvent.pageY > 500 && event.nativeEvent.pageY < 700) {
        setCombined((prev) => ({
          ...prev,
          [procedureId]: rule.combinedImage
        }));
      }
    }
  };

  const handleNextProcedure = () => {
    if (activeProcedure < procedures.length - 1) {
      setActiveProcedure(activeProcedure + 1);
      // setCombined(false); // Add this line
    }
  };
  
  const handlePrevProcedure = () => {
    if (activeProcedure > 0) {
      setActiveProcedure(activeProcedure - 1);
      // setCombined(false); // Add this line
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <>
        <Header2 navigation={navigation} />
        <View style={styles.container}>
          <View style={styles.dropZone} />

          <View style={styles.draggableContainer}>
            {procedures[activeProcedure]?.apparatus?.map((apparatus, index) => (
              <Draggable 
                key={index} 
                // style={styles.draggableItem}
                onDragRelease={(event) => {
                  handleCombination(apparatus, 'nailvarnish', activeProcedure, event); // Adjust 'beaker' to your needs
                }}
              >
                <Image 
                  source={combined[activeProcedure] === apparatus ? images[combined[activeProcedure]] : images[apparatus]} 
                  style={styles.image} 
                />
              </Draggable>
            ))}
          </View>

          <Text style={styles.instructions}>{procedures[activeProcedure].text}</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
  <ArrowButtonPrevious onPress={handlePrevProcedure} />
  <ArrowButtonNext onPress={handleNextProcedure} />
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
    width: 500,
    height: 500,
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
    padding:30,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default ES_LandingPage;
