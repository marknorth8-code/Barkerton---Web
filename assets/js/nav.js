window.addEventListener('scroll',()=>{
document.querySelector('.nav').classList.toggle('shrink',window.scrollY>0);
});