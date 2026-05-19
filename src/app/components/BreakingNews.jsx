import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='container mx-auto bg-gray-100 p-3 rounded-2xl flex justify-between items-center'>
            <button className='btn btn-secondary'>Latest</button>
            <Marquee speed={150} pauseOnHover={true}>
               <p >Hello My Name is <span className='text-secondary'>SHUVRO BISWAS NAYON.</span> </p>
                 <p> And the breaking news is I am going to be a <span className='text-accent'>web developer</span></p>
                 <p>Is not it a good breaking news</p>                 
            </Marquee>
        </div>
    );
};

export default BreakingNews;