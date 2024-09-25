const express = require("express");

const app = express();

const sql = require("mssql");

const config = require("../model/conexao");

const Consulta = require("../model/query");

const EntidadePersonPerson = require("../model/EntidadePersonPerson");



app.use(express.json());


class SubContollerPerson {


         constructor () 
    {
    
        
    }

        async GetMethod    ()  {

                console.log("GetMethod de Person está rodando");

                try {

                    const instancia =  new Consulta("SELECT * FROM Person.Person");
            
                    const resultado = await instancia.ExecutarConsulta();
            
                    console.log(resultado);
            
                    return resultado;
                    
                    
                } catch (error) {
            
                    throw error
                    
                }
            


        }

        async PostMethod    (req) {
                
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


                EmailPromotional = parseInt(EmailPromotional);

                NameStyle = parseInt(NameStyle);


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
                
                return resultado;

               
            } catch (error) {

                throw error;
                
            }


        }

        async PutMethod   (req) {

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
    
    
                    NameStyle = parseInt(NameStyle);
    
                    EmailPromotional = parseInt(EmailPromotional);
    
    
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
    
                    const resultado = await instancia.UpdateMethod();
    
                    return resultado;

                } catch (error) {

                   throw error
                    
                }


        }

        async DeleteMethod (req) {

            
         var {BusinessEntityID} = req.body;

         BusinessEntityID = parseInt(BusinessEntityID)
 
         try {
 
             const instancia = new EntidadePersonPerson();
 
             const resultado = await instancia.DeleteMethod(BusinessEntityID);
 
             console.log(resultado);

             return resultado
             
         } catch (error) {
 
             throw error;
             
         }
 

        }


}

module.exports = SubContollerPerson;