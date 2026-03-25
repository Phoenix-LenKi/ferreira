# Etapa 4 — SEO, Metadata e Segurança

## Status: ✅ Concluída

### Entregas Técnicas:

1. **Metadata API (Next.js 14)**
   - Injetamos configuração massiva de SEO no `src/app/layout.tsx`.
   - **OpenGraph & Twitter Cards:** Parametrizados para compartilhamento rico nas redes com `title`, `description`, `url`, `type` e `siteName`.
   - **Keywords & Descrições:** Otimizados para "Ortodontia Florianópolis", "Invisalign", e termos locais estratégicos, ignorando textos de baixa qualidade da versão anterior do site.

2. **Geradores Nativos de SEO de Rastreamento**
   - **`sitemap.ts`:** Criado para gerar dinamicamente o `sitemap.xml` contemplando as 5 rotas (`/`, `/sobre`, `/tratamentos`, `/invisalign`, `/contato`) com prioridades variando de `1.0` (Home) a `0.7` (Contato).
   - **`robots.ts`:** Instruções para webcrawlers (Googlebot, Bingbot), permitindo indexação total e apontando para o sitemap gerado.

3. **Security Headers (`next.config.mjs`)**
   - Respeitando bases da segurança web ("vulnerability-scanner" base), o servidor agora insere:
     - `X-Content-Type-Options: nosniff`
     - `X-Frame-Options: SAMEORIGIN`
     - `X-XSS-Protection: 1; mode=block`
     - `Referrer-Policy: strict-origin-when-cross-origin`
