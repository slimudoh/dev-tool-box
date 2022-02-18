import { TableType } from "../interfaces";

type Props = {
  blockData: TableType[];
};

const Block = ({ blockData }: Props) => (
  <section className="page__section">
    <div>
      <div className="page__container__card">
        {blockData.map((item, index) => (
          <div key={index}>
            <p>{item.dateAdded}</p>
            <h4>{item.name}</h4>
            <h6>{item.category}</h6>
            <div>{item.description}</div>
            <span>View</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Block;
