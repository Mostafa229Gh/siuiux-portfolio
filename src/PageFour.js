import "./PageFour.css";
import deskImg from "./asset/contact.png";
import arrow from "./asset/arrow.png";

export default function PageFour() {
  return (
    <div className="containerFour">
      <div className="contactMeText">
        <p>Contact Me</p>
        <div>
          <div className="contactMeSocials">
            <a href="https://www.instagram.com/Siuiux" className="instagram" target="_blank" rel="noopener noreferrer" >
              <svg
                width="6.94vw"
                height="6.94vw"
                viewBox="0 0 100 100"
                fill="#767676"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_438_1889)">
                  <path
                    d="M49.9997 8.33334C61.3205 8.33334 62.733 8.37501 67.1747 8.58334C71.6122 8.79168 74.633 9.48751 77.2913 10.5208C80.0413 11.5792 82.358 13.0125 84.6747 15.325C86.7934 17.4079 88.4328 19.9275 89.4788 22.7083C90.508 25.3625 91.208 28.3875 91.4163 32.825C91.6122 37.2667 91.6663 38.6792 91.6663 50C91.6663 61.3208 91.6247 62.7333 91.4163 67.175C91.208 71.6125 90.508 74.6333 89.4788 77.2917C88.4358 80.0741 86.796 82.5942 84.6747 84.675C82.5912 86.793 80.0718 88.4323 77.2913 89.4792C74.6372 90.5083 71.6122 91.2083 67.1747 91.4167C62.733 91.6125 61.3205 91.6667 49.9997 91.6667C38.6788 91.6667 37.2663 91.625 32.8247 91.4167C28.3872 91.2083 25.3663 90.5083 22.708 89.4792C19.926 88.4353 17.406 86.7956 15.3247 84.675C13.2055 82.5925 11.5661 80.0728 10.5205 77.2917C9.48717 74.6375 8.79134 71.6125 8.58301 67.175C8.38717 62.7333 8.33301 61.3208 8.33301 50C8.33301 38.6792 8.37467 37.2667 8.58301 32.825C8.79134 28.3833 9.48717 25.3667 10.5205 22.7083C11.5632 19.9258 13.203 17.4055 15.3247 15.325C17.4066 13.2051 19.9265 11.5655 22.708 10.5208C25.3663 9.48751 28.383 8.79168 32.8247 8.58334C37.2663 8.38751 38.6788 8.33334 49.9997 8.33334ZM49.9997 29.1667C44.4743 29.1667 39.1753 31.3616 35.2683 35.2686C31.3613 39.1756 29.1663 44.4747 29.1663 50C29.1663 55.5254 31.3613 60.8244 35.2683 64.7314C39.1753 68.6384 44.4743 70.8333 49.9997 70.8333C55.525 70.8333 60.8241 68.6384 64.7311 64.7314C68.6381 60.8244 70.833 55.5254 70.833 50C70.833 44.4747 68.6381 39.1756 64.7311 35.2686C60.8241 31.3616 55.525 29.1667 49.9997 29.1667ZM77.083 28.125C77.083 26.7437 76.5343 25.4189 75.5575 24.4422C74.5808 23.4654 73.256 22.9167 71.8747 22.9167C70.4933 22.9167 69.1686 23.4654 68.1918 24.4422C67.2151 25.4189 66.6663 26.7437 66.6663 28.125C66.6663 29.5063 67.2151 30.8311 68.1918 31.8079C69.1686 32.7846 70.4933 33.3333 71.8747 33.3333C73.256 33.3333 74.5808 32.7846 75.5575 31.8079C76.5343 30.8311 77.083 29.5063 77.083 28.125ZM49.9997 37.5C53.3149 37.5 56.4943 38.817 58.8385 41.1612C61.1827 43.5054 62.4997 46.6848 62.4997 50C62.4997 53.3152 61.1827 56.4946 58.8385 58.8388C56.4943 61.183 53.3149 62.5 49.9997 62.5C46.6845 62.5 43.505 61.183 41.1608 58.8388C38.8166 56.4946 37.4997 53.3152 37.4997 50C37.4997 46.6848 38.8166 43.5054 41.1608 41.1612C43.505 38.817 46.6845 37.5 49.9997 37.5Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_438_1889"
                    x="0.333008"
                    y="0.333344"
                    width="99.333"
                    height="99.3333"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_438_1889"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_438_1889"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <p className="socialTitle">Instagram Page</p>
              <p className="socialText">@siuiux</p>
            </a>
            <a href="mailto:siuiux.2020@gmail.com" className="gmail">
              <svg
                width="6.94vw"
                height="6.94vw"
                viewBox="0 0 100 100"
                fill="#767676"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_438_1898)">
                  <path
                    d="M70.833 14.5833H29.1663C16.6663 14.5833 8.33301 20.8333 8.33301 35.4167V64.5833C8.33301 79.1667 16.6663 85.4167 29.1663 85.4167H70.833C83.333 85.4167 91.6663 79.1667 91.6663 64.5833V35.4167C91.6663 20.8333 83.333 14.5833 70.833 14.5833ZM72.7913 39.9583L59.7497 50.375C56.9997 52.5833 53.4997 53.6667 49.9997 53.6667C46.4997 53.6667 42.958 52.5833 40.2497 50.375L27.208 39.9583C25.8747 38.875 25.6663 36.875 26.708 35.5417C27.7913 34.2083 29.7497 33.9583 31.083 35.0417L44.1247 45.4583C47.2913 48 52.6663 48 55.833 45.4583L68.8747 35.0417C70.208 33.9583 72.208 34.1667 73.2497 35.5417C74.333 36.875 74.1247 38.875 72.7913 39.9583Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_438_1898"
                    x="0.333008"
                    y="6.58334"
                    width="99.333"
                    height="86.8333"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_438_1898"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_438_1898"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <p className="socialTitle">Email</p>
              <p className="socialText">siuiux.2020@gmail.com</p>
            </a>
            <a href="tel:+09392057344" className="phone">
              <svg
                width="6.94vw"
                height="6.94vw"
                viewBox="0 0 100 100"
                fill="#767676"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_455_1308)">
                  <path
                    d="M46.0413 62.2917L38.333 70C36.708 71.625 34.1247 71.625 32.458 70.0417C31.9997 69.5833 31.5413 69.1667 31.083 68.7083C26.7913 64.375 22.9163 59.8333 19.458 55.0833C16.0413 50.3333 13.2913 45.5833 11.2913 40.875C9.33301 36.125 8.33301 31.5833 8.33301 27.25C8.33301 24.4167 8.83301 21.7083 9.83301 19.2083C10.833 16.6667 12.4163 14.3333 14.6247 12.25C17.2913 9.625 20.208 8.33333 23.2913 8.33333C24.458 8.33333 25.6247 8.58333 26.6663 9.08333C27.7497 9.58333 28.708 10.3333 29.458 11.4167L39.1247 25.0417C39.8747 26.0833 40.4163 27.0417 40.7913 27.9583C41.1663 28.8333 41.3747 29.7083 41.3747 30.5C41.3747 31.5 41.083 32.5 40.4997 33.4583C39.958 34.4167 39.1663 35.4167 38.1663 36.4167L34.9997 39.7083C34.5413 40.1667 34.333 40.7083 34.333 41.375C34.333 41.7083 34.3747 42 34.458 42.3333C34.583 42.6667 34.708 42.9167 34.7913 43.1667C35.5413 44.5417 36.833 46.3333 38.6663 48.5C40.5413 50.6667 42.5413 52.875 44.708 55.0833C45.1247 55.5 45.583 55.9167 45.9997 56.3333C47.6663 57.9583 47.708 60.625 46.0413 62.2917Z"
                  />
                  <path
                    d="M91.5417 76.375C91.5417 77.5417 91.3333 78.75 90.9167 79.9167C90.7917 80.25 90.6667 80.5833 90.5 80.9167C89.7917 82.4167 88.875 83.8333 87.6667 85.1667C85.625 87.4167 83.375 89.0417 80.8333 90.0833C80.7917 90.0833 80.75 90.125 80.7083 90.125C78.25 91.125 75.5833 91.6667 72.7083 91.6667C68.4583 91.6667 63.9167 90.6667 59.125 88.625C54.3333 86.5833 49.5417 83.8333 44.7917 80.375C43.1667 79.1667 41.5417 77.9583 40 76.6667L53.625 63.0417C54.7917 63.9167 55.8333 64.5833 56.7083 65.0417C56.9167 65.125 57.1667 65.25 57.4583 65.375C57.7917 65.5 58.125 65.5417 58.5 65.5417C59.2083 65.5417 59.75 65.2917 60.2083 64.8333L63.375 61.7083C64.4167 60.6667 65.4167 59.875 66.375 59.375C67.3333 58.7917 68.2917 58.5 69.3333 58.5C70.125 58.5 70.9583 58.6667 71.875 59.0417C72.7917 59.4167 73.75 59.9583 74.7917 60.6667L88.5833 70.4583C89.6667 71.2083 90.4167 72.0833 90.875 73.125C91.2917 74.1667 91.5417 75.2083 91.5417 76.375Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_455_1308"
                    x="0.333008"
                    y="0.333328"
                    width="99.209"
                    height="99.3333"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_455_1308"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_455_1308"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <p className="socialTitle">Phone Number</p>
              <p className="socialText">+(98)9392057344</p>
            </a>
            <a href="https://t.me/siuiux" className="telegram" target="_blank" rel="noopener noreferrer">
              <svg
                width="6.94vw"
                height="6.94vw"
                viewBox="0 0 100 100"
                fill="#767676"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 0C22.3857 0 0 22.3857 0 50C0 77.6143 22.3857 100 50 100C77.6143 100 100 77.6143 100 50C100 22.3857 77.6143 0 50 0ZM73.1758 34.004C72.4234 41.9103 69.1675 61.0964 67.5105 69.9516C66.8097 73.6984 65.4294 74.9548 64.0935 75.0776C61.1903 75.345 58.9851 73.1589 56.1728 71.3153C51.7722 68.4306 49.2861 66.6349 45.0143 63.82C40.0778 60.5669 43.278 58.7796 46.0913 55.8562C46.8276 55.0915 59.621 43.455 59.8685 42.3994C59.8994 42.2673 59.929 41.7744 59.6359 41.5155C59.3427 41.2567 58.9121 41.3444 58.6006 41.4147C58.1593 41.515 51.1292 46.1616 37.5103 55.3546C35.515 56.7248 33.7076 57.3924 32.0881 57.3575C30.3028 57.319 26.8688 56.3482 24.3157 55.5181C21.1845 54.5004 18.6958 53.9623 18.9125 52.2337C19.0254 51.3331 20.2653 50.4124 22.6323 49.4716C37.2083 43.121 46.928 38.9342 51.7911 36.9111C65.6766 31.1355 68.5619 30.1323 70.4425 30.0988C70.8562 30.0919 71.781 30.1944 72.38 30.6804C72.7785 31.0267 73.0325 31.5099 73.0917 32.0345C73.1932 32.6858 73.2214 33.3464 73.1758 34.004Z"
                />
              </svg>
              <p className="socialTitle">Telegram ID</p>
              <p className="socialText">@siuiux</p>
            </a>
          </div>
        </div>
      </div>

      <div className="imgClass">
        <img id="deskImg" src={deskImg} alt="desk" />
        <p className="HoverClick">HOVER & CLICK</p>
        <img id="arrow" src={arrow} alt="arrow" />
      </div>

    </div>
  );
}
