import React, { useState } from 'react';
import './ImageFileInput.css';

interface ImageFileInputProps {
    labelValue:string;
  }

const ImageFileInput: React.FC<ImageFileInputProps> = ({labelValue}) => {
  return (
    <>
        <label className="filebox" htmlFor='file'>{labelValue}</label> 
        <input className="filebox" type="file" id="file" />
    </>
  );
};

export default ImageFileInput;
