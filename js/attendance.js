/* attendance.js - simple attendance dashboard with dynamic progress bars */
const attendanceData = [
  {id:1, name:'Alice Johnson', course:'CS101', percent:92},
  {id:2, name:'Bob Smith', course:'CS101', percent:78},
  {id:3, name:'Cara Lopez', course:'EE202', percent:85},
  {id:4, name:'David Chen', course:'ME303', percent:66}
];

document.addEventListener('DOMContentLoaded', function(){
  renderAttendance(attendanceData);
  const courseSelect = document.getElementById('att-course');
  if(courseSelect){
    courseSelect.addEventListener('change', ()=>{
      const c = courseSelect.value;
      const filtered = c==='All' ? attendanceData : attendanceData.filter(a=>a.course===c);
      renderAttendance(filtered);
    });
  }
});

function renderAttendance(list){
  const tbody = document.getElementById('att-body');
  const summary = document.getElementById('att-summary');
  if(!tbody) return;
  tbody.innerHTML = '';
  let total = 0;
  list.forEach(r => {
    total += r.percent;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${r.name}</td>
      <td>${r.course}</td>
      <td>
        <div class="progress" style="height:16px">
          <div class="progress-bar" role="progressbar" style="width:${r.percent}%" aria-valuenow="${r.percent}" aria-valuemin="0" aria-valuemax="100">${r.percent}%</div>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
  if(summary){
    const avg = list.length? Math.round(total/list.length) : 0;
    summary.innerText = `Average Attendance: ${avg}%`;
  }
}

export { attendanceData, renderAttendance };
