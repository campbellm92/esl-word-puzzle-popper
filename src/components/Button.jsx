export default function Button({ children }) {
  return (
    <button className="text-xl p-1 border-4 border-zinc-100 rounded-md cursor-pointer hover:bg-zinc-700">
      {children}
    </button>
  );
}
