const validation = (values) => {
    let errors = {};
    if(values.name !== undefined && !values.name) errors.name = "O campo é obrigatório";    
    if(values.curso !== undefined && !values.curso) errors.curso = "O campo é obrigatório";
    return errors;
}

export default validation;
