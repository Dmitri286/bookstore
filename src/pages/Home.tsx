import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { fetchBooks } from "../api/itbook";

type Book = {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
};

function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks().then((data) => {
      setBooks(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h2 style={{ padding: "20px" }}>⏳ Загрузка...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Bookstore</h1>
      <div style={{ display: "grid", gap: "10px", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
        {books.map((book) => (
          <BookCard key={book.isbn13} title={book.title} author={book.subtitle} image={book.image}/>
        ))}
      </div>
    </div>
  );
}

export default Home;
