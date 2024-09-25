

const subControllerPerson = require("./subControllerPerson");


const rotaGetPerson = '/Teste/Conexao/Node/Person/Person/Consulta';

const rotaPostPerson = '/Teste/Conexao/Node/Person/Person/Envio';

const rotaPutPerson = '/Teste/Conexao/Node/Person/Person/Atualizacao';

const rotaDeletePerson = '/Teste/Conexao/Node/Person/Person/Exclusao';



module.exports = (app)=>{

app.get('/Teste/Conexao/Node/Person/Person/Consulta', async(req, res)=>{

    console.log("rodando")

    const instancia = new subControllerPerson();

    const resultado = await instancia.GetMethod();

    res.json(resultado);

})


app.post('/Teste/Conexao/Node/Person/Person/Envio', async(req, res)=>{

    const instancia = new subControllerPerson();

    const resultado = await instancia.PostMethod(req);

    res.json(resultado);

})


app.put('/Teste/Conexao/Node/Person/Person/Atualizacao', async(req, res)=>{

    const instancia = new subControllerPerson();

    const resultado = await instancia.PostMethod(req);

    res.json(resultado);


})


app.delete('/Teste/Conexao/Node/Person/Person/Exclusao', async(req, res)=>{

    const instancia = new subControllerPerson();

    const resultado = await instancia.PostMethod(req);

    res.json(resultado);


})


}