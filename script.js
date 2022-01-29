function getAdmins(map){
    //Fazendo o seguinte acessamos os valores e e chaves de cada map;
    let admins = [];
    for([key, value] of map)  {
        if(value == "Admin") {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set("Paulo", "Admin");
usuarios.set("Fabio", "Admin");
usuarios.set("Jhonatan", "Admin");
usuarios.set("Rafael", "Admin");
usuarios.set("Yasmin", "Admin");

console.log(getAdmins(usuarios));