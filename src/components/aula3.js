import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../providers/auth";


const Aula3 = () => {

    const { user } = useAuth();

    function handleSubmit(e) {
        e.preventDefault();
        console.log('vc clicou em enviar!');
    }

    function myAlert() {
        alert("Aguarde, você está sendo redirecionado...")
    };


    return (
        <>
            <header className="header">
                <Link to="/user">
                    <button type="button" onClick={myAlert}>
                        página inicial
                    </button>
                </Link>
                <p className="LinkHeaderButton">CDT0445 - GÊNEROS DE PRODUÇÃO IMAGÉTICA E AUDIOVISUAL PARA MÍDIAS DIGITAIS - T01 (2021.2)</p>
            </header>

            <form onSubmit={handleSubmit}>
                <div>


                    <h1 className="title">TITULO AULA 3 AQUI </h1>
                    <br></br>


                    <div className="flex-container">
                        <img className="logo-ufsb" alt="logo-ufsb" src="http://ufsb.edu.br/wp-content/uploads/2015/06/Assinatura-Azul-UFSB-Oficial-Vertical-RGB7.jpg"></img>

                        <div className="flex-container-p">
                            <p id="name"> Bem vindo: {user.name} </p>
                            <p id="curso"> Seu curso na UFSB é: {user.curso} </p>
                        </div>
                    </div>
                    <br></br> <br></br>


                    <p>TEXTO AQUI SOBRE O QUE SE TRATA MEU PROJETO</p>
                </div>

                <div>
                    <Link to="/aula4">
                        <button type="submit" className="submit-user" onClick={myAlert}>
                            próxima página
                        </button>
                    </Link>
                </div>
            </form>
            <br></br> <br></br>
            <br></br><br></br>

            <footer className="footer">
                <a className="linkFooterButton" href="http://ufsb.edu.br/" target="_blanked">UFSB-OFICIAL</a>
                <p className="linkFooterButton">Made by Liliane Soares</p>
            </footer>

        </>
    )
}

export default Aula3;