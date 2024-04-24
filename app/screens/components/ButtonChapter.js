import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from '../constants/COLORS';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const ButtonChapter = (props) => {
    const { title, onPress, flashcardsAvailable, slideshowsAvailable, experimentsAvailable } = props;

    // Set the button's background color and text color
    const filledBgColor = COLORS.primary;
    const outlinedColor = COLORS.white;
    const bgColor = outlinedColor;
    const textColor = filledBgColor;

    return (
        <View style={styles.container}>
            {/* Button to display chapter title */}
            <TouchableOpacity
                style={{ ...styles.button, backgroundColor: bgColor }}
                onPress={onPress}
            >
                <Text style={{ fontSize: 18, color: textColor }}>{title}</Text>
            </TouchableOpacity>

            {/* Conditionally render icons if available */}
            <View style={styles.iconContainer}>
                {/* Flashcards icon */}
                {flashcardsAvailable && (
                    <Ionicons
                        name="card-outline"
                        size={30}
                        color={COLORS.primary}
                        style={styles.icon}
                        onPress={props.onFlashcardsPress}
                    />
                )}
                
                {/* Slideshows icon */}
                {slideshowsAvailable && (
                    <MaterialCommunityIcons
                        name="presentation-play"
                        size={30}
                        color={COLORS.primary}
                        style={styles.icon}
                        onPress={props.onSlideshowsPress}
                    />
                )}

                {/* Experiments icon */}
                {experimentsAvailable && (
                    <MaterialCommunityIcons
                        name="test-tube"
                        size={30}
                        color={COLORS.primary}
                        style={styles.icon}
                        onPress={props.onExperimentsPress}
                    />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 16,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 10
    },
    icon: {
        marginHorizontal: 10,
    },
});

export default ButtonChapter;
