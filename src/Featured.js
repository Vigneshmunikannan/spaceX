import img1 from "./images/featured section/1.jpg"
import img2 from "./images/featured section/2.jpg"
import img3 from "./images/featured section/3.jpg"

function Featured() {
  return (
    <div>
      <h2 className="feature-box-header">Featured Projects</h2>
      <div className="feature-box-container">
      <div className="feature-box">
        <img src={img1} alt="Feature 1" />
        <h3>Modern Corporate Office</h3>
        <p>Step into the future with our design
          for this cutting-edge corporate
          office. This project seamlessly
          integrates modern aesthetics with
          functionality, creating an
          environment that promotes
          innovation and productivity.</p>
      </div>
      <div className="feature-box">
        <img src={img2} alt="Feature 2" />
        <h3>Collaborative Workspace</h3>
        <p>
          Immerse yourself in our design for
          this collaborative workspace,
          meticulously crafted to foster
          creativity and teamwork. From
          flexible seating arrangements to
          vibrant decor, every detail
          contributes to an environment that
          encourages collaboration and
          innovation.
        </p>
      </div>
      <div className="feature-box">
        <img src={img3} alt="Feature 3" />
        <h3>Sustainable Office Transformation</h3>
        <p>Explore our sustainable design
          approach with this project that
          transforms a conventional office into
          an eco friendly haven. From energyefficient lighting to recycled
          materials, this office space reflects
          our commitment to sustainable and
          environmentally conscious design</p>
      </div>
      </div>
    </div>
  );
}

export default Featured;