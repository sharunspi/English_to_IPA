import * as React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import { NoWordsFound } from "./Notification";

export default function ResultBox({ result, englishWord }) {
  return (
    <Card sx={{ width: 275 }}>
      <CardHeader title={"Result"} />
      <CardContent>
        <Typography variant="h5" component="div">
          {result ?? <NoWordsFound word={englishWord} />}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
