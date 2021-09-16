const axios = require('axios')

module.exports.GET = async (data)=>{

    let {codigo, uf, ex,descricao,  unidadeMedida, valor,gtin} = data
let url = `${process.env.IBPT_URL}?token=${process.env.IBPT_TOKEN}&cnpj=${process.env.IBPT_CNPJ}&codigo=${codigo}&uf=${uf}&ex=${ex}&descricao=${descricao}&unidadeMedida=${unidadeMedida}&valor=${valor}&gtin=${gtin}`

    let consulta = await axios.get(url)
    
   
        return consulta.data
      

}