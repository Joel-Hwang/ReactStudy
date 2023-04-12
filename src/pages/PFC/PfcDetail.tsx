import React, { useState } from 'react';
import {TextField,Button, Box, List, ListItem, Paper, ListItemAvatar, Avatar, ListItemText,Typography, Card, CardContent  } from '@mui/material';
import ImageFileInput from '../../components/ImageFileInput';
import {API,get} from '../../Util';

interface DetailProp {
  itemId:string
}


const PfcDetail:React.FC<DetailProp> = ({itemId}) => {
  
  const [detailData,setDetailData] = useState<any>({_factory:""});
  React.useEffect(() => {
    async function fetchData() {
      // 비동기 작업 수행
      // 컴포넌트가 마운트된 후에 실행할 코드
      let result = await get(`${API.DETAIL}/CS_PFC/${itemId}`);
      console.log(result);
    
      if(result && result.status == 200){
        setDetailData(result.data.data);
        //setItemList(result.data.data.value);
      }else{
        //setItemList([]);
      }
    }
    fetchData();
  }, []);

  


  return (
    <Card sx={{ minWidth: 275, marginBottom: 2 }} variant='outlined'>
      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Model information
        </Typography>
        <Typography variant="h6" component="div">
          Number: {detailData._number}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Round: {detailData._round}<br/>
        </Typography>
        <Button size="small" style={{margin:'auto', marginTop:10, width:'100%', maxWidth:300}} variant="contained"
          onClick={async (event)=>{
            event.preventDefault();
            if(!detailData.hasOwnProperty("_pdf@aras.id"))
              return;
            let result = await get(`${API.DOWNLOAD}/${detailData["_pdf@aras.id"]}`);
            if(result && result.data.status == 200){
              const link = document.createElement('a');
              link.href = result.data.data;
              link.setAttribute('download',detailData["_pdf@aras.keyed_name"]);
              document.body.appendChild(link);
              link.click();
              link.parentNode?.removeChild(link);
              //window.open(result.data.data);
              //setItemList(result.data.data.value);
            }else{
             // setItemList([]);
            }
          }}>PFC Download</Button>  
      </CardContent>

      <video width={320} height={240} src='/video/process1.mp4' preload='none' controls>
      </video>
      <video width={320} height={240} src='/video/process2.mp4' preload='none' controls>
      </video>
      
    </Card>
  );
}

export default PfcDetail;
