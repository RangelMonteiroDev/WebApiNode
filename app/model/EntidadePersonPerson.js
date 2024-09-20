const express = require('express');

const app = express();

const sql = require("mssql");

const config = require("./conexao");





class EntidadePersonPerson{


    constructor
      ( PersonType,

        NameStyle,

        Title,

        FirstName,

        MiddleName,

        LastName,

        Suffix,

        EmailPromotional
        
        ) {


            this.PersonType = PersonType;

            this.NameStyle = NameStyle;

            this.Title = Title;

            this.FirstName = FirstName;

            this.MiddleName = MiddleName;

            this.LastName = LastName;

            this.Suffix = Suffix;

            this.EmailPromotional = EmailPromotional;


        }



        async CreateMethod () {

            let sequenceBusiness = 20778;

            const conexao = await sql.connect(config);

           
        try {

        const consulta = `INSERT INTO Person.Person (
            
            BusinessEntityID,
            
            PersonType,

            NameStyle,
    
            Title,
    
            FirstName,
    
            MiddleName,
    
            LastName,
    
            Suffix
            
            )
            
            VALUES (

                @BusinessEntityID,

                @PersonType,

                @NameStyle,

                @Title,

                @FirstName,

                @MiddleName,

                @LastName,

                @Suffix

            )
            
            `

            

            const resultado = await conexao.request()
            .input('BusinessEntityID', sql.Int, sequenceBusiness)
            .input('PersonType', sql.NChar(2), this.PersonType)
            .input('NameStyle', sql.Bit, this.NameStyle)
            .input('Title', sql.NVarChar(8), this.Title)
            .input('FirstName', sql.NVarChar(50),this.FirstName )
            .input('MiddleName',sql.NVarChar(50),this.MiddleName )
            .input('LastName', sql.NVarChar(50), this.LastName)
            .input('Suffix', sql.NVarChar(10), this.Suffix )
            .query(consulta);

            return resultado.recordset;
                
            } catch (error) {
                
                throw error
            }


   } 


   async UpdateMethod( id) {

        try {

            const consulta = `
            
            ALTER TABLE Person.Person
            
            SET PersonType = ${this.PersonType}, NameStyle = ${this.NameStyle},

            Title = ${this.Title}, FirstName = ${this.FirstName},

            MiddleName = ${this.MiddleName}, LastName = ${this.LastName},

            Suffix = ${this.Suffix}, EmailPromotional = ${this.EmailPromotional}
            
            WHERE BusinessEntityID = ${id}
            `
           
            const resultado = await conexao.query(consulta);

            return resultado;
            
            
        } catch (error) {

            throw error
            
        }



   }

    async DeleteMethod (id) {


        const consulta = `
        
        DELETE FROM 
        
        (PersonType,

            NameStyle,
    
            Title,
    
            FirstName,
    
            MiddleName,
    
            LastName,
    
            Suffix,
    
            EmailPromotional)
        
            Person.Person

            WHERE BusinessEntityID = ${id}
        
        ` 
        const resultado = await conexao.query(consulta);
        
        return resultado;


    }     
        
}

module.exports = EntidadePersonPerson;