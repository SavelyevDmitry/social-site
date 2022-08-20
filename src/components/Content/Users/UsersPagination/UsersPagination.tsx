import React, { FC } from "react";
import "./UsersPagination.css";

type TProps = {
  currentPage: number

  changePage: (newCurrentPage: number) => void
}

const UsersPagination: FC<TProps> = (props) => {

  const pagesCount = 10;
  let paginationButtons = [];

  for (let i = 1; i <= pagesCount; i++) {
    paginationButtons.push(i);
  }

  paginationButtons = paginationButtons.map(number => 
    <button className = { props.currentPage === number ? "pagination__button pagination__button--active" : "pagination__button" } 
      onClick={() => props.changePage(number) }
      key = { number }
    > {number} </button>)

  return (
    <div className="pagination">
      { paginationButtons }
    </div>
  )
}

export default UsersPagination;