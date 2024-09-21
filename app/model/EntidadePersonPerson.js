const express = require('express');

const app = express();

const sql = require("mssql");

const config = require("./conexao");





class EntidadePersonPerson{


    constructor
      ( 
        BusinessEntityID,

        PersonType,

        NameStyle,

        Title,

        FirstName,

        MiddleName,

        LastName,

        Suffix,

        EmailPromotional
        
        ) {

            this.BusinessEntityID = BusinessEntityID

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
            /*const BusinessEntityID = Int(this.BusinessEntityID);

            const PersonType = NVarChar(this.PersonType);

            const NameStyle = Bit(this.NameStyle);

            const Title = NVarChar(this.Title);

            const FirstName = NVarChar(this.FirstName);

            const MiddleName = NVarChar(this.MiddleName);

            const LastName = NVarChar(this.LastName);

            const Suffix = NVarChar(this.Suffix);

            const EmailPromotional = Int(this.EmailPromotional);*/
            

            const resultado = await conexao.request()
            .input('BusinessEntityID', sql.Int,this.BusinessEntityID)
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
            
            UPDATE Person.Person
            
            SET PersonType = @PersonType, NameStyle = @NameStyle,

            Title = @Title, FirstName = @FirstName,

            MiddleName = @MiddleName, LastName = @LastName,

            Suffix = @Suffix
            
            WHERE BusinessEntityID = @BusinessEntityID
            `
            const conexao = await sql.connect(config);


            /*const BusinessEntityID = sql.Int(this.BusinessEntityID);

            const PersonType = sql.NVarChar(this.PersonType);

            const NameStyle = sql.Bit(this.NameStyle);

            const Title = sql.NVarChar(this.Title);

            const FirstName = sql.NVarChar(this.FirstName);

            const MiddleName = sql.NVarChar(this.MiddleName);

            const LastName = sql.NVarChar(this.LastName);

            const Suffix = sql.NVarChar(this.Suffix);

            console.log(this.BusinessEntityID);

            console.log(typeof BusinessEntityID)*/

            console.log(this.BusinessEntityID);

            console.log(typeof this.BusinessEntityID);
           
            const resultado = await conexao.request()
            .input('BusinessEntityID', sql.Int,this.BusinessEntityID)
            .input('PersonType', sql.NChar(2), this.PersonType)
            .input('NameStyle', sql.Bit, this.NameStyle)
            .input('Title', sql.NVarChar(8), this.Title)
            .input('FirstName', sql.NVarChar(50),this.FirstName )
            .input('MiddleName',sql.NVarChar(50),this.MiddleName )
            .input('LastName', sql.NVarChar(50), this.LastName)
            .input('Suffix', sql.NVarChar(10), this.Suffix )
            .query(consulta);

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