export const UserMessage = ({ text }) => (
  <div className="flex justify-end mb-8 w-full">
    <div className="bg-[#1a56db] text-white px-5 py-3.5 rounded-2xl rounded-tr-sm max-w-[80%] shadow-sm">
      <p className="text-[15px] leading-relaxed">{text}</p>
    </div>
  </div>
);
