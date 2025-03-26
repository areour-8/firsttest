// بررسی وضعیت کاربر
auth.onAuthStateChanged(user => {
  const loginBtn = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  
  if (user) {
    // کاربر لاگین کرده
    if (loginBtn) loginBtn.style.display = 'none';
    if (logoutBtn) logoutBtn.style.display = 'block';
  } else {
    // کاربر لاگین نکرده
    if (loginBtn) loginBtn.style.display = 'block';
    if (logoutBtn) logoutBtn.style.display = 'none';
  }
});

// تابع خروج
function logout() {
  auth.signOut().then(() => {
    window.location.href = 'index.html';
  });
}
