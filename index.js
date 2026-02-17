import { menuArray } from './data.js'

const modal = document.getElementById('modal')
const form = document.getElementById('details-form')
const checkoutConfirmation = document.getElementById('checkout-confirmation')

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
                <button class="add-btn" data-action="add" data-id=${menuItem.id}>+</button>
            </div>
        `
    })
    return menuHtml
}

let orderedItems = []

document.addEventListener('click', function (e) {
    if (e.target.dataset.action === 'add') {
        checkoutConfirmation.hidden = true
        handleAddClick(e.target.dataset.id)
        renderCheckout()
    }
    
    if (e.target.dataset.action === 'remove') {
        handleRemoveClick(e.target.dataset.id)
        renderCheckout()
    }
    
    if (e.target.dataset.action === 'complete') {
        modal.hidden = false
    }

    if (e.target.dataset.action === 'close' || e.target === modal) {
        modal.hidden = true
    }
})

form.addEventListener('submit', (e) => {
    handlePaymentSubmit(e) 
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

const handlePaymentSubmit = (e) => {
    e.preventDefault()

    const userName = document.getElementById('user-name').value
    const trimmedName = userName.trim()
    const name = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1) || 'friend'

    modal.hidden = true

    orderedItems = []
    
    renderCheckout()

    checkoutConfirmation.hidden = false
    checkoutConfirmation.textContent = `Thanks, ${name}! Your order is on its way!`

    form.reset()
}


const renderOrder = () => {
    const orderLinesContainer = document.getElementById('order-lines-container')

    let orderHtml = ''

    orderedItems.forEach((orderedItem) => {
        orderHtml += `
            <div>
                <p>${orderedItem.name} x${orderedItem.qty}</p>        
                <button class="remove-btn" data-action="remove" data-id=${orderedItem.id} >Remove
                </button>
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