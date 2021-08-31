import React from 'react';
import { Link } from 'react-router-dom';


const Form = () => {

    function handleSubmit(e) {
        e.preventDefault();
        console.log('vc clicou em enviar!');
    }

    function myAlert() {
        alert("Aguarde, você está sendo redirecionado...")
    };

    const [value, setValue] = React.useState('');

    const onChangeName = event => {
        localStorage.setItem('NameLocalStorage', event.target.value);

        setValue(event.target.value);
    };

    const onChangeCurso = event => {
        localStorage.setItem('CursoLocalStorage', event.target.value);

        setValue(event.target.value);
    };

    return (
        <div className="div-father">
            <header className="header">
                <p className="LinkHeaderButton">CDT0445 - GÊNEROS DE PRODUÇÃO IMAGÉTICA E AUDIOVISUAL PARA MÍDIAS DIGITAIS - T01 (2021.2)</p>
            </header>

            <div className="container">
                <div className="login-container">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <h1 className="title">Cadastre-se aqui!</h1>
                        </div>
                        <br></br>
                        <div className="name">
                            <label className="label">Nome Completo</label>
                            <input className="input-name"
                                value={value.name}
                                type="text"
                                onChange={onChangeName}
                                placeholder="Digite seu nome completo aqui!"
                                name="fullname"
                            />
                        </div>
                        <br></br>

                        <div className="curso">
                            <label className="label">Curso</label>
                            <input className="input-curso"
                                value={value.curso}
                                type="text"
                                onChange={onChangeCurso}
                                placeholder="Digite seu curso da UFSB aqui!"
                                name="curso"
                            />
                        </div>


                        <div>
                            <Link to="/user">
                                <button type="submit" className="submit" onClick={myAlert}>
                                    Enviar
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
                </div>
            </div>
        </div>


    )

}

export default Form;