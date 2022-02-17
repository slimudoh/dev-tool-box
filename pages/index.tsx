import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dev Tool box</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="page__container">
        <section className="page__container_header">
          <h1>Dev Toolbox</h1>
        </section>

        <section className="page__section page__container_cards">
          <div>
            <div className="page__container_cards_item">
              <h4>React</h4>
              <p>53</p>
            </div>
          </div>
        </section>

        <section className="page__section page__container_nav">
          <div>
            <div className="page__container_nav_list">
              <span>All</span>
              <span>React</span>
            </div>
            <div className="page__container_nav_display">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--gg"
                  width="32"
                  height="32"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 4h4v4H4V4Zm0 6h4v4H4v-4Zm4 6H4v4h4v-4Zm2-12h4v4h-4V4Zm4 6h-4v4h4v-4Zm-4 6h4v4h-4v-4ZM20 4h-4v4h4V4Zm-4 6h4v4h-4v-4Zm4 6h-4v4h4v-4Z"
                  ></path>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--ic"
                  width="32"
                  height="32"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="page__section page__container__search">
          <div>
            <form>
              <div className="page__container__search__box">
                <input type="text" />
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--ri"
                    width="20"
                    height="20"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7c-3.868 0-7 3.132-7 7c0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </section>
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
                  <tr>
                    <td>2nd of June 2020</td>
                    <td>Icons</td>
                    <td>React</td>
                    <td>testing</td>
                    <td style={{ width: "50px" }}>
                      <span>View</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="page__section">
          <div>
            <div className="page__container__card">
              <div>
                <p>2nd of June 2020</p>
                <h4>React</h4>
                <div>testing</div>
                <span>View</span>
              </div>
            </div>
          </div>
        </section>

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
                    class="iconify iconify--ic"
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
                    class="iconify iconify--ic"
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
      </main>
    </div>
  );
};

export default Home;
