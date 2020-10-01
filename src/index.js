import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

var { width } = Dimensions.get("window")

// import Components
import Food from './Food'
import Cart from './Cart'
import Profile from './Profile'
// unable console yellow
console.disableYellowBox = true;
// import icons
import Icon from 'react-native-vector-icons/Ionicons';
import { openDatabase } from 'react-native-sqlite-storage';
//Connction to access the pre-populated shop_db.db
var db = openDatabase({ name: 'shop_db.db', createFromLocation : 1});

export default class Index extends Component {

  constructor(props) {
    super(props);
    db.transaction(function (tx) {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS orders(name TEXT, price NUMERIC, url_image TEXT, category TEXT, quantity INTEGER, description TEXT)',
        [],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected> 0) {
            console.log("SE CREO BD")
          } else alert('Registration Failed');
        }
      );
    });
    this.state = {
      module: 1,
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {
          this.state.module == 1 ? <Food />
            : this.state.module == 2 ? <Cart />
                : <Profile />
        }
        <View style={styles.bottomTab}>
          <TouchableOpacity style={styles.itemTab} onPress={() => this.setState({ module: 1 })}>
            <Icon name="md-restaurant" size={30} color={this.state.module == 1 ? "#900" : "gray"} />
            <Text>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemTab} onPress={() => this.setState({ module: 2 })}>
            <Icon name="md-basket" size={30} color={this.state.module == 2 ? "#900" : "gray"} />
            <Text>Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemTab} onPress={() => this.setState({ module: 4 })}>
            <Icon name="person-circle-outline" size={30} color={this.state.module == 4 ? "#900" : "gray"} />
            <Text>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bottomTab: {
    height: 60,
    width: width,
    backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
  },
  itemTab: {
    width: width / 3,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})