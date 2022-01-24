import {data} from './data.js'

let cards = document.getElementsByClassName('cards')

const getCards = () =>{
    data.forEach(el => { 
        let div = document.createElement('div')
        cards[0].appendChild(div)
        div.innerHTML = `
            <div class="card">
            <img class="image" src=${el.itemImage}>
            <div class="wrap">
                <p class="name">${el.itemName}</p>
                <p class="price">${el.itemPrice}</p>
            </div>
            <small class="metal">${el.itemMetal}</small>
            </div>
        `});  
}
getCards()
//-------------------------------------------------------------
const applyFilter = document.querySelector('.applyFilter')

const addFilter = (event) =>{
    event.preventDefault();
    let product = document.querySelectorAll('input[name="product"]:checked');
            let filteredAll = [];

            product.forEach((checkbox) => {
                    let filtered = data.filter((el)=>el.itemName === checkbox.id && el.itemMetal == checkbox.id && el.itemPrice === checkbox.id

                        
                        // console.log(checkbox.id);
                       

                    //   if(el.itemName.includes(checkbox.id)) return el.itemName.includes(checkbox.id) 

                    //    if(el.itemMetal.includes(checkbox.id)) return el.itemMetal.includes(checkbox.id)

                    //    if(checkbox.id == 'hundred') return el.itemPrice < 100
                    //    if(checkbox.id == "twohundred")  return el.itemPrice > 100 && el.itemPrice < 200
                    //    if(checkbox.id == "threehundred") return el.itemPrice > 200 && el.itemPrice < 300
                    //    if(checkbox.id == "fourhundred") return el.itemPrice > 300 && el.itemPrice < 400
                       )

                        filteredAll.push(filtered);
            });
            
            console.log(filteredAll)   
}

            applyFilter.addEventListener('click', addFilter)
