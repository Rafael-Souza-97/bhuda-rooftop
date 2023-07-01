import heinekenBeer from '../assets/cervejas/heineken.jpeg';
import budweiserBeer from '../assets/cervejas/budweiser.jpeg';
import coronaBeer from '../assets/cervejas/corona.jpeg';
import heinekenBucket from '../assets/cervejas/baldinho-heineken.jpeg';
import budweiserBucket from '../assets/cervejas/baldinho-budweiser.jpeg';
import pilsen500ml from '../assets/chopps/pilsen-500ml.jpeg';
import pilsen300ml from '../assets/chopps/pilsen-300ml.jpeg';
import melancitaDrink from '../assets/drinks/melancita.jpeg';
import ginTropicalDrink from '../assets/drinks/tropica.jpeg';
import ginTonicaDrink from '../assets/drinks/gin-tonica.jpeg';
import jamensonDrink from '../assets/drinks/drink-jamenson.jpeg';
import spritzDrink from '../assets/drinks/spritz.jpeg';
import smashDrink from '../assets/drinks/smash.jpeg';
import mojitoDrink from '../assets/drinks/mojito.jpeg';
import ginDharmaDrink from '../assets/drinks/gin-dharma.jpeg';
import caipvodkaDrink from '../assets/drinks/caipvodka.jpeg';
import caipirinhaDrink from '../assets/drinks/caipirinha.jpeg';
import bhudaEspecialDrink from '../assets/drinks/bhuda-especial.jpeg';
import batataPalito from '../assets/porcoes/batata-palito-cheddar-bacon.jpg';
import bolinhoCostelaDefumada from '../assets/porcoes/bolinho-costela.jpeg';
import bolinhoBacalhau from '../assets/porcoes/bolinho-bacalhau.jpeg';
import frangoPanko from '../assets/porcoes/frango-panko.jpeg';
import hamburguerBovino from '../assets/porcoes/hamburguer-bovino.jpeg';
import croqueteCamarao from '../assets/porcoes/croquete-camarao.jpeg';
import torresmoRolo from '../assets/porcoes/torresmo-rolo.jpeg';

const menu = [
  // {
  //   categoria: 'BEBIDAS SEM ÁLCOOL',
  //   titulo: 'Água sem gás',
  //   descricao: '',
  //   preco: 5.00,
  //   imagem: 'caminho/para/a/imagem1.jpg',
  // },
  // {
  //   categoria: 'BEBIDAS SEM ÁLCOOL',
  //   titulo: 'lala',
  //   descricao: '',
  //   preco: 5.00,
  //   imagem: 'caminho/para/a/imagem1.jpg',
  // },
  // {
  //   categoria: 'BEBIDAS SEM ÁLCOOL',
  //   titulo: 'Água com gás',
  //   descricao: '',
  //   preco: 6.00,
  //   imagem: 'caminho/para/a/imagem2.jpg',
  // },
  // {
  //   categoria: 'BEBIDAS SEM ÁLCOOL',
  //   titulo: 'Água Tônica',
  //   descricao: '',
  //   preco: 7.00,
  //   imagem: 'caminho/para/a/imagem3.jpg',
  // },
  // {
  //   categoria: 'BEBIDAS SEM ÁLCOOL',
  //   titulo: 'Charlotte',
  //   descricao: 'Morango, maracujá, xarope de Morango, xarope de maracujá, cobertura de Morango e soda.',
  //   preco: 30.00,
  //   imagem: 'caminho/para/a/imagem4.jpg',
  // },
  // {
  //   categoria: 'BEBIDAS SEM ÁLCOOL',
  //   titulo: 'Heineken sem álcool',
  //   descricao: '',
  //   preco: 10.00,
  //   imagem: 'caminho/para/a/imagem5.jpg',
  // },
  // {
  //   categoria: 'BEBIDAS SEM ÁLCOOL',
  //   titulo: 'Limonada Suíça',
  //   descricao: 'Limão e leite condensado macerado na coqueteleira, gelo e rodela de limão.',
  //   preco: 15.00,
  //   imagem: 'caminho/para/a/imagem6.jpg',
  // },
  // {
  //   categoria: 'BEBIDAS SEM ÁLCOOL',
  //   titulo: 'Negresco',
  //   descricao: 'Leite, creme de leite, biscoito Negresco e cobertura de chocolate.',
  //   preco: 29.00,
  //   imagem: 'caminho/para/a/imagem7.jpg',
  // },
  // {
  //   categoria: 'BEBIDAS SEM ÁLCOOL',
  //   titulo: 'Redbull',
  //   descricao: 'Energético',
  //   preco: 15.00,
  //   imagem: 'caminho/para/a/imagem8.jpg',
  // },
  // {
  //   categoria: 'BEBIDAS SEM ÁLCOOL',
  //   titulo: 'Redbull Melancita',
  //   descricao: '',
  //   preco: 15.00,
  //   imagem: 'caminho/para/a/imagem9.jpg',
  // },
  // {
  //   categoria: 'BEBIDAS SEM ÁLCOOL',
  //   titulo: 'Redbull Tropical',
  //   descricao: '',
  //   preco: 15.00,
  //   imagem: 'caminho/para/a/imagem10.jpg',
  // },
  {
    categoria: 'CERVEJAS',
    titulo: 'Heineken',
    descricao: 'Longneck',
    preco: 12.00,
    imagem: heinekenBeer,
  },
  {
    categoria: 'CERVEJAS',
    titulo: 'Budweiser',
    descricao: 'Longneck',
    preco: 11.00,
    imagem: budweiserBeer,
  },
  {
    categoria: 'CERVEJAS',
    titulo: 'Corona',
    descricao: 'Longneck',
    preco: 13.00,
    imagem: coronaBeer,
  },
  {
    categoria: 'CERVEJAS',
    titulo: 'Baldinho de Heineken',
    descricao: 'Longneck - 5 unidades em um baldinho com gelo',
    preco: 60.00,
    imagem: heinekenBucket,
  },
  {
    categoria: 'CERVEJAS',
    titulo: 'Baldinho de Budweiser',
    descricao: 'Longneck - 5 unidades em um balde com gelo',
    preco: 55.00,
    imagem: budweiserBucket,
  },
  {
    categoria: 'CHOPPS',
    titulo: 'Chopp Pilsen, 500ml',
    descricao: ' ',
    preco: 14.00,
    imagem: pilsen500ml,
  },
  {
    categoria: 'CHOPPS',
    titulo: 'Chopp Pilsen, 300ml',
    descricao: ' ',
    preco: 9.00,
    imagem: pilsen300ml,
  },
  {
    categoria: 'DRINKS',
    titulo: 'Melancitta',
    descricao: 'Gin e Red Bull de melancia.',
    preco: 30.00,
    imagem: melancitaDrink,
  },
  {
    categoria: 'DRINKS',
    titulo: 'Gin Tropical',
    descricao: 'Gin e Red Bull tropical.',
    preco: 30.00,
    imagem: ginTropicalDrink,
  },
  {
    categoria: 'DRINKS',
    titulo: 'Gin Tônica',
    descricao: 'Gin com Tônica',
    preco: 25.00,
    imagem: ginTonicaDrink,
  },
  {
    categoria: 'DRINKS',
    titulo: 'Jameson Bhuda',
    descricao: 'Whisky Jameson, chá de pêssego e suco de limão.',
    preco: 35.00,
    imagem: jamensonDrink,
  },
  {
    categoria: 'DRINKS',
    titulo: 'Spritz',
    descricao: 'Aperol, espumante, tônica e rodela de laranja.',
    preco: 30.00,
    imagem: spritzDrink,
  },
  {
    categoria: 'DRINKS',
    titulo: 'Smash',
    descricao: 'Gin, Xarope artesanal de maracujá, manjericão e soda.',
    preco: 30.00,
    imagem: smashDrink,
  },
  {
    categoria: 'DRINKS',
    titulo: 'Mojito',
    descricao: 'Vodka Orloff, açucar, limão, hortelã e soda.',
    preco: 25.00,
    imagem: mojitoDrink,
  },
  {
    categoria: 'DRINKS',
    titulo: 'Gin Dharma',
    descricao: 'Gin, suco de abacaxi, licor de pêssego e hortelã.',
    preco: 30.00,
    imagem: ginDharmaDrink,
  },
  {
    categoria: 'DRINKS',
    titulo: 'Caip Vodka',
    descricao: 'Vodka, Limão, açucar e gelo',
    preco: 25.00,
    imagem: caipvodkaDrink,
  },
  {
    categoria: 'DRINKS',
    titulo: 'Caipirinha',
    descricao: 'Cachaça, Limão, açucar e gelo',
    preco: 25.00,
    imagem: caipirinhaDrink,
  },
  {
    categoria: 'DRINKS',
    titulo: 'Bhuda Especial',
    descricao: 'Theros, xarope artesanal de morango com amora, limão, chá preto de frutas vermelhas e água tônica finalizado com espuma de de morango com amora.',
    preco: 35.00,
    imagem: bhudaEspecialDrink,
  },
  {
    categoria: 'PORÇÕES',
    titulo: 'Batata Palito com Cheddar e Bacon',
    descricao: '400g de batata palito, bacon e queijo cheddar',
    preco: 39.90,
    imagem: batataPalito,
  },
  {
    categoria: 'PORÇÕES',
    titulo: 'Bolinho de Bacalhau',
    descricao: '8 bolinhos de bacalhau',
    preco: 35.00,
    imagem: bolinhoBacalhau,
  },
  {
    categoria: 'PORÇÕES',
    titulo: 'Bolinho de Costela Defumada',
    descricao: '7 bolinhos de costela suína, recheado com bacon e calabresa defumada e tempero da casa. 1 tigelinha de molho da casa.',
    preco: 39.90,
    imagem: bolinhoCostelaDefumada,
  },
  {
    categoria: 'PORÇÕES',
    titulo: 'Frango na Panko com fritas, cheddar e bacon',
    descricao: '350g de peito de frango em cubos, 350g de batata palito bacon, cheddar e molho da casa.',
    preco: 65.00,
    imagem: frangoPanko,
  },
  {
    categoria: 'PORÇÕES',
    titulo: 'Bhuda Burguer',
    descricao: 'Hambúrguer bovino com queijo, alface e tomate.',
    preco: 30.00,
    imagem: hamburguerBovino,
  },
  {
    categoria: 'PORÇÕES',
    titulo: 'Croquette de camarão',
    descricao: '7 Croquetes de Camarão',
    preco: 45.00,
    imagem: croqueteCamarao,
  },
  {
    categoria: 'PORÇÕES',
    titulo: 'Rolo de Torresmo',
    descricao: '2 rodelas, 1 tigelinha de molho e Limão.',
    preco: 40.00,
    imagem: torresmoRolo,
  },
];

export default menu;