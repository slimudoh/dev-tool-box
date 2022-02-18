import { TableType } from "../interfaces";

type Props = {
  tableData: TableType[];
};

const Table = ({ tableData }: Props) => (
  <section className="page__section">
    <div>
      <div className="page__container__table">
        <table>
          <thead>
            <tr>
              <th>Date Added</th>
              <th>Title</th>
              <th>Category</th>
              <th>Description</th>
              <th style={{ width: "50px" }}></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.dateAdded}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td style={{ width: "50px" }}>
                  <span>View</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default Table;
