import { Button } from "@mui/material";
import { ThemeContext } from "../../theme/ThemeContext";
import { useContext } from "react";


export default function AdminDashboardPage() {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <h1>Admin Dashboard Page</h1>
            <Button onClick={toggleTheme}>
                Toggle theme
            </Button>

        </div>
    );
}