const bin_storage = JSON.parse(localStorage.getItem('bin') || "[]")
const content_bin = document.querySelector('.content__bin')

if(bin_storage.length){
    bin_storage.forEach((el)=>{
        const {text, price, img_path, quantity} = el
        const newCard = document.createElement("div")
        newCard.classList.add('bin_container')

        newCard.innerHTML = 
        `
        <div class="bin_cell">
            <img class="cell_img" src="${img_path}" alt="card1">
            <span class="cell_text">${text}</span>
            <div class="cell_adder">
                <div class="cell_adder-minus"><div class="adder_minus-item"></div></div>
                <div class="cell_adder-center"><div class="adder_count">${quantity}</div></div>
                <div class="cell_adder-plus"><div class="adder_plus-item1"></div><div class="adder_plus-item2"></div></div>
            </div>
            <div class="block_cell_price"><span class="cell_price"><span class="cell_price_value">${price}</span>₽</span></div>
            <div class="cell_cross">
                <div class="cross-item1"></div>
                <div class="cross-item2"></div>
            </div>
        </div>
        <div class="bin_line"></div>
        `
        content_bin.appendChild(newCard)
    })

    const bin_summ = document.createElement('div')
    bin_summ.classList.add('bin_summ')
    bin_summ.innerHTML = `Сумма <span class="summ-value">69990</span>₽`
    content_bin.appendChild(bin_summ)

    mainBin()
    main()
}