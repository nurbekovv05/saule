import {useEffect} from "react";
import {useAppSelector} from "../../hooks/useAppSelector";
import {AppDispatch} from "../../store";
import {getMovieFailure, getMovieStart, getMovieSuccess} from "../../Reducers/DetailSlice";
import axios from "axios";
import {Apikey} from "../../APIKEY/Apikey";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppDispatch";

const DetailPage = () => {
    const dispatch = useAppDispatch();
    const {movieId} = useParams()
    const fetchMovie = () => {
        return async (dispatch: AppDispatch) => {
            try {
                dispatch(getMovieStart());
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Apikey}&language=en-US`
                );
                dispatch(getMovieSuccess(response.data));
            } catch (error: any) {
                dispatch(getMovieFailure(error.message));
            }
        };
    }
    useEffect(() => {
        dispatch(fetchMovie)
    }, [])

    const {loader, detail, error} = useAppSelector((state) => state.detailPageSlice);
    console.log(detail)
    return (
        <div>
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detail.poster_path}`} alt=""/>
            {loader && <p>loading..</p>}
            {error && <p>Err..</p>}
            <h1 style={{
                color: "black"
            }}>{detail.title}</h1>
            <p  style={{
                color: "black"
            }}>{detail.overview}</p>
        </div>
    );
};

export default DetailPage;

