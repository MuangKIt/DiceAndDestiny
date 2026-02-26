/* ==============================================
   Admin Boardgames Management Script
============================================== */

let localAdminGames = [];
let filteredGames = [];
let currentPage = 1;
const itemsPerPage = 6;

// ตัวแปรเก็บ Modal (ใช้ Bootstrap Modal API)
let addModalInstance;
let editModalInstance;

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({ duration: 800, once: true });

    // กำหนด Instance ของ Modal
    addModalInstance = new bootstrap.Modal(document.getElementById('addGameModal'));
    editModalInstance = new bootstrap.Modal(document.getElementById('editGameModal'));

    // 1. จำลองการดึงข้อมูลฐานข้อมูลโดยใช้ LocalStorage
    const savedGames = localStorage.getItem('adminBoardgamesDB');
    
    if (savedGames) {
        localAdminGames = JSON.parse(savedGames);
        
        // --- เพิ่มเงื่อนไขตรงนี้ ---
        // เช็คว่าข้อมูลเก่าที่ดึงมา มีตัวแปร quantity หรือไม่ (เผื่อเป็นข้อมูลเก่า)
        // ถ้าไม่มี (undefined) ให้บังคับดึงข้อมูลใหม่จาก games-data.js มาทับเลย
        if (localAdminGames.length > 0 && typeof localAdminGames[0].quantity === 'undefined') {
            console.log("ตรวจพบข้อมูลเวอร์ชันเก่า กำลังอัปเดตข้อมูลใหม่...");
            localAdminGames = [...boardgames];
            saveToDB(); 
        }
    } else {
        // ถ้าเข้าเว็บครั้งแรก ดึงข้อมูลเริ่มต้นจากตัวแปร boardgames
        localAdminGames = [...boardgames];
        saveToDB(); 
    }

    filteredGames = [...localAdminGames];
    renderTable(1);
});

// ฟังก์ชันบันทึกลง LocalStorage
function saveToDB() {
    localStorage.setItem('adminBoardgamesDB', JSON.stringify(localAdminGames));
}

// สีของป้ายหมวดหมู่
function getCategoryBadgeClass(category) {
    const cat = category.toLowerCase();
    if (cat.includes('strategy')) return 'bg-success-subtle text-success border-success-subtle';
    if (cat.includes('party')) return 'bg-danger-subtle text-danger border-danger-subtle';
    if (cat.includes('social deduction')) return 'bg-primary-subtle text-primary border-primary-subtle';
    if (cat.includes('family')) return 'bg-warning-subtle text-warning border-warning-subtle';
    return 'bg-info-subtle text-info border-info-subtle';
}

// ----------------------------------------------
// การแสดงผลตาราง (Render Table & Pagination)
// ----------------------------------------------
function renderTable(page) {
    const tbody = document.getElementById('boardgames-table-body');
    const totalItems = filteredGames.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
    
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    currentPage = page;

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentGames = filteredGames.slice(start, end);

    let html = '';
    if (currentGames.length === 0) {
        html = `<tr><td colspan="4" class="text-center py-5 text-muted"><i class="fas fa-box-open fa-2x mb-3 d-block"></i>ไม่พบข้อมูลบอร์ดเกม</td></tr>`;
    } else {
        currentGames.forEach(game => {
            const badgeClass = getCategoryBadgeClass(game.category);
            const qtyClass = game.quantity <= 1 ? 'text-danger' : '';
            const newTag = game.isNew ? '<span class="badge bg-danger ms-2">NEW</span>' : '';
            
            html += `
                <tr>
                    <td>
                        <div class="d-flex align-items-center">
                            <div class="bg-light rounded p-1 me-3 border flex-shrink-0">
                                <img src="${game.image}" alt="${game.name}" style="width: 50px; height: 50px; object-fit: cover;" onerror="this.src='https://placehold.co/50x50/212529/ffffff?text=Game'">
                            </div>
                            <div>
                                <div class="fw-bold text-dark">${game.name} ${newTag}</div>
                                <small class="text-muted"><i class="fas fa-users me-1"></i>${game.players} | <i class="fas fa-clock me-1"></i>${game.time}m</small>
                            </div>
                        </div>
                    </td>
                    <td><span class="badge ${badgeClass} border">${game.category}</span></td>
                    <td class="text-center fw-bold fs-5 ${qtyClass}">${game.quantity}</td>
                    <td class="text-center">
                        <button class="btn btn-sm btn-outline-warning me-1" title="แก้ไข" onclick="openEditModal(${game.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-danger" title="ลบ" onclick="deleteGame(${game.id})">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </td>
                </tr>
            `;
        });
    }
    tbody.innerHTML = html;

    // อัปเดตข้อมูล Pagination
    const info = document.getElementById('pagination-info');
    const endDisplay = Math.min(end, totalItems);
    const startDisplay = totalItems > 0 ? start + 1 : 0;
    info.innerText = `แสดง ${startDisplay} ถึง ${endDisplay} จากทั้งหมด ${totalItems} รายการ`;

    // สร้างปุ่ม Pagination
    const paginationList = document.getElementById('pagination-list');
    let paginationHTML = '';
    
    paginationHTML += `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="renderTable(${currentPage - 1}); return false;">ก่อนหน้า</a>
        </li>
    `;
    
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
            <li class="page-item ${i === currentPage ? 'active' : ''}">
                <a class="page-link" href="#" onclick="renderTable(${i}); return false;">${i}</a>
            </li>
        `;
    }
    
    paginationHTML += `
        <li class="page-item ${currentPage === totalPages || totalPages === 0 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="renderTable(${currentPage + 1}); return false;">ถัดไป</a>
        </li>
    `;
    paginationList.innerHTML = paginationHTML;
}

// ระบบค้นหาเกม (อัปเดตตารางทันทีที่พิมพ์)
function filterAdminGames() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    filteredGames = localAdminGames.filter(game => game.name.toLowerCase().includes(searchText));
    renderTable(1); // รีเซ็ตไปหน้าที่ 1 เสมอเวลาค้นหา
}


// ----------------------------------------------
// การเพิ่มบอร์ดเกมใหม่ (Add Game)
// ----------------------------------------------
function saveNewGame(event) {
    event.preventDefault(); // ป้องกันหน้าเว็บรีเฟรชเมื่อกด submit

    // สร้าง ID ใหม่ (ดึงตัวที่เลขเยอะสุดมา +1)
    const maxId = localAdminGames.reduce((max, game) => (game.id > max ? game.id : max), 0);
    
    const newGame = {
        id: maxId + 1,
        name: document.getElementById('addName').value,
        category: document.getElementById('addCategory').value,
        players: document.getElementById('addPlayers').value,
        time: document.getElementById('addTime').value,
        description: document.getElementById('addDesc').value,
        image: document.getElementById('addImage').value,
        quantity: parseInt(document.getElementById('addQuantity').value),
        isNew: true // บังคับเป็น true ตามความต้องการ
    };

    // นำเข้า Array
    localAdminGames.push(newGame);
    
    // อัปเดต Filter และฐานข้อมูลจำลอง
    filterAdminGames(); 
    saveToDB();

    // เคลียร์ค่าฟอร์ม และ ปิด Modal
    document.getElementById('addGameForm').reset();
    addModalInstance.hide();
    
    // แจ้งเตือน (Optional)
    alert(`เพิ่มบอร์ดเกม "${newGame.name}" สำเร็จ!`);
}


// ----------------------------------------------
// การแก้ไขบอร์ดเกม (Edit Game)
// ----------------------------------------------
function openEditModal(gameId) {
    // หาเกมจาก ID
    const game = localAdminGames.find(g => g.id === gameId);
    if (!game) return;

    // ยัดข้อมูลใส่ฟอร์ม
    document.getElementById('editId').value = game.id;
    document.getElementById('editName').value = game.name;
    document.getElementById('editCategory').value = game.category;
    document.getElementById('editPlayers').value = game.players;
    document.getElementById('editTime').value = game.time;
    document.getElementById('editImage').value = game.image;
    document.getElementById('editQuantity').value = game.quantity;
    document.getElementById('editDesc').value = game.description;
    
    // ตั้งค่า Checkbox
    document.getElementById('editIsNew').checked = game.isNew;

    // เปิด Modal
    editModalInstance.show();
}

function saveEditGame(event) {
    event.preventDefault();

    const gameId = parseInt(document.getElementById('editId').value);
    const gameIndex = localAdminGames.findIndex(g => g.id === gameId);

    if (gameIndex > -1) {
        // อัปเดตข้อมูล
        localAdminGames[gameIndex].name = document.getElementById('editName').value;
        localAdminGames[gameIndex].category = document.getElementById('editCategory').value;
        localAdminGames[gameIndex].players = document.getElementById('editPlayers').value;
        localAdminGames[gameIndex].time = document.getElementById('editTime').value;
        localAdminGames[gameIndex].image = document.getElementById('editImage').value;
        localAdminGames[gameIndex].quantity = parseInt(document.getElementById('editQuantity').value);
        localAdminGames[gameIndex].description = document.getElementById('editDesc').value;
        localAdminGames[gameIndex].isNew = document.getElementById('editIsNew').checked;

        // เซฟลง DB และเรนเดอร์ใหม่
        saveToDB();
        filterAdminGames();
        
        editModalInstance.hide();
    }
}


// ----------------------------------------------
// การลบบอร์ดเกม (Delete Game)
// ----------------------------------------------
function deleteGame(gameId) {
    const game = localAdminGames.find(g => g.id === gameId);
    
    if (confirm(`คุณต้องการลบเกม "${game.name}" ออกจากระบบใช่หรือไม่?`)) {
        // กรองเอาตัวที่ไอดีไม่ตรงกับที่เลือกลบทิ้งเอาไว้ (อารมณ์เหมือนลบตัวที่เลือกออก)
        localAdminGames = localAdminGames.filter(g => g.id !== gameId);
        
        saveToDB();
        filterAdminGames();
    }
}