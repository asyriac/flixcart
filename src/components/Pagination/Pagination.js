import "./Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => {
        return (
          <li key={number}>
            <button
              className={`btn ${number === currentPage ? "btn-primary" : "btn-secondary"} btn-sm`}
              onClick={(e) => {
                e.stopPropagation();
                paginate(number);
              }}
            >
              {number}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
