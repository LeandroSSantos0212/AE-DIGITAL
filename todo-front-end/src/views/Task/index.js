import React, { useState, useEffect } from "react";
import { useParams, Navigate } from 'react-router-dom';
import { format } from 'date-fns';
import swal from 'sweetalert';
import api from "../../services/api";
import isConnected from "../../utils/isConnected"

//Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TypeIcons from "../../utils/typeIcon";

import iconCalendar from "../../assets/calendar.png"
import iconClock from "../../assets/clock.png"


import * as S from './styles'

function Task({ match }) {

    const [redirect, setRedirect] = useState(false);
    const [type, setType] = useState();
    const { id } = useParams();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hours, setHours] = useState();



    async function LoadTasksDetails() {

        await api.get(`/task/${id}`)
            .then(response => {
                setType(response.data.type)
                setDone(response.data.done)
                setTitle(response.data.title)
                setDescription(response.data.description)
                setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
                setHours(format(new Date(response.data.when), 'HH:mm'))
            })

    }

    async function Save() {

        if (!title)
            return swal("Você precisa informar o título da tarefa");
        else if (!description)
            return swal("Você precisa informar a descrição");
        else if (!type)
            return swal("Você precisa selecionar o tipo da tarefa");
        else if (!date)
            return swal("Você precisa definir a data da tarefa");
        else if (!hours)
            return swal("Você precisa definir a hora da tarefa");


        if (!id) {
            await api.post('/task', {
                macaddress: isConnected,
                type,
                title,
                description,
                when: `${date}T${hours}:00.000`
            }).then(() =>
                setRedirect(true, swal({
                    title: "Certo!",
                    text: "Tarefa cadastrada com Sucesso!",
                    icon: "success",
                    button: "OK",
                }))
            )
        }

        else if (id) {
            await api.put(`/task/${id}`, {
                macaddress: isConnected,
                done,
                type,
                title,
                description,
                when: `${date}T${hours}:00.000`
            }).then(() =>

                swal({
                    title: "Tem certeza?",
                    text: "Tarefa será atualizada",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            setRedirect(true, swal("Tarefa atualizada com Sucesso!"), {
                                icon: "success",
                            });
                        } else {
                            swal("Tarefa não foi atualizada!");
                        }
                    })


            )
        } else {
            swal("Nenhuma tarefa cadastrada");
        }

    }

    async function RemoveTask() {
        if (id)
            await api.delete(`/task/${id}`).then(() =>
                swal({
                    title: "Tem certeza?",
                    text: "Tarefa será Excluida",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            setRedirect(true, swal("Tarefa excluida com Sucesso!"), {
                                icon: "success",
                            });
                        } else {
                            swal("Tarefa não foi excluida!");
                        }
                    })


            )


    }


    useEffect(() => {
        if (!isConnected)
            setRedirect(true);
        LoadTasksDetails();
    }, [])

    return (

        <S.container>
            {redirect && <Navigate to="/" />}
            <Header />

            <S.Form>
                <S.TypeIcons>
                    {
                        TypeIcons.map((icon, index) => (
                            index > 0 &&
                            <button type="button" onClick={() => setType(index)}>
                                <img src={icon} alt="Tipo da Tarefa" className={type && type !== index && 'inative'} />
                            </button>
                        ))
                    }
                </S.TypeIcons>

                <S.InputGroup>
                    <span>Título</span>
                    <input type="text" placeholder="Titulo da Tarefa"
                        onChange={e => setTitle(e.target.value)} value={title} />
                </S.InputGroup>

                <S.TextAreaGroup>
                    <span>Descrição</span>
                    <textarea row={20} placeholder="Detalhes da Tarefa"
                        onChange={e => setDescription(e.target.value)} value={description} />
                </S.TextAreaGroup>

                <S.InputGroup>
                    <span>Data</span>
                    <input type="date" onChange={e => setDate(e.target.value)} value={date} />
                </S.InputGroup>

                <S.InputGroup>
                    <span>Hora</span>
                    <input type="time" onChange={e => setHours(e.target.value)} value={hours} />

                </S.InputGroup>

                <S.Options>
                    <div>
                        <input type="checkbox" checked={done} onChange={() => setDone(!done)} />
                        <span>CONCLUÍDO</span>
                    </div>
                    {id && <button type="button" onClick={RemoveTask}>EXCLUIR</button>}

                </S.Options>
                <S.Save>
                    <button type="button" onClick={Save}>SALVAR</button>
                </S.Save>

            </S.Form>

            <Footer />

        </S.container>



    )
}

export default Task;
