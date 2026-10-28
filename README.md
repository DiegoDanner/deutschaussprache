# DeutschAussprache

Aplicação Next.js para praticar a pronúncia alemã. A interface e os exercícios
originais são mantidos em `kirsche.html` e renderizados pela rota inicial do
Next.js.

## Requisitos

- Node.js 20.9 ou superior
- Navegador com suporte à Web Speech API para os exercícios de microfone

## Executar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Para testar o microfone,
conceda a permissão solicitada pelo navegador. Em produção, o reconhecimento de
voz e o microfone precisam de um contexto seguro (HTTPS).

## Produção

```bash
npm run build
npm start
```
