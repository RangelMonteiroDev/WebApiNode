
const config = require("./conexao");

const sql = require("mssql");


class BusinessEntityID {

       constructor(rowGuied, modifiedDate)
       {

        this.rowGuied = rowGuied;

        this.modifiedDate = modifiedDate

       }


       async CreateMethod() {

        let consultaAtualID = `
        
            SELECT max(BusinessEntityID) 

            FROM Person.BusinessEntity
        
        `


        const conexao = await sql.connect(config);

        var resultado = await conexao.query(consultaAtualID);


        resultado = parseInt(resultado);

        let NovoID = resultado++


        const inserindoValores = `
        
        INSERT INTO Person.BusinessEntity

        (rowguid, ModifiedDate) VALUES (

            @rowguid, @ModifiedDate

        )
        
        `   
        resultado = await  conexao.request()
        .input('rowguid', sql.UniqueIdentifier, this.rowGuied)
        .input('ModifiedDate', sql.DateTime, this.modifiedDate)
        .query(inserindoValores);

        const hashKey = "0c7d8f81-d7b1-4cf0-9c0a-4cd8b6b50087";
        
        return resultado;

       }



}


module.exports = BusinessEntityID;