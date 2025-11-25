/* announcements.js - renders announcements and provides live search and filter */
const announcements = [
  {id:1, title:'Campus Reopening', date:'2025-09-01', category:'General', desc:'Campus reopens for the fall semester with safety guidelines.'},
  {id:2, title:'Guest Lecture: AI in Education', date:'2025-10-10', category:'Events', desc:'A talk on AI applications in education by Dr. A. Example.'},
  {id:3, title:'Library Timing Changes', date:'2025-11-05', category:'Notice', desc:'Library hours changed during exam week.'},
  {id:4, title:'Sports Meet Results', date:'2025-08-20', category:'Clubs', desc:'Inter-department sports meet results and winners.'}
];

document.addEventListener('DOMContentLoaded', function(){
  renderAnnouncements(announcements);

  const search = document.getElementById('ann-search');
  const filter = document.getElementById('ann-filter');
  if(search) search.addEventListener('input', applyFilters);
  if(filter) filter.addEventListener('change', applyFilters);
});

function applyFilters(){
  const q = (document.getElementById('ann-search')?.value || '').toLowerCase();
  const cat = (document.getElementById('ann-filter')?.value || 'All');
  const filtered = announcements.filter(a => {
    const matchQ = a.title.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q);
    const matchCat = (cat==='All') || a.category===cat;
    return matchQ && matchCat;
  });
  renderAnnouncements(filtered);
}

function renderAnnouncements(list){
  const wrap = document.getElementById('ann-list');
  if(!wrap) return;
  wrap.innerHTML = '';
  list.forEach(a =>{
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4 mb-3';
    col.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${a.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${a.date} • ${a.category}</h6>
          <p class="card-text">${a.desc}</p>
        </div>
      </div>
    `;
    wrap.appendChild(col);
  });
  if(list.length===0){
    wrap.innerHTML = '<div class="col-12"><p class="text-muted">No announcements found.</p></div>';
  }
}

// Export for testing or manual calls
export { announcements, renderAnnouncements };