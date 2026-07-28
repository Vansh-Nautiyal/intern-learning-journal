import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { greeting, greetingByName, reset } from "../redux/message/messageSlice";

export default function MessageBox() {
  const message = useSelector((state) => state.message.content);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="my-2 mx-2 text-base font-semibold uppercase tracking-widest text-cyan-400">
        Message State
      </h2>
      <p className="my-2 text-center min-h-[2.5rem] font-serif text-2xl font-bold">{message}</p>

      <input
        type="text"
        placeholder="Your name"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="mb-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-400"
      />

      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => dispatch(greeting())}
          className="rounded-lg bg-slate-800 px-4 py-2 font-serif text-sm font-semibold transition hover:bg-slate-700 active:scale-95"
        >
          Greet
        </button>
        <button
          onClick={() => dispatch(greetingByName(content))}
          className="rounded-lg bg-cyan-400 px-4 py-2 font-serif text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 active:scale-95"
        >
          Greet by Name
        </button>
      </div>
        <button
          onClick={() => dispatch(reset())}
          className="mt-2 w-full rounded-lg border border-slate-700 px-4 py-2 font-serif text-sm text-slate-400 transition hover:border-slate-500 hover:text-slate-2005"
        >
          Reset
        </button>
    </section>
  );
}