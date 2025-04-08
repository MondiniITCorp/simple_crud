import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav style={styles.navbar}>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.navLink}>
                        Estoque
                    </Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/location" style={styles.navLink}>
                        Localização
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

const styles = {
    navbar: {
        backgroundColor: '#333',
        padding: '10px',
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        margin: 0,
        padding: 0,
    },
    navItem: {
        margin: '0 10px',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
    },
};