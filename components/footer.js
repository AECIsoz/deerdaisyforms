class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        .footer-container {
            display: inline-flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            font-size: 0.8rem;
            padding: 10px;
            margin-top: 20px;
        }
        .footer-container p {
          color: black;
        }
        .icons {
            display: flex;
            justify-content: space-evenly;
            width: 30%;
        }
        .fab {
            font-size: 2.5rem;
        }
        .attributions p {
          font-size: 0.6rem;
          margin: 0;
        }

        /* styles for smaller screens ================================*/
        @media only screen and (max-width: 600px) {
          .footer-container {
            display: flex;
            flex-direction: column;
            margin-top: 0;
          }
          .footer-container p {
            font-size: 0.6rem;
          }
          .fab {
            font-size: 2rem;
            padding-bottom: 1rem;
          }
          .attributions a {
            font-size: 0.6rem;
          }
        }

        </style>
        <footer class="footer-container">
            <article>
              <p>The Deer & Daisy <br>
              Eliselundsvägen 2, 277 30  Kivik</p>
              <p>072-403 01 85</p>
              <p>info@deerdaisyinn.se</p>
              <p>&copy; 2022 Isoz Creative Web</p>
            </article>
            <article class="icons">
                <a target="_blank" href="https://www.facebook.com/deerdaisypub" title="facebook icon"><i class="fab fa-facebook"></i></a>
                <a target="_blank" href="https://www.instagram.com/deerdaisyinn" title="instagram icon"><i class="fab fa-instagram"></i></a>
            </article>
            <article class="attributions">
              <p>Attributions:</p>
              <p>Main pub photo by <a href="https://unsplash.com/@michaelcummins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael Cummins</a> on <a href="https://unsplash.com/@michaelcummins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </p>
              <p>Pub section photo by <a href="https://unsplash.com/@matteosteger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Matteo Steger</a> on <a href="https://unsplash.com/@matteosteger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </p>
              <p>Contact page photo by <a href="https://unsplash.com/@sixstreetunder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Craig Whitehead</a> on <a href"https://unsplash.com/collections/2737168/english-pub?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
              <p>Logo by <a href="https://www.helenaisoz.se/">Helena Isoz</a>
              <p>Deer icons created by <a href="https://www.flaticon.com/free-icons/deer" title="deer icons">Freepik - Flaticon</a></p>
              </p>
            </article>
        </footer>
      `;
  }
}

customElements.define("footer-component", Footer);
