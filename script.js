/* ========================================
   DICE & DESTINY - Main JavaScript File
   JavaScript ที่ใช้ร่วมกันในทุกหน้า
   ======================================== */

/* ========================================
   1. AOS Animation Initialization
   ======================================== */
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 500,
        once: true
    });
});


/* ========================================
   2. NavBar Scroll Effect
   ======================================== */
window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    
    // ถ้าเลื่อนลงมามากกว่า 50px ให้เพิ่มคลาส scrolled
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};




/* ========================================
   3. Login System (LocalStorage-based)
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // 1. AOS Animation Initialization
    AOS.init({
        duration: 500,
        once: true
    });

    // 2. ตรวจสอบสถานะ Login เมื่อโหลดหน้าเว็บ
    checkLoginStatus();

    // 3. จัดการการส่งฟอร์ม Login (ดักจับจาก ID loginForm ที่มีในทุกหน้า)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // สมมติว่ากรอกอะไรก็ผ่าน (ระบบอย่างง่าย)
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', loginForm.querySelector('input[type="email"]').value);
            
            // ปิด Modal และ Refresh หน้าเพื่ออัปเดต UI
            const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
            modal.hide();
            window.location.reload(); 
        });
    }
});

/* ฟังก์ชันตรวจสอบและเปลี่ยน UI ของ Navbar */
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const authContainer = document.querySelector('.navbar-nav'); // หาตำแหน่งที่จะวางปุ่ม

    if (isLoggedIn === 'true' && authContainer) {
        // หาปุ่มเข้าสู่ระบบเดิม (ถ้ามี) แล้วลบออก
        const loginBtn = authContainer.querySelector('a[data-bs-target="#loginModal"]')?.parentElement;
        if (loginBtn) loginBtn.remove();

        // สร้าง Dropdown "บัญชีของฉัน"
        const userDropdownHTML = `
            <li class="nav-item dropdown ms-lg-3">
                <a class="nav-link text-white" href="#" id="userDropdown" role="button">
                    <span>บัญชีของฉัน</span>
                    <div class="user-icon">
                        <i class="fas fa-user"></i>
                    </div>
                </a>
                <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="userDropdown">
                    <li><a class="dropdown-item" href="#"><i class="fas fa-th-large me-2"></i> Dashboard</a></li>
                    <li><a class="dropdown-item" href="#"><i class="fas fa-user-cog me-2"></i> Account details</a></li>
                    <li><a class="dropdown-item" href="#"><i class="fas fa-map-marker-alt me-2"></i> Address</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item text-danger" href="#" onclick="logout()">
                        <i class="fas fa-sign-out-alt me-2"></i> ออกจากระบบ
                    </a></li>
                </ul>
            </li>
        `;
        authContainer.insertAdjacentHTML('beforeend', userDropdownHTML);
    }
}

/* ฟังก์ชันออกจากระบบ */
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.reload();
}

/* 4. NavBar Scroll Effect */
window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};
