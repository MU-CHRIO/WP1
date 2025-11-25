/* clubs.js - club listing, search/filter and join modal */
const clubs = [
  {id:1, name:'Robotics Club', desc:'Build and program robots', members:42},
  {id:2, name:'Drama Society', desc:'Stage plays and workshops', members:28},
  {id:3, name:'Photography Club', desc:'Photo walks and editing', members:19},
  {id:4, name:'Debate Club', desc:'Debates and public speaking', members:31}
];

document.addEventListener('DOMContentLoaded', ()=>{
  renderClubs(clubs);
  const s = document.getElementById('club-search');
  if(s) s.addEventListener('input', ()=> applyClubSearch());
  document.getElementById('club-list')?.addEventListener('click', (e)=>{
    const joinBtn = e.target.closest('button[data-join]');
    if(joinBtn){
      const id = Number(joinBtn.getAttribute('data-join'));
      openJoinModal(id);
    }
  });
  // Join form submission
  const joinForm = document.getElementById('join-form');
  if(joinForm){
    joinForm.addEventListener('submit', (ev)=>{
      ev.preventDefault();
      const name = joinForm.querySelector('[name="name"]').value.trim();
      const email = joinForm.querySelector('[name="email"]').value.trim();
      if(!name || !email){
        alert('Please provide your name and email');
        return;
      }
      // fake success
      const modalEl = document.getElementById('joinModal');
      const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
      modal.hide();
      alert('Join request sent — thank you!');
      joinForm.reset();
    });
  }
});

function applyClubSearch(){
  const q = (document.getElementById('club-search')?.value||'').toLowerCase();
  const filtered = clubs.filter(c=> c.name.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q));
  renderClubs(filtered);
}

function renderClubs(list){
  const wrap = document.getElementById('club-list');
  if(!wrap) return;
  wrap.innerHTML = '';
  list.forEach(c=>{
    const col = document.createElement('div'); col.className='col-md-6 col-lg-4 mb-3';
    col.innerHTML = `
      <div class="card h-100">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${c.name}</h5>
          <p class="card-text flex-grow-1">${c.desc}</p>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <small class="text-muted">Members: ${c.members}</small>
            <button class="btn btn-sm btn-primary" data-join="${c.id}">Join Club</button>
          </div>
        </div>
      </div>
    `;
    wrap.appendChild(col);
  });
  if(list.length===0) wrap.innerHTML = '<div class="col-12"><p class="text-muted">No clubs match your search.</p></div>';
}

function openJoinModal(id){
  const club = clubs.find(c=>c.id===id);
  if(!club) return;
  const modalTitle = document.getElementById('joinModalLabel');
  if(modalTitle) modalTitle.innerText = Join ;{club.name};
  const modal = new bootstrap.Modal(document.getElementById('joinModal'));
  modal.show();
}

export { clubs };