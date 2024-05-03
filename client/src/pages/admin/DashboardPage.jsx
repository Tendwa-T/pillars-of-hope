import { IconButton } from "@mui/material";
import { ThemeContext } from "../../theme/ThemeContext";
import { useContext } from "react";
import { ContrastOutlined } from '@mui/icons-material'


export default function AdminDashboardPage() {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <div className="flex justify-center items-center">
            <h1>Admin Dashboard Page</h1>
            <IconButton onClick={toggleTheme} >
                <ContrastOutlined />
            </IconButton>

        </div>
    );
}