import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import { Container, Grid } from "@material-ui/core";
import { getIPAData } from "../API/index";
import { useState } from "react";
import { Searching, NoWordsFound } from "../Components/Notification";
import { makeStyles } from "@material-ui/core/styles";
import ResultBox from "../Components/ResultBox";

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

const Index = () => {
  const classes = useStyles();
  const [ipaValue, setIPAValue] = useState("");
  const [englishWord, setEnglishWord] = useState("");
  const [searchStatus, setSearchStatus] = useState(false);

  const inputValue = () => {
    setIPAValue("");

    setSearchStatus(true);
    getIPAData(englishWord)
      .then((res) => {
        if (res.data.status) {
          setIPAValue(res.data.response);
          setSearchStatus(false);
        } else {
          setSearchStatus(false);
        }
      })
      .catch((err) => {
        console.log(err);

        setSearchStatus(false);
      });
  };

  return (
    <div
      style={{
        padding: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "2%",
        }}
      >
        <Input
          placeholder="English word"
          label="English word"
          id="standard-start-adornment"
          onChange={(e) => {
            setEnglishWord(e.target.value);
            if (e.target.value) {
              setIPAValue("");
            }
          }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
          onClick={() => {
            inputValue();
          }}
          onSubmit={inputValue}
        >
          <SearchIcon />
        </IconButton>
      </div>
      <div>
        {searchStatus && <Searching />}
        {ipaValue && <ResultBox result={ipaValue} englishWord={englishWord} />}
      </div>
    </div>
  );
};

export default Index;
