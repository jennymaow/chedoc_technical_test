import './Pagination.css';

const Pagination = ({ array, currentPage, setCurrentPage, itemsPerPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(array.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const specificPage = (num) => {
    setCurrentPage(num);
  };
  return (
    <div className="pagination">
      {console.log(array.length)}
      <button onClick={() => prevPage()} disabled={currentPage == 1 ? true : false}>
        Previous
      </button>
      <div className="pagenums">
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => specificPage(page)}
            style={
              page == currentPage
                ? { backgroundColor: '#0092ff', color: 'white' }
                : { backgroundColor: 'white', color: '#0092ff' }
            }
          >
            {page}
          </button>
        ))}
      </div>
      <button
        onClick={() => nextPage()}
        disabled={currentPage == pageNumbers.length ? true : false}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
