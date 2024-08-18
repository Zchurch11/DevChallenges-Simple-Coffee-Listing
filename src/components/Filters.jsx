import React from 'react'

function Filters({onClick, filter}) {
  return (
    <div className='filters'>
        <span data-filter={'all'} onClick={onClick} className={filter === 'all' ? 'filter active' : 'filter'}>All Products</span>
        <span data-filter={'available'} onClick={onClick} className={filter === 'available' ? 'filter active' : 'filter'}>Available Now</span>
    </div>
  )
}

export default Filters