// 메뉴 토글 기능
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('mainMenu').classList.toggle('active');
});

// 메뉴 링크 클릭 시 해당 섹션으로 스크롤
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 모바일 메뉴 닫기
        document.getElementById('mainMenu').classList.remove('active');
        
        // 해당 섹션으로 스크롤
        const sectionId = this.getAttribute('data-section');
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 상세 페이지 보기 기능
document.querySelectorAll('.detail-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 메인 콘텐츠 숨기기
        document.getElementById('main-content').style.display = 'none';
        
        // 선택한 상세 페이지 표시
        const detailId = this.getAttribute('data-detail');
        document.getElementById(detailId).classList.add('active');
        
        // 스크롤을 페이지 상단으로 이동
        window.scrollTo({
            behavior: 'smooth'
        });
    });
});
// 상세 보기 링크 클릭 시 상세 페이지 표시 및 해당 상세 페이지 위치로 부드럽게 이동
document.querySelectorAll('.detail-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const detailId = this.dataset.detail;

        document.getElementById('main-content').style.display = 'none';
        document.querySelectorAll('.detail-page').forEach(page => {
            page.classList.remove('active');
        });

        const targetPage = document.getElementById(detailId);
        if (targetPage) {
            targetPage.classList.add('active');
            targetPage.scrollIntoView({ behavior: 'smooth' }); // 상세 페이지로 부드럽게 이동
        }
    });
});

// 뒤로가기 버튼
function goBack() {
    document.getElementById('main-content').style.display = 'block';
    document.querySelectorAll('.detail-page').forEach(page => {
        page.classList.remove('active');
    });
    window.scrollTo({ top: 0, behavior: "smooth" }); // 뒤로 갈 때도 스크롤 맨 위로 이동
}

// URL 해시 변경 감지하여 해당 섹션으로 스크롤
window.addEventListener('hashchange', function() {
    const hash = window.location.hash;
    if (hash) {
        const section = document.querySelector(hash);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
});
// 메뉴 토글
document.getElementById('menuToggle').addEventListener('click', function () {
    document.getElementById('mainMenu').classList.toggle('active');
});
