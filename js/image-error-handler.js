// 圖片載入錯誤處理和路徑修正
function handleImageError() {
    document.addEventListener('DOMContentLoaded', function () {
        // 檢測所有圖片載入狀態
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('error', function () {
                console.warn('圖片載入失敗:', this.src);

                // 嘗試修正路徑
                const originalSrc = this.getAttribute('src');
                if (!originalSrc.startsWith('./') && !originalSrc.startsWith('http')) {
                    this.src = './' + originalSrc;
                }
            });

            // 檢查圖片是否已載入
            if (img.complete && img.naturalHeight === 0) {
                img.dispatchEvent(new Event('error'));
            }
        });
    });
}

handleImageError();