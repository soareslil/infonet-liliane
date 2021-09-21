import React, { useEffect, useState } from "react";
import validation from './validation';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { useAuth } from "../providers/auth";


const Form = ({ submitForm }) => {


    const history = useHistory();
    const { handleSubmit } = useForm();

    const [values, setValues] = React.useState({
        name: "",
        curso: ""
    });

    const { setUser } = useAuth();

    const [errors, setErrors] = useState({});

    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleForm = () => {
        localStorage.setItem("user", JSON.stringify(values));
        setUser(values);
    };


    // const handleChange = (event) => {
    //     setValues({
    //         ...values,
    //         [event.target.name]: event.target.value,
    //         [event.target.curso]: event.target.value
    //     });
    // };

    const handleFormSubmit = () => {
        const valid = validation(values);
        setErrors(valid);
        setDataIsCorrect(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            alert("Atenção! Você está sendo redirecionado...");
            onSubmit();
            submitForm(true);
        }
    });

    const onSubmit = (string) => {
        history.push({
            pathname: `/user`,
            state: { text:  string },
        }
        );
    };


    return (
        <div className="div-father">
            <header className="header">
                <p className="LinkHeaderButton">CDT0445 - GÊNEROS DE PRODUÇÃO IMAGÉTICA E AUDIOVISUAL PARA MÍDIAS DIGITAIS - T01 (2021.2)</p>
            </header>

            <div className="container">
                <div className="login-container">
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
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
                                onChange={(e)=> setValues({name: e.target.value})}
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
                                onChange={(e)=> setValues({curso: e.target.value})}
                                placeholder="Digite seu curso da UFSB aqui!"
                            />
                            {errors.curso && <p className="error">{errors.curso}</p>}
                        </div>


                        <div>

                            <button type="submit"
                                className="submit"
                                onClick={handleForm}>
                                Enviar
                            </button>

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