import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { useState } from "react";
import styles from "./NavMenu.module.css";

const NavMenu = () => {

    const [expandido, setExpandido] = useState(false)

    return (
        <header
            className={`${styles.cabecalho} ${expandido ? styles.expandido : ""}`}
            onMouseOver={() => setExpandido(true)}
            onMouseOut={() => setExpandido(false)}>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <HomeOutlinedIcon
                                sx={{ fontSize: 35, cursor: "pointer", border: "2px solid", borderRadius: "8px" }}
                            />
                            <span className={`${expandido ? "" : styles.hidden}`}>Inicio</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/refeicoes">
                            <RestaurantIcon
                                sx={{ fontSize: 35, cursor: "pointer", border: "2px solid", borderRadius: "8px" }}
                            />
                            <span className={`${expandido ? "" : styles.hidden}`}>Refeicoes</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <LoginIcon
                                sx={{ fontSize: 35, cursor: "pointer", border: "2px solid", borderRadius: "8px" }}
                            />
                            <span className={`${expandido ? "" : styles.hidden}`}>Login</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavMenu;