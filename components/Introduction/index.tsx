import React from 'react';
import Link from 'next/link';

const Introduction = () => (
  <div className="introduction">
    <div className="introduction__head">
      <a href="#"> Zmooz</a>
      <span className="introduction__slash"> / </span>
      <a href="#"> Connect</a>
    </div>
    <hr />
    <div className="introduction__content">
      <div className="introduction__logo">
        <a href="#">
          <img
            alt=""
            className="introduction__name"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMzEyIiBoZWlnaHQ9IjI2LjQxOSIgdmlld0JveD0iMCAwIDE0MS4zMTIgMjYuNDE5Ij4KICAgIDxkZWZzPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgLmNscy0xe2ZpbGw6IzJjMmUzMztmaWxsLXJ1bGU6ZXZlbm9kZH0KICAgICAgICA8L3N0eWxlPgogICAgPC9kZWZzPgogICAgPHBhdGggaWQ9Inptb296IiBkPSJNMS44NzQgNS4yNzlhLjI0My4yNDMgMCAwIDEtLjI3NC0uMjcyVi44ODNhLjIzNy4yMzcgMCAwIDEgLjI3NC0uMjY0aDE3LjM0NWEuMjQ2LjI0NiAwIDAgMSAuMjIxLjEyNy4yNjIuMjYyIDAgMCAxIDAgLjI3Mkw3Ljg2IDIxLjJoOC43NjZhMS42MzEgMS42MzEgMCAwIDEgMS4xODIuNDg1IDEuNiAxLjYgMCAwIDEgLjQ4NCAxLjE3M3YyLjczYS4yNDIuMjQyIDAgMCAxLS4yNzEuMjcySC4yNzVhLjI0Ny4yNDcgMCAwIDEtLjIzOC0uMTM2LjI0Ny4yNDcgMCAwIDEgMC0uMjY0bDExLjYtMjAuMTc4em0yMS44OTUgMy4xODlBNy42NSA3LjY1IDAgMCAxIDI2LjYzNCAyLjIgMTAuNzExIDEwLjcxMSAwIDAgMSAzMy42MTYuMDI0IDEwLjcxNiAxMC43MTYgMCAwIDEgNDAuNiAyLjJxLjI5NC4yNDIuNTM2LjQ4NWMuMTc5LS4xNjIuMzU3LS4zMjQuNTUzLS40ODVBMTAuNjkgMTAuNjkgMCAwIDEgNDguNjc0LjAyNGExMC43NTEgMTAuNzUxIDAgMCAxIDYuOTkgMi4xNzYgNy42NSA3LjY1IDAgMCAxIDIuODY1IDYuMjY3djE3LjExN2EuMjQzLjI0MyAwIDAgMS0uMjcyLjI3MmgtMi43M2ExLjYgMS42IDAgMCAxLTEuMTc0LS40ODUgMS42NDQgMS42NDQgMCAwIDEtLjQ4NC0xLjE4MVY4LjQ2OGEzLjIzNyAzLjIzNyAwIDAgMC0xLjEzMS0yLjY2MSA2LjM3MyA2LjM3MyAwIDAgMC00LjA2NC0xLjEyMyA2LjMgNi4zIDAgMCAwLTQuMDU1IDEuMTIzIDMuMjI2IDMuMjI2IDAgMCAwLTEuMTQ5IDIuNjYxdjE3LjExNmMwIC4xNzktLjA4NS4yNzItLjI2My4yNzJoLTQuMTI0Yy0uMTcgMC0uMjU0LS4wOTMtLjI1NC0uMjcyVjguNDY4YTMuMjI2IDMuMjI2IDAgMCAwLTEuMTQ5LTIuNjYxIDYuMzQxIDYuMzQxIDAgMCAwLTQuMDY0LTEuMTIzIDYuMyA2LjMgMCAwIDAtNC4wNTYgMS4xMjMgMy4yNDMgMy4yNDMgMCAwIDAtMS4xNCAyLjY2MXYxNy4xMTZhLjIzOS4yMzkgMCAwIDEtLjI3Mi4yNzJoLTQuMTI0Yy0uMTcgMC0uMjU1LS4wOTMtLjI1NS0uMjcyVjguNDY4ek03Ni40NDUuMDI0YTEyLjcwNiAxMi43MDYgMCAwIDEgOS4zMjggMy44NjkgMTIuNzM1IDEyLjczNSAwIDAgMSAzLjg3NyA5LjM0NSAxMi43MzIgMTIuNzMyIDAgMCAxLTMuODc3IDkuMzQ1IDEzLjIxOSAxMy4yMTkgMCAwIDEtMTguNjczIDAgMTIuNzU2IDEyLjc1NiAwIDAgMS0zLjg2OS05LjM0NUExMi43NiAxMi43NiAwIDAgMSA2Ny4xIDMuODkzIDEyLjczMiAxMi43MzIgMCAwIDEgNzYuNDQ1LjAyNHptNi4wMzggNy4xNmE4LjU2MSA4LjU2MSAwIDAgMC0xMi4wOTIgMCA4LjI2MyA4LjI2MyAwIDAgMC0yLjUwOCA2LjA1NCA4LjI3NCA4LjI3NCAwIDAgMCAyLjUwOCA2LjA0NiA4LjU2MSA4LjU2MSAwIDAgMCAxMi4wOTIgMCA4LjI0IDguMjQgMCAwIDAgMi41MDgtNi4wNDYgOC4yMzEgOC4yMzEgMCAwIDAtMi41MDgtNi4wNTR6TTEwNS45NS4wMjRhMTIuNzA1IDEyLjcwNSAwIDAgMSA5LjMyOCAzLjg2OSAxMi43MzIgMTIuNzMyIDAgMCAxIDMuODc4IDkuMzQ1IDEyLjczIDEyLjczIDAgMCAxLTMuODc4IDkuMzQ1IDEzLjIxOSAxMy4yMTkgMCAwIDEtMTguNjczIDAgMTIuNzU3IDEyLjc1NyAwIDAgMS0zLjg2OS05LjM0NSAxMi43NiAxMi43NiAwIDAgMSAzLjg2OS05LjM0NUExMi43MzMgMTIuNzMzIDAgMCAxIDEwNS45NS4wMjR6bTYuMDM4IDcuMTZhOC41NjEgOC41NjEgMCAwIDAtMTIuMDkyIDAgOC4yNjMgOC4yNjMgMCAwIDAtMi41MDggNi4wNTQgOC4yNzMgOC4yNzMgMCAwIDAgMi41MTIgNi4wNDYgOC41NjEgOC41NjEgMCAwIDAgMTIuMDkyIDAgOC4yNCA4LjI0IDAgMCAwIDIuNTA4LTYuMDQ2IDguMjMxIDguMjMxIDAgMCAwLTIuNTA4LTYuMDU0em0xMS43MTgtMS45YS4yNDMuMjQzIDAgMCAxLS4yNzItLjI3MlYuODgzYS4yMzcuMjM3IDAgMCAxIC4yNzItLjI2NGgxNy4zNDVhLjI0Ni4yNDYgMCAwIDEgLjIyMS4xMjcuMjYyLjI2MiAwIDAgMSAwIC4yNzJMMTI5LjY5MSAyMS4yaDguNzY3YTEuNjMxIDEuNjMxIDAgMCAxIDEuMTgyLjQ4NSAxLjYgMS42IDAgMCAxIC40ODQgMS4xNzN2Mi43M2EuMjQyLjI0MiAwIDAgMS0uMjcxLjI3MmgtMTcuNzQ2YS4yNjguMjY4IDAgMCAxLS4yMzgtLjRsMTEuNi0yMC4xNzh6IiBjbGFzcz0iY2xzLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC4wMDEgLS4wMjQpIi8+Cjwvc3ZnPgo="
          />
        </a>
        <a href="#">
          <img
            alt=""
            className="introduction__img"
            src="data:image/png;base64,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"
          />
        </a>
      </div>
    </div>
    <div className="introduction__details">
      <div className="introduction__details__title">
        <h4>Welcome to Zmoooz</h4>
        <p>Download our app to create, watch and share great stories !</p>
      </div>
      <div className="introduction__details__imgstore">
        <a href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png"
            alt=""
          />
        </a>
        <a href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png"
            alt=""
          />
        </a>
      </div>
      <div className="introduction__details__text">
        <p>At Zmooz, there is no limits for stories creators:</p>
        <ul>
          <li>Create unlimited stories very easily</li>
          <li>Videos can be as long as you wish</li>
          <li>Your stories last forever (and not one day …)</li>
          <li>Embed stories on your website !</li>
        </ul>
        <h4 style={{ color: '#ff471e' }}>
          Profressional publisher or advertiser?
        </h4>
        <p>
          Contact us to learn how to generate new vevenues with your stories !
        </p>
        <h4>Try and enjoy it now !</h4>
        <h4>
          <i>
            <b>- The Zmooz Team</b>
          </i>
        </h4>
      </div>
    </div>
    <style jsx>
      {`
        .introduction {
          width: 26.8%;
          height: 100%;
          position: fixed;
          font-size: 16px;
          font-family: arial;
        }
        .introduction__head {
          font-size: 18px;
          padding-left: 15px;
          color: #878da3;
        }
        .introduction__head a {
          text-decoration: none;
          color: #3f476b;
          font-size: 15px;
          font-family: arial;
        }
        .introduction__head a:hover {
          text-decoration: underline;
        }
        .introduction__content {
          padding-top: 10%;
        }
        .introduction__content .introduction__logo {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .introduction__content .introduction__logo a {
          padding-top: 20px;
        }
        .introduction__content .introduction__name {
          width: 185px;
          height: 35px;
        }
        .introduction__content .introduction__img {
          width: 110px;
          height: 64px;
        }
        .introduction__details {
          padding-top: 10%;
          display: flex;
          flex-direction: column;
          padding-left: 70px;
        }
        .introduction__details__title {
          width: 85%;
        }
        .introduction__details__title h4 {
          padding-bottom: 10px;
        }
        .introduction__details img {
          width: 140px;
          height: 45px;
        }
        .introduction__details__imgstore {
          width: 75%;
          padding-top: 10px;
        }
        .introduction__details__imgstore a {
          padding-left: 20px;
        }
        .introduction__details__text {
          width: 85%;
          display: flex;

          flex-direction: column;
          padding-top: 30px;
        }
        .introduction__details__text ul {
          list-style: none;
          padding: 19px;
        }
        .introduction__details__text ul li {
          line-height: 1;
        }
        .introduction__details__text ul li::before {
          content: '•';
          color: #ff471e;
          display: inline-block;
          font-size: 20px;
          width: 1em;
          margin-left: -1em;
        }
      `}
    </style>
  </div>
);

export default Introduction;
