export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-xl p-1 border-4 border-zinc-100 rounded-md cursor-pointer hover:bg-zinc-700"
    >
      {children}
    </button>
  );
}
