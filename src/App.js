import './App.css';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Filters from './components/Filters';
import Products from './components/Products';
import { useState, useEffect } from 'react';



function App() {
  const [filter, setFilter] = useState('all')
  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])

  const handleFilter = (e) => {
    const filterType = e.target.getAttribute('data-filter')
    setFilter(filterType)
    console.log(filter)
  }
  useEffect(() => {
    applyFilter()
  }, [filter, data])
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
      const result = await response.json()
      setData(result)
      console.log(result)
    } catch (error) {
      console.log('Error Fetching Data', error)
    }
  }
  const applyFilter = (e) =>{
    if (filter === 'available'){
      setFilterData(data.filter(item => item.available))
    } else {
      setFilterData(data)

    }
  }
  return (
    <main>
      <Hero />
      <section className='listings'>
        <Intro />
        <Filters filter={filter} onClick={ handleFilter}/>
        <Products data={filterData} />
        
      </section>
    </main>
  );
}

export default App;
