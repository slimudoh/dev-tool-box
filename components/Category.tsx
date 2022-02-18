import { CategoryType } from "../interfaces";

type Props = {
  category: CategoryType[];
};

const Category = ({ category }: Props) => (
  <section className="page__section page__container_cards">
    <div>
      {category.map((item, index) => (
        <div key={index} className="page__container_cards_item">
          <h4>{item.name}</h4>
          <p>{item.total}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Category;
