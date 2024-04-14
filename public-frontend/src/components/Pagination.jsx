import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Pagination({ pageInfo, setPageInfo }) {
  const pageNumber = [];

  for (let i = 1; i <= pageInfo.totalPage; i++) {
    pageNumber.push(i);
  }

  return (
    <section className="flex flex-col items-center justify-center py-5 gap-2">
      <div>
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{pageInfo.total}</span> results
        </p>
      </div>
      <div>
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <a
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-secondary ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            onClick={() => {
              if (pageInfo.currentPage > 1) {
                setPageInfo({
                  ...pageInfo,
                  currentPage: pageInfo.currentPage - 1,
                });
              }
            }}
          >
            <span className="sr-only">Previous</span>
            <FaChevronLeft />
          </a>
          {pageNumber.map((x) => {
            return (
              <NavLink
                key={x}
                aria-current="page"
                className="relative z-10 inline-flex items-center focus:bg-secondary  px-4 py-2 text-sm font-semibold text-secondary focus:text-white ring-1 ring-inset ring-gray-300  hover:bg-gray-50 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  setPageInfo({
                    ...pageInfo,
                    currentPage: x,
                  });
                }}
              >
                {x}
              </NavLink>
            );
          })}

          <a
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-secondary ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            onClick={() => {
              if (pageInfo.currentPage < pageInfo.totalPage) {
                setPageInfo({
                  ...pageInfo,
                  currentPage: pageInfo.currentPage + 1,
                });
              }
            }}
          >
            <span className="sr-only">Next</span>
            <FaChevronRight />
          </a>
        </nav>
      </div>
    </section>
  );
}
