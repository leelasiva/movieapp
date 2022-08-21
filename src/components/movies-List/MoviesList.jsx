import React, { useState, useEffect } from 'react'
import { getAllMovies, updateMovieDetails, removeMovie } from '../../api/movies';
import MaterialTable from '@material-table/core';
import { ExportCsv, ExportPdf } from '@material-table/exporters';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import MovieEditModal from '../movie-edit-modal/MovieEditModal';


const MoviesList = () => {

    const [moviesList, setMoviesList] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [showMovieEditModal, setShowMovieEditModal] = useState(false);
    const [selectedMovie,setSelectedMovie] = useState({});


    useEffect(() => {
        fetchMovies();

    }, []);

    const editMovie=(rowData)=>{
        setSelectedMovie({...rowData});
        setShowMovieEditModal(true);
    };
    
    var formattedDate = selectedMovie?.releaseDate;
    console.log({formattedDate});

    const handleMoviesChange = e =>{
        const tempMovie = {...selectedMovie};

        if(e.target.name === "name"){
            tempMovie.name= e.target.value;
        } else if(e.target.name === "releaseDate"){
            tempMovie.releaseDate=e.target.value;
        }else if(e.target.name === "releaseStatus"){
            tempMovie.releaseStatus = e.target.value;
        }else if(e.target.name === "director"){
            tempMovie.director = e.target.value;
        }else if(e.target.name === "description"){
            tempMovie.description = e.target.value;
        }
        setSelectedMovie(tempMovie);
    };

    const handleSelectedMovieSubmit = (e) =>{
        updateMovieDetails(selectedMovie._id,selectedMovie).then(res=>{
            const {data,status} = res;
            if(status === 200){
                setErrorMessage("");
                setSelectedMovie("");
                fetchMovies();
                setShowMovieEditModal(false);
            }
        }).catch(err=>{
            setErrorMessage(err.message);
        });
        e.preventDefault();
    };

    const deleteMovie = (rowData) =>{
          const movieId = rowData._id;
          removeMovie(movieId).then(res=>{
            console.log("deleteMovie",res);

            if(res.status === 200){
                fetchMovies();
            }
          }).catch(err=>{
            console.log(err.message);
          })
    };

    const fetchMovies = () => {
        getAllMovies().then(res => {
            const { message, status, data } = res;
            if (status === 200) {
                console.log({ movies: data });
                setMoviesList(data);
            } else if (message) {
                setErrorMessage(message);
            }
        }).catch(err => {
            console.log(err.message);
        })
    };

    return (
        <div className='m-3'>
            <MaterialTable
                data={moviesList}
                title="Movie List"
                columns={[
                    { title: "MovieName", field: "name" },
                    { title: "ReleaseDate", field: "releaseDate" },
                    { title: "ReleaseStatus", field: "releaseStatus" },
                    { title: "Director", field: "director" },
                    { title: "Description", field: "description" },
                ]}
                options={{
                    sorting: true,
                    filtering: true,
                    actionsColumnIndex: -1,
                    headerStyle: {
                        backgroundColor: '#202429',
                        color: '#fff',
                    },
                    rowStyle: {
                        backgroundColor: "#EEE",
                    },
                    exportMenu: [
                        {
                            label: "Export CSV",
                            exportFunc: (cols, datas) =>
                                ExportCsv(cols, datas, "Movies Records"),
                        },
                        {
                            label: "Export Pdf",
                            exportFunc: (cols, datas) =>
                                ExportPdf(cols, datas, "Movie Records"),
                        }
                    ],
                }}
                actions={[
                    {
                        icon: Edit,
                        tooltip: "Edit Movie",
                        onClick: (event, rowData) => {
                            editMovie(rowData);
                        setErrorMessage("");},

                    },
                    {
                        icon: Delete,
                        tooltip: "DeleteMovie",
                        onClick:(event,rowData)=>deleteMovie(rowData),
                    }
                ]} />
                {showMovieEditModal && (
                    <MovieEditModal
                    setShowMovieEditModal={setShowMovieEditModal}
                    handleMoviesChange={handleMoviesChange}
                    selectedMovie={selectedMovie}
                    showMovieEditModal={showMovieEditModal}
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                    handleSelectedMovieSubmit={handleSelectedMovieSubmit}/>
                )}
        </div>
    )
}

export default MoviesList