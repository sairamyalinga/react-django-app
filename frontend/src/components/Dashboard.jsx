import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';

function Dashboard() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/recipes/")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error.message || "Something went wrong");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
}

if (error) {
    return <p>Error: {error}</p>;
}

const recipeDataItems = data.map((recipe, key) => {
    
    return (
        <Card key={key} sx={{ maxWidth: 345 }}>
            <h1>{recipe.title}</h1>
            <CardContent>
                <Typography variant="h5" component="div">
                    {recipe.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Cuisine:</strong> {recipe.cuisine}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Instructions:</strong> {recipe.instructions}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Difficulty:</strong> {recipe.difficulty}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Author:</strong> {recipe.author}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Delete</Button>
            </CardActions>
        </Card>
    );
});

return (
    <div>
        <h1>Recipes</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {recipeDataItems}
        </div>
    </div>
);
}

export default Dashboard;
