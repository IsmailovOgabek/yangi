
const toast=(msg)=>{let t=document.querySelector('#toast');if(!t)return;t.textContent=msg;t.style.display='block';setTimeout(()=>t.style.display='none',3300)};
const menu=document.querySelector('#menuToggle');if(menu)menu.addEventListener('click',()=>document.querySelector('#nav').classList.toggle('open'));
document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();toast('Rahmat! So‘rovingiz demo rejimida qabul qilindi.');f.reset()}));
const lang=document.querySelector('#language');if(lang)lang.addEventListener('change',()=>{if(lang.value!=='uz')toast('Til tanlandi: '+lang.value.toUpperCase()+' · Demo tarjima menyusi')});
const q=new URLSearchParams(location.search);const room=q.get('room');if(room){const s=document.querySelector('[name=room]');if(s){for(const opt of s.options)if(opt.text.toLowerCase().includes(room.toLowerCase()))s.value=opt.value||opt.text;}}
const inDate=document.querySelector('#checkin'),outDate=document.querySelector('#checkout');if(inDate&&outDate){const today=new Date().toISOString().slice(0,10);inDate.min=today;outDate.min=today;inDate.addEventListener('change',()=>{outDate.min=inDate.value;if(outDate.value&&outDate.value<=inDate.value)outDate.value='';});}
const cf=document.querySelector('#contactForm');if(cf)cf.addEventListener('submit',e=>{e.preventDefault();toast('Xabaringiz demo ko‘rinishda yuborildi.');cf.reset()});
const bf=document.querySelector('#bookingPageForm');if(bf)bf.addEventListener('submit',e=>{e.preventDefault();toast('Bron so‘rovi tayyor! Demo sayt real bron tizimiga ulanmagan.');bf.reset()});
document.querySelectorAll('.gallery-grid img').forEach(img=>img.addEventListener('click',()=>{let modal=document.querySelector('.gallery-modal');if(modal){modal.querySelector('img').src=img.src;modal.classList.add('show')}}));
