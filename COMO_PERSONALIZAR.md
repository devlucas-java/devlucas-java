# Como Personalizar seu Portfólio

## 1. Sua foto de perfil

Coloque sua foto na pasta `public/` com o nome `profile.jpg`:

```
portfolio/
  public/
    profile.jpg   ← sua foto aqui
```

## 2. Seus dados pessoais

Edite o arquivo `src/data/profile.json`:

```json
{
  "name": "Seu Nome Real",
  "role": {
    "es": "Desarrollador Full Stack",
    "en": "Full Stack Developer"
  },
  "bio": {
    "es": "Sua bio em espanhol...",
    "en": "Your bio in English..."
  },
  "photo": "/profile.jpg",
  "github": "https://github.com/seu-usuario-real",
  "linkedin": "https://linkedin.com/in/seu-usuario-real",
  "email": "seu@email.com",
  "location": {
    "es": "Tu Ciudad, País",
    "en": "Your City, Country"
  }
}
```

## 3. Seus projetos

Edite o arquivo `src/data/projects.json`. Cada projeto tem esta estrutura:

```json
{
  "id": "id-unico-do-projeto",
  "featured": true,              // true = aparece com destaque ⭐
  "githubUrl": "https://github.com/seu-usuario/repo",
  "diagramUrl": "",              // URL da imagem do diagrama draw.io (pode deixar vazio)
  "readmeUrl": "https://github.com/seu-usuario/repo#readme",
  "technologies": ["Java", "Spring Boot", "PostgreSQL"],
  "title": {
    "es": "Título em Espanhol",
    "en": "Title in English"
  },
  "description": {
    "es": "Descrição em espanhol...",
    "en": "Description in English..."
  },
  "diagramDescription": {
    "es": "Descripción del diagrama en español",
    "en": "Diagram description in English"
  }
}
```

### Como adicionar o diagrama draw.io

1. Exporte seu diagrama do draw.io como PNG ou SVG
2. Coloque o arquivo em `public/diagrams/nome-do-projeto.png`
3. No JSON, coloque `"diagramUrl": "/diagrams/nome-do-projeto.png"`

## 4. Rodar o projeto

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173

## 5. Tecnologias com cores personalizadas

As seguintes tecnologias já têm cores definidas em `src/components/TechBadge.tsx`:

Java, Spring Boot, React, React Native, TypeScript, Node.js, Python,
PostgreSQL, MongoDB, Docker, Kubernetes, Redis, AWS, Firebase, Kafka,
GraphQL, FastAPI, Django, Celery, Go, gRPC, Elasticsearch, Kibana,
Vue.js, Laravel, MySQL

Para adicionar uma nova tecnologia com cor personalizada, edite o objeto
`techColors` em `src/components/TechBadge.tsx`.
