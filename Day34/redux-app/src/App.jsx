import { useSelector } from "react-redux";
import {
  increment,
  decrement,
  double,
  half,
  clear,
} from "./redux/counter/counterSlice";
import Navbar from "./components/Navbar";
import MessageBox from "./components/MessageBox";
import CounterBox from "./components/CounterBox";

function App() {
  const count = useSelector((state) => state.counter.value);
  const message = useSelector((state) => state.message.content);
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      {/* Intro */}
      <section>
        <h1 className="text-3xl text-center font-bold tracking-tight text-slate-50 sm:text-4xl mt-8">
          What is Redux?
        </h1>
        <p className="mx-auto px-6 mt-4 max-w-2xl text-slate-400">
          Redux is a predictable state management library for JavaScript apps.
          Instead of scattering state across components, it keeps your entire
          app's state in one central{" "}
          <span className="text-amber-200">store</span>. Components read from
          that store, and the only way to change it is by dispatching{" "}
          <span className="text-amber-300">actions</span> — plain objects
          describing what happened — which are handled by{" "}
          <span className="text-cyan-300">reducers</span>, pure functions that
          return the new state.
        </p>
      </section>

      {/* Current States */}
      <h1 className="text-xl text-center font-serif mt-2">Current States</h1>
      <div className="flex justify-center gap-3 font-serif text-base mt-2">
        <span className="rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-amber-300">
          count: {count}
        </span>
        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-cyan-300">
          message: "{message}"
        </span>
      </div>

      {/* Main Section */}
      <main className="mx-auto grid max-w-3xl gap-6 px-6 py-12 sm:grid-cols-2">
        <CounterBox />
        <MessageBox />
      </main>
    </div>
  );
}

export default App;
