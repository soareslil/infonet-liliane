import form from './form';


const validation = (values) => {
    let errors = {};
    if(!values.name) errors.name="Nome eh obrigatorio!!";
    if(!values.curso) errors.curso="Curso eh obrigatorio!!";
    return errors;
}

export default validation;
