// import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import image4 from '../../assets/error (1).jpeg'

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <section className='my-5'>
            <div className=' container text-center'>
                <img className='rounded w-25 h-auto my-3' src={image4} alt="" />
                <div className=' text-center fs-3'>
                    <h2 className='mb-5'>
                        <span className='sr-only'>Error</span> {status || 404}
                    </h2>
                    <p className='fs-3'>
                        {error?.message}
                    </p>
                    <Link to='/'>
                        <button className='btn btn-primary'>Back to homepage</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;