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
import { Container,Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
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
  const [searchStatus,setSearchStatus] = useState(false)
  useEffect(()=>{
    getIPAData("gagner").then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },[])
  const inputValue = ()=>{
    setSearchStatus(true)
        getIPAData(englishWord).then(res=>{
          setIPAValue(res.data.response)
          setSearchStatus(false)
        }).catch(err=>{
          console.log(err)    
           
          setSearchStatus(false)
        })
  }
  const searching = ()=>{
    return <div>
      <CircularProgress /> <h3> Searching ...</h3>
    </div>
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
<Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
>
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
  <h3> { searchStatus &&   searching() }</h3>
  <Typography variant="h3" gutterBottom>
        {ipaValue}
      </Typography>
  </Grid> 

      </Container> 

    
</div>
  );
}

export default App;
