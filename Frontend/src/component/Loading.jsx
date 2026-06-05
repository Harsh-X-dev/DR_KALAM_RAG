import { SyncLoader } from "react-spinners";
export const Loading = ({ fullScreen , size}) => {
  return (
    <div
      className={
        fullScreen
          ? "flex h-screen w-full items-center justify-center"
          : "flex items-center justify-center"
      }
    >
      <SyncLoader color="#0f4ed4" size={size} />
    </div>
  );
};
