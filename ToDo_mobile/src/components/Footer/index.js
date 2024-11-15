import React from "react";
import { View, Image, Text, TouchableOpacity } from 'react-native';


import styles from './styles'

import Add from '../../assets/add.png';
import Save from '../../assets/save.png';


export default function Footer({ icon, onPress }) {

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Image source={icon == 'Add' ? Add : Save} style={styles.image} />
            </TouchableOpacity>

            <Text style={styles.text}>
                Organizando sua vida
            </Text>
        </View>
    )
};




