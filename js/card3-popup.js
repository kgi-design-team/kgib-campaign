// Card 3 Popup Script
function openCard3Popup() {
    const popup = document.getElementById('card3Popup');
    popup.style.display = 'flex';
    // 讓動畫能正常執行
    setTimeout(() => {
        popup.classList.add('show');
    }, 10);

    // 防止背景滾動
    document.body.style.overflow = 'hidden';
}

function closeCard3Popup() {
    const popup = document.getElementById('card3Popup');
    popup.classList.remove('show');

    // 延遲隱藏，等動畫完成
    setTimeout(() => {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// ESC 鍵關閉 popup
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeCard3Popup();
    }
});