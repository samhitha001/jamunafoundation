// mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-navigation');
if(navToggle){
  navToggle.addEventListener('click', ()=>{
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}

// insert current year
document.getElementById('year').textContent = new Date().getFullYear();
