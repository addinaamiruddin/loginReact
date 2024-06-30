import React from 'react';
import { ScrollView, SafeAreaView, View, Text, StyleSheet } from 'react-native';
import COLORS from './constants/COLORS';
import Button from './components/Button';
import Header2 from './Header2';

const ActivityPage = ({ navigation, route }) => {
    const { title } = route.params || {};

    const styles = StyleSheet.create({
        scrollViewContent: {
            flexGrow: 1,
            justifyContent: 'center',
        },
    });

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <>
                <Header2 navigation={navigation} />
                <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
                    <View style={{ flex: 1, marginHorizontal: 22 }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            alignSelf: 'center',
                            marginTop: 50,
                        }}>
                            {title}
                        </Text>

                        <View style={{ marginBottom: 12 }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: '400',
                                    marginVertical: 8,
                                    alignSelf: 'center',
                                    marginTop: 30,
                                }}
                            >
                                What do you want to do today?
                            </Text>
                        </View>

                        <Button
                            title="Flashcards"
                            onPress={() =>   navigation.navigate('openFlashcards', { id: 1 })} // nanti tukar id to chapter_id
                            filled
                            style={{
                                marginTop: 18,
                                marginBottom: 4,
                            }}
                        />
                        <Text style={{ marginBottom: 12 }}>
                            Flashcards allow you to review key concepts and vocabulary for the chapter. A great way to reinforce your understanding.
                        </Text>

                        <Button
                            title="Slideshows"
                            onPress={() => navigation.navigate('openSlideshows')}
                            filled
                            style={{
                                marginTop: 18,
                                marginBottom: 4,
                            }}
                        />
                        <Text style={{ marginBottom: 12 }}>
                            Slideshows provide an overview of important topics and ideas in a visual format, making it easier to grasp complex concepts.
                        </Text>

                        <Button
                            title="Experiment Simulation"
                            onPress={() => navigation.navigate('openExperiment', { id: 1 })}
                            filled
                            style={{
                                marginTop: 18,
                                marginBottom: 4,
                            }}
                        />
                        <Text style={{ marginBottom: 12 }}>
                            Experiment simulations allow you to explore scientific concepts through virtual experiments, providing hands-on learning experiences.
                        </Text>
                    </View>
                </SafeAreaView>
            </>
        </ScrollView>
    );
};

export default ActivityPage;
