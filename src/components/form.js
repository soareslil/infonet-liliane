import React , { useEffect, useState }from "react";
import { Link } from 'react-router-dom';
import validation from './validation';

const Form = ({ submitForm }) => {

    const [values, setValues] = React.useState({
        name: "",
        curso: ""
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
        alert("Aguarde, você está sendo redirecionado...");
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) submitForm(true);
    }, [dataIsCorrect, errors, submitForm]);

    const onChangeName = event => {
        localStorage.setItem('NameLocalStorage', event.target.value);

        setValues(event.target.value);
    };

    const onChangeCurso = event => {
        localStorage.setItem('CursoLocalStorage', event.target.value);

        setValues(event.target.value);
    };


    return (
        <div className="div-father">
            <header className="header">
                <p className="LinkHeaderButton">CDT0445 - GÊNEROS DE PRODUÇÃO IMAGÉTICA E AUDIOVISUAL PARA MÍDIAS DIGITAIS - T01 (2021.2)</p>
            </header>

            <div className="container">
                <div className="login-container">
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <h1 className="title">Cadastre-se aqui!</h1>
                        </div>
                        <br></br>
                        <div className="name">
                            <label className="label">Nome Completo</label>
                            <input className="input-name"
                                name="name"
                                type="text"
                                value={values.name}
                                onChange={handleChange}
                                onChangeStorage={onChangeName}
                                placeholder="Digite seu nome completo aqui!"
                            />
                            {errors.name && <p className="error">{errors.name}</p>}
                        </div>
                        <br></br>

                        <div className="curso">
                            <label className="label">Curso</label>
                            <input className="input-curso"
                                name="curso"
                                type="text"
                                value={values.curso}
                                onChange={handleChange}
                                onChangeStorage={onChangeCurso}
                                placeholder="Digite seu curso da UFSB aqui!"
                            />
                            {errors.curso && <p className="error">{errors.curso}</p>}
                        </div>


                        <div>
                            <Link to="/user">
                                <button type="button"
                                    className="submit"
                                    onClick={handleFormSubmit}
                                >
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