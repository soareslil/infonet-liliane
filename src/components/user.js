import React from "react";
import { Link } from 'react-router-dom';
import { useAuth } from "../providers/auth";

const User = () => {

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
                <a className="linkHeaderButton" href="http://ufsb.edu.br/" target="_blanked">UFSB-OFICIAL</a>
            </header>

            <form onSubmit={handleSubmit}>
                <div>

                    <h1 className="title">Você foi cadastrado com sucesso!</h1>
                    <br></br>                                 <div>
                       
                        <br></br>

                        <div className="flex-container">
                            <img className="logo-ufsb" alt="logo-ufsb" src="http://ufsb.edu.br/wp-content/uploads/2015/06/Assinatura-Azul-UFSB-Oficial-Vertical-RGB7.jpg"></img>

                            <div className="flex-container-p">


                                <p id="name"> Bem vindo: {user.name} </p>
                                <p id="curso"> Seu curso na UFSB é: {user.curso} </p>
                                {console.log(user.name)}
                            </div>
                        </div>
                    </div>


                    <h3>COMPONENTE CURRICULAR CDT0445 - GÊNEROS DE PRODUÇÃO IMAGÉTICA E AUDIOVISUAL PARA MÍDIAS DIGITAIS - T01 (2021.2)</h3>
                    <br /> <br />

                    <div className="foto-liliane-user">
                        <img className="logo-ufsb" alt="logo-ufsb" src="https://media-exp1.licdn.com/dms/image/C4D03AQHLEUbSs9pOFg/profile-displayphoto-shrink_200_200/0/1595116313104?e=1637798400&v=beta&t=fEtiZipCNuZcrUJOT1sPYvwY9QJJ9MQuxLBMp5oWzrI"></img>

                    </div>


                    <div className="ConteudoUser">

                        <h3> QUEM EU SOU? </h3>
                        <p> <b>Nome:</b> Liliane Soares</p>
                        <p> <b>Idade:</b> 24 anos </p>
                        <p> <b>Curso na UFSB:</b> Psicologia</p> <br />



                        <p> <b> OBJETIVOS DO CC:</b> Compreender conceitos relativos à imagem digital. </p><br />

                        <p> <b>Motivação: </b> Escolhi esse componente por contribuir no desenvolvimento de algumas habilidades profissionais como design, programação, marketing, comunicação, empreendedorismo, edição de foto/video/web, além da aquisição teórica nas áreas supracitadas!</p><br />
                        <p> <b>OBJETIVO DO TRABALHO FINAL:</b> O principal objetivo deste trabalho é a simulação de um ambiente virtual, tal como, redes sociais, onde é necessário a realização de login e senha, neste projeto em específico utilizei como requisito de validação o nome do estudante e o curso na UFSB, para então poder redirecionar para outras páginas e ter acesso aos conteúdos produzidos por mim, durante o quadrimestre 2021.2 junto a turma do CC  CDT0445 - GÊNEROS DE PRODUÇÃO IMAGÉTICA E AUDIOVISUAL PARA MÍDIAS DIGITAIS - T01 </p>
                    </div>
                    <br />

                    <h4> TECNOLOGIAS WEB </h4>
                    <p> REACTJS, HTML , CSS, JAVASCRIPT </p> <br />

                    <div className="foto-tecnologias-user">
                        <img className="logo-ufsb" alt="foto-html" src="data:image/png;base64,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"></img>
                        <img className="logo-ufsb" alt="foto-reactjs" src="https://www.luiztools.com.br/wp-content/uploads/2020/06/reactJS.png"></img>
                        <img className="logo-ufsb" alt="foto-css" src="https://lh3.googleusercontent.com/proxy/T-71JbElevKjkbrJ1NfzsQYPD2tLSaySD393LJDNSJdobiHcfOZoXJ_JhxnU2iVi8HEgxljUUQ67GMaDVDPLU8gihyKRJR4cxWJbCcWRQfXjehXOH1IRtyQtd-I4E2w_5w"></img>
                        <img className="logo-ufsb" alt="foto-javascript" src="https://www.luiztools.com.br/wp-content/uploads/2018/09/javascript.png"></img>
                    </div><br />


                    <h4> Referências Bibliográficas </h4>
                    <p>SARTORI, G.. Homo videns: televisão e pós-pensamento.. . Edusc. 2001</p>
                    <p>DEBORD, G.. A sociedade do espetáculo:. . contraponto. 1997</p>
                    <p>MACHADO, A.. A televisão levada a sério.. . Senac. 2009</p>
                    <p>CANEVACCI, M.. Antropologia da comunicação visual.. . DPA. 2001</p>
                    <p>BALOGH, A. M.. O discurso ficcional na TV.. . edusp. 2002</p>






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