import React,{useContext,useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ImageContext } from '../../context/ImageContext'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 750,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Singleimage() {
  const {single} = useContext(ImageContext)
  const [open, setOpen] = useState(false);
  const [detail, setdetails] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
      setOpen(false)
      setdetails([])
    };
  
  function getSingleimage(id){
      fetch(`${process.env.REACT_APP_API_URL}photos/${id}?client_id=${process.env.REACT_APP_API_KEY}`)
        .then(data => {
            return data.json();
        })
        .then(res => {
            setdetails(res);
        })


  }
  useEffect(async() => {
      if(single.open === true){
            setOpen(true)
            getSingleimage(single.image)
        }
}, [single],[detail])
  return (
      <>
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-single-image"
      >
        <Box sx={style}>
            {
                detail.length != 0 ?
                ( 
                    <div>
                        <div className="flex-layout"> 
                            <img src={detail.urls.full} className="images"/>
                            <span className="single-tag">Single Image</span>    
                            <div className="related-images">
                            <span className="related-tag">Related Images</span>    
                                {
                                    detail.related_collections.results.map((result)=>{
                                        return <div key={result.id}><img src={result.preview_photos[0].urls.thumb} className="inner-images"/></div>
                                    })
                                }
                            </div> 
                        </div>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {detail.description !== null ? detail.description : 'Description not available'}
                        </Typography>
                    </div>
                )

                : ''
            }
        </Box>
      </Modal>
    </div>
    </>
  );
}
