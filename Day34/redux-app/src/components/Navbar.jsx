import { useSelector } from "react-redux";

export default function Navbar() {
  const count = useSelector((state) => state.counter.value);
  const message = useSelector((state) => state.message.content);

  return (
    <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur">
      <div className="mx-auto  max-w-4xl px-6 py-4">
        <h1 className="text-xl mb-2 text-center font-semibold uppercase tracking-tight text-slate-300">
          Redux State Console
        </h1>
      </div>
    </header>
  );
}
