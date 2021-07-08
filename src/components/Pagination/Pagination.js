const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => {
        return (
          <li key={number} className="page-item">
            <button
              className="page-link"
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
