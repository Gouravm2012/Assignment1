const { useState } = React;

function App() {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [searched, setSearched] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    const getCoverUrl = (book) => {
        if (book.cover_i) {
            return `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
        } else if (book.isbn && book.isbn.length > 0) {
            return `https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`;
        } else {
            return 'https://via.placeholder.com/150';
        }
    };

    const searchBooks = async () => {
        if (!query) return;
        setLoadingSearch(true);
        setSearched(false);
        try {
            const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);
            const data = await res.json();
            setBooks(data.docs.slice(0, 20));
            setSearched(true);
        } catch (err) {
            console.error(err);
        }
        setLoadingSearch(false);
    };


    return (
        <>

            <header>
                <h1> <img src="https://emojiapi.dev/api/v1/1f4d6/64.png" alt="Book Icon" style={{ width: "32px", verticalAlign: "middle", marginRight: "8px" }} />Book Finder</h1>
                { }
            </header>
            <div className="container">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search books..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && searchBooks()}
                    />
                    <button onClick={searchBooks}>Search</button>
                </div>

                {loadingSearch && <div className="loading">🔍 Searching books...</div>}
                {!loadingSearch && searched && books.length === 0 && (
                    <div className="no-results">❌ No books found. Try another search.</div>
                )}


                <div className="books-grid">
                    {books.map((book, index) => (
                        <div key={index} className="book-card" onClick={() => setSelectedBook(book)}>
                            <img src={getCoverUrl(book)} alt={book.title} />
                            <h3>{book.title}</h3>
                        </div>
                    ))}
                </div>


                {selectedBook && (
                    <div className="modal" onClick={() => setSelectedBook(null)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-btn" onClick={() => setSelectedBook(null)}>×</button>
                            <img src={getCoverUrl(selectedBook)} alt={selectedBook.title} />
                            <h2>{selectedBook.title}</h2>
                            <p><strong>Author:</strong> {selectedBook.author_name?.join(", ") || "Unknown"}</p>
                            <p><strong>First Published:</strong> {selectedBook.first_publish_year || "N/A"}</p>
                            {selectedBook.subject && <p><strong>Subjects:</strong> {selectedBook.subject.slice(0, 5).join(", ")}</p>}
                            <a href={`https://openlibrary.org${selectedBook.key}`} target="_blank">Read More</a>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));