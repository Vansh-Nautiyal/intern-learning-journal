import { useState } from "react";

function Accordion({ items }) {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="accordion">
      {items.map((item) => (
        <div key={item.id}>
          <button onClick={() => toggleAccordion(item.id)}>
            {item.title}
          </button>

          {activeId === item.id && (
            <div className="acc-item">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;