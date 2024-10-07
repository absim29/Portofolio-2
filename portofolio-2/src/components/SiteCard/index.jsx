import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function SiteCard({ title, description, image, demoLink, githubLink }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={title} height="140" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          component="a"
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </Button>
        <Button
          size="small"
          component="a"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </Button>
      </CardActions>
    </Card>
  );
}

export default SiteCard;
