import logo from './logo.svg';
import './App.css';
// import db from './db/DB'
import {getIPAData} from './API/index'
import {useEffect,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Input from '@material-ui/core/Input';
import { Container } from '@material-ui/core';
// import AlarmIcon from '@material-ui/icons/';
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
  const [englishWord,setEnglishWord] = useState('')

  useEffect(()=>{
    getIPAData("gagner").then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },[])
  const inputValue = ()=>{
        getIPAData(englishWord).then(res=>{
          setIPAValue(res.data.response)
        }).catch(err=>{
          console.log(err)
        })
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
    <Container>
    <Input 
    placeholder="English word"
         label="English word"
         id="standard-start-adornment"
    onChange={e=>{
    setEnglishWord(e.target.value)
  }}/>
    <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={()=>{
      inputValue()
    }}>
        <SearchIcon />
      </IconButton>
  <h3> {ipaValue}</h3>
      </Container>
</div>
  );
}

export default App;
