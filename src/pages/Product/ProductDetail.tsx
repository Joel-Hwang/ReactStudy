import React, { useState } from 'react';
import {ImageList,ImageListItem,Typography, Card, CardContent  } from '@mui/material';
import {API,get} from '../../Util';
import './ProductDetail.css';

interface ProductDetailProp {
  itemId:string
}

interface imageType{
  key:string;
  src:string;
}

const ProductDetail:React.FC<ProductDetailProp> = ({itemId}) => {
  
  const [detailData,setDetailData] = useState<any>({_factory:""});
  const [images,setImages] = useState<Array<imageType>>([]);
  React.useEffect(() => {
    async function fetchData() {
      // 비동기 작업 수행
      // 컴포넌트가 마운트된 후에 실행할 코드
      let result = await get(`${API.DETAIL}/Product/${itemId}`);
    
      if(result && result.status == 200){
        setDetailData(result.data.data);
        setImages([{key:'_lateral_view', src:(await get(API.DOWNLOAD+"/"+result.data.data._lateral_view.replace('vault:///?fileId=',''))).data.data }
        ,{key:'_medial_view', src:(await get(API.DOWNLOAD+"/"+result.data.data._medial_view.replace('vault:///?fileId=',''))).data.data }
        ,{key:'_bottom_view', src:(await get(API.DOWNLOAD+"/"+result.data.data._bottom_view.replace('vault:///?fileId=',''))).data.data }
        ,{key:'_heel_view', src:(await get(API.DOWNLOAD+"/"+result.data.data._heel_view.replace('vault:///?fileId=',''))).data.data }
        ,{key:'_front_view', src:(await get(API.DOWNLOAD+"/"+result.data.data._front_view.replace('vault:///?fileId=',''))).data.data }]);
        //setItemList(result.data.data.value);
      }else{
        //setItemList([]);
      }
    }
    fetchData();
  }, []);

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

        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center'}}>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {images.map((item) => (
            <ImageListItem key={item.key}>
              <img
                src={`${item.src}`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>

        </div>
      </div>
    );
  }


  return (
    <div className='product'>

        {productArea()}
        
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center'}}>
        

        </div>
    </div>
  );
}

export default ProductDetail;
