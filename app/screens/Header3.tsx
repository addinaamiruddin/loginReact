import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import userImage from '../screens/assets/user.png';

const Header3 = ({ navigation }) => {
  const goToDashboard = () => {
    navigation.navigate('TeacherDashboard');
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        {/* BioEngage Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.bio} onPress={goToDashboard}>
            Bio
          </Text>
          <Text style={styles.engage} onPress={goToDashboard}>
            Engage
          </Text>
        </View>

        {/* User Image - Clickable */}
        <TouchableOpacity style={styles.userImageContainer}>
          <Image source={userImage} style={styles.userImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: 'white', // Set the background color to white
  },
  container: {
    flexDirection: 'row',
    margin: 36,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  bio: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  engage: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#789461',
  },
  userImageContainer: {
    marginLeft: 20,
  },
  userImage: {
    width: 60,
    height: 60,
  },
});

export default Header3;
