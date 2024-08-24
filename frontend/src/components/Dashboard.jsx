import axios from "axios";
import PropTypes from "prop-types";
import NoDataIcon from "../assets/no-data.jpg";
import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
} from "@mui/material";

function Dashboard({ data, getData }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [id, setId] = useState();
  const handleDelete = (recipeId) => {
    axios
      .delete(`http://127.0.0.1:8000/api/recipes/${recipeId}/`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        alert(error);
      });
      setDialogOpen(false);
  };

  const recipeDataItems = data.map((recipe, key) => {
    return (
      <Card
        key={key}
        sx={{
          maxWidth: 345,
          m: 2,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          border: "1px solid #FFDEAD",
          backgroundColor: "#FFF5EE",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#FF6347",
              mb: 2,
            }}
          >
            {recipe.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            <strong>Cuisine:</strong> {recipe.cuisine}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            <strong>Instructions:</strong> {recipe.instructions}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            <strong>Difficulty:</strong> {recipe.difficulty}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Author:</strong> {recipe.author}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "right" }}>
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={() => {
              setDialogOpen(true);
              setId(recipe.id);
            }}
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: "10px",
              backgroundColor: "#FF6347",
              "&:hover": {
                backgroundColor: "#FF4500",
              },
            }}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    );
  });

  return (
    <div className="flex flex-wrap mt-6 ml-6">
      {recipeDataItems.length !== 0 ? (
        recipeDataItems
      ) : (
        <div className="flex flex-col justify-center items-center min-h-[700px] w-full text-center">
          <img
            src={NoDataIcon}
            alt="No recipes to display. Please create one"
            style={{
              width: "500px",
              height: "auto",
            }}
          />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            No recipes to display. Please create one.
          </Typography>
        </div>
      )}
      <Dialog
        sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 200 } }}
        maxWidth="xs"
        onClose={() => setDialogOpen(false)}
        open={dialogOpen}
      >
        <DialogTitle>Delete Recipe</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to delete this recipe?
          </Typography>
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button
              onClick={() => setDialogOpen(false)}
              sx={{
                color: "#D2042D",
                textTransform: "none",
                marginRight: "6px",
              }}
            >
              Cancel
            </Button>

            <Button
              onClick={() => handleDelete(id)}
              size="small"
              variant="contained"
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                backgroundColor: "#FF6347",
                "&:hover": {
                  backgroundColor: "#FF6347",
                },
              }}
            >
              Delete
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
Dashboard.propTypes = {
  data: PropTypes.array.isRequired,
  getData: PropTypes.func.isRequired,
};

export default Dashboard;
