function menuclick() {
    var menu = document.getElementById('mobilemenu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}



document.addEventListener('DOMContentLoaded', function () {
    const copySection = document.getElementById('copy');
    copySection.innerHTML = `&copy; All Rights Reserved ${new Date().getFullYear()}`;
});