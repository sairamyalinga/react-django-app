/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import RestaurantMenuFilledIcon from "@mui/icons-material/RestaurantMenuOutlined";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

function Header({ data, getData }) {
  const [formOpen, setFormOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [instructions, setInstructions] = useState("");
  const [difficulty, setDifficulty] = useState(0);
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(false);

  const handleCreate = () => {
    if (!title || !cuisine || !instructions || !author) {
      setError(true);
      return;
    }
    const newRecipe = {
      title: title,
      cuisine: cuisine,
      instructions: instructions,
      difficulty: difficulty,
      author: author,
    };
    axios
      .post("http://127.0.0.1:8000/api/recipes/", newRecipe)
      .then(() => {
        getData();
      })
      .catch((error) => alert("Error:", error));
    setFormOpen(false);
    setError(false);
  };

  return (
    <header className="sticky top-0 z-50 flex w-full bg-white shadow-md dark:bg-gray-800">
      <div className="flex flex-grow items-center justify-between px-6 py-4 bg-gradient-to-r from-pink-500 to-orange-300">
        <div className="flex flex-grow items-center px-6 py-4">
          <RestaurantMenuFilledIcon />
          <div className="text-white font-bold text-lg ml-2">Recipes</div>
        </div>
        <button
          className="bg-white text-pink-500 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-200"
          onClick={() => {
            setFormOpen(true);
          }}
        >
          Create Recipe
        </button>
      </div>

      <Dialog
        sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 700 } }}
        maxWidth="xs"
        onClose={() => setFormOpen(false)}
        open={formOpen}
      >
        <DialogTitle>Create Recipe</DialogTitle>
        <DialogContent>
          {error && (
            <p className="text-red-500 mb-4">
              Please fill in all required fields.
            </p>
          )}
          <div>
            <div className="pt-2">
              <label>Title</label>
              <input
                type="text"
                required
                className={`w-full rounded border ${
                  error && !title ? "border-red-500" : "border-stroke"
                }  py-3 px-4 pl-3 mt-2 mb-2 text-black hover:border-orange-500 focus:border-orange-500 active:border-orange-600 focus-visible:outline-none`}
                placeholder="Enter the name of dish"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="pt-2">
              <label>Cuisine</label>
              <input
                type="text"
                required
                className={`w-full rounded border ${
                  error && !cuisine ? "border-red-500" : "border-stroke"
                }  py-3 px-4 pl-3 mt-2 mb-2 text-black hover:border-orange-500 focus:border-orange-500 active:border-orange-600 focus-visible:outline-none`}
                placeholder="Enter Cuisine"
                onChange={(e) => {
                  setCuisine(e.target.value);
                }}
              />
            </div>
            <div className="pt-2">
              <label>Instructions</label>
              <input
                type="text"
                required
                className={`w-full rounded border ${
                  error && !instructions ? "border-red-500" : "border-stroke"
                }  py-3 px-4 pl-3 mt-2 mb-2 text-black hover:border-orange-500 focus:border-orange-500 active:border-orange-600 focus-visible:outline-none`}
                placeholder="Instructions to cook"
                onChange={(e) => {
                  setInstructions(e.target.value);
                }}
              />
            </div>
            <div className="pt-2">
              <label>Difficulty</label>
              <input
                type="number"
                className="w-full rounded border border-stroke py-3 px-4 pl-3 mt-2 mb-2 text-black hover:border-orange-500 focus:border-orange-500 active:border-orange-600 focus-visible:outline-none"
                placeholder="Difficulty level on scale of 5"
                value={difficulty}
                onChange={(e) => {
                  const max = 5;
                  let newValue = parseInt(e.target.value, 10);
                  newValue = newValue > max ? max : newValue;
                  setDifficulty(newValue);
                }}
              />
            </div>
            <div className="pt-2">
              <label>Author</label>
              <input
                type="text"
                required
                className={`w-full rounded border ${
                  error && !author ? "border-red-500" : "border-stroke"
                }  py-3 px-4 pl-3 mt-2 mb-2 text-black hover:border-orange-500 focus:border-orange-500 active:border-orange-600 focus-visible:outline-none`}
                placeholder="Author"
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button
            className="inline-flex items-center w-max justify-center gap-2.5 rounded right py-2 px-2 text-center text-red-500 font-small hover:bg-opacity-90 lg:px-3 xl:px-4"
            onClick={() => {
              setFormOpen(false);
              setError(false);
            }}
          >
            Cancel
          </button>
          <button
            className="inline-flex items-center w-max justify-center bg-orange-600 text-white font-semibold py-2 px-4 mr-4 rounded-lg transition duration-200"
            onClick={() => {
              handleCreate();
            }}
          >
            Save
          </button>
        </DialogActions>
      </Dialog>
    </header>
  );
}

Header.propTypes = {
  data: PropTypes.array.isRequired,
  getData: PropTypes.func.isRequired,
};

export default Header;
