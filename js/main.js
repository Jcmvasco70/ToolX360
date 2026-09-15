// ToolX360 - JS
// CONFIGURE SEUS LINKS SOCIAIS AQUI
const SOCIAL_LINKS = {
  tiktok: "https://www.tiktok.com/@toolx360",
  pinterest: "https://br.pinterest.com/Tools_Maintenance/",
  youtube: "https://www.youtube.com/@Toolx360",
  facebook: "https://www.facebook.com/profile.php?id=100081875915007&locale=pt_BR",
  instagram: "#" // ainda sem Instagram
};

document.addEventListener("DOMContentLoaded", () => {
  // Aplicar links sociais
  const map = {
    "link-tiktok": SOCIAL_LINKS.tiktok,
    "link-pinterest": SOCIAL_LINKS.pinterest,
    "link-youtube": SOCIAL_LINKS.youtube,
    "link-facebook": SOCIAL_LINKS.facebook
  };
  Object.entries(map).forEach(([id, url]) => {
    document.querySelectorAll(`#${id}, .social-btn`).forEach(el => {
      // Se for botão específico por classe, filtra
      if (el.id === id || (id.includes("tiktok") && el.classList.contains("tiktok")) ||
          (id.includes("pinterest") && el.classList.contains("pinterest")) ||
          (id.includes("youtube") && el.classList.contains("youtube")) ||
          (id.includes("facebook") && el.classList.contains("facebook"))) {
        if (url !== "#") el.href = url;
        el.target = "_blank";
      }
    });
  });
  // Fallback simples: todos .social-btn sem href definido apontam para #
  document.querySelectorAll(".social-grid a, .social-links a").forEach(a=>{
    if(a.getAttribute("href")==="#" || a.getAttribute("href")===""){
      const cls = [...a.classList].find(c=>["tiktok","pinterest","youtube","facebook","instagram"].includes(c));
      if(cls && SOCIAL_LINKS[cls] && SOCIAL_LINKS[cls] !== "#") a.href = SOCIAL_LINKS[cls];
      if(a.href && a.href !== window.location.href) a.target="_blank";
    }
  });
  // Aplica hrefs diretos dos IDs
  Object.entries(map).forEach(([id, url])=>{
    const el = document.getElementById(id);
    if(el && url && url !== "#"){ el.href = url; el.target="_blank"; }
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
