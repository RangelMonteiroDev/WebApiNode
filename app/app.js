const express = require("express");

const app = express();

const Consulta = require("./model/query");


const BusinessEntityID = require("./model/BusinessEntityID");

const rotas = require("./controllers/rotas");

app.use(express.json());


app.post('/Teste/Conexao/Node/BusinessEntity/Inserir', async (req, res)=>{

try {

    var{rowguid, ModifiedDate} = req.body;

    const instancia = new BusinessEntityID(rowguid, ModifiedDate);

    const resultado = await instancia.CreateMethod();

    console.log(resultado);

    res.json(resultado);


} catch (error) {

    throw error;
    
}



})


const httpRotaGetPerson = 'http://localhost:3000/Teste/Conexao/Node/Person/Person/Consulta';

const httpRotaPostPerson = 'http://localhost:3000/Teste/Conexao/Node/Person/Person/Envio';

const httpRotaPutPerson = 'http://localhost:3000/Teste/Conexao/Node/Person/Person/Atualizacao';

const httpRotaDeletePerson = 'http://localhost:3000/Teste/Conexao/Node/Person/Person/Exclusao';




app.get('/master-rota/teste/node', async (req, res)=>{
    
    const arrayRotas = [
        
        httpRotaGetPerson, httpRotaPostPerson, 
        
        httpRotaPutPerson, httpRotaDeletePerson
    
    ]

res.json(arrayRotas);



})



app.get('/Teste/Conexao/Node/Person/EmailAddress', async (req, res)=>{

    try {

        const instancia = new Consulta("SELECT * FROM Person.EmailAddress");

        const resultado = await instancia.ExecutarConsulta();

        console.log(resultado);

        res.json(resultado);
        
    } catch (error) {

        throw error;
        
    }


});


app.get('/Teste/Conexao/Node/Person/Password', async (req,res)=>{


    try {

        const instancia = new Consulta;

        const resultado = await instancia.ExecutarConsulta();

        console.log(resultado);

        res.json(resultado);
        
    } catch (error) {

        throw error
        
    }



})


rotas(app)


app.listen(3000, ()=>{

    console.log("App rodando nas rotas:")

    const loopDeRotas = ['http://localhost:3000/Teste/Conexao/Node/Person/Person\n',

    'http://localhost:3000/Teste/Conexao/Node/Person/EmailAddress\n',

    'http://localhost:3000/Teste/Conexao/Node/Person/Person/Envio\n'
 ];

   loopDeRotas.forEach(element => {
    
        console.log(element);

   });
})