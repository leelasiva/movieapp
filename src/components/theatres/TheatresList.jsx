import React, { useState, useEffect } from 'react'
import { getAllTheatres, updateTheatre } from '../../api/theatres';
import MaterialTable from '@material-table/core';
import {ExportCsv,ExportPdf} from '@material-table/exporters';
import Edit from '@mui/icons-material/Edit';
import Delete from '@material-ui/icons/Delete';
import TheatreEditModal from '../theatre-edit-modal/TheatreEditModal';

const TheatresList = () => {
    const [theatreList, setTheatreList] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedTheatre, setSelectedTheatre] = useState({});
    const [errorMessage, setErrorMessage] = useState("");




    useEffect(() => {
        fetchTheatres();

    }, []);

    const fetchTheatres = () => {
        getAllTheatres().then(res => {
            const { message, data, status } = res;
            if (status === 200) {
                console.log(data);
                setTheatreList(data);
            }
        }).catch(err => {
            console.log(err);
        })
    };

    const editTheatre = (rowData) =>{
          setSelectedTheatre({...rowData});
          setShowEditModal(true);
    };

    const deleteTheatre = (rowData) =>{
        const theatreId = rowData._id;
        const theatresListUpdated = theatreList.filter(theatre=>{
            const {_id} = theatre;
            return _id!= theatreId;
        });
        setTheatreList(theatresListUpdated);
    };

    const handleTheatresChange = (e) => {
        const tempTheatre = { ...selectedTheatre };
        if (e.target.name === "name") {
            tempTheatre.name = e.target.value;
        } else if (e.target.name === "city") {
            tempTheatre.city = e.target.value;
        } else if (e.target.name === "description") {
            tempTheatre.description = e.target.value;
        } else if(e.target.name === "pinCode"){
            tempTheatre.pinCode = e.target.value;
        }

        setSelectedTheatre(tempTheatre);
    };

    const handleEditTheatreSubmit = e => {
        const id = selectedTheatre._id;
        try {
            updateTheatre(id, selectedTheatre).then(res => {
                const { message, status } = res;
                if (status === 200) {
                    setSelectedTheatre({});
                    setErrorMessage("");
                    setShowEditModal(false);
                    fetchTheatres();
                } 
                else if (message) {
                    setErrorMessage(message);
                }
            }).catch(err => {
                setErrorMessage(err.message);
            });
        } catch (err) {

        }
        e.preventDefault();
    }

    return (
        <div className='m-3' style={{zIndex:'-1'}}>
        <MaterialTable
        data={theatreList}
        title='Theatres List'
        columns={[
            {
                title: "Theater Name",
                field: "name",
            },
            {
                title: "Theater ID",
                field: "_id",
            },
            {
                title: "Description",
                field: "description",
            },
            {
                title: "Pin code",
                field: "pinCode",
            },
            {
                title: "City",
                field: "city",
            },
        ]}
        actions={[
            {
                icon: Edit,
                tooltip: "Edit Theater",
                onClick: (event, rowData) => editTheatre(rowData),
            },
              {
                icon: Delete,
                tooltip: "Delete Theater",
                onClick: (event, rowData) => deleteTheatre(rowData),
            },
            
        ]}
        options={{
            actionsColumnIndex: -1,
            sorting: true,
            filtering: true,
            exportMenu: [
                {
                    label: "Export PDF",
                    exportFunc: (cols, datas) =>
                        ExportPdf(cols, datas, "Theater Records"),
                },
                {
                    label: "Export CSV",
                    exportFunc: (cols, datas) =>
                        ExportCsv(cols, datas, "Theater Records"),
                },
            ],

            headerStyle: {
                backgroundColor: "#202429",
                color: "#fff",
            },
            rowStyle: {
                backgroundColor: "#EEE",
            },
        }}
    />

            {showEditModal && (
                <TheatreEditModal
                    selectedTheatre={selectedTheatre}
                    setErrorMessage={setErrorMessage}
                    showEditModal={showEditModal}
                    handleEditTheatreSubmit={handleEditTheatreSubmit}
                    handleTheatresChange={handleTheatresChange}
                    errorMessage={errorMessage}
                    setShowEditModal={setShowEditModal} />
            )}


        </div>
    )
}

export default TheatresList