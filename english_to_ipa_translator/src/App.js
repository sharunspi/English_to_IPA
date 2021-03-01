import logo from './logo.svg';
import './App.css';
// import db from './db/DB'
import {getIPAData} from './API/index'
import {useEffect,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Input from '@material-ui/core/Input';
import AlarmIcon from '@material-ui/icons/';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function App() {
  const classes = useStyles();
  const [ipaValue,setIPAValue] = useState('')
  useEffect(()=>{
    getIPAData("gagner").then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },[])
  const inputValue = (value)=>{
    console.log(value)
      setTimeout(()=>{
        getIPAData(value).then(res=>{
          setIPAValue(res.data.response)
        }).catch(err=>{
          console.log(err)
        })
      },2000)
  }
  return (
<div>
<AppBar position="static">
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        English to IPA translator
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
  <Input  onChange={e=>{
    inputValue(e.target.value)
  }}/>
  <h3> {ipaValue}</h3>
</div>
  );
}

export default App;
