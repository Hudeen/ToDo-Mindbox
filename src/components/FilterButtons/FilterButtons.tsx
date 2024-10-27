import React, { useState } from "react";

interface FilterButtonsProps {
  setFilter: (filter: "all" | "active" | "completed") => void;
  clearCompleted: () => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ setFilter, clearCompleted }) => {
  const [activeFilter, setActiveFilter] = useState<"all" | "active" | "completed">("all");

  const handleFilterClick = (filter: "all" | "active" | "completed") => {
    setActiveFilter(filter);
    setFilter(filter);
  };

  return (
    <div className="filter-buttons">
      <div>
        <button
          className={activeFilter === "all" ? "active" : ""}
          onClick={() => handleFilterClick("all")}
        >
          All
        </button>
        <button
          className={activeFilter === "active" ? "active" : ""}
          onClick={() => handleFilterClick("active")}
        >
          Active
        </button>
        <button
          className={activeFilter === "completed" ? "active" : ""}
          onClick={() => handleFilterClick("completed")}
        >
          Completed
        </button>
      </div>
      <div className="clear">
        <button onClick={clearCompleted}>Clear completed</button>
      </div>
    </div>
  );
};

export default FilterButtons;
