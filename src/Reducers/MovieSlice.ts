import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IDetail, IMovies} from "../types/IMovies";

interface IMovieState {
    movies: IMovies[]
    loader: boolean
    error: string
}

const initialState: IMovieState = {
    movies: [],
    loader: false,
    error: '',
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        getMovie(state) {
            state.loader = false

        },
        getMovieSuccess(state, action){
            state.loader = false
            state.movies = action.payload
        },
        getMovieError(state, action){
            state.loader= false
            state.movies = []
            state.error = action.payload
        },

    }
})

export const { getMovieSuccess,getMovieError, getMovie} = movieSlice.actions

export default movieSlice.reducer
