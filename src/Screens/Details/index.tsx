import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useSelector, useDispatch} from 'react-redux'; // useSelecttor é um hook
import addCupom  from '../../Store/Modules/Cupom/Actions'; // importa o action
import { IRootStore } from '../../Store';
import { IGlobalStoreId } from '../../Store/Modules/ListDetails/Types';

import api from '../../Services/api';

import { IListStoreDetails } from '../../Types';
import { ICupom } from '../../Store/Modules/Cupom/Types';

const Details: React.FC = () => {
    const dispatch = useDispatch();
    const storeId = useSelector(({GlobalStoreID}: IRootStore) => GlobalStoreID.store_id); // Usa o valor que está dentro do estado do redux
    const cupom = useSelector(({GlobalCupom}: IRootStore) => GlobalCupom.cupom); // Usa o valor que está dentro do estado do redux
    
    const handleCupom = () => {
        const newCupom: ICupom = {
            cupom: `${storeData.storeDetails?.label.trim().replace(/\s/g,'').toUpperCase()}${storeData.value}`
        }
        dispatch(addCupom(newCupom));
    };
    const [storeData, setStoreData] = useState<IListStoreDetails>(
        {} as IListStoreDetails,
    );

    useEffect(() => {
        dispatch(addCupom({cupom: ''})); // Limpa o cupom
        api
            .get(`discounts?store=${storeId}`)
            .then(response => {
                if (response.data.length > 0) {
                    api
                        .get(`stores/${storeId}`)
                        .then(res => {
                            setStoreData({ ...response.data[0], storeDetails: res.data });
                        })
                        .catch(e => console.log(e));
                }
            })
            .catch(e => console.log(e));
    }, [storeId]);

    const dateParse = (value: string) => {
        return Intl.DateTimeFormat('pt-BR').format(new Date(value));
    };

    return (
        <View style={styles.default}>
            <Text style={styles.title}>{storeData.storeDetails?.label}</Text>
            <Image
                source={{ uri: storeData.storeDetails?.logo }}
                style={styles.logoIMG}
            />
            <Text style={styles.discountLabel}>{storeData.value}% de desconto</Text>
            <Text style={styles.inforDateails}>
                Valido até {storeData?.expires_in && dateParse(storeData?.expires_in)}
            </Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={handleCupom}
            >
                <Text style={styles.buttonText}>Gerar cupom</Text>
            </TouchableOpacity>
            <Text>
                {cupom}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    default: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c73434',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    },
    discountLabel: {
        fontWeight: 'bold',
        fontSize: 35,
        color: 'white',
    },
    inforDateails: {
        fontSize: 18,
    },
    logoIMG: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
    },
    button: {
        backgroundColor: "#A370F7",
        padding: 15,
        borderRadius: 7,
        alignItems: "center",
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default Details;