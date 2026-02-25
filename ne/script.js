function toggleEnvelope(event, element) {
    // 1. Ngăn không cho sự kiện click này lan ra ngoài toàn bộ màn hình (document)
    // Nếu không có dòng này, ngay khi click mở, document sẽ bắt được click và đóng nó lại ngay lập tức.
    event.stopPropagation();

    // 2. Nếu bao lì xì đang mở rồi thì click vào nó/thư sẽ không bị đóng lại.
    if (element.classList.contains('open')) return;

    // 3. Xử lý Trạng thái Phóng to / Thu nhỏ & Đóng / Mở
    const currentWrapper = element.closest('.v-wrapper');
    const allWrappers = document.querySelectorAll('.v-wrapper');

    allWrappers.forEach(wrapper => {
        const env = wrapper.querySelector('.envelope-wrapper');
        
        if (wrapper === currentWrapper) {
            // BAO ĐƯỢC CHỌN
            wrapper.classList.remove('inactive');
            wrapper.classList.add('active');
            
            env.classList.remove('close-opt');
            env.classList.add('open');
        } else {
            // BAO BỊ BỎ QUA
            wrapper.classList.remove('active');
            wrapper.classList.add('inactive');
            
            if (env.classList.contains('open')) {
                env.classList.remove('open');
                env.classList.add('close-opt');
            }
        }
    });
}

// Lắng nghe sự kiện click trên toàn bộ trang (bất kì chỗ nào không phải là bao lì xì đang mở)
document.addEventListener('click', function() {
    const allWrappers = document.querySelectorAll('.v-wrapper');
    
    allWrappers.forEach(wrapper => {
        // Trả các bao về lại vị trí hình chữ V
        wrapper.classList.remove('active');
        wrapper.classList.remove('inactive');
        
        // Đóng nắp các bao lại
        const env = wrapper.querySelector('.envelope-wrapper');
        if (env.classList.contains('open')) {
            env.classList.remove('open');
            env.classList.add('close-opt');
        }
    });
});