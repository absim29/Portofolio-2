import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box } from "@mui/material";

function SiteCard({ title, description, image, demoLink, githubLink, tags }) {
  return (
    <Card sx={{ maxWidth: 345 }} className="site-card d-flex flex-column">
      <Box sx={{ position: "relative", height: "50%", overflow: "hidden" }}>
        <CardMedia component="img" alt={title} height="auto" image={image} />
        <Box className="overlay" /> {/* Apply the overlay class */}
      </Box>
      <div className="d-flex flex-column justify-content-between h-100">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", marginTop: 1 }}>
            {tags.map((tag, index) => (
              <Box
                key={index}
                sx={{
                  padding: "4px 8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "0.75rem",
                  backgroundColor: "rgba(210, 105, 30, 0.8)",
                  color: "white",
                }}
              >
                {tag}
              </Box>
            ))}
          </Box>
        </CardContent>

        <CardActions className="d-flex justify-content-center mb-2">
          <Button
            className="my-button"
            size="small"
            component="a"
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
            <LaunchIcon fontSize="small" style={{ marginLeft: 3 }} />
          </Button>
          <Button
            className="my-button"
            size="small"
            component="a"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize="small" style={{ marginRight: 4 }} />
            GitHub Repo
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default SiteCard;
