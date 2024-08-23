import RestaurantMenuFilledIcon from "@mui/icons-material/RestaurantMenuOutlined";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
 const [formOpen, setFormOpen] = useState(false);
 const [title, setTitle] = useState("")
 const [cuisine, setCuisine] = useState("")
 const [instructions, setInstructions] = useState("")
 const [difficulty, setDifficulty] = useState(1)
 const [author, setAuthor] = useState("")
  return (
    <header className="sticky top-0 z-50 flex w-full bg-white shadow-md dark:bg-gray-800">
      <div className="flex flex-grow items-center justify-between px-6 py-4 bg-gradient-to-r from-pink-500 to-orange-300">
        <div className="flex flex-grow items-center px-6 py-4">
          <RestaurantMenuFilledIcon />
          <div className="text-white font-bold text-lg ml-2" >Recipes</div>
        </div>
        <button className="bg-white text-pink-500 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-200" onClick={()=>{setFormOpen(true)}}>
          Create Recipe
        </button>
      </div>
    
     <Dialog
     sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
     maxWidth="xs"
     onClose={()=> setFormOpen(false)}
     open={formOpen}
   >
    <DialogTitle>Create Recipe</DialogTitle>
    <DialogContent>
        <div className="pt-2">
            <label>Title</label>
            <input
             type="text"
             className="w-full rounded border border-stroke py-3 px-4.5 pl-3 mt-2 mb-2 text-black hover:border-orange-500 focus:border-orange-500 active:border-orange-600 focus-visible:outline-none"
             placeholder="Enter the name of dish"
             onChange={(e)=>{setTitle(e.target.value)}}

            />
        </div>
        <div className="pt-2">
            <label>Cuisine</label>
            <input
             type="text"
             className="w-full rounded border border-stroke py-3 px-4.5 pl-3 mt-2 mb-2 text-black hover:border-orange-500 focus:border-orange-500 active:border-orange-600 focus-visible:outline-none"
             placeholder="Enter Cuisine"
             onChange={(e)=>{setCuisine(e.target.value)}}

            />
        </div>
        <div className="pt-2">
            <label>Instructions</label>
            <input
             type="text"
             className="w-full rounded border border-stroke py-3 px-4.5 pl-3 mt-2 mb-2 text-black hover:border-orange-500 focus:border-orange-500 active:border-orange-600 focus-visible:outline-none"
             placeholder="Instructions to cook"
             onChange={(e)=>{setInstructions(e.target.value)}}

            />
        </div>
        <div className="pt-2">
            <label>Difficulty</label>
            <input
             type="number"
             className="w-full rounded border border-stroke py-3 px-4.5 pl-3 mt-2 mb-2 text-black hover:border-orange-500 focus:border-orange-500 active:border-orange-600 focus-visible:outline-none"
             placeholder="Difficulty level on scale of 5"
             onChange={(e)=>{setDifficulty(e.target.value)}}

            />
        </div>
        <div className="pt-2">
            <label>Author</label>
            <input
             type="text"
             className="w-full rounded border border-stroke py-3 px-4.5 pl-3 mt-2 mb-2 text-black hover:border-orange-500 focus:border-orange-500 active:border-orange-600 focus-visible:outline-none "
             placeholder="Author"
             onChange={(e)=>{setAuthor(e.target.value)}}

            />
        </div>
    </DialogContent>
    <DialogActions>
          <button
            className="inline-flex items-center w-max justify-center gap-2.5 rounded right bg-red-600 py-2 px-2 text-center font-small text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            onClick={() =>{setFormOpen(false)}}
          >
            Cancel
          </button>
          <button
            className="inline-flex items-center w-max justify-center gap-2.5 rounded right bg-red-600 py-2 px-2 text-center font-small text-white hover:bg-opacity-90 lg:px-8 xl:px-10" 
            onClick={()=>{handleCreate()}}
          >
            Save
          </button>
        </DialogActions>

   </Dialog>
 </header>
  );
}

export default Header;
