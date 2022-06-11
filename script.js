let firstOptions = document.querySelector("div:nth-child(3)");
let secondOptions = document.querySelector("div:nth-child(5)") 
let thirdOptions = document.querySelector("div:nth-child(7)")
let message = document.querySelector(".bottom > div")

function selectFood(elemento){
    let firstOptionsMarked = firstOptions.querySelector(".marked")
    if (firstOptionsMarked !== null){
        firstOptionsMarked.classList.remove("marked");
    }
    elemento.classList.toggle("marked");
    OrderedCompleted();
}

function selectDrink(elemento){
    let secondOptionsMarked = secondOptions.querySelector(".marked")
    if (secondOptionsMarked !== null){
        secondOptionsMarked.classList.remove("marked");
    }
    elemento.classList.toggle("marked");
    OrderedCompleted();
}

function selectDessert(elemento){
    let thirdOptionsMarked = thirdOptions.querySelector(".marked")
    if (thirdOptionsMarked !== null){
        thirdOptionsMarked.classList.remove("marked");
    }
    elemento.classList.toggle("marked");
   OrderedCompleted();
}

let text = "Pedido Final";
let encoded = encodeURIComponent(text);

// ?text=

function OrderedCompleted(){
    if (selectFood && selectDrink && selectDessert){
        message.classList.remove("beforeOrdered");
        message.classList.add("afterOrdered");
        message.innerHTML = "<a target='_blank' href='https://wa.me/5598981060719'><p>Fechar Pedido</p></a>";
    };
}





