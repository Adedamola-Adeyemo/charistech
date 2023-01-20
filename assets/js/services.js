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

 function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);