# 🌱 Calculadora de Emissões CO2e

Uma ferramenta web gratuita para calcular emissões de CO2 equivalente a partir de diferentes tipos de resíduos, com geração automática de relatórios profissionais.

## 🚀 [ACESSE AQUI - https://co2eq-calculator.vercel.app](https://co2eq-calculator.vercel.app)

## 📋 Características

- ✅ **Acesso livre** - Sem necessidade de login ou cadastro
- ✅ **10 tipos de resíduos** com fatores de emissão baseados em dados científicos
- ✅ **Cálculo de energia economizada** - Mostra kWh poupados com reciclagem
- ✅ **Múltiplas unidades** (kg, toneladas, litros, unidades)
- ✅ **Layout moderno** com gráfico e cards de resumo
- ✅ **Upload de logo** da empresa
- ✅ **Geração de relatórios** profissionais em PDF
- ✅ **Interface responsiva** para desktop e mobile
- ✅ **Referências bibliográficas** completas
- ✅ **Deploy otimizado** para Vercel
- ✅ **Contato WhatsApp** para sugestões e atualizações

## 🗂️ Como Usar

### 1. Acesso Direto
1. **Acesse**: https://co2eq-calculator.vercel.app
2. **Sem login necessário** - calculadora carrega diretamente

### 2. Funcionamento
1. **Preencha informações da empresa** - nome, período, responsável
2. **Adicione logo da empresa** (opcional) - clique na área destinada
3. **Adicione resíduos** - selecione tipo, quantidade e unidade
4. **Visualize resultados** - tabela e gráfico atualizados automaticamente
5. **Gere relatório** - clique em "Gerar Relatório"
6. **Exporte para PDF** - use Ctrl+P na janela do relatório

## 📊 Tipos de Resíduos Suportados

| Tipo | Fator CO2e | Energia Economizada | Unidade |
|------|------------|---------------------|---------|
| Papel/Papelão | 0.9 kg CO2e/kg | 2.8 kWh/kg | kg, ton |
| Plástico | 3.1 kg CO2e/kg | 5.5 kWh/kg | kg, ton |
| Vidro | 0.7 kg CO2e/kg | 0.6 kWh/kg | kg, ton |
| Metal/Alumínio | 1.8 kg CO2e/kg | 15.2 kWh/kg | kg, ton |
| Resíduo Orgânico | 0.5 kg CO2e/kg | 0.3 kWh/kg | kg, ton |
| Resíduo Eletrônico | 12.0 kg CO2e/kg | 45.0 kWh/kg | kg, ton |
| Têxtil | 5.9 kg CO2e/kg | 8.1 kWh/kg | kg, ton |
| Madeira | 0.4 kg CO2e/kg | 1.2 kWh/kg | kg, ton |
| Óleo de Cozinha | 2.5 kg CO2e/L | 3.8 kWh/L | litros |
| Baterias | 8.7 kg CO2e/unidade | 32.5 kWh/unidade | unidades |

### ⚡ Energia Economizada
A energia economizada representa a redução no consumo elétrico necessário para produção de materiais virgens comparado à reciclagem. Os valores são baseados em estudos de Life Cycle Assessment (LCA) e representam a economia energética real da reciclagem versus produção nova.

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura da aplicação
- **CSS3** - Estilos e responsividade
- **JavaScript Vanilla** - Funcionalidades interativas
- **Canvas API** - Gráficos de pizza
- **FileReader API** - Upload de imagens

## 📱 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge (versões recentes)
- ✅ Dispositivos móveis (tablets e smartphones)
- ✅ Impressão/PDF nativo do navegador

## 🎯 Funcionalidades Principais

### Calculadora
- Interface completa para entrada de dados
- Validação de campos obrigatórios
- Cálculos automáticos em tempo real
- Gráfico interativo com legendas
- Sistema de remoção de itens

### Geração de Relatórios
- Cabeçalho com logo da empresa
- Informações completas do relatório
- Tabela detalhada com percentuais
- Gráfico de pizza colorido
- Análise automática dos resultados
- Recomendações estratégicas
- Observações metodológicas

## 📥 Como Exportar PDF

1. **Clique** em "Gerar Relatório" na calculadora
2. **Na nova janela**, pressione `Ctrl+P` (Windows) ou `Cmd+P` (Mac)
3. **Selecione** "Salvar como PDF"
4. **Ajuste** margens se necessário
5. **Clique** em "Salvar"

## 📚 Referências Bibliográficas

Os fatores de emissão são baseados em:

- **IPCC Guidelines (2019)** - Padrão internacional para inventários de GEE
- **EPA WARM Model** - Modelo americano amplamente utilizado
- **European Environment Agency** - Diretrizes europeias
- **MCTI Brasil** - Comunicação nacional sobre mudanças climáticas
- **DEFRA UK** - Fatores de conversão do governo britânico

## ⚠️ Aviso Importante

Os fatores de emissão são **valores aproximados para fins demonstrativos**. Para aplicações oficiais ou estudos científicos, recomenda-se utilizar fatores específicos validados para sua região.

## 🔧 Para Desenvolvedores

### Executar Localmente
```bash
# Clone o repositório
git clone https://github.com/Tadeco/co2eq-calculator.git

# Abra index.html em qualquer servidor local
python -m http.server 8080
# ou
npx serve . -p 8080
```

### Deploy no Vercel
```bash
# Instale o Vercel CLI
npm i -g vercel

# Faça login
vercel login

# Deploy
vercel

# Deploy em produção
vercel --prod
```

**Arquivo `vercel.json` incluído** com configurações de segurança e otimização.

### Estrutura do Projeto
```
CO2eq/
├── index.html           # Calculadora principal
├── script-simple.js     # JavaScript principal (sem autenticação)
├── styles.css           # Estilos CSS
├── chart.js             # Gráficos de pizza
├── report.js            # Geração de relatórios
├── exemplo.html         # Exemplo de relatório
└── debug.html           # Ferramentas de debug
```

### Personalização

**Adicionar Novos Tipos de Resíduos:**
1. Edite o objeto `emissionFactors` em `script-simple.js`
2. Adicione entrada correspondente em `wasteNames`
3. Inclua nova opção no select em `index.html`

**Modificar Fatores de Emissão:**
- Edite os valores no objeto `emissionFactors` em `script-simple.js`

## 📞 Suporte e Contato

- **WhatsApp**: Botão flutuante no site para sugestões
- **GitHub**: https://github.com/Tadeco/co2eq-calculator
- **Site**: https://co2eq-calculator.vercel.app
- **Issues**: https://github.com/Tadeco/co2eq-calculator/issues

### 💬 Sugerir Atualizações
Use o botão WhatsApp no canto inferior esquerdo do site para enviar sugestões diretamente!

## 📄 Licença

MIT License - veja [LICENSE](LICENSE) para detalhes.

---

**Desenvolvido com foco em sustentabilidade e acessibilidade** 🌍

*Ferramenta gratuita para cálculo de pegada de carbono*