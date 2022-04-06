import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../scss/day12.scss';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

function Day12() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/${input}`);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const rows = [
    {
      id: 1, lastName: 'Snow', firstName: 'John', age: 35,
    },
    {
      id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42,
    },
    {
      id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45,
    },
    {
      id: 4, lastName: 'Stark', firstName: 'Arya', age: 16,
    },
    {
      id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null,
    },
    {
      id: 6, lastName: 'Melisandre', firstName: null, age: 150,
    },
    {
      id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44,
    },
    {
      id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36,
    },
    {
      id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65,
    },
  ];

  return (
    <>
      <div className="col-md-12">
        <h2 className="text-center mt-3 mb-3">Day-12 Redirect Form</h2>
      </div>

      <div className="col-md-12">
        <div className="container center">
          <Form className="form-inline">
            <input type="text" className="form-control mb-2" value={input} onInput={(e) => setInput(e.target.value)} placeholder="Enter page name" />
            <Button type="submit" className="btn btn-primary" onClick={handleNavigation}>
              Submit
            </Button>
          </Form>
          <div className="heading mt-5">
            <h2 className="text-center">Table</h2>
          </div>

          <div className="mt-5 tbl" style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Day12;
