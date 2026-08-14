
document.addEventListener("DOMContentLoaded",()=>{
  const nav=document.getElementById("mainNav"), toggle=document.getElementById("navToggle");
  toggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",open)});
  nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle?.setAttribute("aria-expanded","false")}));
  const top=document.getElementById("topBtn");
  window.addEventListener("scroll",()=>top.classList.toggle("visible",scrollY>500),{passive:true});
  top?.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
  const form=document.getElementById("contactForm"), note=document.getElementById("formNote");
  form?.addEventListener("submit",e=>{
    e.preventDefault();
    const name=form.name.value.trim(), email=form.email.value.trim(), message=form.message.value.trim();
    if(!name||!email||!message){note.textContent="Please complete all fields.";return}
    note.textContent=`Thank you, ${name.split(" ")[0]}. Your enquiry is ready to send.`;
    form.reset();
  });
  const year=document.getElementById("year"); if(year) year.textContent=new Date().getFullYear();
});
