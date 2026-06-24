const Home=({isLoggedIn})=> {
  return (
    <div className="flex justify-center items-center 
    text-white text-3xl h-full">
      {isLoggedIn ? "Welcome Back!" : "Home"}
    </div>
  );
}

export default Home;
