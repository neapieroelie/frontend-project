import styles from './BookCard.module.css'

export default function BookCard({ src, alt, width, height, bookTitle, bookAuthor, ownerName, ownerLocation, distance, status}) {
    return(
        <>
            <div className={styles.outerContainer}>
                <div className={styles.imgContainer}> 
                    <img
                        className={styles.bookCover}
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                    />
                </div>
                <div className={styles.descContainer}>
                    <div className={styles.bookDesc}>
                        <h3>{bookTitle}</h3>
                        <p>by {bookAuthor}</p>
                    </div>
                    <div className={styles.ownerDesc}>
                        <p>Owned By: {ownerName}</p>
                        <p>{ownerLocation}</p>
                        <p>{distance}</p>
                    </div>
                    <div>
                        {status}
                    </div>
                </div>
            </div>
        </>
    )
}