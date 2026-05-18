# devLucas-Java — Portfolio

Personal portfolio built with **React**, **TypeScript** and **Tailwind CSS**.

## 🚀 Tech Stack

- React 19
- TypeScript
- Tailwind CSS v4
- Vite

## ✨ Features

- ES / EN language toggle
- Hero section with bio, location and languages
- Work experience timeline
- Education section
- Projects with GitHub, README, diagram and YouTube links
- Filter projects by technology
- Skills section with categories
- Responsive design

## 📦 Running locally

```bash
npm install
npm run dev
```

Access: http://localhost:5173

## 🐳 Running with Docker

```bash
docker compose up --build
```

Access: http://localhost:3000

## ⚙️ Stopping

```bash
docker compose down
```

## 🛠 Customization

Edit the JSON files in `src/data/`:

| File | Description |
|------|-------------|
| `profile.json` | Name, bio, photo, social links, location, languages |
| `experience.json` | Work experience entries |
| `education.json` | Education entries |
| `projects.json` | Projects with links and technologies |
| `skills.json` | Skills grouped by category |

Place your profile photo at `public/profile.jpg`.

## 👨‍💻 Author

**Lucas Macedo** — Backend Developer

- GitHub: [@devlucas-java](https://github.com/devlucas-java)
- LinkedIn: [devlucas-java](https://linkedin.com/in/devlucas-java)
