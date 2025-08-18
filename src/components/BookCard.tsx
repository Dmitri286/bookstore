// type BookCardProps = {
//   title: string;
//   author: string;
// };

// function BookCard({ title, author }: BookCardProps) {
//   return (
//     <div
//       style={{
//         border: "1px solid #ddd",
//         borderRadius: "8px",
//         padding: "10px",
//         background: "#f9f9f9",
//       }}
//     >
//       <h2 style={{ fontSize: "16px" }}>{title}</h2>
//       <p style={{ fontSize: "14px", color: "#555" }}>{author}</p>
//     </div>
//   );
// }

// export default BookCard;
import React from "react";

interface BookProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export default function BookCard({ title, subtitle, image }: BookProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        width: "200px",
        textAlign: "center",
      }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
            borderRadius: "6px",
            marginBottom: "10px",
          }}
        />
      )}
      <h3>{title}</h3>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
