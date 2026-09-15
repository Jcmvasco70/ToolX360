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

  // FILTRO POR CATEGORIA (KPIs)
  const catCards = document.querySelectorAll(".cat-card");
  const filterInfo = document.getElementById("filterInfo");
  const filterName = document.getElementById("filterName");
  const clearFilter = document.getElementById("clearFilter");
  const viewAllBtn = document.getElementById("viewAllBtn");

  function applyFilter(filter){
    const q = filter.toLowerCase();
    let visible = 0;
    document.querySelectorAll(".post-card").forEach(card=>{
      const text = (card.dataset.title + " " + card.textContent).toLowerCase();
      const match = text.includes(q);
      card.style.display = match ? "" : "none";
      if(match) visible++;
    });
    // Info para AdSense: se nada, mostra mensagem
    let noRes = document.getElementById("noResults");
    if(visible===0){
      if(!noRes){
        noRes = document.createElement("div");
        noRes.id="noResults";
        noRes.style.cssText="text-align:center;padding:20px;color:#64748B;font-size:14px;background:#fff;border:1px dashed #E2E8F0;border-radius:10px;margin-top:10px";
        document.getElementById("postsList").appendChild(noRes);
      }
      noRes.textContent = "Nenhuma matéria para '"+filter+"' ainda. Em breve mais conteúdos!";
      noRes.style.display="block";
    } else if(noRes) noRes.style.display="none";

    filterInfo.style.display = filter ? "block" : "none";
    if(filterName) filterName.textContent = filter;
    catCards.forEach(c=> c.classList.toggle("active", c.dataset.filter.toLowerCase()===q));
    document.getElementById("recentes")?.scrollIntoView({behavior:"smooth"});
  }

  catCards.forEach(card=>{
    card.addEventListener("click", (e)=>{
      e.preventDefault();
      const f = card.dataset.filter;
      applyFilter(f);
    });
  });
  clearFilter?.addEventListener("click", (e)=>{ e.preventDefault(); clearAll(); });
  viewAllBtn?.addEventListener("click", (e)=>{ e.preventDefault(); clearAll(); });
  function clearAll(){
    document.querySelectorAll(".post-card").forEach(c=> c.style.display="");
    filterInfo.style.display="none";
    catCards.forEach(c=> c.classList.remove("active"));
    const noRes = document.getElementById("noResults");
    if(noRes) noRes.style.display="none";
    document.getElementById("searchInput").value="";
  }

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
