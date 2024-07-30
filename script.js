// Get elements
const sidebarToggle = document.querySelector('.header-icons .icon-group a');
const sidebar = document.querySelector('.sidebar');
const navMenuItems = document.querySelectorAll('.sidebar ul li a');
const notifications = document.querySelector('.notifications');
const calendar = document.querySelector('.calendar-section');
const schedule = document.querySelector('.schedule-section');

// Toggle sidebar
sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Active navigation menu item
navMenuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    navMenuItems.forEach((item) => item.classList.remove('active'));
    menuItem.classList.add('active');
  });
});

// Show/hide notifications
notifications.addEventListener('click', () => {
  notifications.classList.toggle('show');
});

// Calendar functionality (basic)
calendar.addEventListener('click', (e) => {
  if (e.target.tagName === 'TD') {
    const date = e.target.textContent;
    console.log(`Selected date: ${date}`);
  }
});

// Schedule section (basic)
schedule.addEventListener('click', (e) => {
  if (e.target.tagName === 'H4') {
    const scheduleItem = e.target.parentNode;
    scheduleItem.classList.toggle('active');
  }
});