const s=document.getElementById("newsletter-form"),n=document.getElementById("email"),l=document.querySelector(".error-msg");s.addEventListener("submit",function(e){const t=n.value;/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?(localStorage.setItem("submittedEmail",t),window.location.href="success.html"):(e.preventDefault(),l.textContent="Valid email required",n.classList.add("error"))});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("email");e.value=""});