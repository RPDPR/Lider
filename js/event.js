let content_card = document.querySelectorAll('.content_card')

content_card.forEach((el) => {
    el.addEventListener('mouseover', (e) => {
        e.preventDefault()
        let card_text = el.querySelector('.card_text')
        let card_price = el.querySelector('.card_price')
        let card_btn = el.querySelector('.btn')
        let btn_text = el.querySelector('.btn-text')

        card_text.classList.toggle('card_text_on-mouseover')
        card_price.classList.toggle('card_price_on-mouseover')
        card_btn.classList.toggle('btn-hover')

        card_btn.addEventListener('click', (e) => {
            e.preventDefault()

            card_btn.classList.toggle('btn-clicked')
            if (btn_text.innerHTML.toLowerCase() == 'добавить в корзину'){
                btn_text.innerHTML = 'В корзине';
            }
            else {
                btn_text.innerHTML = 'Добавить в корзину';
            }
        })
    })
    el.addEventListener('mouseout', (e) => {
        e.preventDefault()
        let card_text = el.querySelector('.card_text')
        let card_price = el.querySelector('.card_price')
        let card_btn = el.querySelector('.btn')
        let btn_text = el.querySelector('.btn-text')

        card_text.classList.toggle('card_text_on-mouseover')
        card_price.classList.toggle('card_price_on-mouseover')
        card_btn.classList.toggle('btn-hover')

        card_btn.addEventListener('click', (e) => {
            e.preventDefault()

            card_btn.classList.toggle('btn-clicked')
            if (btn_text.innerHTML.toLowerCase() == 'добавить в корзину'){
                btn_text.innerHTML = 'В корзине';
            }
            else {
                btn_text.innerHTML = 'Добавить в корзину';
            }
        })
    })
})

function mainBin(){
    let bin_cell = document.querySelectorAll('.bin_cell')
    let check = 0

    bin_cell.forEach((el) => {
        el.addEventListener('mouseover', (e) => {
            e.preventDefault()
    
            let cell_adder = el.querySelector('.cell_adder')
            
            let cell_adder_minus = cell_adder.querySelector('.cell_adder-minus')
            let cell_adder_plus = cell_adder.querySelector('.cell_adder-plus')
            let cell_cross = el.querySelector('.cell_cross')
    
            let adder_minus_item = cell_adder_minus.querySelector('.adder_minus-item')
            let adder_plus_item1 = cell_adder_plus.querySelector('.adder_plus-item1')
            let adder_plus_item2 = cell_adder_plus.querySelector('.adder_plus-item2')
            let cross_item1 = cell_cross.querySelector('.cross-item1')
            let cross_item2 = cell_cross.querySelector('.cross-item2')

            const price = el.childNodes[7].innerText.replace(' ', '').replace('₽', '')
            const text = el.childNodes[3].innerText
            const img_path = el.querySelector('.cell_img').getAttribute('src')
            let quantity = Number(el.childNodes[5].childNodes[3].childNodes[0].innerText)

            cell_adder_minus.addEventListener('mouseover', (e) => {
                adder_minus_item.classList.add('adder_item_on-mouseover')
            })
            cell_adder_minus.addEventListener('mouseout', (e) => {
                adder_minus_item.classList.remove('adder_item_on-mouseover')
            })
            cell_adder_plus.addEventListener('mouseover', (e) => {
                adder_plus_item1.classList.add('adder_item_on-mouseover')
                adder_plus_item2.classList.add('adder_item_on-mouseover')
            })
            cell_adder_plus.addEventListener('mouseout', (e) => {
                adder_plus_item1.classList.remove('adder_item_on-mouseover')
                adder_plus_item2.classList.remove('adder_item_on-mouseover')
            })

            cell_adder_minus.addEventListener('click', (e) => {
                quantity = quantity-1
                console.log(quantity)
            })
            cell_adder_plus.addEventListener('click', (e) => {
                quantity = quantity+1
                console.log(quantity)
            })

            cell_cross.addEventListener('mouseover', (e) => {
                cross_item1.classList.add('adder_item_on-mouseover')
                cross_item2.classList.add('adder_item_on-mouseover')
            })
            cell_cross.addEventListener('mouseout', (e) => {
                cross_item1.classList.remove('adder_item_on-mouseover')
                cross_item2.classList.remove('adder_item_on-mouseover')
            })

            cell_cross.addEventListener('click', (e) => {
                const bin_summ = document.querySelector('.bin_summ')
                const summ_value = document.querySelector('.summ-value')
                const cont = el.parentElement
                cont.remove()

                let array = JSON.parse(localStorage.getItem('bin') || "[]")
                array.forEach((el) => {
                    if(el.text == text && el.price == price && el.img_path == img_path){
                        array.splice(array.indexOf(el), 1);
                        localStorage.setItem('bin', JSON.stringify(array))
                        return true;
                    }
                })
                if(check == 0){

                    summ_value.innerHTML = (Number(summ_value.innerHTML) - Number(price)).toString()

                    if(Number(summ_value.innerHTML) == 0){
                        bin_summ.remove()
                    }

                    check += 1
                }
            })
            
            check = 0
        })
        el.addEventListener('mouseout', (e) => {
            e.preventDefault()
    
        })
    })
}

mainBin()