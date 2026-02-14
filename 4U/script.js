const mainWrapper = document.getElementById('main-gift-wrapper');

function toggleGift() {
    // Kiểm tra xem đang MỞ hay ĐÓNG
    if (mainWrapper.classList.contains('open')) {
        // --- TRƯỜNG HỢP 1: ĐANG MỞ -> THỰC HIỆN ĐÓNG ---
        
        // Xóa class mở
        mainWrapper.classList.remove('open');
        // Thêm class đóng để kích hoạt animation bay vào
        mainWrapper.classList.add('close-opt');

    } else {
        // --- TRƯỜNG HỢP 2: ĐANG ĐÓNG -> THỰC HIỆN MỞ ---
        
        // Xóa class đóng (nếu có)
        mainWrapper.classList.remove('close-opt');
        // Thêm class mở
        mainWrapper.classList.add('open');
    }
}