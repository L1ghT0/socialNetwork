import React from 'react';
import P_classes from './Paginator.module.css'


const Paginator = (props) => {

    let firstPage = 1;
    let lastPade = Math.ceil(props.totalUsersCount / props.pageSize);
    let prevPage = props.currentPage - 1 <= firstPage ? null :  props.currentPage - 1;
    let nextPage = props.currentPage + 1 >= lastPade ? null :  props.currentPage + 1;

    let pages = [firstPage, prevPage, props.currentPage, nextPage, lastPade];
    pages = pages.filter((page, index) => pages.indexOf(page) === index && page !== null)
    const handlePageChange = (page) => {
        if(page === props.currentPage){
            return;
        }
        props.onPageChanged(page);
    }

    pages = pages.map(p => {
        return  <>
                {p === lastPade && nextPage && nextPage + 1 !== p && <span>...</span>}
                <span className={props.currentPage === p && P_classes.selectedPage} onClick={()=>handlePageChange(p)}>{p}</span>
                {p === 1 && prevPage && prevPage - 1 !== p && <span>...</span>}
                </>
    })

    return (
        <div className={P_classes.pages}>{pages}</div>
    );
}

export default Paginator;
