import './userlist.css'
import React,{useState} from 'react';
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { userRows } from '../../dummydata';
import {Link} from 'react-router-dom'

export default function UserList() {
    const [data, setData] = useState(userRows)
    
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        {
          field: 'user',
          headerName: 'User',
          width: 300,
          renderCell: (params) => {
              return(
                  <div className="userListUser">
                      <img className="userListImg" src={params.row.avatar} alt="" />
                        {params.row.username}
                  </div>
              )
          }
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 400,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          width:200,
          editable: true,
        },
        
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 200,
          editable: true,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 200,
          renderCell: (params) => {
              return(
                <>
                    <Link to={"/user/"+params.row.id}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)}/>
                </>
              )
          }
        },
      ];
  return (
      <div className="userList">
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick />
      </div>
  );
}
