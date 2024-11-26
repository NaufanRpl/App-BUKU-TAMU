import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Bukutamu from "./bukutamu/bukutamu";
import Login from "./admin/login";
import User from "./admin/user";
import Tamu from "./admin/view_bukutamu";
import TambahUser from "./admin/tambah_user";
import EditUser from "./admin/edit_user";
import Index from "./admin/index";
import Home from "./admin/home";
import PelindungRoute from "./components/PelindungRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Bukutamu />} />
        <Route
          path="/admin"
          element={
            <PelindungRoute>
              <Index />
            </PelindungRoute>
          }
        >
          <Route
            path="/admin/home"
            element={
              <PelindungRoute>
                <Home />
              </PelindungRoute>
            }
          />
          <Route
            path="/admin/user"
            element={
              <PelindungRoute>
                <User />
              </PelindungRoute>
            }
          />
          <Route
            path="/admin/tamu"
            element={
              <PelindungRoute>
                <Tamu />
              </PelindungRoute>
            }
          />
          <Route
            path="/admin/adduser"
            element={
              <PelindungRoute>
                <TambahUser />
              </PelindungRoute>
            }
          />
          <Route
            path="/admin/edituser/:id"
            element={
              <PelindungRoute>
                <EditUser />
              </PelindungRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
