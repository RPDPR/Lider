function main(){
    let price = document.querySelectorAll('.price_value')
    let cell_price = document.querySelectorAll('.cell_price_value')
    price.forEach((e) => {
        function numberWithSpaces(el) {
            return el.innerHTML.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }
        return e.innerHTML = numberWithSpaces(e)
    })
    cell_price.forEach((e) => {
        function numberWithSpaces(el) {
            return el.innerHTML.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }
        return e.innerHTML = numberWithSpaces(e)
    })
}

main()

const bin_list = document.querySelectorAll('.content_card')

bin_list.forEach((el) => {
    const card_price = el.querySelector('.card_price')
    const price = card_price.querySelector('.price_value').innerText.replace(' ', '')
    const text = el.childNodes[3].innerText
    const img_path = el.querySelector('.card_img').getAttribute('src')
    const quantity = '1'
    const btn = el.childNodes[7]

    let bin_cont = JSON.parse(localStorage.getItem('bin') || "[]")
    bin_cont.forEach((el) => {
        if(el.text == text && el.price == price && el.img_path == img_path){
            btn.classList.toggle('btn-clicked')
            btn.classList.add('btn-text')
            btn.innerHTML = 'В корзине'
            return true;
        }
    })

    btn.addEventListener('click', () => {
        const bin_storage = localStorage.getItem('bin') || "[]"
        const bin = JSON.parse(bin_storage)
        const card = { text, price, img_path, quantity }

        if(!btn.classList.contains('btn-clicked')){
            localStorage.setItem("bin", JSON.stringify([...bin, card]))
        }
        else if (btn.classList.contains('btn-clicked') && JSON.parse(localStorage.getItem('bin') || "[]").length){
            let array = JSON.parse(localStorage.getItem('bin') || "[]")
            array.forEach((el) => {
                if(el.text == text && el.price == price && el.img_path == img_path){
                    array.splice(array.indexOf(el), 1);
                    localStorage.setItem('bin', JSON.stringify(array))
                    return true;
                }
            })
        }
        else{
            localStorage.removeItem("bin", JSON.stringify([...bin, card]))
        }
    })
})