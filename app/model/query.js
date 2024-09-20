
const sql = require('mssql');

const config = require("./conexao");



class Consulta {


    constructor(consulta){

        this.consulta = consulta;


    }

   async ExecutarConsulta(){

        try {

          await sql.connect(config);

          const resultado = await sql.query(this.consulta);

          return resultado.recordset;
            
        } catch (error) {

            throw error;
            
        }
    }


}

module.exports = Consulta;