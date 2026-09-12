
function openMobile(){
  const nav=document.querySelector('.navlinks');
  if(!nav) return;
  nav.style.display = nav.style.display==='flex' ? 'none' : 'flex';
  nav.style.position='absolute';nav.style.right='18px';nav.style.top='72px';nav.style.background='#0d0d0f';
  nav.style.flexDirection='column';nav.style.padding='18px';nav.style.border='1px solid rgba(255,255,255,.1)';nav.style.borderRadius='14px';
}
function sendBooking(e){
  e.preventDefault();
  const f=e.target;
  const name=f.name.value.trim(), phone=f.phone.value.trim(), email=f.email.value.trim();
  const service=f.service.value, duration=f.duration.value, date=f.date.value, notes=f.notes.value.trim();
  const text=`Hi BP BrandPort Productions,%0A%0AI'd like to book a session.%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}%0AService: ${encodeURIComponent(service)}%0ADuration: ${encodeURIComponent(duration)}%0APreferred date: ${encodeURIComponent(date)}%0ANotes: ${encodeURIComponent(notes)}`;
  window.open('https://wa.me/971553353320?text='+text,'_blank');
  return false;
}
