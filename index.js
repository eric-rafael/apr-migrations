//index.js
(async () => {
    const Cliente = require('./models/cliente');

    try {
        const resultadoCreate = await Cliente.create({
            nome: 'cliente',
            email: 'cliente@provedor.com',
            cpf: '12345678911',
            telefone:'12345678'
        })
        console.log(resultadoCreate);
    } catch (error) {
        console.log(error);
    }
})();