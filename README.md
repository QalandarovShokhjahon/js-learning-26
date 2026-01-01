# 🧠 JavaScript Day 26 — Amaliyot: Modal Window

Bu darsda men JavaScript yordamida **Modal oyna** yaratishni amaliyot orqali bajardim.
Bu mashq DOM, Events va classList bilimlarimni real loyihada ishlatish imkonini berdi.

---

## 🔧 Loyihaning vazifasi / Project Objective

* Foydalanuvchi tugmani bosganda modal ochiladi
* Modal oynani yopish uchun:

  * Close tugmasi
  * Oyna tashqarisiga bosish
* Active class yordamida modalni boshqarish

---

## 📁 HTML tuzilma / Example HTML

```
<button id="openModal">Open Modal</button>
<div id="modal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <h2>Modal Title</h2>
    <p>This is a modal window example.</p>
  </div>
</div>
```

---

## 💻 JavaScript kodi / JS Code

```
const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeModal');

// Modalni ochish
openBtn.addEventListener('click', () => {
  modal.classList.add('active');
});

// Modalni yopish
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

// Oyna tashqarisiga bosilganda yopish
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});
```

---

## 🎨 CSS g‘oya / CSS Idea

```
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  justify-content: center;
  align-items: center;
}
.modal.active {
  display: flex;
}
.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  position: relative;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
}
```

---

## 🧩 Qisqacha xulosa / Summary

* `classList.add()` → modalni ochish
* `classList.remove()` → modalni yopish
* Window click hodisasi orqali modalni tashqaridan yopish
* DOM va Events birgalikda ishlashi

---

## 🎯 Maqsad / Goal

Ushbu amaliyotning maqsadi — JavaScript’da **interaktiv modal oynalar yaratish**ni o‘rganish.

Buning yordamida:

* Pop-up oyna yaratish
* UI interaktivligini oshirish
* Real web ilovalarda foydali komponentlar yaratish
  mumkin bo‘ladi.

---

## 💬 Muallif / Author

✍️ Shokhjahon Qalandarov
📅 Dars: 26-kun — Amaliyot (Modal Window)
