import React, {useState, useEffect} from "react";

import { View, Text, StyleSheet, Image } from "react-native";

import api from "../../Services/api";

import { IListStoreDetails } from "../../Types";

const Details: React.FC = () => {
    const [storeValue, setStoreValue] = useState(1);
    const [storeDetails, setStoreDetails] = useState<IListStoreDetails[]>([]);

    useEffect(() => {
        api.get(`discounts?store=1`).then(response => {
            setStoreDetails(response.data);
            console.log(storeDetails);
        }).catch(error => console.log(error));
    }, [storeValue]);

    return (
        <View style={styles.default} >
            <Text style={styles.title}>Details Screen</Text>
            <Image source={require("../../Assets/Images/desconto.png")} />
            <Text style={styles.discontLabel} >15% de desconto</Text>
            <Text style={styles.infoDetails} >R$: 10,00</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    default: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 25,
        color: "red",
    },
    discontLabel: {
        fontWeight: "bold",
        fontSize: 35,
        color: "red",
    },
    infoDetails: {
        fontSize: 18,
    }
});

export default Details;
