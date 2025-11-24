/* events.js - simple calendar and event modal handling */
const eventsList = [
  {id:1, title:'AI Seminar', date:'2025-11-28', time:'10:30', location:'Auditorium', desc:'Seminar on AI trends.'},
  {id:2, title:'Cultural Night', date:'2025-12-05', time:'18:00', location:'Main Lawn', desc:'Music and dance by student clubs.'}
];

document.addEventListener('DOMContentLoaded', ()=>{
  renderUpcoming();
  renderCalendar();
});

function renderUpcoming(){
  const wrap = document.getElementById('upcoming-events');
  if(!wrap) return;
  wrap.innerHTML = '';
  eventsList.forEach(ev =>{
    const li = document.createElement('li');
    li.className='list-group-item d-flex justify-content-between align-items-start';
    li.innerHTML = `
      <div>
        <div class="fw-bold">${ev.title}</div>
        <small class="text-muted">${ev.date} • ${ev.time}</small>
      </div>
      <button class="btn btn-sm btn-outline-primary" data-id="${ev.id}">View</button>
    `;
    wrap.appendChild(li);
  });

  wrap.querySelectorAll('button[data-id]').forEach(btn => {
    btn.addEventListener('click', (e)=>{
      const id = Number(btn.getAttribute('data-id'));
      openEventModal(id);
    });
  });
}

function renderCalendar(){
  const cal = document.getElementById('calendar-grid');
  if(!cal) return;
  // Simple calendar: show the current month dates (no nav)
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const first = new Date(year, month, 1);
  const last = new Date(year, month+1, 0);
  const startDay = first.getDay();
  const days = last.getDate();

  cal.innerHTML = '';
  // Weekday headers
  ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].forEach(d=>{
    const h = document.createElement('div'); h.className='text-center fw-semibold muted'; h.innerText = d; cal.appendChild(h);
  });
  // Empty slots
  for(let i=0;i<startDay;i++){
    const e = document.createElement('div'); e.className='day'; cal.appendChild(e);
  }
  // Days
  for(let d=1; d<=days; d++){
    const date = new Date(year, month, d);
    const el = document.createElement('div'); el.className='day';
    const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    el.innerHTML = `<div class="date">${d}</div>`;
    // attach event markers
    const todays = eventsList.filter(e => e.date===dateStr);
    if(todays.length){
      const badge = document.createElement('div');
      badge.className='mt-2';
      todays.forEach(ev =>{
        const b = document.createElement('button');
        b.className='btn btn-sm btn-outline-info me-1 mb-1';
        b.innerText = ev.title;
        b.addEventListener('click', ()=> openEventModal(ev.id));
        badge.appendChild(b);
      });
      el.appendChild(badge);
    }
    cal.appendChild(el);
  }
}

function openEventModal(id){
  const ev = eventsList.find(e=>e.id===id);
  if(!ev) return;
  const modalTitle = document.getElementById('eventModalLabel');
  const modalBody = document.getElementById('eventModalBody');
  if(modalTitle) modalTitle.innerText = ev.title;
  if(modalBody) modalBody.innerHTML = `<p><strong>Date:</strong> ${ev.date} • ${ev.time}</p><p><strong>Location:</strong> ${ev.location}</p><p>${ev.desc}</p>`;
  const modalEl = document.getElementById('eventModal');
  if(modalEl){
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }
}

export { eventsList };
