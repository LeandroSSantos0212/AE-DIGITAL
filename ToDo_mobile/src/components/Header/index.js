import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles'

//ICONES 

import Logo from '../../assets/logo.png';
import Bell from '../../assets/bell.png';
import QrCode from '../../assets/qrcode.png';
import Back from '../../assets/back.png';


export default function Header({ showNotification, showBack, pressNotification, late, navigation }) {

    function Backs() {
        navigation.navigate('Home');
    }

    function OpenQrcode() {
        navigation.navigate('QrCode');
    }
    return (
        <View style={styles.header}>
            {
                showBack ?
                    <TouchableOpacity style={styles.leftIcon} onPress={Backs}>
                        <Image source={Back} style={styles.leftIconImage} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.leftIcon} onPress={OpenQrcode}>
                        <Image source={QrCode} style={styles.leftIconImage} />
                    </TouchableOpacity>
            }
            <Image source={Logo} style={styles.logo} />
            {
                showNotification && late > 0 &&

                <TouchableOpacity style={styles.notification} onPress={pressNotification}>
                    <Image source={Bell} style={styles.notificationImage} />
                    <View style={styles.circle}>
                        <Text style={styles.notificationText}>{late}</Text>
                    </View>
                </TouchableOpacity>
            }
        </View>


    )

}