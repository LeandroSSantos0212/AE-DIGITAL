import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import *as Networks from 'expo-network';
import styles from './styles';

//COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskCard from '../../components/TaskCard';

//API
import Api from '../../services/api';


export default function Home({ navigation }) {

    const [Filter, setFilter] = useState('today');
    const [tasks, setTasks] = useState([]);
    const [load, setLoad] = useState(false);
    const [lateCount, setLateCount] = useState();
    const [macaddress, setMacaddress] = useState();

    async function getMacAddres() {
        await Networks.getMacAddressAsync().then(mac => {
            setMacaddress(mac);
        })
    }

    async function loadTasks() {
        setLoad(true);
        await Api.get(`/task/filter/${Filter}/${macaddress}`).then(response => {
            setTasks(response.data);
            setLoad(false);
        });
    }

    async function lateVerifyTasks() {

        await Api.get(`/task/filter/late/${macaddress}`)
            .then(response => {

                if (response.data.length <= 0) {
                    setLateCount(0)
                }
                else {
                    setLateCount(response.data.length)
                }


            })

    }

    function Notification() {

        setFilter('late');

    }

    function New() {
        navigation.navigate('Task');
    }

    function Show(id) {
        navigation.navigate('Task', { idtask: id });
    }




    useEffect(() => {
        loadTasks().then(() => {
            getMacAddres();
        });
        lateVerifyTasks();
    }, [Filter, macaddress])

    return (

        <View style={styles.container}>
            <Header showNotification={true} showBack={false} pressNotification={Notification} late={lateCount} navigation={navigation} />
            <View style={styles.filter}>
                <TouchableOpacity onPress={() => setFilter('all')}>
                    <Text style={Filter === 'all' ? styles.FilterTextActived : styles.FilterTextInative}> Todos </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFilter('today')}>
                    <Text style={Filter === 'today' ? styles.FilterTextActived : styles.FilterTextInative}> Hoje </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFilter('week')}>
                    <Text style={Filter === 'week' ? styles.FilterTextActived : styles.FilterTextInative}>Semana </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFilter('month')}>
                    <Text style={Filter === 'month' ? styles.FilterTextActived : styles.FilterTextInative}> Mês </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFilter('year')}>
                    <Text style={Filter === 'year' ? styles.FilterTextActived : styles.FilterTextInative}> Ano </Text>
                </TouchableOpacity>

            </View>

            <View style={styles.title}>

                <Text style={styles.titleText}>TAREFAS {Filter === 'late' && ' ATRASADAS'}</Text>

            </View>

            <ScrollView style={styles.content} contentContainerStyle={{ alignItems: 'center' }}>

                {
                    load
                        ?
                        <ActivityIndicator color='#EE6B26' size={50} />
                        :
                        tasks.map(t => (
                            <TaskCard type={t.type} title={t.title} when={t.when} done={t.done} onPress={() => Show(t._id)} />
                        ))

                }


            </ScrollView>


            <Footer icon={'Add'} onPress={New} />
        </View>

    )
}