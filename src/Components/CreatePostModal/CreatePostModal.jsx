import React, { useState } from 'react'
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
// import { useFormik } from 'formik';
// import { updateProfileAction } from '../../redux/Auth/auth.action';
// import { IconButton} from '@mui/material';
import { Avatar, IconButton } from '@mui/material';
// import {TextField} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { uploadToCloudinary } from '../../utils.js/uploadToCloudanary';
import { createPostAction } from '../../redux/Post/Post.action';
// import {uploadToCloudinary} from "./cloudinaryService";  
const style = {
    position: 'absolute',       //
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius:".6rem",
    outline:"none",
  };

const CreatePostModal = ({open,handleClose}) => {
   
const dispatch = useDispatch();
    const [selectedImage,setSelectedImage] = useState();
    const [selectedVideo,setSelectedVideo] = useState();
    const [isLoading,setIsLoading] = useState(false);

    const handleSelectImage = async(event) =>{
        setIsLoading(true)
        const imageUrl = await uploadToCloudinary(event.target.files[0],"image")
        setSelectedImage(imageUrl);
        setIsLoading(false)
        formik.setFieldValue("image",imageUrl)
    };

    const handleSelectVideo = async(event) =>{
        setIsLoading(true)
        const videoUrl = await uploadToCloudinary(event.target.files[0],"video")
        setSelectedVideo(videoUrl);
        setIsLoading(false)
        formik.setFieldValue("video",videoUrl)

    }

    const formik = useFormik({
        initialValues:{
            caption:"",
            image:"",
            video:""
        },
        onSubmit:(values) =>{
            console.log("formik values",values);
            dispatch(createPostAction(values))
        }
    });

   

  return (
    <div>
         <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

         <form onSubmit={formik.handleSubmit}>
            <div>
                <div className='flex space-x-4 items-center'>

                    <Avatar/>
                    <div>
                        <p className='fond-bold text-lg'>Code with tushar</p>
                        <p className='text-sm'>@Tushar</p>
                    </div>

                </div>

                <textarea name="caption"
                 id="" cols="" 
                 className='outline-none w-full mt-5 p-2 bg-transparent border border-[#3b4054] rounded-sm'
                 rows="4" placeholder='Write Caption'
                  value={formik.values.caption} 
                  onChange={formik.handleChange}>
                </textarea>
                

                <div className='flex space-x-5 items-center mt-5'>
                    <div>
                        <input type="file" name="" id="image-input" accept='image/*'
                         onChange={handleSelectImage} 
                         style={{display:"none"}}
                        
                        />
                        <label htmlFor='image-input'>
                            <IconButton color='primary' component="span">
                                <ImageIcon/>
                            </IconButton>
                        </label>

                        <span>
                            Image
                        </span>
                    </div>

                    <div>
                        <input type="file" name="" id="video-input" accept='video/*'
                         onChange={handleSelectVideo} style={{display:"none"}}
                        
                        />
                        <label htmlFor='video-input'>
                            <IconButton color='primary' component="span">
                                <VideoCallIcon/>
                            </IconButton>
                        </label>

                        <span>
                            Video
                        </span>
                    </div>


                </div>

                 { selectedImage && <div>
                    <img src={selectedImage} alt="" className='h-[10rem]' />
                </div>
                }

                <div className='flex w-full justify-end'>
                    <Button sx={{borderRadius:"1.5rem"}} variant='contained' type='submit'>Post</Button>
                </div>
            </div>
         </form>
         <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={isLoading}
        onClick={handleClose}
      >
    <CircularProgress color="inherit" />
    </Backdrop>
        </Box>
      </Modal>
        
    </div>
  )
}

export default CreatePostModal