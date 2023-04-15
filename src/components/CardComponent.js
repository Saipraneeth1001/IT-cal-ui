import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { minHeight } from '@mui/system';


export default function BasicCard({props}) {

    const navigate = useNavigate();

    const handleClick= (route) => {
        navigate(route);
    }

  return (
    <Card sx={{ minWidth: 350, minHeight:200 }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="body2">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleClick(props.route)}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
