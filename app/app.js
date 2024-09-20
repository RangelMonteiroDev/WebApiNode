const express = require("express");

const app = express();

const path = require('path');

const Consulta = require("./model/query");

const EntidadePersonPerson = require("./model/EntidadePersonPerson");
const { Int, Bit } = require("mssql");


app.use(express.json());


app.get('/Teste/Conexao/Node/Person/Person/Consulta', async (req, res)=>{

    try {

        const instancia =  new Consulta("SELECT * FROM Person.Person");

        const resultado = await instancia.ExecutarConsulta();

        console.log(resultado);

        res.json(resultado);
        
        
    } catch (error) {

        throw error
        
    }


});

app.post('/Teste/Conexao/Node/Person/Person/Envio', async (req, res) =>{

    try {

        var{
            PersonType,

            NameStyle,
    
            Title,
    
            FirstName,
    
            MiddleName,
    
            LastName,
    
            Suffix,
    
            EmailPromotional
    
        } = req.body;


        EmailPromotional = Int(EmailPromotional);

        NameStyle = Bit(NameStyle);


        const instancia = new EntidadePersonPerson( PersonType,

            NameStyle,
    
            Title,
    
            FirstName,
    
            MiddleName,
    
            LastName,
    
            Suffix,
    
            EmailPromotional);

        const resultado = await instancia.CreateMethod()
    

        console.log(resultado);

        res.json(resultado);
        
    } catch (error) {

        throw error;
        
    }


});

app.put('/Teste/Conexao/Node/Person/Person/Atualizacao', async (req, res)=>{

try {


    var{  

        BusnessEntityID,

        PersonType,

        NameStyle,

        Title,

        FirstName,

        MiddleName,

        LastName,

        Suffix,

        EmailPromotional

    } = req.body;


    EmailPromotional = Int(EmailPromotional);

    BusnessEntityID = Int(BusnessEntityID);


    const instancia = new EntidadePersonPerson(

        PersonType,

        NameStyle,

        Title,

        FirstName,

        MiddleName,

        LastName,

        Suffix,

        EmailPromotional

    );


    const resultado = await instancia.UpdateMethod(BusnessEntityID);
    

    console.log(resultado);

    res.json(resultado);

    
} catch (error) {

    throw error;
    
}

});


app.delete('/Teste/Conexao/Node/Person/Person/Atualizacao', async (req,res) => {


    const BusinessEntityID = req.body;

    try {

        const instancia = new EntidadePersonPerson();

        const resultado = await instancia.DeleteMethod(BusinessEntityID);

        console.log(resultado);

        res.json(resultado);
        
    } catch (error) {

        throw error;
        
    }


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