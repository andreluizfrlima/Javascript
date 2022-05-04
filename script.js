const meuArray = [45, 34, 57, 567, 342, 457, 31, 20, 07, 05, 02,];
 function valoresunicos(arr){
   const mySet = new Set(arr);

   return [...mySet];
 }

console.log(valoresunicos(meuArray));


























/*function getAdmins(map) {
  let admins =  [];
  for([key, value] of map) {
    if (value === 'user') {
      admins.push(key)
    }
  }
  return admins;
}

const usuarios = new Map();

usuarios.set("luiz","admin");
usuarios.set("leo","user");
usuarios.set("joão","user");
usuarios.set("luiza","admin");
usuarios.set("lucia","user");
usuarios.set("ladislau","admin");
usuarios.set("lobão","user");

console.log(getAdmins(usuarios));*/
