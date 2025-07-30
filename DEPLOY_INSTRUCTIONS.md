# 🚀 INSTRUÇÕES DE DEPLOY - Vercel

## 📋 Pré-requisitos

1. **Conta no GitHub** (se ainda não tiver)
2. **Conta na Vercel** (conectar com GitHub)
3. **Node.js instalado** (opcional, só para testes locais)

## 🔗 Passo a Passo Completo

### 1️⃣ Criar Repositório no GitHub

```bash
# No terminal, dentro da pasta CO2eq:
git init
git add .
git commit -m "🌱 Calculadora CO2eq completa com rodapé profissional

✅ Cálculo CO2e + energia economizada
✅ Rodapé com créditos Eng. Tadeu Santana  
✅ SEO otimizado para LinkedIn
✅ Layout responsivo moderno
✅ Pronto para produção"

# Criar repositório no GitHub (via interface web):
# https://github.com/new
# Nome: co2eq-calculator
# Descrição: 🌱 Calculadora profissional CO2e + energia economizada - Eng. Tadeu Santana

# Conectar repositório local ao GitHub:
git remote add origin https://github.com/SeuUsuario/co2eq-calculator.git
git branch -M main
git push -u origin main
```

### 2️⃣ Deploy na Vercel

**Opção A - Via Interface Web (Mais Fácil):**

1. Acesse: https://vercel.com
2. Clique em "Import Project"
3. Conecte sua conta GitHub
4. Selecione o repositório `co2eq-calculator`
5. Configurações automáticas:
   - **Framework Preset:** Other
   - **Root Directory:** `./`
   - **Build Command:** (deixar vazio)
   - **Output Directory:** (deixar vazio)
6. Clique em "Deploy"

**Opção B - Via CLI:**

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login na Vercel
vercel login

# Deploy
vercel

# Seguir prompts:
# - Link to existing project? N
# - Project name: co2eq-calculator
# - Directory: ./
# - Override settings? N

# Deploy em produção
vercel --prod
```

### 3️⃣ Configurar Domínio Personalizado (Opcional)

```bash
# Se tiver domínio próprio:
vercel domains add seudominio.com
vercel domains add co2eq.seudominio.com
```

## ⚙️ Arquivos de Configuração

### `vercel.json` (já incluído)
```json
{
    "version": 2,
    "name": "co2eq-calculator",
    "public": true,
    "headers": [
        {
            "source": "/(.*)",
            "headers": [
                {"key": "X-Content-Type-Options", "value": "nosniff"},
                {"key": "X-Frame-Options", "value": "DENY"},
                {"key": "X-XSS-Protection", "value": "1; mode=block"}
            ]
        }
    ]
}
```

### `package.json` (atualizado)
```json
{
  "name": "co2eq-calculator",
  "version": "1.0.0",
  "scripts": {
    "vercel": "vercel",
    "vercel:prod": "vercel --prod"
  }
}
```

## 🔧 Configurações Avançadas

### Variáveis de Ambiente (se necessário)
```bash
# Via CLI:
vercel env add

# Via interface web:
# Project Settings > Environment Variables
```

### Headers de Segurança (já configurado)
- ✅ X-Content-Type-Options: nosniff
- ✅ X-Frame-Options: DENY  
- ✅ X-XSS-Protection: 1; mode=block

### Performance Otimizada
- ✅ Gzip/Brotli compression automática
- ✅ CDN global da Vercel
- ✅ Cache otimizado para assets estáticos
- ✅ HTTP/2 e HTTP/3 automático

## 📊 Monitoramento

### Analytics da Vercel
```bash
# Habilitar analytics
vercel --enable-analytics
```

### Google Analytics (opcional)
```html
<!-- Adicionar no <head> se quiser métricas -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🚀 URLs Resultantes

Após o deploy, você terá:

**URL Principal:** `https://co2eq-calculator.vercel.app`
**URLs Alternativas:** 
- `https://co2eq-calculator-git-main-seuusername.vercel.app`
- `https://co2eq-calculator-hash.vercel.app`

## 🔄 Deploy Contínuo

### Auto-deploy configurado:
- ✅ Push para `main` = deploy automático
- ✅ Pull requests = preview deploys
- ✅ Rollback automático em caso de erro

### Comandos úteis:
```bash
# Ver deploys
vercel ls

# Ver logs
vercel logs

# Rollback para deploy anterior
vercel rollback

# Remover projeto
vercel remove
```

## 🎯 Checklist Pré-Deploy

- [x] ✅ Rodapé profissional adicionado
- [x] ✅ Meta tags SEO configuradas
- [x] ✅ Open Graph para LinkedIn
- [x] ✅ Schema.org estruturado
- [x] ✅ Favicon personalizado
- [x] ✅ Layout responsivo testado
- [x] ✅ Funcionalidades testadas
- [x] ✅ Links sociais atualizados
- [x] ✅ Arquivo vercel.json configurado
- [x] ✅ README.md atualizado

## 🔍 Teste Final

Após deploy, testar:

1. **Funcionalidades:**
   - [x] Adicionar resíduos
   - [x] Gerar gráfico
   - [x] Calcular CO2e e energia
   - [x] Gerar relatório PDF
   - [x] Upload de logo

2. **SEO/LinkedIn:**
   - [x] Preview do link no LinkedIn
   - [x] Meta tags carregando
   - [x] Favicon aparecendo

3. **Responsividade:**
   - [x] Desktop
   - [x] Tablet  
   - [x] Mobile

4. **Performance:**
   - [x] Tempo de carregamento < 3s
   - [x] Lighthouse Score > 90

## 🎉 Pós-Deploy

1. **Testar URL** em diferentes dispositivos
2. **Compartilhar no LinkedIn** usando texto do LINKEDIN_POST.md
3. **Monitorar analytics** e engagement
4. **Coletar feedback** para próximas versões

---

## 🆘 Troubleshooting

### Erro comum: "Build failed"
```bash
# Verificar se não há erros de sintaxe
# Todos arquivos HTML/CSS/JS devem estar válidos
```

### Erro: "Domain already exists"
```bash
# Se domínio já existir, usar:
vercel domains rm seudominio.com
vercel domains add seudominio.com
```

### Erro de permissão GitHub
```bash
# Verificar se repositório é público ou dar permissões à Vercel
```

---

**🚀 Agora é só fazer o deploy e impressionar no LinkedIn!**