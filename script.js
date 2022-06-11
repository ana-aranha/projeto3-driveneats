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
    foodPrice = elemento.querySelector("h4").innerHTML;
    if (firstOptionsMarked !== null && firstOptionsMarked !== elemento){
        firstOptionsMarked.classList.remove("marked");
        elemento.classList.add("marked");
    } else if (firstOptionsMarked !== null && firstOptionsMarked === elemento){
        elemento.classList.remove("marked")
    } else {
        elemento.classList.add("marked");
    };
    Order();
}

function selectDrink(elemento){
    secondOptionsMarked = secondOptions.querySelector(".marked")
    drinkSelected = elemento.querySelector("h3").innerHTML;
    drinkPrice = elemento.querySelector("h4").innerHTML;
    if (secondOptionsMarked !== null && secondOptionsMarked !== elemento){
        secondOptionsMarked.classList.remove("marked");
        elemento.classList.add("marked");
    } else if (secondOptionsMarked !== null && secondOptionsMarked === elemento){
        elemento.classList.remove("marked")
    } else {
        elemento.classList.add("marked");
    };
    Order();
}

function selectDessert(elemento){
    thirdOptionsMarked = thirdOptions.querySelector(".marked")
    dessertSelected = elemento.querySelector("h3").innerHTML;
    dessertPrice = elemento.querySelector("h4").innerHTML;
    if (thirdOptionsMarked !== null && thirdOptionsMarked !== elemento){
        thirdOptionsMarked.classList.remove("marked");
        elemento.classList.add("marked");
    } else if (thirdOptionsMarked !== null && thirdOptionsMarked === elemento){
        elemento.classList.remove("marked")
    } else {
        elemento.classList.add("marked");
    };
   Order();
}

function selectOrderPrice(){
    texto = `Olá, gostaria de fazer o pedido: \n-  Prato: ${foodSelected} \n- Bebida: ${drinkSelected} \n- Sobremesa: ${dessertSelected} \nTotal: R$ ${OrderPrice}`;
    encoded = encodeURIComponent(texto);  
}


function Order(){
    let message = document.querySelector(".bottom > div");
    if(foodSelected && drinkSelected && dessertSelected && firstOptionsMarked === null && secondOptionsMarked === null && thirdOptionsMarked === null){
        message.classList.remove("beforeOrdered");
        message.classList.add("afterOrdered");
        OrderPrice = (Number(foodPrice)+Number(drinkPrice)+Number(dessertPrice)).toFixed(2);
        selectOrderPrice();
        message.innerHTML = `<a target='_blank' href='https://wa.me/5598981060719?text=${encoded}'><p>Fechar Pedido</p></a>`;
    } else if(firstOptionsMarked !== null || secondOptionsMarked !== null || thirdOptionsMarked !== null){
        message.classList.add("beforeOrdered");
        message.classList.remove("afterOrdered");
        message.innerHTML ="<p>Selecione os 3 itens para fechar o pedido</p>"
    }
}





