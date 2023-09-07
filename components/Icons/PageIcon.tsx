import styles from "@/app/page.module.css";

type PageIconProps = {
  is_active: boolean;
  icon: string;
};

export const PageIcon = ({
  is_active = false,
  icon = "create_client",
}: PageIconProps) => {
  if (icon === "edit_client") {
    return (
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={is_active ? styles.aside_nav_active : ""}
      >
        <circle cx="23" cy="23" r="23" fill="#58A3AD" />
        <g clipPath="url(#clip0_207_92)">
          <path
            d="M15.6667 13.2083C15.6667 14.7554 16.2812 16.2392 17.3752 17.3331C18.4692 18.4271 19.9529 19.0417 21.5 19.0417C23.0471 19.0417 24.5308 18.4271 25.6248 17.3331C26.7188 16.2392 27.3333 14.7554 27.3333 13.2083C27.3333 11.6612 26.7188 10.1775 25.6248 9.08354C24.5308 7.98958 23.0471 7.375 21.5 7.375C19.9529 7.375 18.4692 7.98958 17.3752 9.08354C16.2812 10.1775 15.6667 11.6612 15.6667 13.2083Z"
            stroke="white"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.75 33.625V30.7083C12.75 29.1612 13.3646 27.6775 14.4585 26.5835C15.5525 25.4896 17.0362 24.875 18.5833 24.875H23.6875"
            stroke="white"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.8625 25.7646C31.1469 25.4802 31.4845 25.2546 31.8561 25.1007C32.2277 24.9468 32.6259 24.8676 33.0281 24.8676C33.4303 24.8676 33.8286 24.9468 34.2002 25.1007C34.5717 25.2546 34.9094 25.4802 35.1937 25.7646C35.4781 26.049 35.7037 26.3866 35.8576 26.7582C36.0116 27.1298 36.0908 27.528 36.0908 27.9302C36.0908 28.3324 36.0116 28.7307 35.8576 29.1022C35.7037 29.4738 35.4781 29.8114 35.1937 30.0958L30.25 35.0833H25.875V30.7083L30.8625 25.7646Z"
            stroke="white"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_207_92">
            <rect
              width="35"
              height="35"
              fill="white"
              transform="translate(4 3)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  } else if (icon === "search_client") {
    return (
      <svg
        width="46"
        height="47"
        viewBox="0 0 46 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={is_active ? styles.aside_nav_active : ""}
      >
        <ellipse cx="23" cy="23.5" rx="23" ry="23.5" fill="#58A3AD" />
        <g clipPath="url(#clip0_207_93)">
          <path
            d="M16.6667 13.2083C16.6667 14.7554 17.2812 16.2392 18.3752 17.3331C19.4692 18.4271 20.9529 19.0417 22.5 19.0417C24.0471 19.0417 25.5308 18.4271 26.6248 17.3331C27.7188 16.2392 28.3333 14.7554 28.3333 13.2083C28.3333 11.6612 27.7188 10.1775 26.6248 9.08354C25.5308 7.98958 24.0471 7.375 22.5 7.375C20.9529 7.375 19.4692 7.98958 18.3752 9.08354C17.2812 10.1775 16.6667 11.6612 16.6667 13.2083Z"
            stroke="white"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.75 33.625V30.7083C13.75 29.1612 14.3646 27.6775 15.4585 26.5835C16.5525 25.4896 18.0362 24.875 19.5833 24.875H21.7708"
            stroke="white"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.875 29.25C26.875 30.4103 27.3359 31.5231 28.1564 32.3436C28.9769 33.1641 30.0897 33.625 31.25 33.625C32.4103 33.625 33.5231 33.1641 34.3436 32.3436C35.1641 31.5231 35.625 30.4103 35.625 29.25C35.625 28.0897 35.1641 26.9769 34.3436 26.1564C33.5231 25.3359 32.4103 24.875 31.25 24.875C30.0897 24.875 28.9769 25.3359 28.1564 26.1564C27.3359 26.9769 26.875 28.0897 26.875 29.25Z"
            stroke="white"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34.4583 32.4583L37.0833 35.0833"
            stroke="white"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_207_93">
            <rect
              width="35"
              height="35"
              fill="white"
              transform="translate(5 3)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  } else {
    return (
      <svg
        width="46"
        height="46"
        viewBox="10 10 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={is_active ? styles.aside_nav_active : ""}
      >
        <g filter="url(#filter0_d_207_91)">
          <circle cx="33" cy="33" r="23" fill="#58A3AD" />
        </g>
        <g clipPath="url(#clip0_207_91)">
          <path
            d="M26.6667 24.2083C26.6667 25.7554 27.2812 27.2392 28.3752 28.3331C29.4692 29.4271 30.9529 30.0417 32.5 30.0417C34.0471 30.0417 35.5308 29.4271 36.6248 28.3331C37.7188 27.2392 38.3333 25.7554 38.3333 24.2083C38.3333 22.6612 37.7188 21.1775 36.6248 20.0835C35.5308 18.9896 34.0471 18.375 32.5 18.375C30.9529 18.375 29.4692 18.9896 28.3752 20.0835C27.2812 21.1775 26.6667 22.6612 26.6667 24.2083Z"
            stroke="white"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M38.3333 41.7083H47.0833"
            stroke="white"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M42.7083 37.3333V46.0833"
            stroke="white"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.75 44.625V41.7083C23.75 40.1612 24.3646 38.6775 25.4585 37.5835C26.5525 36.4896 28.0362 35.875 29.5833 35.875H35.4167"
            stroke="white"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_207_91"
            x="0"
            y="0"
            width="66"
            height="66"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_207_91"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_207_91"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_207_91">
            <rect
              width="35"
              height="35"
              fill="white"
              transform="translate(15 14)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
};
