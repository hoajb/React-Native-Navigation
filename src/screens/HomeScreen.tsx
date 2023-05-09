import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native'

interface Props {
    navigation: any
}

const HomeScreen = ({ navigation }: Props) => {

    const goToProfile = () => {
        navigation.navigate('ProfileScreen', { name: "Jane" });
    };

    const goToSearch = () => {
        navigation.navigate('SearchScreen');
    };

    const goToProductCatalogue = (id: number, step: number) => {
        navigation.navigate('ProductCatalogueScreen', { id: id, step: step });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Home Screen</Text>
            <Button title="Go to Profile Screen" onPress={goToProfile} />
            <Button title="Go to Search Screen" onPress={goToSearch} />
            <Button title="Go to ProductCatalogue" onPress={() => goToProductCatalogue(1, 0)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default HomeScreen;
