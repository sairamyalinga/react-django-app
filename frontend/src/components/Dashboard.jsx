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

return (
    <div>
        <h1>Recipes</h1>
    </div>
);
}

export default Dashboard;
