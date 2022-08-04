import React from 'react'
import { Modal } from 'react-bootstrap';

const TheatreEditModal = (props) => {
    const { selectedTheatre,
        setErrorMessage,
        showEditModal,
        setShowEditModal,
        handleEditTheatreSubmit,
        handleTheatresChange,
        errorMessage } = props;

    return (
        <Modal
            show={showEditModal}
            onHide={() => {
                setErrorMessage("");
                setShowEditModal(false);
            }}
            backdrop='static'
            keyboard={false}
            centered>
            <Modal.Header closeButton>
                <Modal.Title>Edit Theatre</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <h4>TheatreId: {selectedTheatre._id}</h4>
                </div>
                <form onSubmit={handleEditTheatreSubmit}>
                    <div className='input-group'>
                        <label>TheatreName
                        <input className='form-control p-1 m-1'
                            type='text'
                            name='name'
                            value={selectedTheatre.name}
                            onChange={handleTheatresChange} />
                            </label>
                    </div>

                    <div className='input-group'>
                        <label>Theatre City
                        <input className='form-control p-1 m-1'
                            type='text'
                            name='city'
                            value={selectedTheatre.city}
                            onChange={handleTheatresChange} />
                            </label>
                    </div>

                    <div className='input-group'>
                        <label>Theatre Pincode
                        <input className='form-control p-1 m-1'
                            type='text'
                            name='pinCode'
                            value={selectedTheatre.pinCode}
                            onChange={handleTheatresChange} />
                            </label>
                    </div>

                    <div className='input-group'>
                        <label>Theatre Description :
                        <textarea className='form-control p-1 mb-2 '
                            name='description'
                           
                            value={selectedTheatre.description}
                            onChange={handleTheatresChange} />
                            </label>
                    </div>
                     <div className='d-flex'>
                    <div className='input-group'>
                        <button
                            type='button'
                            className='btn btn-secondary p-1 '
                            onClick={() => {
                                setErrorMessage("");
                                setShowEditModal(false);
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

export default TheatreEditModal