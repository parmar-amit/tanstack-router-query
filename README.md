# TS Router Demo 🚦

Welcome to **TS Router Demo** – a modern, interactive demo project showcasing how to build a scalable React application using [TanStack Router](https://tanstack.com/router), [TanStack Query](https://tanstack.com/query), and TypeScript. This project demonstrates best practices for routing, data fetching, and UI design in a real-world scenario.

---

## ✨ Features

- **Type-Safe Routing** with TanStack Router
- **Data Fetching & Caching** using TanStack Query
- **Modular Page Components** (Home, Blog, About, Contacts)
- **Blog CRUD Demo** (fetch, view, and delete posts)
- **Responsive & Modern UI** with custom CSS
- **Error & Loading States** handled gracefully
- **Devtools Integration** for both Query and Router
- **Easy Navigation** with a dynamic Navbar

---

## 🚀 Quick Start

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/ts-router-demo.git
   cd ts-router-demo
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## 🗺️ Project Structure

```
src/
  ├── api/                # API layer (axios setup, endpoints, types)
  ├── components/         # Reusable UI components and pages
  ├── routes/             # Route definitions (TanStack Router)
  ├── services/           # Query logic for data fetching/mutations
  ├── shared/             # Shared utilities
  ├── main.tsx            # App entry point
  └── routeTree.gen.ts    # Auto-generated route tree
```

---

## 📝 Pages & Functionality

- **Home:** Company intro, services, and contact info.
- **Blog:** List of posts (fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)), with clickable cards.
- **Blog Details:** View a single post, delete it, and navigate back.
- **About:** Meet the team and board members.
- **Contacts:** Contact form and business info.
- **404 Not Found:** Friendly error page for unknown routes.

---

## 🛠️ Technologies Used

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [TanStack Router](https://tanstack.com/router)
- [TanStack Query](https://tanstack.com/query)
- [Axios](https://axios-http.com/)
- [Vite](https://vitejs.dev/) (for fast dev/build)
- Custom CSS (responsive, modern design)

---

## 🧑‍💻 Contributing

Contributions are welcome! To get started:

1. Fork this repo
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit: `git commit -am 'Add new feature'`
4. Push to your fork: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 💡 Tips

- Use the **TanStack Router Devtools** and **React Query Devtools** (bottom right) for debugging and learning.
- The blog uses a mock API (JSONPlaceholder) – feel free to swap in your own backend.
- All navigation is type-safe and leverages TanStack Router's advanced features.

---

## 📸 Screenshots

> _Add screenshots here to showcase the UI!_

---

## 📄 License

MIT

---

**Happy coding! 🚀**
