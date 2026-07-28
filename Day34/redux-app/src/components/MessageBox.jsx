import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { greeting, greetingByName } from "../redux/message/messageSlice";

export default function MessageBox() {
  const message = useSelector((state) => state.message.content);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  return (
    <div className="message-box">
      <h2>Message Example</h2>
      <input
        type="text"
        placeholder="Name"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div>
      <button
        onClick={() => {
          dispatch(greeting());
        }}
      >
        Show Greeting
      </button>

      <button
        onClick={() => {
          dispatch(greetingByName(content));
        }}
      >
        Personalized Greeting
      </button>
      </div>
      <p>{message}</p>
    </div>
  );
}
