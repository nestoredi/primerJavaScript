let producto= "aceite";
let stock = 10;
let login;
do{
    let compraArt= prompt("entre producto");
    let cantidad= parseInt(prompt("cantidad"));
    login =(compraArt == producto && cantidad <= stock)? true : false;
}   while(login== false);
//se puede hacer la compra
alert("Hay stock");
