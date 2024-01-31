import intro from "./images/intro/intro.jpg"
function Intro() {
  return (
    
      <div className="introduction-section">
        <div className="image-container">
          {/* Replace 'your-image.jpg' with the path to your image */}
          <img src={intro} alt="Introduction" />
        </div>
        <div className="text-container">
          <div>
          <h2>Welcome to Spacex Interior</h2>
          <p>where we bring innovative design
            solutions to life. With a passion for
            transforming spaces, we create
            environments that inspire creativity
            and collaboration.
          </p>
          </div>
        </div>
      </div>
  );
}

export default Intro;