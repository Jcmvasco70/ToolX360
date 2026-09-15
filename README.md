# ToolX360 - Blog de Ferramentas

Blog estático 100% gratuito, elegante + chamativo (Azul Marinho #0A192F + Laranja #FF6B00)

## Estrutura
- `index.html` - Home
- `css/style.css` - Estilos
- `js/main.js` - Interações + CONFIGURE SEUS LINKS SOCIAIS AQUI
- `posts/` - Matérias (use post-template.html como base)
- `pages/` - Sobre, Contato, Privacidade
- `assets/` - Imagens

## Como editar links sociais
Abra `js/main.js` e troque:
```js
tiktok: "https://www.tiktok.com/@seuusuario",
instagram: "https://...",
youtube: "https://...",
facebook: "https://..."
```

## Como criar nova matéria diária
1. Copie `posts/post-template.html` -> `posts/minha-nova-materia.html`
2. Troque título, texto, imagem e tabela
3. Abra `index.html` e duplique um `<article class="post-card">` apontando para o novo arquivo

## Hospedar grátis no GitHub Pages
1. Crie repositório `ToolX360` em github.com/Jcmvasco70
2. No terminal, dentro da pasta:
```
git init
git add .
git commit -m "ToolX360 inicial"
git branch -M main
git remote add origin https://github.com/Jcmvasco70/ToolX360.git
git push -u origin main
```
3. No GitHub: Settings > Pages > Source: main / root > Save
4. Seu blog ficará em `https://jcmvasco70.github.io/ToolX360/`

## AdSense
Após ~30 matérias, solicite aprovação em https://adsense.google.com - já temos Política de Privacidade pronta.

Custo zero - sem mensalidade.
