
function setRows(){
  const rows=document.querySelectorAll('[data-row]');
  const q=(document.querySelector('#q')?.value||'').toLowerCase().trim();
  const c=document.querySelector('#course')?.value||'all';
  const r=document.querySelector('#region')?.value||'all';
  const y=document.querySelector('#year')?.value||'all';
  let count=0;
  rows.forEach(el=>{const ok=(c==='all'||el.dataset.course===c)&&(r==='all'||el.dataset.region===r)&&(y==='all'||el.dataset.year===y)&&(!q||el.dataset.text.includes(q));el.style.display=ok?'':'none';if(ok)count++});
  const n=document.querySelector('#resultCount'); if(n)n.textContent=count+' مورد';
}
['q','course','region','year'].forEach(id=>document.querySelector('#'+id)?.addEventListener('input',setRows)); setRows();
