import CircularProgress from "@material-ui/core/CircularProgress";

export const Searching = () => {
  return (
    <div>
      <CircularProgress /> <h3> Searching ...</h3>
    </div>
  );
};

export const NoWordsFound = ({ word }) => {
  return (
    <p>
      No words found for <i>{word}</i>
    </p>
  );
};
