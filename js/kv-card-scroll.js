// KV Card Scroll Navigation
function scrollKvCards(direction) {
    const container = document.getElementById('kvCardContainer');
    if (!container) return;

    // 取得卡片寬度 + gap
    const card = container.querySelector('.kv-card');
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 16; // 1rem = 16px (對應 CSS 的 gap: 1rem)
    const scrollAmount = cardWidth + gap;

    // 根據方向滾動
    if (direction === 'left') {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// 偵測滾動位置，自動顯示/隱藏箭頭按鈕（可選功能）
function updateNavButtons() {
    const container = document.getElementById('kvCardContainer');
    const leftBtn = document.querySelector('.card-nav-left');
    const rightBtn = document.querySelector('.card-nav-right');
    
    if (!container || !leftBtn || !rightBtn) return;

    // 檢查是否在最左邊
    if (container.scrollLeft <= 0) {
        leftBtn.style.opacity = '0.3';
        leftBtn.style.pointerEvents = 'none';
    } else {
        leftBtn.style.opacity = '1';
        leftBtn.style.pointerEvents = 'auto';
    }

    // 檢查是否在最右邊
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft >= maxScroll - 5) { // 5px 容差
        rightBtn.style.opacity = '0.3';
        rightBtn.style.pointerEvents = 'none';
    } else {
        rightBtn.style.opacity = '1';
        rightBtn.style.pointerEvents = 'auto';
    }
}

// 頁面載入時初始化
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('kvCardContainer');
    if (container) {
        // 監聽滾動事件
        container.addEventListener('scroll', updateNavButtons);
        
        // 初始化按鈕狀態
        updateNavButtons();
        
        console.log('✅ KV 卡片滾動功能已初始化');
    }
});

// 視窗大小改變時更新按鈕狀態
window.addEventListener('resize', updateNavButtons);
