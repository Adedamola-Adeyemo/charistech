const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

 // ===== Faq
 const faqs = document.querySelectorAll(".single-faq");
 faqs.forEach((el) => {
   el.querySelector(".faq-btn").addEventListener("click", () => {
     el.querySelector(".icon").classList.toggle("rotate-180");
     el.querySelector(".faq-content").classList.toggle("hidden");
   });
 });