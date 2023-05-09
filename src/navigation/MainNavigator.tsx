import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProductCatalogueScreen from '../screens/ProductCatalogueScreen';
import ProductCardScreen from '../screens/ProductCardScreen';
import MyWishListScreen from '../screens/MyWishListScreen';

export type RootStackParamList = {
    HomeScreen: undefined;
    ProfileScreen: { name: string };
    SearchScreen: undefined;
    ProductCatalogueScreen: { id: number, step: number };
    ProductCardScreen: { id: number, step: number };
};

export type RootDrawerParamList = {
    HomeStack: undefined;
    ProfileScreen: { name: string };
    MyWishListScreen: undefined;
};

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<RootStackParamList>();


function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="HomeScreen" >
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Home" }} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ title: "Search" }} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: "Profile" }} />
            <Stack.Screen name="ProductCatalogueScreen" component={ProductCatalogueScreen} options={{ title: "ProductCatalogue" }} />
            <Stack.Screen name="ProductCardScreen" component={ProductCardScreen} options={{ title: "ProductCard" }} />

        </Stack.Navigator>
    );
}

const MainNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="HomeStack">
            <Drawer.Screen name="HomeStack" component={HomeStack} />
            {/* <Drawer.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: "Profile" }} /> */}
            <Drawer.Screen name="MyWishListScreen" component={MyWishListScreen} options={{ title: "MyWishListScreen" }} />
        </Drawer.Navigator>
    )
}

export default MainNavigator;
