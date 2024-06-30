import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Draggable from 'react-native-draggable';
import Header2 from '../Header2';
import ArrowButtonNext from '../components/ArrowButtonNext';
import ArrowButtonPrevious from '../components/ArrowButtonPrevious';

const procedures = [
  {
    id: 1,
    text:
      '1. Soak the Visking tubing in water for five minutes to soften it. Open the Visking tubing and tie one end with a piece of cotton thread to prevent leakage.',
      apparatus:['viskingtube', 'beaker']
  },
  {
    id: 2,
    text:
      '2. Fill the Visking tubing with 3 ml of glucose solution and 3ml of starch suspension. Tie the other end of the Visking tubing tightly with another piece of cotton thread. Record the colour of the solution.',
      apparatus:['viskingtubeinbeaker', 'beaker']
  },
  {
    id: 3,
    text:
      '3. Rinse the outer surface of the Visking tubing with distilled water.',
      apparatus:[]
  },
  {
    id: 4,
    text:
      '4. Mix 80 ml of water with 3ml of iodine solution in a beaker. Record the colour of the solution.',
  },
  {
    id: 5,
    text:
      '5. Place the Visking tubing in the beaker as shown in Figure 3.1 and leave it for 40 minutes.',
  },
  {
    id: 6,
    text:
      '6. After 40 minutes, take the Visking tubing out and put it in a dry beaker.',
  },
  {
    id: 7,
    text:
      '7. Observe and record the colour of the solutions in the Visking tubing and in the beaker.',
  },
  {
    id: 8,
    text:'8. Test both solutions for the presence of glucose using the Benedict’s test. Pour 2 ml of each solution into separate test tubes and add 1 ml of Benedict’s solution. Heat the solutions in a water bath for about five minutes and record the change in colour.'
  },
  // Add more procedures as needed
];

const images = {
  icebath: require('./apparatus/icebath.png'),
  beaker: require('./apparatus/beaker.png'),
  testtube: require('./apparatus/testtube.png'),
  viskingtube: require('./apparatus/viskingtube.png'),
  viskingtubeinbeaker: require('./apparatus/viskingtubeinbeaker.png')

  // Add more as needed
};

const ES_LandingPage = ({ navigation }) => {
  const [activeProcedure, setActiveProcedure] = useState(0);
  const [combined, setCombined] = useState(false);

  const handleNextProcedure = () => {
    if (activeProcedure < procedures.length - 1) {
      setActiveProcedure(activeProcedure + 1);
      setCombined(false); // Add this line
    }
  };
  
  const handlePrevProcedure = () => {
    if (activeProcedure > 0) {
      setActiveProcedure(activeProcedure - 1);
      setCombined(false); // Add this line
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
                style={styles.draggableItem}
                onDragRelease={(event) => {
                  // Check if viskingtube has been dragged onto beaker
                  if (apparatus === 'viskingtube' && activeProcedure === 1 && event.nativeEvent.pageX > 500 && event.nativeEvent.pageX < 500 && event.nativeEvent.pageY > 500 && event.nativeEvent.pageY < 500) {
                    setCombined(true);
                  }
                }}
              >
                <Image source={combined && apparatus === 'beaker' ? images.viskingtubeinbeaker : images[apparatus]} style={styles.image} />
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
