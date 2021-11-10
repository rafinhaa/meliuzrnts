import React, {useState, useEffect} from "react";

import { View, Text, StyleSheet, Image } from "react-native";

import api from "../../Services/api";

import { IListStoreDetails, stores} from "../../Types";

const Details: React.FC = () => {
    const [storeValue, setStoreValue] = useState(1);
    const [storeData, setStoreData] = useState<stores[]>([]);

    useEffect(() => {
        api.get(`/stores/?_embed=discounts`).then(response => {
            setStoreData(response.data);
            console.log(storeData);
        }).catch(error => console.log(error));
    }, []);

    const dateParse = (date:string) => {
        return Intl.DateTimeFormat('pt-BR').format(new Date(date));
    }

    return (
        <View style={styles.default} >
            {
                storeData.map((store,index) => (
                    <View key={index} style={styles.styleDetails} >
                        <Text style={styles.title}>{store.label}</Text>
                        <Image source={require("../../Assets/Images/desconto.png")} />
                        {
                            store.discounts?.map((discount,index) => (
                                <>
                                    <Text style={styles.discontLabel} >{discount.value}% de desconto</Text>
                                    <Text>R$: {discount.value}</Text>
                                    <Text style={styles.infoDetails} >Válido até {discount.expires_in}</Text>
                                </>
                            )) 
                        }
                    </View>
                ))
            }
            {
                // storeData.map((store,index) => (
                //     <View key={index} style={styles.styleDetails} >
                //         <Text style={styles.title}>Details Screen</Text>
                //         <Image source={require("../../Assets/Images/desconto.png")} />
                //         <Text style={styles.discontLabel} >{store.value}% de desconto</Text>
                //         <Text>R$: {store.value}</Text>
                //         <Text style={styles.infoDetails} >Válido até {dateParse(store.expires_in)}</Text>
                //     </View>
                // ))
            }
        </View>
    );
};

const styles = StyleSheet.create({
    default: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    styleDetails: {
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