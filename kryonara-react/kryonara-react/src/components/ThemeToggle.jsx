export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const light = getComputedStyle(root).colorScheme === "light";
    root.setAttribute("data-theme", light ? "dark" : "light");
  };
  return (
    <button type="button" className="tg" id="theme" onClick={toggle}>
      Light or dark
    </button>
  );
}
