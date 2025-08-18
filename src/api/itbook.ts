export async function fetchBooks() {
  try {
    const response = await fetch("https://api.itbook.store/1.0/new");
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
    const data = await response.json();
    return data.books; // массив книг
  } catch (error) {
    console.error("API error:", error);
    return [];
  }
}
