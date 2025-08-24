/* 首页自定义JavaScript */

document.addEventListener('DOMContentLoaded', function() {
    // 自动添加主容器
    if (!document.querySelector('.main-container')) {
        var content = document.body.innerHTML;
        document.body.innerHTML = '<div class="main-container">' + content + '</div>';
    }
    
    // 优化博客描述
    var desc = document.querySelector('[style*="margin-bottom: 16px"]');
    if (desc && desc.textContent === 'Blog description') {
        desc.className = 'blog-description';
        desc.textContent = '📝 分享技术心得，记录生活点滴，探索未知世界';
    }
    
    // 添加平滑滚动效果
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 添加文章列表项的点击动画
    var sideNavItems = document.querySelectorAll('.SideNav-item');
    sideNavItems.forEach(function(item) {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // 主题切换动画增强
    var themeButton = document.querySelector('[onclick*="modeSwitch"]');
    if (themeButton) {
        themeButton.addEventListener('click', function() {
            document.body.style.transition = 'all 0.5s ease';
            setTimeout(() => {
                document.body.style.transition = '';
            }, 500);
        });
    }
});
