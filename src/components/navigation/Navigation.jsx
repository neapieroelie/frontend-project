import styles from './Navigation.module.css'

function Navbar () {
    return (
        <>
            <aside className={styles.navbar}>
                <div className={styles.header}>
                <img 
                    src='logo-pink.png' 
                    className={styles.logo} 
                />
                    <h1>Peekabook</h1>
                </div>
                <div className={styles.searchbar}>
                    <form>
                        <input type="search" placeholder="search" />
                    </form>
                </div>
                <div className={styles.categories}>
                    <nav>
                        <button>Discover</button>
                        <button>Book listings</button>
                        <button>My listings</button>
                        <button>My Loans</button>
                        <button>Account</button>
                    </nav>
                </div>
                <div className={styles.createlisting}>
                    <button>create a listing</button>
                </div>
            </aside>
        </>
    )
}

export default Navbar;