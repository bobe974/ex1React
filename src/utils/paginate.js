import _ from "lodash"
export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize
    return _(items).slice(startIndex).take(pageSize).value();
}
/* export function paginate(items, pageNumber, pageSize) {
  let nbPagination = Math.ceil(items.length / pageSize);
  let datas = [];

  let first = 0;
  let last = pageSize;

  for (let i = 0; i < nbPagination; i++) {
    datas.push(items.slice(first, last));
    first += pageSize;
    last = first + pageSize;
  }

  return datas[pageNumber - 1] || [];
}

//in use
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const currentPage = 2;
const pageSize = 3;

const paginatedData = paginate(data, currentPage, pageSize);
console.log(paginatedData); // [4, 5, 6]
 */