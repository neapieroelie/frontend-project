import styles from './navigation.module.css'

function Navbar () {
    return (
        <>
            <aside className={styles.navbar}>
                <div className="searchbar">
                    <form>
                        <input type="search" placeholder="search" />
                        <button type="button">Go</button>
                    </form>
                </div>
                <div className={styles.categories}>
                    <nav>
                    <button>Discover</button>
                    <button>Availability</button>
                    <button>Genres</button>
                    <button></button>
                    </nav>
                </div>
            </aside>
        </>
    )
}

export default Navbar;