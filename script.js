let firstOptions = document.querySelector("div:nth-child(3)");
let secondOptions = document.querySelector("div:nth-child(5)") 
let thirdOptions = document.querySelector("div:nth-child(7)")

let firstOptionsMarked;
let secondOptionsMarked;
let thirdOptionsMarked;
let foodSelected;
let drinkSelected;
let dessertSelected;
let foodPrice;
let drinkPrice;
let dessertPrice;
let OrderPrice;
let texto;
let encoded;

function selectFood(elemento){
    firstOptionsMarked = firstOptions.querySelector(".marked")
    foodSelected = elemento.querySelector("h3").innerHTML;
    foodPrice = elemento.querySelector("span").innerHTML;
    if (firstOptionsMarked !== null && firstOptionsMarked !== elemento){
        firstOptionsMarked.classList.remove("marked");
        elemento.classList.add("marked");
    } else if (firstOptionsMarked !== null && firstOptionsMarked === elemento){
        elemento.classList.remove("marked");
        foodSelected = undefined;
    } else {
        elemento.classList.add("marked");
    };
    releaseButton();
}

function selectDrink(elemento){
    secondOptionsMarked = secondOptions.querySelector(".marked")
    drinkSelected = elemento.querySelector("h3").innerHTML;
    drinkPrice = elemento.querySelector("span").innerHTML;
    if (secondOptionsMarked !== null && secondOptionsMarked !== elemento){
        secondOptionsMarked.classList.remove("marked");
        elemento.classList.add("marked");
    } else if (secondOptionsMarked !== null && secondOptionsMarked === elemento){
        elemento.classList.remove("marked");
        drinkSelected = undefined
    } else {
        elemento.classList.add("marked");
    };
    releaseButton();
}

function selectDessert(elemento){
    thirdOptionsMarked = thirdOptions.querySelector(".marked")
    dessertSelected = elemento.querySelector("h3").innerHTML;
    dessertPrice = elemento.querySelector("span").innerHTML;
    if (thirdOptionsMarked !== null && thirdOptionsMarked !== elemento){
        thirdOptionsMarked.classList.remove("marked");
        elemento.classList.add("marked");
    } else if (thirdOptionsMarked !== null && thirdOptionsMarked === elemento){
        elemento.classList.remove("marked");
        dessertSelected = undefined
    } else {
        elemento.classList.add("marked");
    };
   releaseButton();
}

function releaseButton(){
    let message = document.querySelector(".bottom > div");
    if(foodSelected && drinkSelected && dessertSelected){
        message.classList.remove("beforeOrdered");
        message.classList.add("afterOrdered");
        message.innerHTML = "<p onclick='redirect()'>Fechar Pedido</p>";
    } 
    else if(foodSelected == undefined || drinkSelected == undefined || dessertSelected == undefined){
        message.classList.add("beforeOrdered");
        message.classList.remove("afterOrdered");
        message.innerHTML ="<p>Selecione os 3 itens para fechar o pedido</p>"
    }
}

function redirect(){
    OrderPrice = (Number(foodPrice)+Number(drinkPrice)+Number(dessertPrice)).toFixed(2);
    let userName = prompt("Qual o seu nome?");
    let userAddress = prompt("Qual o seu endereço?")
    texto = `Olá, gostaria de fazer o pedido: \n-  Prato: ${foodSelected} \n- Bebida: ${drinkSelected} \n- Sobremesa: ${dessertSelected} \nTotal: R$ ${OrderPrice}\n \n Nome: ${userName} \n Endereço: ${userAddress}` ;
    encoded = encodeURIComponent(texto); 
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
}