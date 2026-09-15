// ToolX360 - JS
// CONFIGURE SEUS LINKS SOCIAIS AQUI (substitua # pelos links reais)
const SOCIAL_LINKS = {
  tiktok: "https://www.tiktok.com/@seuusuario",
  instagram: "https://www.instagram.com/seuusuario",
  youtube: "https://www.youtube.com/@seuusuario",
  facebook: "https://www.facebook.com/seuusuario"
};

document.addEventListener("DOMContentLoaded", () => {
  // Aplicar links sociais
  const map = {
    "link-tiktok": SOCIAL_LINKS.tiktok,
    "link-instagram": SOCIAL_LINKS.instagram,
    "link-youtube": SOCIAL_LINKS.youtube,
    "link-facebook": SOCIAL_LINKS.facebook
  };
  Object.entries(map).forEach(([id, url]) => {
    document.querySelectorAll(`#${id}, .social-btn`).forEach(el => {
      // Se for botão específico por classe, filtra
      if (el.id === id || (id.includes("tiktok") && el.classList.contains("tiktok")) ||
          (id.includes("instagram") && el.classList.contains("instagram")) ||
          (id.includes("youtube") && el.classList.contains("youtube")) ||
          (id.includes("facebook") && el.classList.contains("facebook"))) {
        if (url !== "#") el.href = url;
        el.target = "_blank";
      }
    });
  });
  // Fallback simples: todos .social-btn sem href definido apontam para #
  document.querySelectorAll(".social-grid a").forEach(a=>{
    if(a.getAttribute("href")==="#"){
      const cls = [...a.classList].find(c=>["tiktok","instagram","youtube","facebook"].includes(c));
      if(cls && SOCIAL_LINKS[cls] !== "#") a.href = SOCIAL_LINKS[cls];
      a.target="_blank";
    }
  });

  // Menu mobile
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  menuToggle?.addEventListener("click", ()=> nav.classList.toggle("open"));

  // Busca
  const searchToggle = document.getElementById("searchToggle");
  const searchBar = document.getElementById("searchBar");
  const searchInput = document.getElementById("searchInput");
  searchToggle?.addEventListener("click", ()=>{
    searchBar.classList.toggle("open");
    if(searchBar.classList.contains("open")) searchInput.focus();
  });
  searchInput?.addEventListener("input", (e)=>{
    const q = e.target.value.toLowerCase();
    document.querySelectorAll(".post-card").forEach(card=>{
      const title = card.dataset.title + " " + card.textContent.toLowerCase();
      card.style.display = title.includes(q) ? "" : "none";
    });
  });

  // Load more (simulado)
  document.getElementById("loadMore")?.addEventListener("click", function(){
    this.textContent = "Carregando...";
    setTimeout(()=>{
      this.textContent = "Você viu todas as matérias disponíveis";
      this.disabled = true;
      this.style.opacity = ".6";
    }, 800);
  });
});
