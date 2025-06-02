const pokes = [
    {
  nome:'Primeira Geracao',
  imagem:'img/teste1.jpeg',
  descricao:'A primeira geração de Pokémon, lançada em 1996 no Japão, é composta por 151 Pokémon e começou com os jogos "Pokémon Red" e "Pokémon Green" (que se tornaram "Pokémon Blue" na América do Norte). Esta geração introduziu o mundo de Kanto, onde os jogadores assumem o papel de um treinador de Pokémon com o objetivo de capturar, treinar e batalhar com essas criaturas.',
},
     {
    nome:'Segunda Geracao',
    imagem:'img/gera2.jpeg',
    descricao:'A segunda geração de Pokémon foi lançada em 1999 e trouxe uma série de novidades e melhorias em relação à primeira. Os jogos "Pokémon Gold" e "Pokémon Silver" foram lançados para o Game Boy Color, e apresentaram a região de Johto, além de novos Pokémon, mecânicas de jogo e gráficos aprimorados.'
},
    {
    nome:'Terceira Geracao',
    imagem:'img/gera3.jpeg',
    descricao:'A terceira geração de Pokémon foi lançada em 2002 com os jogos "Pokémon Ruby" e "Pokémon Sapphire" para o Game Boy Advance. Essa geração trouxe a região de Hoenn e introduziu muitas inovações e novos elementos ao jogo.'
},
    {
    nome:'Meu Poke favorito',
    imagem:'img/pokebom.jpeg',
    descricao:'Garchomp é um Pokémon da quarta geração, introduzido em "Pokémon Diamond" e "Pokémon Pearl". Ele é um Pokémon do tipo Dragão/Terra e é conhecido por seu design que lembra um tubarão e um dragão.'
},
    {
    nome:'Um Poke Lendario bonito',
    imagem:'img/kyogre.jpg',
    descricao:'Kyogre é um Pokémon lendário da terceira geração, introduzido em "Pokémon Ruby" e "Pokémon Sapphire". Ele é do tipo Água e é conhecido como o Pokémon da água.'
},


]

//seleciona o conteiner de lista de dinos

  const listapoke = document.getElementById('lista-pokes')

  //seleciona os elementos detalhes

  const nomepokes = document.getElementById('nome-pokes')
  const imagempokes = document.getElementById('img-pokes')
  const descricaopoke = document.getElementById('detalhes-pokes')

  function exibirpokes(){
   pokes.forEach((pokes, index)=>{
    const pokesDiv = document.createElement('div')
     //colocar em h3
    pokesDiv.innerHTML = `<h3>${pokes.nome}</h3>`;
    pokesDiv.addEventListener('click' , () => mostrardetalhes(index));
    listapoke.appendChild (pokesDiv) ;
    
   });

   //função para exebir detalhes
   function mostrardetalhes(index){
    const poke = pokes[index] ;
    nomepokes.textContent = poke.nome ;
    imagempokes.src = poke.imagem;
    descricaopoke.textContent = poke.descricao;
   }
}

//executa a função para exibir
exibirpokes();


