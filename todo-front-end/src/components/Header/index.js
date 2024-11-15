import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import bell from "../../assets/bell.png"

import * as S from './styles'
import api from "../../services/api";
import isConnected from "../../utils/isConnected";

function Header({ clickNotifications }) {
    const [lateCount, setLateCount] = useState();

    async function lateVerifyTasks() {

        await api.get(`/task/filter/late/${isConnected}`)
            .then(response => {

                if (response.data.length <= 0) {
                    setLateCount(0)
                }
                else {
                    setLateCount(response.data.length)
                }


            })

    }

    useEffect(() => {
        lateVerifyTasks();
    })

    async function Logout() {
        localStorage.removeItem('@todo/macaddress');
        window.location.reload();
    }

    return (

        <S.Container>
            <S.Leftside>
                <img src={logo} alt="Logo" />
            </S.Leftside>


            <S.Rightside>
                <Link to="/">INÍCIO</Link>
                <span className="dividir" />

                <Link to="/task">NOVA TAREFA</Link>
                <span className="dividir" />
                {!isConnected ?
                    <Link to="/Qrcode">SINCRONIZAR CELULAR</Link>
                    :
                    <button type="button" onClick={Logout}>SAIR</button>
                }
                <span className="dividir" />
                <button onClick={clickNotifications} id="notification" >
                    <img src={bell} allt="Cino" />
                    <span>{lateCount}</span>
                </button>
            </S.Rightside>

        </S.Container>


    )

}

export default Header;