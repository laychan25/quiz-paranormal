const perguntas = [
  {
    texto: 'Qual estilo musical voce mais gosta?',
    opcoes: [
      
        {texto: 'Rock', tipo: 'Lobisomem'},
        {texto: 'Eletronica' , tipo : 'Alien'},
        {texto: 'Pop', tipo: "Fada"},
        {texto: 'Classica', tipo: 'Vampiro'},
        {texto: 'Heavy metal', tipo: 'Demonio'}

      
    ]
  },
  {
    texto: 'Qual sabor é seu favorito?',
    opcoes:[
      {texto: 'doce', tipo: 'Fada'},
      {texto: 'salgado', tipo: 'Vampiro'},
      {texto:'Comida saborosa e marcante (umami)', tipo: 'Lobisomem'},
      {texto: 'azedo', tipo: 'Alien'},
      {texto: 'picante', tipo: 'Demonio'}
    ]
  },
  {
    texto: 'O que voce procura ao se aproximar de alguem?',
     opcoes:[
      {texto: 'Alguem gentil ', tipo: 'Fada'},
      {texto: 'magnetismo, alguem encantador', tipo: 'Vampiro'},
      {texto: 'alguem leal ', tipo: 'Lobisomem'},
      {texto: 'uma pessoa curiosa e interessante', tipo: 'Alien'},
      {texto: 'uma pessoa sedutora e perigosa', tipo: 'Demonio'}
    ]
  },
  {
    texto: 'O que voce faz quando esta triste?',
     opcoes:[
      {texto: 'Converso com meu melhor amigo', tipo: 'Fada'},
      {texto: 'Bebo um vinho e penso sozinho', tipo: 'Vampiro'},
      {texto: 'corro ou vou a academia', tipo: 'Lobisomem'},
      {texto: 'Vou em uma festa, ou qualquer coisa estimulante', tipo: 'Alien'},
      {texto: 'Transformo a dor em força.', tipo: 'Demonio'}
    ]
  },
  {
    texto: 'Quais elementos dominam seu mapa astral? (ou com quais mais se identifica?)',
    opcoes:[
      {texto:'terra + ar', tipo: 'Fada'},
      {texto: 'Agua + fogo' ,tipo:'Vampiro' },
      {texto: 'Fogo + terra', tipo: 'Lobisomem'},
      {texto: 'agua + ar', tipo: 'Alien'},
      {texto: 'fogo + ar', tipo: 'Demonio'}
    ]

  },
  {
    texto: 'Um som te acorda no meio da noite... O que você faz?',
    opcoes:[
      {texto: 'Vou verificar o som', tipo: 'Lobisomem'},
      {texto: "Faço a famosa pergunta 'Tem alguem ai?'", tipo: 'Alien'},
      {texto: 'Me escondo em baixo das cobertas e ignoro o som', tipo: 'Fada'},
      {texto: 'Fico em silencio para ouvir de novo o som e decidir como proseguir', tipo: 'Vampiro'},
      {texto: 'Nao me importo apenas volto a dormi', tipo: 'Demonio'}

    ]
  },
  {
    texto: 'Você está andando sozinho(a) à noite e percebe que está sendo seguido(a)... O que faz?',
    opcoes:[
      {texto: 'Viro em uma rua aleatoria para tentar despistar seja la quem for', tipo: 'Alien'},
      {texto: 'Observo com atenção e diminuo o passo. Se continuar, tomarei providências.', tipo: 'Vampiro'},
      {texto: 'Acelero o passo e tento mandar mensagem pra algum amigo.', tipo: 'Fada'},
      {texto: 'Finjo que não percebi, só pra ver onde isso vai dar.', tipo: 'Demonio'},
      {texto: 'Me viro e já pergunto o que a pessoa quer.' , tipo: 'Lobisomem'}
    ]
  },
  {
    texto:'Qual desses estilos combina mais com você?',
    opcoes: [
    {texto: 'Algo classico e estiloso, geralmente preto' ,tipo: 'Vampiro'},
    {texto: ' Simples e casual, um Jeans e regata ja serve', tipo: 'Lobisomem'},
    {texto: 'Algo chamativo com varios bolso e texturas', tipo: 'Alien'},
    {texto: 'Tecidos leves e soltos! amo me sentir livre', tipo: 'Fada'},
    {texto: 'Qualquer coisa que assuste, seduza ou incomode alguém.',tipo: 'Demonio'} 
    ]
  },
  {
    texto: 'Onde seria um encontro perfeito pra você?',
    opcoes:[
      {texto: 'Um baile chique em uma torre esquecida', tipo: 'Vampiro'},
      {texto: ' Acampar em um bosque cheio de flores e gulosemas', tipo: 'Fada'},
      {texto: 'Um role sem destino de moto com musica alta e risadas', tipo: 'Lobisomem'},
      {texto: 'Um lugar que ninguem saiba nossos nomes', tipo: 'Demonio'},
      {texto: 'Uma balada eletronica e um after vendo as estrelas sumindo e o sol nascendo ', tipo : 'Alien'}
    ]
  }
  
  
   
]

export default perguntas