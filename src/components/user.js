import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import MyContext from '../contexts/contexts';

const User = () => {

    const { name, curso } = useContext(MyContext);

    function handleSubmit(e) {
        e.preventDefault();
        console.log('vc clicou em enviar!');
    }

    function myAlert() {
        alert("Aguarde, você está sendo redirecionado...")
    };
    console.log(name);
    console.log(curso);



    return (
        <>
            <header className="header">
                <a className="linkHeaderButton" href="http://ufsb.edu.br/" target="_blanked">UFSB-OFICIAL</a>
            </header>

            <form onSubmit={handleSubmit}>
                <div>

                    <h1 className="title">Você foi cadastrado com sucesso!</h1>
                    <br></br>                                 <div>
                        {/* <h2 className="title">MEU PROJETO EM MIDIAS DIGITAIS!</h2> */}
                        <br></br>

                        <div className="flex-container">
                            <img className="logo-ufsb" alt="logo-ufsb" src="http://ufsb.edu.br/wp-content/uploads/2015/06/Assinatura-Azul-UFSB-Oficial-Vertical-RGB7.jpg"></img>

                            <div className="flex-container-p">


                                <p id="name"> Bem vindo: {name} </p>
                                <p id="curso"> Seu curso na UFSB é: {curso} </p>

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