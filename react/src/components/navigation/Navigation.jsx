import styles from './navigation.module.css'

function Navbar () {
    return (
        <>
            <aside className={styles.navbar}>
                <div className={styles.header}>
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
                        <button>Availability</button>
                        <button>Genres</button>
                        <button>test</button>
                    </nav>
                </div>
            </aside>
        </>
    )
}

export default Navbar;