import { Link } from "react-router-dom";

const Book = () => {
  return (
    <div className="book">
      <h1>This is the text of the Book page!</h1>
      <Link to="/BookConf">
        <h1>Click HERE to confirm your booking!</h1>
      </Link>
    </div>
  );
}
 
export default Book;
