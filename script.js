(() => {
'use strict';
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const menuButton = $('.menu-toggle'), navigation = $('#menu-principal'), header = $('.site-header'), progress = $('.reading-progress');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function closeMenu(){navigation.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menú');}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';navigation.classList.toggle('is-open',!open);menuButton.setAttribute('aria-expanded',String(!open));menuButton.setAttribute('aria-label',open?'Abrir menú':'Cerrar menú');});
$$('a',navigation).forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('click',event=>{if(!header.contains(event.target))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuButton.getAttribute('aria-expanded')==='true'){closeMenu();menuButton.focus();}});
window.matchMedia('(min-width: 701px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
let scrollScheduled=false;
function updateScroll(){const distance=document.documentElement.scrollHeight-window.innerHeight;progress.style.transform='scaleX('+(distance>0?Math.min(1,window.scrollY/distance):0)+')';header.classList.toggle('scrolled',window.scrollY>10);scrollScheduled=false;}
window.addEventListener('scroll',()=>{if(!scrollScheduled){requestAnimationFrame(updateScroll);scrollScheduled=true;}},{passive:true});
window.addEventListener('resize',updateScroll);updateScroll();
$('#current-year').textContent=String(new Date().getFullYear());
if('IntersectionObserver' in window&&!reduceMotion.matches){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.06,rootMargin:'0px 0px 30px 0px'});
 document.documentElement.classList.add('motion-ready');$$('.reveal').forEach(element=>observer.observe(element));
 reduceMotion.addEventListener('change',event=>{if(event.matches){document.documentElement.classList.remove('motion-ready');observer.disconnect();}});
}
$$('[data-area]').forEach(button=>button.addEventListener('click',()=>{$('#contact-area').value=button.dataset.area;$('#contacto').scrollIntoView({behavior:reduceMotion.matches?'instant':'smooth',block:'start'});$('#contact-name').focus({preventScroll:true});}));
const dialogFocus=new WeakMap();
function openDialog(dialog){if(!dialog.open){dialogFocus.set(dialog,document.activeElement);dialog.showModal();document.body.classList.add('dialog-open');}}
$$('[data-open-review]').forEach(button=>button.addEventListener('click',()=>openDialog($('#review-dialog'))));
$$('[data-open-privacy]').forEach(button=>button.addEventListener('click',()=>openDialog($('#privacy-dialog'))));
$$('.site-dialog').forEach(dialog=>{
 $$('[data-close-dialog]',dialog).forEach(button=>button.addEventListener('click',()=>dialog.close()));
 dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close();});
 dialog.addEventListener('close',()=>{if(!$('dialog[open]'))document.body.classList.remove('dialog-open');const previous=dialogFocus.get(dialog);if(previous instanceof HTMLElement)previous.focus({preventScroll:true});});
});
function prepareWhatsApp(text,status){
 const url='https://wa.me/56996260620?text='+encodeURIComponent(text);
 status.replaceChildren();
 const message=document.createElement('span');message.textContent='Tu mensaje está preparado. Revísalo y envíalo en WhatsApp.';
 const fallback=document.createElement('a');fallback.href=url;fallback.target='_blank';fallback.rel='noopener noreferrer';fallback.textContent='Abrir mi mensaje en WhatsApp ↗';
 status.append(message,fallback);
 window.open(url,'_blank','noopener,noreferrer');
}
$('#consultation-form').addEventListener('submit',event=>{
 event.preventDefault();if(!event.currentTarget.reportValidity())return;
 const nameInput=$('#contact-name'),name=nameInput.value.trim();
 if(name.length<2){nameInput.setCustomValidity('Escribe tu nombre para preparar el mensaje.');nameInput.reportValidity();return;}
 const area=$('#contact-area').value,message=$('#contact-message').value.trim();
 prepareWhatsApp('Hola, soy '+name+'. Quisiera coordinar una consulta con Mendoza & Asociados.\n\nÁrea: '+area+(message?'\nMotivo: '+message:'')+'\n\nQuedo atento/a para coordinar la atención.',$('#consultation-status'));
});
$('#review-form').addEventListener('submit',event=>{
 event.preventDefault();if(!event.currentTarget.reportValidity())return;
 const name=$('#review-name'),message=$('#review-message');
 if(name.value.trim().length<2){name.setCustomValidity('Escribe tu nombre.');name.reportValidity();return;}
 if(message.value.trim().length<10){message.setCustomValidity('Escribe una opinión de al menos 10 caracteres.');message.reportValidity();return;}
 prepareWhatsApp('Hola, soy '+name.value.trim()+'. Quisiera compartir mi opinión sobre la atención de Mendoza & Asociados:\n\n'+message.value.trim()+'\n\nEnvío esta opinión para revisión del estudio. Cualquier publicación de mi nombre o mensaje debe ser autorizada por separado.',$('#review-status'));
});
$$('input,textarea').forEach(input=>input.addEventListener('input',()=>input.setCustomValidity('')));
})();
