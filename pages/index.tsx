import React, { useState } from "react";

import type { NextPage } from "next";
import Head from "next/head";

import Category from "../components/Category";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import Block from "../components/Block";

const Home: NextPage = () => {
  const [view, setView] = useState("table");
  const [navItem, setNavItem] = useState("all");

  let category = [
    {
      name: "React",
      total: 34,
    },
    {
      name: "Vue",
      total: 34,
    },
    {
      name: "Angular",
      total: 34,
    },
    {
      name: "Nodejs",
      total: 34,
    },
  ];

  let tableData = [
    {
      id: 1,
      dateAdded: "2nd of June 2020",
      name: "Icons",
      category: "React",
      description: "testing",
    },
    {
      id: 2,
      dateAdded: "2nd of June 2020",
      name: "Icons",
      category: "React",
      description: "testing",
    },
    {
      id: 3,
      dateAdded: "2nd of June 2020",
      name: "Icons",
      category: "React",
      description: "testing",
    },
  ];

  let navList = ["React", "Vue", "Node"];

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

        <Category category={category} />

        <section className="page__section page__container_nav">
          <div>
            <div className="page__container_nav_list">
              <span
                style={
                  navItem === "all" ? { borderBottom: "5px solid #208aae" } : {}
                }
                onClick={() => setNavItem("all")}
              >
                All
              </span>
              {navList.map((item, index) => (
                <span
                  key={index}
                  style={
                    navItem === item
                      ? { borderBottom: "5px solid #208aae" }
                      : {}
                  }
                  onClick={() => setNavItem(item)}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="page__container_nav_display">
              <div
                onClick={() => setView("table")}
                style={
                  view === "table"
                    ? { backgroundColor: "rgba(0, 0, 0, 0.08)" }
                    : {}
                }
              >
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
                    d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                  ></path>
                </svg>
              </div>
              <div
                onClick={() => setView("block")}
                style={
                  view === "block"
                    ? { backgroundColor: "rgba(0, 0, 0, 0.08)" }
                    : {}
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--gg"
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
                    className="iconify iconify--ri"
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

        {view === "table" ? (
          <Table tableData={tableData} />
        ) : (
          <Block blockData={tableData} />
        )}

        <Pagination />
      </main>
    </div>
  );
};

export default Home;
