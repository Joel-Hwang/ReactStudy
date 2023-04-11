import React, { useState, useEffect  } from 'react';
import {Alert, AlertTitle  } from '@mui/material';

interface ListProp {
  mode:string
  setMode:(param:string) => void;
  itemList: Array<any>
  setItemId:(param:string) => void;

}


const ToolingReceive:React.FC<ListProp> = ({setMode, mode, itemList, setItemId}) => {
  const[ scanned, setScanned] = useState<string[]>([]);
  const[scanData, setScanData] = useState("");
  React.useEffect(() => {
    const receiveMessage = (event:MessageEvent) => {
        // 이벤트 수신 함수 구현
        setScanned([...scanned,event.data.data]);
        setScanData(event.data.data);
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
        <iframe title='barcodeIframe' src="/barcode" width="200px" height="270px" style={{border:'none',position:'absolute',bottom:'0', left:'50%', transform: 'translateX(-50%)'}}></iframe>
          <Alert severity="error">
            <AlertTitle>scanData</AlertTitle>
            <strong>{scanData}</strong>
          </Alert>
    </>
  );
}

export default ToolingReceive;
