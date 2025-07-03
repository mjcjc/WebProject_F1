import './Billboard.css';
const Billboard = () => {
  return (
    <div className="billboard-container">
      <div className="billboard-title">
        <h1>Akito Dangganga</h1>
      </div>
      <div className="billboard-content">
        <div className="billboard-content-item">
          <h1>Billboard</h1>
        </div>
        <div className="billboard-content-item">
          <img src='../../src/assets/gallery/random1000/image_0010_2550x1200.png' alt='portfolio-10' className='billboard-image' />
        </div>
        <div className="billboard-content-item">
          <h1>Billboard</h1>
        </div>
      </div>
      <div className="billboard-info">
        <p>아래로 스크롤해서 계속</p>
      </div>
    </div>
  );
};

export default Billboard;