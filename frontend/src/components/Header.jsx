import RestaurantMenuFilledIcon from "@mui/icons-material/RestaurantMenuOutlined";

function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full bg-white shadow-md dark:bg-gray-800">
      <div className="flex flex-grow items-center justify-between px-6 py-4 bg-gradient-to-r from-pink-500 to-orange-300">
        <div className="flex flex-grow items-center px-6 py-4">
          <RestaurantMenuFilledIcon />
          <div className="text-white font-bold text-lg ml-2">Recipes</div>
        </div>
        <button className="bg-white text-pink-500 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-200">
          Create Recipe
        </button>
      </div>
    </header>
  );
}

export default Header;
