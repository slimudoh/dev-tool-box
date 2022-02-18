// import { CategoryType } from "../interfaces";

// type Props = {
//   category: CategoryType[];
// };

const Pagination = () => (
  <section className="page__section">
    <div>
      <div className="page__section_paginate">
        <div className="page__section_paginate_total">
          <span>10</span> of <span> 100</span>
        </div>
        <div className="page__section_paginate_pages">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="iconify iconify--ic"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z"
              ></path>
            </svg>
          </div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="iconify iconify--ic"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6l-6-6z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Pagination;
