// import React, { useState, useEffect } from 'react';
import '../App.css';

const Botones = ({ currentPage, onPageChange }) => {

    const handlePrevClick = () => {
        if (currentPage > 1) {
          onPageChange(currentPage - 1);
        }
      };
    
      const handleNextClick = () => {
        if (currentPage <= 1000) {
          onPageChange(currentPage + 1);
        }
      };



    return (
        <div className="paginacion">
            <button id="btnAnterior" onClick={handlePrevClick} disabled={currentPage === 1} >Anterior</button>
            <button id="btnSiguiente" onClick={handleNextClick} disabled={currentPage === 1000} >Siguiente</button>
        </div>
    )
}

export default Botones;