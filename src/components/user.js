import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import MyContext from '../contexts/contexts';

const User = () => {

    const { name, setName, curso, setCurso } = useContext(MyContext);

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
                <a className="linkHeaderButton" href="http://ufsb.edu.br/" target="_blanked">UFSB-OFICIAL</a>
            </header>

            <form onSubmit={handleSubmit}>
                <div>

                    <h1 className="title">Você foi cadastradx com sucesso!</h1>
                    <br></br>                                 <div>
                        {/* <h2 className="title">MEU PROJETO EM MIDIAS DIGITAIS!</h2> */}
                        <br></br>

                        <div className="flex-container">
                            <img className="logo-ufsb" alt="logo-ufsb" src="http://ufsb.edu.br/wp-content/uploads/2015/06/Assinatura-Azul-UFSB-Oficial-Vertical-RGB7.jpg"></img>

                            <div className="flex-container-p">
                                {/* <p id="name">{`Bem vindx: ${localStorage.getItem("NameLocalStorage")}`}</p>
                                <p id="curso">{`Seu curso na UFSB é: ${localStorage.getItem("CursoLocalStorage")}`}</p> */}

                                <p id="name">{`Bem vindx: ${name}`}</p>
                                <p id="curso">{`Seu curso na UFSB é: ${curso}`}</p>
                                
                            </div>
                        </div>
                    </div>


                    <p> TEXTO AQUI SOBRE O COMPONENTE CURRICULAR CDT0445 - GÊNEROS DE PRODUÇÃO IMAGÉTICA E AUDIOVISUAL PARA MÍDIAS DIGITAIS - T01 (2021.2)
                    </p>
                </div>

                <br></br><br></br>

                <div>
                    <Link to="/aula1">
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

export default User;