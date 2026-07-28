import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  double,
  half,
  clear,
} from "../redux/counter/counterSlice";

export default function CounterBox() {
  const count = useSelector((state) => state.counter.value);
  const message = useSelector((state) => state.message.content);
  const dispatch = useDispatch();
  return (
    <div>
      
      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="my-2 mx-2 text-base font-semibold uppercase tracking-widest text-amber-400">
          Counter
        </h2>
        <p className="mb-4 text-center font-serif text-5xl font-bold">
          {count}
        </p>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => dispatch(increment())}
            className="rounded-lg bg-amber-400 px-4 py-2 font-serif text-sm font-semibold text-slate-950 transition hover:bg-amber-300 active:scale-95"
          >
            +1
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="rounded-lg bg-slate-800 px-4 py-2 font-serif text-sm font-semibold transition hover:bg-slate-700 active:scale-95"
          >
            -1
          </button>
          <button
            onClick={() => dispatch(double())}
            className="rounded-lg bg-slate-800 px-4 py-2 font-serif text-sm font-semibold transition hover:bg-slate-700 active:scale-95"
          >
            ×2
          </button>
          <button
            onClick={() => dispatch(half())}
            className="rounded-lg bg-slate-800 px-4 py-2 font-serif text-sm font-semibold transition hover:bg-slate-700 active:scale-95"
          >
            ÷2
          </button>
        </div>

        <button
          onClick={() => dispatch(clear())}
          className="mt-2 w-full rounded-lg border border-slate-700 px-4 py-2 font-serif text-sm text-slate-400 transition hover:border-slate-500 hover:text-slate-200"
        >
          reset
        </button>
      </section>
    </div>
  );
}
