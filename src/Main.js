import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import CourseListPage from "./pages/CourseListPage";
import WishlistPage from "./pages/WishlistPage";

function Main() {
    return (
        <BrowserRouter>
            {/* <App> */}
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path="courses">
                        <Route index element={<CourseListPage />} />
                        <Route
                            path="react-frontend-development"
                            element={<CoursePage />}
                        />
                    </Route>
                    <Route path="wishlist" element={<WishlistPage />} />
                </Route>
            </Routes>
            {/* </App> */}
        </BrowserRouter>
    );
}

export default Main;
