//Tem nome, lista de parametros, corpo e um potencial retorno - Functions
function oi(nome){
    console.log("oi, " + nome)
  } 
  oi()
  
  
  
  //arrox functions - Não tem nome, podem ser armazenadas em variaveis ou constates | As chaves são opcionais
  const oi = () => {}
  oi()
  
  //As chaves são opcionais
  const oi = () => console.log('oi')
  oi()
  
  //Um parametro
  const oi = nome => console.log ('Oi, ' + nome)
  oi()
  
  
  
  const dobro = n => 2 * n
  const resultado = dobro(5)
  