import { SyncLoader } from "react-spinners";
import { useTheme } from "../context/ThemeContext.jsx";

export const Loading = ({ fullScreen, size }) => {
  const { theme } = useTheme();
  const spinnerColor = theme === "dark" ? "#2dd4bf" : "#0d9488";

  return (
    <div
      className={
        fullScreen
          ? "flex h-dvh w-full items-center justify-center"
          : "flex items-center justify-center"
      }
    >
      <SyncLoader color={spinnerColor} size={size} />
    </div>
  );
};

