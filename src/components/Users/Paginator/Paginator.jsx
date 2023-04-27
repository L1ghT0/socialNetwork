import React from 'react';
import P_classes from './Paginator.module.css'

const Paginator = (props) => {

    let pages = [];

    let lastPade = Math.ceil(props.totalUsersCount / props.pageSize);
    let firstPage = 1;
    let prevPage = props.currentPage - 1 <= firstPage ? null :  props.currentPage - 1;
    let nextPage = props.currentPage + 1 >= lastPade ? null :  props.currentPage + 1;

    const handlePageChange = (page) => {
        if(page === props.currentPage){
            return;
        }
        props.onPageChanged(page);
    }

    pages.push(firstPage);

    if(prevPage){
        pages.push(prevPage);
    }

    if(firstPage !== props.currentPage && props.currentPage !== lastPade){
        pages.push(props.currentPage);
    }

    if(nextPage){
        pages.push(nextPage);
    }

    pages.push(lastPade);


    pages = pages.map(p => {
        if(p === 1 && prevPage && prevPage - 1 !== p){
            return <><span className={props.currentPage === p && P_classes.selectedPage} onClick={()=>handlePageChange(p)}>{p}</span><span>...</span></>
        }
        if(p === lastPade && nextPage && nextPage + 1 !== p){
            return <><span>...</span><span className={props.currentPage === p && P_classes.selectedPage} onClick={()=>handlePageChange(p)}>{p}</span></>
        }
        return <span className={props.currentPage === p && P_classes.selectedPage} onClick={()=>handlePageChange(p)}>{p}</span>
    })

    return (
        <div className={P_classes.pages}>{pages}</div>
    );
}

export default Paginator;
