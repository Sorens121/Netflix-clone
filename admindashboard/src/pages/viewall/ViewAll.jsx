import './viewall.css'
import React, { useState }  from 'react';
import { DataGrid } from '@material-ui/data-grid'
import {movies, series} from '../../dummydata'

export default function ViewAll() {
    const [movieList, setMovieList] = useState(movies)
    const [seriesList, setSeriesList] = useState(series)
    
    const movieColumns = [
        {field: 'id', headerName: "ID", width: 150},
        {
            field: 'moviename', 
            headerName: "Movie", 
            width: 400,
            renderCell: (params) => {
                return(
                    <div className="genericList">
                        <img src={params.row.movieImg} alt="" className="genericImg" />
                        {params.row.moviename}
                    </div>
                )
            }
        },
        {field: 'year', headerName: "Year", width: 200},
        {field: 'genre', headerName: "Genre", width: 200},
    ]

    const seriesColumns = [
        {field: 'id', headerName: "ID", width: 150},
        {
            field: 'seriesname', 
            headerName: "Series", 
            width: 400,
            renderCell: (params) => {
                return(
                    <div className="genericList">
                        <img src={params.row.seriesImg} alt="" className="genericImg" />
                        {params.row.seriesname}
                    </div>
                )
            }
        },
        {field: 'year', headerName: "Year", width: 200},
        {field: 'genre', headerName: "Genre", width: 200},
    ]
  return (
      <div className="viewall">
          <div className="viewListOfMovies">
              <span className="listTitle">Movies</span>
              <div className="genericList">
                <DataGrid
                    rows={movieList}
                    columns={movieColumns}
                    pageSize={7}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick/>
              </div>
          </div>
          <div className="viewListOfSeries">
              <span className="listTitle">Series</span>
              <div className="genericList">
                  <DataGrid
                    rows={seriesList}
                    columns={seriesColumns}
                    pageSize={7}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick/>
              </div>
          </div>
      </div>
  );
}
