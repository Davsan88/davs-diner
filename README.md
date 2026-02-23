# 🍔 Dav’s Diner – Mobile Ordering App

Hello there! 👋
This is a fully interactive mobile-first diner ordering app built with vanilla JavaScript, HTML, and CSS

👉 [Live Demo](https://davsdiner.netlify.app/)

Originally built as a Scrimba solo project, I took it further by implementing structured state management, dynamic rendering, modal-based checkout, validation handling, and polished UI interactions.

This project focuses on DOM-driven state, clean event delegation, and mobile-first layout using modern CSS.

---

## 🎨 Design to Code

Built from a Figma design file and implemented pixel-accurately in HTML, CSS, and JavaScript. Focused on translating layout, spacing, and interaction states into a responsive mobile-first UI.

---

## 🚀 What It Does

- ✅ Displays a dynamic diner menu
- ✅ Lets users add and remove items from their order
- ✅ Automatically calculates total price
- ✅ Hides checkout when no items are selected
- ✅ Opens a modal to collect payment details
- ✅ Validates user name input before checkout
- ✅ Displays a personalized confirmation message
- ✅ Smooth UI states with hover, focus, and active feedback

---

## 🛠️ Technologies Used

- **HTML5** – Semantic structure  
- **CSS3** – Mobile-first layout with Flexbox  
- **JavaScript (ES6)** – State management, rendering logic, and event handling  

---

## 📚 Features Covered

- Event delegation using `data-*` attributes  
- Dynamic UI rendering based on application state  
- Clean separation of concerns (state → render → DOM)  
- Form handling with `preventDefault()`  
- Input validation with real-time feedback  
- Modal overlay logic (click outside to close + close button)  
- Accessible focus states (`:focus-visible`)  
- Responsive sizing with `clamp()` and `min()`  
- Conditional rendering using `[hidden]`  

---

## 🧠 Core Concept

The app is driven by a single source of truth:

```js
let orderedItems = []
```

The UI updates entirely based on that state.

When the state changes:

- The checkout section re-renders
- Totals are recalculated
- UI visibility updates automatically

This mirrors real-world React-style thinking — but implemented in pure JavaScript.

--- 

🧪 How to Use

1. Add items from the menu using the "+" buttons.
2. Review your order in the checkout section.
3. Click Complete Order.
4. Enter your name and payment details.
5. Submit to see a personalized confirmation message.
6. Start a new order immediately after checkout.

---

🎨 UI & UX Details

- Mobile-first layout (max-width container)
- Styled modal with overlay and centered card
- Button interaction feedback (hover, active, focus)
- Soft success confirmation state
- Clean spacing and layout hierarchy
- Defensive input validation with error messaging

---

🏗️ Possible Next Steps

- 💾 Persist orders using localStorage
- 🎨 Add subtle animations (fade-in modal / confirmation)
- 💳 Improve card input formatting
- 🧾 Add quantity controls directly in checkout
- 🌙 Add dark mode theme
- ⚛ Rebuild using React for comparison

---

💡 Skills Practiced

- DOM manipulation and rendering patterns
- State-driven UI architecture
- Event delegation
- CSS layout debugging (Flexbox behavior, centering logic)
- Refactoring and cleanup discipline
- Clean commit structuring (style, refactor, chore)

---

✅ Why I’m Proud

This project goes beyond the initial course brief. I focused on writing cleaner structure, improving UX behavior, and making the app feel closer to a production-ready mobile interface — all without frameworks.

It strengthened my understanding of state-driven rendering and layout architecture in vanilla JavaScript.

---

🌐 Live Demo

Check out the live version here: [https://davsdinner.netlify.app/](https://davsdiner.netlify.app/)

---

## 📫 Contact

Got feedback or questions?  
Email me at: **david.sanchez.martinez@outlook.com**






