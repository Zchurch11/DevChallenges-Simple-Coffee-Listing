import React from 'react'
import Card from './Card'
function Products({ data }) {
    return (
     
        <div className='card-container'>
            {data.map(item => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}

export default Products