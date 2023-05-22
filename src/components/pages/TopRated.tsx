import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {fetchingMoviesTopRated} from "../../Reducers/ActionCreators";

const TopRated = () => {
    const {movies, error, loader} = useAppSelector((state) => state.movieReducer)
    const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(fetchingMoviesTopRated())
    },[])
    return (
        <div className='pt-[40px]'>
            <h1 className='text-center text-3xl mb-[50px]'>Top Rated Movies</h1>
            <div className='container'>
                <div className='items-center flex-wrap flex justify-center'>
                    {error && <p>{error}</p>}
                    {loader && <p>loading...</p>}
                    {
                        movies.map(el => (
                            <div className=''>
                                <div className='w-[250px] h-[470px] my-[20px] mx-[10px] border-2 border-blue-800'>
                                    <div>
                                        <img className='ml-3 mt-[15px] cursor-pointer'  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""/>
                                        <div className='w-[200px] ml-[16px] mt-[5px]'>
                                            <h1 className='text-xl'>{el.title}</h1>
                                            <p>{el.release_date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>

            </div>
        </div>


    );
};

export default TopRated;