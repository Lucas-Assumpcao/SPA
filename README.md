# Painel de Ferramentas - Compilado Lógica de Programação

Um painel interativo de ferramentas com múltiplas calculadoras desenvolvido como projeto educacional de lógica de programação. A aplicação é uma **Single Page Application (SPA)** totalmente responsiva.

## 🎯 Funcionalidades

- **Conversor USD ↔ BRL** - Converte valores entre dólares americanos e reais brasileiros com cotação em tempo real
- **Calculadora de IMC** - Calcula o Índice de Massa Corporal separado por sexo (masculino/feminino)
- **Calculadora de Temperatura** - Converte entre diferentes escalas de temperatura
- **Calculadora de Velocidade** - Converte entre km/h e mph (milhas por hora)
- **Calculadora de Massa** - Converte entre kg e lbs (libras)
- **Regra de Três** - Calcula proporções usando regra de três simples

## 📱 Responsividade

A aplicação foi redesenhada com foco total em responsividade, incluindo:

- ✅ **Desktop** - Layout tradicional com menu lateral fixo
- ✅ **Tablets** - Menu lateral redimensionado (768px)
- ✅ **Celulares** - Menu hamburger compacto com navegação otimizada (≤768px)
- ✅ **Celulares Pequenos** - Layout ultra compacto para telas até 480px

### Pontos de Ruptura (Breakpoints)
- `≤ 1024px` - Tablets
- `≤ 768px` - Dispositivos móveis (menu hamburger ativado)
- `≤ 480px` - Celulares pequenos

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica da aplicação
- **CSS3** - Estilização responsiva com media queries
- **JavaScript Vanilla** - Lógica e interatividade sem dependências externas
- **API Externa** - Consumo de API para cotação em tempo real (USD/BRL)

## 📁 Estrutura de Arquivos

```
SPA/
├── index.html       # Estrutura HTML da aplicação
├── style.css        # Estilos CSS responsivos
├── script.js        # Lógica JavaScript
└── README.md        # Este arquivo
```

## 🚀 Como Usar

1. **Abra o arquivo `index.html`** em um navegador web
2. **Clique no menu lateral** (ou no hamburger em mobile) para selecionar uma calculadora
3. **Insira os valores** solicitados
4. **Clique no botão** correspondente para realizar o cálculo
5. **Veja o resultado** exibido na tela

## 🎨 Melhorias CSS Implementadas

### Design Responsivo
- Menu hamburger automático em telas menores
- Layout flexível que se adapta a qualquer tamanho de tela
- Inputs e botões otimizados para toque em dispositivos móveis

### Experiência do Usuário
- Transições suaves e animações fluidas
- Feedback visual em hover nos botões
- Estados de foco clara para melhor acessibilidade
- Sombras e efeitos visuais sutis

### Mobile-First
- Footer permanece visível e compacto em mobile
- Conteúdo principal com padding adequado
- Texto redimensionado para legibilidade em telas pequenas
- Botões com tamanho adequado para toque

## 🔗 API Utilizada

- **Conversor de Moedas** - Awesome API (economia.awesomeapi.com.br)
  - Fornece cotações em tempo real de USD para BRL

## 💡 Exemplos de Uso

### Calculadora de IMC
1. Insira seu peso em kg
2. Insira sua altura em metros
3. Clique em "Calcular IMC Masculino" ou "Feminino"
4. Veja sua categoria (Abaixo do peso, Normal, Sobrepeso, Obesidade)

### Conversor USD/BRL
1. Insira um valor
2. Clique em "Converter USD → BRL" ou "Converter BRL → USD"
3. O sistema buscará a cotação atual e exibirá o resultado

## 📝 Desenvolvido por

**Lucas Assumpção** - 2026

Projeto desenvolvido como parte do currículo de **Lógica de Programação** da **Escola SENAI Casa**

## 📄 Licença

Projeto educacional - Uso livre para fins de estudo e aprendizado.

---

**Nota:** Este projeto foi otimizado para funcionar em todos os dispositivos modernos (desktop, tablet e mobile).
