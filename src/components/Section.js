const Section = ({ categoryName, images }) => {
  return (
    <section className="category">
      <h2 className="name-section">{categoryName}</h2>
      <div className="movies-list">
        {images.map((image, index) => {
          return (
            <div key={index}>
              <img alt="thumbnail movie" src={image} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section;
