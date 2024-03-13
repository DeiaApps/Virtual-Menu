import mignonRollImg from './assets/dishes/mignon-roll.jpeg';
import couple20Img from './assets/dishes/couple-20.jpeg';
import beefBurguerImg from './assets/dishes/beef-burguer.jpeg';
import fishChipsImg from './assets/dishes/fish-chips.jpeg';
import shrimpTruffleRisottoImg from './assets/dishes/shrimp-truffle-risotto.jpeg';

import brownieImg from './assets/desserts/brownie.jpeg';
import toastCoconutImg from './assets/desserts/toast-coconut.jpeg';
import petitGateauImg from './assets/desserts/petit-gateau.jpeg';

import regularWaterImg from './assets/beverages/regular-water.jpeg';
import sparklingWaterImg from './assets/beverages/sparkling-water.jpeg';
import cokeImg from './assets/beverages/coke.jpeg';
import guaranaImg from './assets/beverages/guarana.jpeg';
import heinekenImg from './assets/beverages/heineken.jpeg';

export const mignonRoll = {
  name: 'Enroladinho de Mignon',
  price: 'R$ 64,90',
  image: mignonRollImg,
  description: 'Finíssimas fatias de filé mignon enroladas no parmesão',
};

const couple20 = {
  name: 'Casal 20',
  price: 'R$ 29,00',
  image: couple20Img,
  description: 'Casal perfeito pão de alho caseiro e linguiça toscana grill',
};

const beefBurguer = {
  name: 'Burguer de Picanha',
  price: 'R$ 44,90',
  image: beefBurguerImg,
  description:
    'Burguer de Picanha Angus, Queijo Cheddar, Crisp de Cebola e Geléia de Bacon',
};

const fishChips = {
  name: 'Fish and Chips',
  price: 'R$ 79,90',
  image: fishChipsImg,
  description:
    'Iscas de Peixe Empanada na Farinha Panko e Flocos de Milho e Batata Frita Palito',
};

const shrimpTruffleRisotto = {
  name: 'Risoto de Camarão Trufado',
  price: 'R$ 72,90',
  image: shrimpTruffleRisottoImg,
  description:
    'Arroz Arbóreo, camarões salteados no azeite trufado e crocantes de panko',
};

const brownie = {
  name: 'Brownie',
  price: 'R$ 32,90',
  image: brownieImg,
  description:
    'Delicioso brownie caseiro, sorvete de creme, calda quente de chocolate',
};

const toastCoconut = {
  name: 'Cocada de Forno',
  price: 'R$ 32,90',
  image: toastCoconutImg,
  description:
    'Cremosa cocada de coco torrado, doce de leite argentino e sorvete de creme',
};

const petitGateau = {
  name: 'Petit Gateau',
  price: 'R$ 34,90',
  image: petitGateauImg,
  description:
    'Bolo quente recheado com ganache de chocolate, leite condensado e castanha de caju',
};

const regularWater = {
  name: 'Água sem gás',
  price: 'R$ 6,90',
  image: regularWaterImg,
  description: '310ml',
};

const sparklingWater = {
  name: 'Água com gás',
  price: 'R$ 7,90',
  image: sparklingWaterImg,
  description: '310ml',
};

const coke = {
  name: 'Coca-cola',
  price: 'R$ 7,90',
  image: cokeImg,
  description: '290ml',
};

const guarana = {
  name: 'Guaraná Antártica',
  price: 'R$ 7,90',
  image: guaranaImg,
  description: '350ml',
};

const heineken = {
  name: 'Heineken',
  price: 'R$ 15,90',
  image: heinekenImg,
  description: '355ml',
};

export const mainCourse = [
  mignonRoll,
  beefBurguer,
  couple20,
  fishChips,
  shrimpTruffleRisotto,
];      

export const desserts = [brownie, toastCoconut, petitGateau];

export const beverages  = [regularWater, sparklingWater, coke, guarana, heineken];
