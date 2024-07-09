/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import '../products/ProductsCards.css';
import Breadcrumbs from '../common/breadcrumbs/Breadcrumbs';
import Navbar from '../common/navbar/Navbar';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

function Category() {
  const { category: categoryData , loading } = useSelector(state => state.category);
  const { category:data } = useParams();
  const decodedCategory = decodeURIComponent(data);
  const [sortedCategory, setSortedCategory] = useState([]);

  // Update the sortedCategory when categoryData changes
  useEffect(() => {
    setSortedCategory(categoryData);
  }, [categoryData]);

  const renderSkeletons = () => {
    const skeletons = [];
    for (let i = 0; i < 8; i++) {
      skeletons.push(
        <div key={i} className='card'>
            <Skeleton height={200} width={250} />
        </div>
      );
    }
    return skeletons;
  };

  const handleCart = (categoryData) => {
    // Handle cart functionality here
    console.log('Adding to cart:', categoryData);
  };

  const FilterBy = () => {
    return ( 
      <span>
      <select style={{marginRight:0}} onClick={handleSort} >
            <option>sort by</option>
            <option>price:low to high</option>
            <option>price:high to low</option>
            <option>rating</option>
      </select>
      </span>
     );
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  
  const handleSort = (event)=>{
    let val = event.target.value
    let sortedArray = [...categoryData];
    
    switch (val) {
      case 'price:low to high':
        sortedArray.sort((a, b) => a.price - b.price);
        console.log(sortedArray)
        break;
      case 'price:high to low':
          sortedArray.sort((a, b) => b.price - a.price);
          console.log(sortedArray)
          break;
      case 'rating':
        sortedArray.sort((a,b) => b.rating.rate - a.rating.rate);
        console.log(sortedArray)
        break;
      default:
        sortedArray = categoryData;
  }
  setSortedCategory(sortedArray);
}

  return (
    <>
        <Navbar />
        <Breadcrumbs />
        <br/>
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <h3 style={{margin:0}}>{ loading ? <Skeleton count={1} width={150} /> : capitalizeFirstLetter(decodedCategory)} </h3>
        <FilterBy />
        </div>
        <br/>
        <div className="product-grid">
        {loading ? (
            renderSkeletons()
        ) : (
          sortedCategory && (
                <> {sortedCategory.map((item) => (
                  <div key={item.id} className="card">
                    <Link to={`/product/${item.id}`}>
                      <div className="cardImg">
                        <img src={item.image} alt={item.title} />
                      </div>
                    </Link>
                    <p className="ctitle" onClick={() => handleCart(item)}>
                      {item.title}
                    </p>
                    <Rating
                      style={{ maxWidth: 80 }}
                      value={item.rating.rate}
                      readOnly
                    />
                    <p className="cprice">${item.price}</p>
                  </div>
                ))}
              </>
          )
        )}
        </div>
    </>
  )
}

export default Category;