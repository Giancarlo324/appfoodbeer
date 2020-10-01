import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { Avatar, Title, Caption, Text, TouchableRipple, Button } from 'react-native-paper';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EditProfile from './EditProfile';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();


export default class Profile extends Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Mi Perfil" component={FoodScreen} />
          <Stack.Screen name="Editar Perfil" component={EditProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const FoodScreen = ({navigation}) => {
  return(
    <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
              <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Avatar.Image
                  source={{
                    uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
                  }}
                  size={80}
                />
                <View style={{ marginLeft: 20 }}>
                  <Title style={[styles.title, {
                    marginTop: 15,
                    marginBottom: 5,
                  }]}>Tu nombre</Title>

                </View>

              </View>
            </View>
            <View style={styles.userInfoSection}>
              <View style={styles.row}>
                <Icon name="map-marker-radius" color="#777777" size={20} />
                <Text style={{ color: "#777777", marginLeft: 20 }}>Mi dirección</Text>
              </View>
              <View style={styles.row}>
                <Icon name="phone" color="#777777" size={20} />
                <Text style={{ color: "#777777", marginLeft: 20 }}>Num. Celuar</Text>
              </View>
              <View style={styles.row}>
                <Icon name="email" color="#777777" size={20} />
                <Text style={{ color: "#777777", marginLeft: 20 }}>micorreo@correo.com</Text>
              </View>
            </View>

            <View style={styles.infoBoxWrapper}>

              <Button style={styles.menuItemTextEditProfile} icon="account-edit" mode="contained"onPress={() => navigation.navigate("Editar Perfil")} >
                Editar perfil
          </Button>

            </View>

            <View style={styles.menuWrapper}>
              {/* Para favoritos */}
              {/* <TouchableRipple onPress={() => { }}>
            <View style={styles.menuItem}>
              <Icon name="heart-outline" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Your Favorites</Text>
            </View>
          </TouchableRipple> */}
              <TouchableRipple onPress={() => { }}>
                <View style={styles.menuItem}>
                  <Icon name="share-outline" color="#FF6347" size={25} />
                  <Text style={styles.menuItemText}>Cuéntale a tus amigos</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => { }}>
                <View style={styles.menuItem}>
                  <Icon name="account-check-outline" color="#FF6347" size={25} />
                  <Text style={styles.menuItemText}>PQRS</Text>
                </View>
              </TouchableRipple>
              {/* Configuración */}
              {/* <TouchableRipple onPress={() => { }}>
            <View style={styles.menuItem}>
              <Icon name="cog" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Settings</Text>
            </View>
          </TouchableRipple> */}
            </View>
          </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  iconEditProfile: {
    flexDirection: 'row-reverse',
    marginBottom: 10,
    marginStart: 10,
    marginTop: 10,
    marginRight: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  menuItemTextEditProfile: {
    borderRadius: 15,
    backgroundColor: '#246AFA',
    color: '#FFF',
  },
});