import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

import api from "../../services/api";

import isConnected from "../../utils/isConnected";
//Components

import Header from "../../components/Header";

import Footer from "../../components/Footer";

import FilterCard from "../../components/FilterCard";

import TaskCard from "../../components/TaskCard";



import * as S from './styles'


function Home() {

    const [filterActived, setFilterActived] = useState('all');
    const [tasks, setTasks] = useState([]);
    const [redirect, setRedirect] = useState(false);
    const Navigate = useNavigate();

    async function loadTasks() {

        await api.get(`/task/filter/${filterActived}/${isConnected}`)
            .then(response => {
                setTasks(response.data);
            })
    }




    function Notifications() {
        setFilterActived('late');
    }


    useEffect(() => {
        loadTasks();
        if (!isConnected) {
            setRedirect(true);

        }




    }, [filterActived, loadTasks]);

    return (

        <S.container>
            {redirect && Navigate("/QrCode")}
            <Header clickNotifications={Notifications} />
            <S.FilterArea>
                <button type="button" onClick={() => setFilterActived("all")}>
                    <FilterCard title="Todos" actived={filterActived == 'all'} />
                </button>

                <button type="button" onClick={() => setFilterActived("today")}>
                    <FilterCard title="Hoje" actived={filterActived == 'today'} />
                </button>

                <button type="button" onClick={() => setFilterActived("week")}>
                    <FilterCard title="Semana" actived={filterActived == 'week'} />
                </button>


                <button type="button" onClick={() => setFilterActived("month")}>
                    <FilterCard title="Mês" actived={filterActived == 'month'} />
                </button>

                <button type="button" onClick={() => setFilterActived("year")}>
                    <FilterCard title="Ano" actived={filterActived == 'year'} />
                </button>
            </S.FilterArea>

            <S.Title>

                <h3>{filterActived == 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>

            </S.Title>

            <S.Content>
                {
                    tasks.map(task => (
                        <Link to={`/task/${task._id}`}>
                            <TaskCard type={task.type} title={task.title} when={task.when} done={task.done} />
                        </Link>
                    ))
                }
            </S.Content>
            <Footer />

        </S.container>



    )
}

export default Home;
