import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions, ClippingRectangle } from 'react-native';

/* import { openDatabase } from 'react-native-sqlite-storage';
//Connction to access the pre-populated shop_db.db
var db = openDatabase({ name: 'shop_db.db', createFromLocation : 1}); */
var { width } = Dimensions.get("window")
// import icons
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

export default class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemProductos: []
        };
    }

    componentDidMount() {
        AsyncStorage.getItem('cart').then((datacart)=>{
            if (datacart !== null) {
                const listProductos = JSON.parse(datacart);
                this.setState({itemProductos: listProductos})    
            }
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    
    componentWillUnmount() {
        console.log("sale umonut");
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ height: 20 }} />
                <Text style={{ fontSize: 32, fontWeight: "bold", color: "#33c37d" }}>Cart food</Text>
                <View style={{ height: 10 }} />

                <View style={{ flex: 1 }}>

                    <ScrollView>

                        {
                            this.state.itemProductos.map((item, i) => {
                                return (
                                    <View style={{ width: width - 20, margin: 10, backgroundColor: 'transparent', flexDirection: 'row', borderBottomWidth: 2, borderColor: "#cccccc", paddingBottom: 10 }}>
                                        <Image resizeMode={"contain"} style={{ width: width / 3, height: width / 3 }} source={{ uri: item.food.image }} />
                                        <View style={{ flex: 1, backgroundColor: 'trangraysparent', padding: 10, justifyContent: "space-between" }}>
                                            <View>
                                                <Text style={{ fontWeight: "bold", fontSize: 20 }}>{item.food.name}</Text>
                                                <Text>Lorem Ipsum de food</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ fontWeight: 'bold', color: "#33c37d", fontSize: 20 }}>${item.price * item.quantity}</Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <TouchableOpacity onPress={() => this.onChangeQual(i, false)}>
                                                        <Icon name="ios-remove-circle" size={35} color={"#33c37d"} />
                                                    </TouchableOpacity>
                                                    <Text style={{ paddingHorizontal: 8, fontWeight: 'bold', fontSize: 18 }}>{item.quantity}</Text>
                                                    <TouchableOpacity onPress={() => this.onChangeQual(i, true)}>
                                                        <Icon name="ios-add-circle" size={35} color={"#33c37d"} />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })
                        }

                        <View style={{ height: 20 }} />
                        <Text style={{
                                fontSize: 28,
                                fontWeight: "bold",
                                color: '#33c37d',
                                textAlign: 'center'
                            }}>
                                ${this.onLoadTotal()}
                   </Text>

                        <TouchableOpacity style={{
                            backgroundColor: "#33c37d",
                            width: width - 40,
                            alignItems: 'center',
                            padding: 10,
                            borderRadius: 5,
                            margin: 20
                        }}>
                            <Text style={{
                                fontSize: 24,
                                fontWeight: "bold",
                                color: 'white'
                            }}>
                                CHECKOUT
                   </Text>
                        </TouchableOpacity>

                        <View style={{ height: 20 }} />
                    </ScrollView>

                </View>

            </View>
        );
    }
    onLoadTotal(){
        var total = 0;
        const cart = this.state.itemProductos;

        for(var i=0; i<cart.length; i++) total+= (cart[i].price*cart[i].quantity);
        return total;
    }
    onChangeQual(i, type) {
        const dataCar = this.state.itemProductos
        let cantd = dataCar[i].quantity;

        if (type) {
            cantd = cantd + 1
            dataCar[i].quantity = cantd
            this.setState({ dataCart: dataCar })
        }
        else if (type == false && cantd >= 2) {
            cantd = cantd - 1
            dataCar[i].quantity = cantd
            this.setState({ dataCart: dataCar })
        }
        else if (type == false && cantd == 1) {
            dataCar.splice(i, 1)
            this.setState({ dataCart: dataCar })
        }
    }
}