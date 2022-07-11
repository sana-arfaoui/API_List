import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Users from "./components/Users";
import Home from "./components/Home";
import Profile from "./components/Profile";
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="users" element={<Users />} />
                        <Route path="profile/:id" element={<Profile />} />
                    </Route>
                </Routes>
            </header>
        </div>
    );
}

export default App;
