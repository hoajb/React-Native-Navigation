import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProductCatalogueScreen from '../screens/ProductCatalogueScreen';

export type RootStackParamList = {
    HomeScreen: undefined;
    ProfileScreen: { name: string };
    SearchScreen: undefined;
    ProductCatalogueScreen: { id: number, step: number };
};

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Home" }} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ title: "Search" }} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: "Profile" }} />
            <Stack.Screen name="ProductCatalogueScreen" component={ProductCatalogueScreen} options={{ title: "ProductCatalogue" }} />

        </Stack.Navigator>
    )
}

export default MainNavigator;
