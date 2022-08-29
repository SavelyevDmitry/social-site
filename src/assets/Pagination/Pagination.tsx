import React, { FC, useState } from "react";

import './Pagination.css';

type TProps = {
  currentPage: number
  pageSize: number
  totalUsersCount: number
  portionSize: number

  changePage: (pageNumber: number, pageSize: number) => void
}

const Pagination: FC<TProps> = ({ currentPage, pageSize, portionSize, totalUsersCount, changePage }) => {
  const pagesCount = Math.ceil( totalUsersCount / pageSize);
  
  const [ usersPortion, setUsersPortion ] = useState(1);
  const leftBorder = ( usersPortion - 1 ) * portionSize + 1;
  const rightBorder = ( usersPortion * portionSize > pagesCount ) ? pagesCount : usersPortion * portionSize;

  let paginationButtons = [];

  for (let i = leftBorder; i <= rightBorder; i++) {
    paginationButtons.push(i);
  }

  paginationButtons = paginationButtons.map(number => 
    <button className = { currentPage === number ? "pagination__button pagination__button--active" : "pagination__button" } 
      onClick={() => changePage(number, pageSize) }
      key = { number }
    > {number} </button>)

  return (
    <div className="pagination">
      { usersPortion !== 1 && <button onClick={ () => { setUsersPortion(usersPortion - 1) } } className = { 'pagination__button' }>Prev</button> } 
      { paginationButtons }
      { rightBorder !== pagesCount && <button onClick={ () => {setUsersPortion(usersPortion + 1)} } className = { 'pagination__button' }>Next</button> } 
    </div>
  )
}

export default Pagination;