import db from '../data.js';
export async function tela1(req, res) { 
    const body = req.body;
      try{
          console.log(body.nome)
          await db.collection('tela1').insertOne({
            nome:body.nome,
            escolha:body.escolha
  
          });
          res.send('token');

      }catch(error){
          console.log( '???')
          res.status(500).send(error)
      } 
}
export async function tela2(req, res) { 
    const body = req.body;
      try{
          console.log(body.nome)
          await db.collection('tela2').insertOne({
            nome:body.nome,
            escolha:body.escolha
  
          });
          res.send('token');

      }catch(error){
          console.log( '???')
          res.status(500).send(error)
      } 
}
export async function tela3(req, res) { 
    const body = req.body;
      try{
          console.log(body.nome)
          await db.collection('tela3').insertOne({
            nome:body.nome,
            escolha:body.escolha
  
          });
          res.send('token');

      }catch(error){
          console.log( '???')
          res.status(500).send(error)
      } 
}
export async function daniel(req, res) { 
  const body = req.body;
    try{
        console.log(body.nome)
        await db.collection('daniel').insertOne({
          nome:body.nome,
          escolha:body.escolha

        });
        res.send('token');

    }catch(error){
        console.log( '???')
        res.status(500).send(error)
    } 
}