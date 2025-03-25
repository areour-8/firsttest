// تابع نمایش پیام
function showAlert() {
    alert('سلام! خوشحالم که از سایت من دیدن میکنید 😊');
}

// تغییر متن فوتر هنگام بارگذاری صفحه
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer p');
    const year = new Date().getFullYear();
    footer.textContent = `© ${year} ساختهشده با عشق ❤️`;
});
