import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    Switch,
    Alert,
    ActivityIndicator
} from "react-native";
import * as Networks from "expo-network";
import { format } from "date-fns";

//Componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DateTimeInput from "../../components/DateTimeInput/index.android";

//API
import Api from "../../services/api";

import Icons from "../../utils/typeIcons";

import styles from "./styles";

export default function Task({ navigation }) {
    const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [type, setType] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState();
    const [load, setLoad] = useState(true);

    async function SeveData() {
        if (!title) return Alert.alert("Defina o nome da tarefa!");

        if (!description) return Alert.alert("Defina a descrição da tarefa!");

        if (!type) return Alert.alert("Defina o tipo da tarefa!");

        if (!type) return Alert.alert("Defina o tipo da tarefa!");

        if (!date) return Alert.alert("Defina uma data para a tarefa!");

        if (!hour) return Alert.alert("Defina um horario para a tarefa!");



        if (id) {
            await Api.put(`/task/${id}`, {
                macaddress,
                done,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`

            }).then(() => {
                navigation.navigate("Home");
            });
        } else {
            await Api.post("/task", {
                macaddress,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`,
            }).then(() => {
                navigation.navigate("Home");
            });
        }


    }


    async function LoadTask() {
        setLoad(true)
        await Api.get(`/task/${id}`).then((response) => {

            setType(response.data.type);
            setTitle(response.data.title);
            setDescription(response.data.description);
            setDate(response.data.when);
            setHour(response.data.when);
            setDone(response.data.done);

        });


    }

    async function getMacAddres() {
        setLoad(true)
        await Networks.getMacAddressAsync().then(mac => {
            setMacaddress(mac);
            setLoad(false);
        });
    }

    async function DeleteTask() {

        await Api.delete(`/task/${id}`).then(() => {
            navigation.navigate("Home");
            Alert.alert('Tarefa removida')
        });

    }


    async function Remove() {

        Alert.alert(
            'Excluir Tarefa \n',

            'Dejesa realmente remover essa tarefa?',
            [
                { text: 'Cancelar' },
                { text: 'Confirmar', onPress: () => DeleteTask() },

            ],
            {
                cancelable: true,
            }
        )

    }

    useEffect(() => {
        getMacAddres();
        if (navigation.state.params) {
            setId(navigation.state.params.idtask);
            LoadTask().then(() => setLoad(false));
        }
    }, [macaddress]);

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Header showBack={true} navigation={navigation} />

            {
                load ?

                    <ActivityIndicator color="#EE6B26" size={50} style={{ marginTop: 150 }} />

                    :
                    <ScrollView style={{ width: "100%" }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{ marginVertical: 25 }}
                        >
                            {Icons.map(
                                (icon, index) =>
                                    icon != null && (
                                        <TouchableOpacity onPress={() => setType(index)}>
                                            <Image
                                                source={icon}
                                                style={[
                                                    styles.imageIcon,
                                                    type && type != index && styles.typeIconInative,
                                                ]}
                                            />
                                        </TouchableOpacity>
                                    )
                            )}
                        </ScrollView>

                        <Text style={styles.label}>Título</Text>
                        <TextInput
                            style={styles.Input}
                            maxLength={30}
                            placeholder="Lembre-me de Fazer..."
                            onChangeText={(text) => setTitle(text)}
                            value={title}
                        />

                        <Text style={styles.label}>Detalhes</Text>
                        <TextInput
                            style={styles.InputArea}
                            maxLength={200}
                            multiline={true}
                            placeholder="Detalhes da Tarefa."
                            onChangeText={(text) => setDescription(text)}
                            value={description}
                        />

                        <DateTimeInput type={"date"} save={setDate} dates={date} />

                        <DateTimeInput type={"hour"} save={setHour} hour={hour} />

                        {id &&
                            <View style={styles.inLine}>
                                <View style={styles.inputInline}>
                                    <Switch
                                        onValueChange={() => setDone(!done)}
                                        value={done}
                                        thumbColor={done ? "#32CD32" : "#EE6B26"}
                                    />
                                    <Text style={styles.switchLabel}>Concluído</Text>
                                </View>
                                <TouchableOpacity onPress={Remove}>
                                    <Text style={styles.removeLabel}>EXCLUÍR</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </ScrollView>
            }

            <Footer icon={"Save"} onPress={SeveData} />
        </KeyboardAvoidingView>
    );
}
