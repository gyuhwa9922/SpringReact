import { Typography } from '@mui/material';
import React from 'react';

function Copyright(props) {
  return (
     <Typography variant='body2' color ='textSecondery' align='center'>
      <img src="https://mblogthumb-phinf.pstatic.net/MjAyMDAzMzBfMTg5/MDAxNTg1NTc3MTk5Mjgw.fRCC4ALgwWdbTgQrM_ID4w93hrAAwoVXOhd1rSgxSJgg.BmfL8uIO49Hs4eFTQnc0ydzFf0MjS5FieqsXtKIzrswg.GIF.pikiro/IMG_2090.GIF?type=w800"/><br/>
        {"Copyright ©"}
        &nbsp; LGH 1999.02.02 &nbsp;
        {new Date().getFullYear()}
      </Typography> 
  );
}

export default Copyright;