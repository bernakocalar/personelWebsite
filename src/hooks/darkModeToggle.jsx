import { useEffect } from "react";

function DarkModeToggle({ darkMode, setDarkMode }) {
  // Kullanıcının seçimini localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <button
      onClick={() => 
        setDarkMode(!darkMode)}
      className="rounded-lg text-[#3730A3] dark:bg-gray-200 dark:text-black transition"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
