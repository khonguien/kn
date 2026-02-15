const box = document.querySelector('.box');

function openGift(event) {
    // Kiểm tra: Chỉ khi hộp CHƯA mở thì mới chặn sự kiện để thực hiện mở
    if (!box.classList.contains('open')) {
        event.stopPropagation(); // Ngăn sự kiện lan ra window (để không bị đóng ngay lập tức)
        box.classList.remove('close-opt');
        box.classList.add('open');
    }
    // Nếu hộp ĐÃ mở rồi:
    // Ta KHÔNG dùng event.stopPropagation() nữa.
    // Sự kiện click sẽ tự động lan ra window, và window sẽ xử lý việc đóng.
}

// Sự kiện click toàn màn hình (bao gồm cả click vào thư khi đã mở)
window.addEventListener('click', () => {
    if (box.classList.contains('open')) {
        box.classList.remove('open');
        box.classList.add('close-opt');
        
        // Reset lại trạng thái nhún nhảy sau 1.5s (khi đã đóng xong)
        setTimeout(() => {
            box.classList.remove('close-opt');
        }, 1500); 
    }
});