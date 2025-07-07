# Installation & Usage Guide for `@julz-gtkncht/dynamic-icon`

A reusable React component for dynamic Font Awesome icons with Tailwind CSS support.

---

## 📦 Installation

Install the package and its peer dependencies:

```bash
npm install @julz-gtkncht/dynamic-icon @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome tailwindcss
```

> **Note:**
> - `react` and `react-dom` are peer dependencies. Make sure they are installed in your project.
> - Tailwind CSS is optional but recommended for styling.

---

## 🚀 Usage

Import and use the `DynamicIcon` component in your React app:

```tsx
import { DynamicIcon } from '@julz-gtkncht/dynamic-icon';

function App() {
  return (
    <div>
      <DynamicIcon name="faCoffee" color="text-blue-600" size={32} />
    </div>
  );
}
```

### Props
- `name` (string, required): Font Awesome icon name (e.g., `faCoffee`, `faHome`)
- `color` (string, optional): Tailwind CSS classes (e.g., `text-red-500`)
- `size` (number, optional): Size in pixels (e.g., `32`)

---

## 🛠️ Requirements
- React 18 or newer
- Font Awesome packages (see above)
- Tailwind CSS (optional, for color classes)

---

## 📝 License
MIT

---

## 💡 More Info
- [GitHub Repository](https://github.com/yourusername/dynamic-icon)
- [NPM Package](https://www.npmjs.com/package/@julz-gtkncht/dynamic-icon)
