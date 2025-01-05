document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Formun sayfayı yenilemesini engelle

    // Form verilerini al
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
    };

    // E-posta gönderme işlemi
    emailjs.send("service_6ozu633", "template_364gohy", templateParams) // Replace with your service and template ID
        .then(function (response) {
            alert("Mesajınız başarıyla gönderildi!");
            document.getElementById("contact-form").reset(); // Formu sıfırla
        }, function (error) {
            alert("Mesaj gönderilirken bir hata oluştu: " + error.text);
        });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeBtn = document.querySelector('#toggleTheme');
    const themeIcon = document.querySelector('#themeIcon');

    toggleThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');  // Karanlık mod geçişi
        // Tema ikonunu güncelleme
        const isDarkTheme = document.body.classList.contains('dark-theme');
        if (isDarkTheme) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');  // Karanlık modda ay ikonu
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');   // Işık modunda güneş ikonu
        }
    });
});

 // Dil değiştirme işlevi
 document.getElementById('language-select').addEventListener('change', function () {
    const selectedLang = this.value;
    document.querySelectorAll('[data-lang]').forEach(element => {
        element.classList.toggle('d-none', element.getAttribute('data-lang') !== selectedLang);
    });
});

const languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', function () {
    // Seçili bayrağın URL'sini data-icon'dan al
    const selectedOption = languageSelect.options[languageSelect.selectedIndex];
    const flagUrl = selectedOption.getAttribute('data-icon');

    // Select kutusunun arka planını seçili bayrakla değiştir
    languageSelect.style.backgroundImage = `url(${flagUrl})`;
});

// Sayfa yüklendiğinde varsayılan dil için bayrak ayarla
document.addEventListener('DOMContentLoaded', function () {
    const selectedOption = languageSelect.options[languageSelect.selectedIndex];
    const flagUrl = selectedOption.getAttribute('data-icon');
    languageSelect.style.backgroundImage = `url(${flagUrl})`;
});


function adjustScrollMargin() {
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    console.log("Navbar yüksekliği:", navbarHeight);

    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.style.setProperty("scroll-margin-top", `${navbarHeight + 10}px`, "important");
        console.log(`Section ID: ${section.id}, Yeni scroll-margin-top: ${navbarHeight + 10}px`);
    });
}
