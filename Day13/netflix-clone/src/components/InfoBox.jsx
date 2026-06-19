function InfoBox({ title, content, image, flip }) {
  if (flip === 1) {
    return (
      <div className="info-box">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="info-box">
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
    );
  }
}

export default InfoBox;
