# 🍔 Dav’s Diner – Mobile Ordering App

Hello there! 👋
This is a fully interactive mobile-first diner ordering app built with vanilla JavaScript, HTML, and CSS

👉 [Live Demo](https://davsdinner.netlify.app/)

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
