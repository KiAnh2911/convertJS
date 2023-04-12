import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App({ children }) {
  return (
    <div className="p-10">
      <h1 className="mb-10 text-2xl font-semibold text-center text-purple-700">
        CONVERT BÀI TẬP JAVASCRIPT SANG REACTJS
      </h1>
      <div className="flex items-center justify-center gap-5">
        <NavLink
          to="/sum"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active items" : ""
          }
        >
          Bài 1.1
        </NavLink>
        <NavLink
          to="/length"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active items" : ""
          }
        >
          Bài 1.2
        </NavLink>
        <NavLink
          to="/square"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active items" : ""
          }
        >
          Bài 1.3
        </NavLink>
        <NavLink
          to="/largest-number"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active items" : ""
          }
        >
          Bài 1.4
        </NavLink>
        <NavLink
          to="/shortest"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active items" : ""
          }
        >
          Bài 1.5
        </NavLink>
        <NavLink
          to="/sort"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active items" : ""
          }
        >
          Bài 1.6
        </NavLink>
        <NavLink
          to="/alphabetical"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active items" : ""
          }
        >
          Bài 1.7
        </NavLink>
        <NavLink
          to="/median"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active items" : ""
          }
        >
          Bài 1.8
        </NavLink>
        <NavLink
          to="/word"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active items" : ""
          }
        >
          Bài 1.9
        </NavLink>
        <NavLink
          to="/contain"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active items" : ""
          }
        >
          Bài 1.10
        </NavLink>
        <NavLink
          to="/second"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active items" : ""
          }
        >
          Bài 2.1
        </NavLink>
        <NavLink
          to="/longest"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active items" : ""
          }
        >
          Bài 2.2
        </NavLink>
        <NavLink
          to="/common"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active items" : ""
          }
        >
          Bài 2.3
        </NavLink>
        <NavLink
          to="/divisible"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active items" : ""
          }
        >
          Bài 2.4
        </NavLink>
        <NavLink
          to="/maxium"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active items" : ""
          }
        >
          Bài 2.5
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
