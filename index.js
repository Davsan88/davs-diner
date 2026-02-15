import { menuArray } from './data.js'


const generateMenuHtml = () => {
    let menuHtml = ''

    menuArray.forEach(menuItem => {
        menuHtml += `
            <div class="menu-item">
                <img class="item-img" src="${menuItem.emoji}" alt="${menuItem.name}">
                <div class="item-info">
                    <p class="item-name">${menuItem.name}</p>
                    <p class="item-ingredients">${menuItem.ingredients}</p>
                    <p class="item-price">$${menuItem.price}</p>
                </div>
                <button class="add-btn" data-id=${menuItem.id}>+</button>
            </div>
        `
    })
    return menuHtml
}

let orderedItems = []

document.addEventListener('click', function (e) {
    if (e.target.dataset.id) {
        handleAddClick(e.target.dataset.id)
        renderCheckout()
    }
    console.log(orderedItems)

    if (e.target.dataset.removeId) {
        handleRemoveClick(e.target.dataset.removeId)
        renderCheckout()
    }
})

const handleAddClick = (itemId) => {
    const targetItem = menuArray.find(item => String(item.id) === itemId)

    const { ingredients, emoji, ...updatedItem } = targetItem

    const itemInOrder = orderedItems.find(({ id }) => id === updatedItem.id)

    itemInOrder
        ? itemInOrder.qty++
        : orderedItems.push({ ...updatedItem, qty: 1 })
}

const handleRemoveClick = (itemId) => {
    const removeItem = orderedItems.find(item => String(item.id) === itemId)

    const itemIndex = orderedItems.indexOf(removeItem)

    if (removeItem.qty === 1) {
        orderedItems.splice(itemIndex, 1)
    } else {
        removeItem.qty--
    }
}



const renderOrder = () => {
    const orderLinesContainer = document.getElementById('order-lines-container')

    let orderHtml = ''

    orderedItems.forEach((orderedItem) => {
        orderHtml += `
            <div>
                <p>${orderedItem.name} x${orderedItem.qty}</p>        
                <button data-remove-id=${orderedItem.id} class="remove-btn">Remove</button>
            </div>
            <div>$${orderedItem.qty * orderedItem.price}</div>
        `
    })

    orderLinesContainer.innerHTML = orderHtml
}

const renderTotal = () => {
    const totalPrice = document.getElementById('total-price')

    let checkoutTotal = 0

    orderedItems.forEach(orderedItem => {
        checkoutTotal += orderedItem.qty * orderedItem.price
    })

    totalPrice.innerHTML = `<div>Total Price: $${checkoutTotal}</div>`
}

const renderCheckout = () => {
    const checkoutContent = document.getElementById('checkout-content')
    checkoutContent.hidden = orderedItems.length === 0

    renderOrder()
    renderTotal()
}


const renderMenu = () => {
    document.getElementById('menu').innerHTML = generateMenuHtml()
}

renderMenu()