import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Alert, StyleSheet } from 'react-native';

import { BarCodeScanner } from 'expo-barcode-scanner';

import * as Networks from "expo-network";
import styles from "./styles";

export default function QrCode({ navigation }) {
    const [hasPermission, setHaspermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    async function getMacAddres() {

        await Networks.getMacAddressAsync().then(mac => {

            Alert.alert(`Seu número é: ${mac}`);

        });
    }

    useEffect(() => {

        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHaspermission(status === 'granted')
        })();

    }, []);

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true)
        if (data == 'getmacaddress') {
            getMacAddres()
        } else {
            Alert.alert('QrCode Inválido!')
        }
    }

    return (
        <View style={styles.container}>

            <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={StyleSheet.absoluteFillObject} />

            <View style={styles.Header}>

                <Text style={styles.HeaderText}>
                    Sincronizar com minha conta na Web!
                </Text>

            </View>

            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.textButton}>VOLTAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={scanned ? styles.buttonScanActive : styles.buttonScanInative} onPress={() => setScanned(false)}>
                    <Text style={styles.textButton}>SCAN NOVAMENTE</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}