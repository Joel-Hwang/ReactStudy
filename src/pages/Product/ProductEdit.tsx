import React, { useState, useImperativeHandle } from 'react';
import {TextField,Button, Box, List, ListItem, Paper, ListItemAvatar, Avatar, ListItemText,Typography, Card, CardContent  } from '@mui/material';
import ImageFileInput from '../../components/ImageFileInput';
import {API,get, post,fileupload} from '../../Util';
import './ProductDetail.css';

interface ProductEditProp {
  itemId:string
}

interface EditRef {
  saveData: () => void;
}

const ProductEdit = React.forwardRef<EditRef, ProductEditProp>((props,ref) => {
  
  const [lateralView, setLateralView] = useState("/img/whiteblank.png");
  const [lateralFile, setLateralFile] = useState<File>();
  const [medialView, setMedialView] = useState("/img/whiteblank.png");
  const [medialFile, setMedialFile] = useState<File>();
  const [bottomView, setBottomView] = useState("/img/whiteblank.png");
  const [bottomFile, setBottomFile] = useState<File>();
  const [frontView, setFrontView] = useState("/img/whiteblank.png");
  const [frontFile, setFrontFile] = useState<File>();
  const [heelView, setHeelView] = useState("/img/whiteblank.png");
  const [heelFile, setHeelFile] = useState<File>();

  const [detailData,setDetailData] = useState<any>({_factory:""});
  React.useEffect(() => {
    async function fetchData() {
      // 비동기 작업 수행
      // 컴포넌트가 마운트된 후에 실행할 코드
      let result = await get(`${API.DETAIL}/Product/${props?.itemId}`);
      console.log(result);
    
      if(result && result.status == 200){
        setDetailData(result.data.data);
        setLateralView((await get(API.DOWNLOAD+"/"+result.data.data._lateral_view.replace('vault:///?fileId=',''))).data.data);
        setMedialView((await get(API.DOWNLOAD+"/"+result.data.data._medial_view.replace('vault:///?fileId=',''))).data.data);
        setBottomView((await get(API.DOWNLOAD+"/"+result.data.data._bottom_view.replace('vault:///?fileId=',''))).data.data);
        setFrontView((await get(API.DOWNLOAD+"/"+result.data.data._front_view.replace('vault:///?fileId=',''))).data.data);
        setHeelView((await get(API.DOWNLOAD+"/"+result.data.data._heel_view.replace('vault:///?fileId=',''))).data.data);

        /*setImages([{key:'_lateral_view', src:( }
        ,{key:'_medial_view', src:(await get(API.DOWNLOAD+"/"+result.data.data._medial_view.replace('vault:///?fileId=',''))).data.data }
        ,{key:'_bottom_view', src:(await get(API.DOWNLOAD+"/"+result.data.data._bottom_view.replace('vault:///?fileId=',''))).data.data }
        ,{key:'_heel_view', src:(await get(API.DOWNLOAD+"/"+result.data.data._heel_view.replace('vault:///?fileId=',''))).data.data }
        ,{key:'_front_view', src:(await get(API.DOWNLOAD+"/"+result.data.data._front_view.replace('vault:///?fileId=',''))).data.data }]);*/

      }else{
        //setItemList([]);
      }
    }
    fetchData();
  }, []);

  React.useImperativeHandle(ref, () => ({
    saveData: async () => {
      console.log('ProductEdit method called');
      let lateralFileId = await fileupload(lateralFile);
      let medialFileId = await fileupload(medialFile);
      let bottomFileId = await fileupload(bottomFile);
      let frontFileId = await fileupload(frontFile);
      let heelFileId = await fileupload(heelFile);
      let body:any = {};
      body.id = props?.itemId;
      if(lateralFileId != "") body._lateral_view = `vault:///?fileId=${lateralFileId}`;
      if(medialFileId != "") body._medial_view = `vault:///?fileId=${medialFileId}`;
      if(bottomFileId != "") body._bottom_view = `vault:///?fileId=${bottomFileId}`;
      if(frontFileId != "") body._front_view = `vault:///?fileId=${frontFileId}`;
      if(heelFileId != "") body._heel_view = `vault:///?fileId=${heelFileId}`;
      let result = await post(`${API.UPDATE}/Product`,body);
      if(result && result.status == 200){
       // setItemList(result.data.data.value);
      }else{
        //setItemList([]);
      }
    }
  }));

  const productArea = () => {
    return (
      <div>
        <Card sx={{ minWidth: 275, marginBottom: 2 }} variant='outlined'>
          <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Model information
            </Typography>
            <Typography variant="h6" component="div">
              Dev.Name: {detailData._dev_name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Dev.Sample Req Id: {detailData._dev_sample_req_id}<br/>
              Dev.Style Id: {detailData._dev_style_id}
            </Typography>
            <Typography variant="body2">
              Dev.Style Number: {detailData._dev_style_number} <br/>
              DPA: {detailData._dpa}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 275, marginBottom: 2 }} variant='outlined'>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Product Information
            </Typography>
            <Typography variant="h5" component="div">
              {detailData.keyed_name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Category: {detailData._category}<br/>
              CS Category: {detailData._cs_category_cd}
            </Typography>
            <Typography variant="body2">
              Col.Ver: {detailData._color_ver} <br/>
              Colorway: {detailData._dev_colorway_id}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 275, marginBottom: 2 }} variant='outlined'>
          <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Date Information
            </Typography>
            <Typography variant="body2">
              Confrimm Date: {detailData._bom_cfm_date} <br/>
              Load Date: {detailData._bom_load_date} <br/>
              Issue Date: {detailData._bom_issue_date}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }


  return (
    <div className='product'>

        {productArea()}
        
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center'}}>
        <ImageFileInput
            label={"Lateral View"} 
            width={220} 
            minWidth={100} 
            imageSrcProp={lateralView} 
            setImageSrc={setLateralView}
            setFile={setLateralFile}
        />
        <ImageFileInput
          label={"Medial View"} 
          width={220} 
          minWidth={100} 
          imageSrcProp={medialView} 
          setImageSrc={setMedialView}
          setFile={setMedialFile}
        />

        <ImageFileInput
          label={"Bottom View"} 
          width={220} 
          minWidth={100} 
          imageSrcProp={bottomView} 
          setImageSrc={setBottomView}
          setFile={setBottomFile}
        />

        <ImageFileInput
          label={"Front View"} 
          width={220} 
          minWidth={100} 
          imageSrcProp={frontView} 
          setImageSrc={setFrontView}
          setFile={setFrontFile}
        />

        <ImageFileInput
          label={"Heel View"} 
          width={220} 
          minWidth={100} 
          imageSrcProp={heelView} 
          setImageSrc={setHeelView}
          setFile={setHeelFile}
        />

        </div>
    </div>
  );
});

export default ProductEdit;
