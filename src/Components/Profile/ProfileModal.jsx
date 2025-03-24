import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { updateProfileAction } from '../../redux/Auth/auth.action';
import { IconButton} from '@mui/material';
import { Avatar } from '@mui/material';
import {TextField} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  outline:"none",
  overflow:"scroll-y",
  borderRadius:3,
};
export default function ProfileModal({open,handleClose}) {
  // const [open, setOpen] = React.useState(false);
  const dispatch  = useDispatch();
  // const handleClose = () => setOpen(false);
  const handleSubmit = (values) =>{
        console.log("values",values);
  }
  

  const formik = useFormik({
    initialValues:{
      firstname:"",
      lastname:""
    },
    onSubmit:(values) =>{
      console.log("values ",values)
      dispatch(updateProfileAction(values))
      // handleClose(); 
    },
  })


  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <form onSubmit={formik.handleSubmit }>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <IconButton onClick={handleClose}>
                <CloseIcon/>
                </IconButton>
                <p>Edit Profile</p>

              </div>
              <Button type='submit'>Save</Button>
              </div>
            <div>
            <div className='h-[15rem]'>
              <img src="https://cdn.pixabay.com/photo/2014/01/13/20/01/pebbles-243910_640.jpg" alt="" className='w-full h-full rounded-t-md' />
            </div>

            <div className='pl-5'>
              <Avatar className="transform -translate-y-24" sx={{width:"10rem",height:"10rem"}}
              src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png"
              />
            </div>

            </div>

            <div className='space-y-3'>
              <TextField
              fullWidth
              id="firstname"
              name="firstname"
              label="First Name"
              value={formik.values.firstname}
              onChange={formik.handleChange}

              />

              <TextField
              fullWidth
              id="lastname"
              name="lastname"
              label="Last Name"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              
              />
            </div>

          </form>
        </Box>
      </Modal>
    </div>
  );
}
