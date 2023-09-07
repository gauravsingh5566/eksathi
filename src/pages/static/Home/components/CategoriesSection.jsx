import { useGlobalContext } from 'global/context';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const CategoryCard = ({ category }) => {
    return (
        <>
            <div className="col mb-4" style={{minHeight: 200, width:144}}>
              <Link to='/user'>
              <div className="shadow hover-shadow d-flex flex-column justify-content-center align-content-between rounded p-4 h-100"  
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                
                }}
                >
                    <div>
                        <img src={category?.icon} alt="" className='w-100 mb-3' />
                    </div>
                    <h6 className='text-center'>{category?.name}</h6>
                </div>
              </Link>

            </div>
        </>
    );
}

const CategoriesSection = () => {
    const { categories } = useGlobalContext();

    return (
        <>
            <section className='container mb-5 py-5'>
                <div className='fw-bold mb-4 d-flex flex-wrap justify-content-between'>
                    <h3 className='fw-bold'>Categories</h3>
                    <Link to='/user'>View All Categories</Link>
                </div>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6">
                    {
                        categories?.map((category, index) => index < 6 &&(
                            <CategoryCard category={category} key={category?.id} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default CategoriesSection;