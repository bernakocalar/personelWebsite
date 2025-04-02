function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)} // Sadece setDarkMode tetiklenir
      className="rounded-lg text-[#CBF281] dark:bg-gray-200 dark:text-black transition"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
