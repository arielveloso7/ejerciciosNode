//en vez del require, uso import

import myModule from './mimodulo.js';

console.log(myModule.hello());



//1 archivos en .js
//2 luego creo el package.json (en consola npm init -y)
//3 agrego "start": "node -r esm main.js", en el json, dentro de scripts
//4 instalo en consola npm i esm
//5 en consola npm start