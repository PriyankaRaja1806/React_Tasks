
document.addEventListener('DOMContentLoaded', function() {

document.querySelectorAll('.sidebar nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    document.querySelectorAll('.sidebar nav a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');

  });
});

const dropdownBtn = document.querySelector('.user-dropdown-btn');
const dropdownMenu = document.querySelector('.user-dropdown-menu');
const dropdown = document.querySelector('.user-dropdown');

if (dropdownBtn) {
  dropdownBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    dropdown.classList.toggle('active');
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
    dropdownMenu.setAttribute('aria-hidden', expanded);
  });


  document.addEventListener('click', function () {
    dropdown.classList.remove('active');
    dropdownBtn.setAttribute('aria-expanded', 'false');
    dropdownMenu.setAttribute('aria-hidden', 'true');
  });
}


const editBtn = document.querySelector('.edit-btn');
if(editBtn) {
  editBtn.addEventListener('click', function () {
    alert('Edit functionality not implemented.');
  });
}


const searchBtn = document.querySelector('.search-btn');
if(searchBtn) {
  searchBtn.addEventListener('click', function () {
    alert('Search functionality not implemented.');
    
  });
}



document.querySelectorAll('.account-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    if (btn.classList.contains('block')) {
      btn.classList.remove('block');
      btn.classList.add('unblock');
      btn.textContent = 'Unlock account';
      btn.parentElement.querySelector('span').innerHTML = 'Blocked account<br><span style="font-size:13px;color:#aaa;">7842 5690 2041 2345</span>';
    } else {
      btn.classList.remove('unblock');
      btn.classList.add('block');
      btn.textContent = 'Block account';
      btn.parentElement.querySelector('span').innerHTML = 'Active account<br><span style="font-size:13px;color:#aaa;">8640 5680 8081 4525</span>';
    }
  });
});


const filterBtn = document.querySelector('.filter-btn');
if(filterBtn) {
  filterBtn.addEventListener('click', function () {
    alert('Filter functionality not implemented.');
    
  });
}

document.querySelectorAll('.bill-row').forEach(row => {
  row.addEventListener('click', function() {
    const status = row.querySelector('.bill-status');
    if (status.classList.contains('paid')) {
      status.classList.remove('paid');
      status.classList.add('notpaid');
      status.textContent = 'Not paid';
    } else if (status.classList.contains('notpaid')) {
      status.classList.remove('notpaid');
      status.classList.add('paid');
      status.textContent = 'Bill paid';
    }
  });
});


const saveBtn = document.querySelector('.profile-info .save-btn');
if (saveBtn) {
  saveBtn.addEventListener('click', function() {
    saveBtn.textContent = 'Saved!';
    saveBtn.disabled = true;
    setTimeout(() => {
      saveBtn.textContent = 'Save';
      saveBtn.disabled = false;
    }, 1500);
  });
}
});
