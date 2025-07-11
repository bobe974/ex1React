import _ from "lodash";

const pagination = (props) => {
  const { itemsCount, pageSize, changePage, currentPage } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1 ) return null;
  const pages = _.range(1, pageCount + 1);

  console.log("currentPage " + currentPage)
  //const isSelected = (currentPage === page)
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          {pages.map((page,index) => (
            <li className= {currentPage === page ? "page-item active" : "page-item"} key={index}>
              <a className="page-link" onClick={()=>changePage(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default pagination;