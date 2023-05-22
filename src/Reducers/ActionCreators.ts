import {AppDispatch} from "../store";
import {Apikey} from "../APIKEY/Apikey";
import axios from "axios";
import {getMovie, getMovieError, getMovieSuccess} from "./MovieSlice";


export const fetchingMoviesPopular = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(getMovie())
            const response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${Apikey}&language=en-US&page=9`)
            const {data} = await response
            dispatch(getMovieSuccess(data.results))
        } catch (err: any) {
            dispatch(getMovieError(err.message))
        }
    }
}

export const fetchingMoviesTopRated = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(getMovie())
            const response = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${Apikey}&language=en-US&page=1`)
            const {data} = await response
            dispatch(getMovieSuccess(data.results))
        } catch (err: any) {
            dispatch(getMovieError(err.message))
        }
    }
}

export const fetchingMoviesUpcoming = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(getMovie())
            const response = await axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${Apikey}&language=en-US&page=1`)
            const {data} = await response
            dispatch(getMovieSuccess(data.results))
        }catch (err: any){
            dispatch(getMovieError(err.message))
        }
    }
}

export const fetchingMoviesNowPlaying = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(getMovie())
            const response = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${Apikey}&language=en-US&page=1`)
            const {data} = await response
            dispatch(getMovieSuccess(data.results))
        }catch (err: any) {
            dispatch(getMovieError(err.message))
        }
    }
}
