import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryItem title={title} key={id} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
