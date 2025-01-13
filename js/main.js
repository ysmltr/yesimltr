// Now sayfası için içerik yönetimi
const nowContent = {
    lastUpdated: "21/11/2024",
    content: [
        {
            text: "Şu an neler yaptığınız...",
            type: "paragraph"
        },
        {
            text: "Başka bir paragraf...",
            type: "paragraph"
        }
    ]
};

// Now sayfası içeriğini yükle
function loadNowContent() {
    const contentDiv = document.getElementById('nowContent');
    const lastUpdated = document.getElementById('lastUpdated');
    
    if (lastUpdated) {
        lastUpdated.textContent = nowContent.lastUpdated;
    }
    
    if (contentDiv) {
        contentDiv.innerHTML = nowContent.content
            .map(item => `<p>${item.text}</p>`)
            .join('');
    }
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', loadNowContent);