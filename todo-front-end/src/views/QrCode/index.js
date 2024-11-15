import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import QR from 'qrcode.react';
import * as S from './styles';
import swal from 'sweetalert';


//Components
import Header from "../../components/Header";

import Footer from "../../components/Footer";





function QrCode(lateCount) {

    const [mac, setMac] = useState();
    const Navigate = useNavigate();

    const [redirect, setRedirect] = useState(false);

    async function SaveMac() {
        if (!mac)
            swal("Você precisa informar o número que apareceu no seu celular!")
        else {
            await localStorage.setItem('@todo/macaddress', mac);
            setRedirect(true);
            window.location.reload();
        }


    }

    return (
        <S.container>
            {redirect && Navigate("/")}
            <Header />
            <S.content >
                <h1>CAPITURE O QRCODE PELO APP</h1>
                <S.QrCodeArea>
                    <QR value='getmacaddress' size={350} />
                </S.QrCodeArea>

                <S.ValidationCode>
                    <span>Digite o número que aparece no celular</span>
                    <input type="text" onChange={e => setMac(e.target.value)} value={mac} />
                    <button type="button" onClick={SaveMac}>SINCRONIZAR</button>
                </S.ValidationCode>

                <p>Suas atividade serão sincronizadas com as do seu celular</p>
            </S.content>
            <Footer />
        </S.container>

    )

}

export default QrCode;