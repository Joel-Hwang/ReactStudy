import React, { useState, useEffect  } from 'react';
import {TextField,Button, Box, List, ListItem, Paper, ListItemAvatar, Avatar, ListItemText,Typography, Card, CardContent  } from '@mui/material';
import { border } from '@mui/system';




const ToolingReceive = () => {
  const[ scanned, setScanned] = useState<string[]>([]);
  React.useEffect(() => {
    const receiveMessage = (event:MessageEvent) => {
        // 이벤트 수신 함수 구현
        setScanned([...scanned,event.data.data]);
        alert("Received message:"+ event.data.data);
      }
  
      window.addEventListener("message", receiveMessage, false);
  
      return () => {
        window.removeEventListener("message", receiveMessage, false);
      };
  }, []);

  const scannedDiv = function(){
    const result = [];
    for(let i = 0; i<scanned.length; i++){
        result.push(<div>scanned[i]</div>);
    }
  }


  return (
    <>
        <iframe src="/barcode" width="200px" height="270px" style={{border:'none'}}></iframe>
        {scannedDiv()}
    </>
  );
}

export default ToolingReceive;
