/* site-config.js — Variables globales del sitio
 * Definir aqui: el cambio se propaga automaticamente a todas las paginas.
 * Para agregar una nueva variable: declararla en SITE e inyectarla abajo. */
const SITE = {
  anio: 2026,
  autor: 'Ey40-0',
  github: 'https://github.com/Ey40-0',
};

document.addEventListener('DOMContentLoaded', () => {
  /* data-site="copyright" → texto del pie de pagina */
  document.querySelectorAll('[data-site="copyright"]').forEach(el => {
    el.textContent = `© ${SITE.anio} ${SITE.autor}.`;
  });

  /* data-site="github-link" → href del enlace de GitHub */
  document.querySelectorAll('[data-site="github-link"]').forEach(el => {
    el.href = SITE.github;
  });
});
