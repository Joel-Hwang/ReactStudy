import React, { useState } from 'react';
import {Button, Box,Typography } from '@mui/material';


interface ImageFileInputProps {
    label:string;
    width:number;
    minWidth:number;
    imageSrcProp:string;
    setImageSrc:(src:string) => void;
    setFile:(file:File) => void;
  }

const ImageFileInput: React.FC<ImageFileInputProps> = ({label, width,minWidth, imageSrcProp, setImageSrc, setFile}) => {
  let imgWidth = width-40;
  let imgMinWidth = minWidth-40;
  return (
    <>
      <Button
        variant="outlined"
        component="label"
        sx={{
          width: width,
          minWidth: minWidth,
          margin:'5px',
        }}>
        <Typography variant="button" display="block" gutterBottom>
          {label}
          <Box
          component="img"
          sx={{
            width: imgWidth,
            minWidth: imgMinWidth,
          }}
          alt=""
          src={imageSrcProp}
        />
        </Typography>
        
        <input type="file" hidden 
          onChange={
            (evt)=>{
              if(evt.target.files && evt.target.files[0]) {
                setFile(evt.target.files[0]);
                const reader = new FileReader()
                reader.onload = e => {
                  let imageBlob:string = e.target?.result as string;
                  setImageSrc(imageBlob);
                }
                reader.readAsDataURL(evt.target.files[0])
              }
            }
          }/>
      </Button>
    </>
  );
};

export default ImageFileInput;
