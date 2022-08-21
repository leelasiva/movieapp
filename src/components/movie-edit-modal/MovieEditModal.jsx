import React from 'react'
import { Modal } from 'react-bootstrap';

const MovieEditModal = (props) => {

    const {
        setShowMovieEditModal,
        handleMoviesChange,
        selectedMovie,
        showMovieEditModal,
        errorMessage,
        setErrorMesseage,
        handleSelectedMovieSubmit,
    } = props;
  return (
<Modal
  show={showMovieEditModal}
  onHide={()=>{
    setShowMovieEditModal(false);
    setErrorMesseage("");
   }}
   backdrop="static"
   keyboard={false}
   centered
   >
   <Modal.Header closeButton>
   <Modal.Title>
      Edit Movie
   </Modal.Title>

   </Modal.Header>
     <Modal.Body><div><h4>{selectedMovie._id}</h4></div>
     <form onSubmit={handleSelectedMovieSubmit}>
                    <div className='input-group'>
                        <label>MovieName
                        <input className='form-control p-1 m-1'
                            type='text'
                            name='name'
                            value={selectedMovie.name}
                            onChange={handleMoviesChange} />
                            </label>
                    </div>

                    <div className='input-group'>
                        <label>ReleaseDate
                        <input className='form-control p-1 m-1'
                            type='text'
                            name='releaseDate'
                            value={selectedMovie.releaseDate}
                            onChange={handleMoviesChange} />
                            </label>
                    </div>

                    <div className='input-group'>
                        <label>ReleaseStatus
                        <input className='form-control p-1 m-1'
                            type='text'
                            name='releaseStatus'
                            value={selectedMovie.releaseStatus}
                            onChange={handleMoviesChange} />
                            </label>
                    </div>
                    <div className='input-group'>
                    <label>Director
                    <input className='form-control p-1 m-1'
                        type='text'
                        name='director'
                        value={selectedMovie.director}
                        onChange={handleMoviesChange} />
                        </label>
                </div>

                    <div className='input-group'>
                        <label>Movie Description :
                        <textarea className='form-control p-1 mb-2 '
                            name='description'
                           
                            value={selectedMovie.description}
                            onChange={handleMoviesChange} />
                            </label>
                    </div>
                     <div className='d-flex'>
                    <div className='input-group'>
                        <button
                            type='button'
                            className='btn btn-secondary p-1 '
                            onClick={() => {
                                setErrorMesseage("");
                                setShowMovieEditModal(false);
                            }}>
                            Cancle
                        </button>
                      </div>
                     
                      <div className='input-group'>
          
                        <button
                            type='submit'
                            className='btn btn-warning p-1 '>Update</button>
                    </div>
                    </div>
                </form>
                {errorMessage && (
                    <div className='text-danger'>{errorMessage}</div>
                )}
     </Modal.Body>
</Modal>
  )
}

export default MovieEditModal