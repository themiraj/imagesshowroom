import React from 'react'
import {Pagination,PaginationItem} from '@mui/material';
import Stack from '@mui/material/Stack';
const Pagina = () => {
    return (
        <Stack spacing={2}>
            <Pagination count={5} color="primary" >
                <PaginationItem page={1}/>
            </Pagination>
        </Stack>
    )
}

export default Pagina;

