// Google Fonts 載入檢測和容錯
(function () {
    const timeout = 5000; // 5秒超時
    let fontLoaded = false;

    // 載入 Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap';
    link.rel = 'stylesheet';

    // 載入成功檢測
    link.onload = function () {
        fontLoaded = true;
        console.log('✅ Google Fonts 載入成功');
    };

    // 載入失敗處理
    link.onerror = function () {
        console.warn('❌ Google Fonts 載入失敗，使用本地字體');
        addFallbackFonts();
    };

    document.head.appendChild(link);

    // 超時處理
    setTimeout(function () {
        if (!fontLoaded) {
            console.warn('⏰ Google Fonts 載入超時，使用本地字體');
            addFallbackFonts();
        }
    }, timeout);

    // 添加容錯字體樣式
    function addFallbackFonts() {
        const fallbackStyle = document.createElement('style');
        fallbackStyle.textContent = `
            body, html, * {
                font-family: "Microsoft JhengHei", "微軟正黑體", "PingFang TC", "Helvetica Neue", Arial, sans-serif !important;
            }
        `;
        document.head.appendChild(fallbackStyle);
    }
})();