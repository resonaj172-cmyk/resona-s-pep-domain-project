const navItems = document.querySelectorAll('.uy h4');
const currentPage = window.location.pathname.split("/").pop() || 'index.html';
navItems.forEach(item => {
    const pageName = item.textContent.toLowerCase();
    if ((pageName === 'home' && currentPage === 'index.html') || currentPage.includes(pageName)) {
        item.classList.add('active-nav');
    }
    item.addEventListener('click', () => {
        let target = pageName + '.html';
        if(pageName === 'home') target = 'index.html';
        window.location.href = target;
    });
    item.addEventListener('mouseenter', () => item.style.transform = 'scale(1.1)');
    item.addEventListener('mouseleave', () => item.style.transform = 'scale(1)');
});
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.05)';
        btn.style.transition = '0.3s';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });
    btn.addEventListener('click', () => {
        console.log(`Button clicked: ${btn.textContent}`);
    });
});
const cards = document.querySelectorAll('.ab');
cards.forEach((card, index) => {
    card.style.opacity = 0; 
    card.style.transform = 'translateY(50px)'; 

    setTimeout(() => {
        card.style.transition = 'all 0.8s ease-out';
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
    }, 200 * index);
});
const nextPage = document.querySelector('.bite');
if(nextPage){
    nextPage.addEventListener('mouseenter', () => {
        nextPage.style.transform = 'scale(1.1)';
        nextPage.style.transition = '0.3s';
        nextPage.style.background = 'linear-gradient(to right, #21cf64 0%, #1b24cf 100%)';
    });
    nextPage.addEventListener('mouseleave', () => {
        nextPage.style.transform = 'scale(1)';
        nextPage.style.background = 'linear-gradient(to right, #1b24cf 0%, #21cf64 100%)';
    });
}