import React, { useMemo } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { format, subHours } from 'date-fns';

import styles from './styles';

//Coleção de Icones
import typeIcons from '../../utils/typeIcons';

export default function TaskCard({ done, title, when, type, onPress }) {

    const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'));
    const hour = useMemo(() => format(subHours(new Date(when), 3), 'HH:mm'));

    return (

        <TouchableOpacity style={[styles.card, done && styles.cardDone]} onPress={onPress}>
            <View style={styles.cardLeft}>
                <Image source={typeIcons[type]} style={styles.typeActive} />
                <Text style={styles.cardTitle}>{title}</Text>
            </View>

            <View style={styles.cardRight}>
                <Text style={styles.cardDate}>{date}</Text>
                <Text style={styles.cardTime}>{hour}</Text>
            </View>
        </TouchableOpacity>

    )

}