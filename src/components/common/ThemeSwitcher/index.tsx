import React from 'react';
import styles from './ThemeSwitch.module.scss';

interface Props {
    isOn: boolean,
    handleClick: () => void
}

const ThemeSwitcher: React.FC<Props> = ({isOn, handleClick}) => {
    return <div data-testid='themeSwitch' onClick={() => handleClick()} className={`${styles.switch} ${isOn ? styles.dark : styles.light}`}>
        <svg width="335" height="141" viewBox="0 0 335 141" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="334" height="139" rx="69.5" fill="#D9D9D9"/>
            <rect className={styles.sky} x="8" y="8" width="320" height="125" rx="62.5" fill="#008DC9"/>

            <g className={styles.sun} filter="url(#filter0_d_1_27)">
                <circle cx="70.5" cy="70.5" r="45.5" fill="#F4BF00"/>
            </g>

            <g className={styles.clouds}>
                <g filter="url(#filter1_d_1_27)">
                    <path
                        d="M272.617 63.7906C272.617 69.7501 265.772 76 257.327 76C248.882 76 242.036 69.7501 242.036 63.7906C242.036 57.8311 248.882 53 257.327 53C265.772 53 272.617 57.8311 272.617 63.7906Z"
                        fill="#E3E3E3"/>
                    <ellipse cx="271.709" cy="64.207" rx="15.2906" ry="10.7906" fill="#E3E3E3"/>
                    <ellipse cx="243.291" cy="64.207" rx="15.2906" ry="10.7906" fill="#E3E3E3"/>
                </g>
                <g filter="url(#filter2_d_1_27)">
                    <path
                        d="M216.518 96.0373C216.518 99.9239 211.528 104 205.374 104C199.219 104 194.23 99.9239 194.23 96.0373C194.23 92.1507 199.219 89 205.374 89C211.528 89 216.518 92.1507 216.518 96.0373Z"
                        fill="#E3E3E3"/>
                    <ellipse cx="215.856" cy="96.3089" rx="11.144" ry="7.03734" fill="#E3E3E3"/>
                    <ellipse cx="195.144" cy="96.3089" rx="11.144" ry="7.03734" fill="#E3E3E3"/>
                </g>
                <g filter="url(#filter3_d_1_27)">
                    <path
                        d="M192.956 47.3214C192.956 53.0218 189.126 59 184.403 59C179.68 59 175.851 53.0218 175.851 47.3214C175.851 41.6211 179.68 37 184.403 37C189.126 37 192.956 41.6211 192.956 47.3214Z"
                        fill="#D9D9D9"/>
                    <ellipse cx="192.448" cy="47.7197" rx="8.55236" ry="10.3214" fill="#D9D9D9"/>
                    <ellipse cx="176.552" cy="47.7197" rx="8.55236" ry="10.3214" fill="#D9D9D9"/>
                </g>
            </g>

            <g className={styles.moon}>
                <g filter="url(#filter4_d_1_27)">
                    <circle cx="70.5" cy="70.5" r="45.5" fill="#D9D9D9"/>
                </g>
                <g filter="url(#filter5_f_1_27)">
                    <ellipse cx="91.5" cy="42" rx="10.5" ry="7" transform="rotate(35.6358 91.5 42)" fill="#535353"
                             fillOpacity="0.5"/>
                    <path
                        d="M99.6274 47.8263C98.6289 49.2192 96.8424 49.9228 94.6674 49.8489C92.4966 49.7752 90.0004 48.9226 87.7129 47.2828C85.4254 45.643 83.8165 43.5527 83.0497 41.5205C82.2813 39.4844 82.3741 37.5666 83.3726 36.1737C84.3711 34.7808 86.1577 34.0772 88.3326 34.1511C90.5034 34.2248 92.9996 35.0774 95.2871 36.7172C97.5746 38.3571 99.1835 40.4473 99.9503 42.4795C100.719 44.5156 100.626 46.4334 99.6274 47.8263Z"
                        stroke="#2C2727"/>
                </g>
                <g filter="url(#filter6_f_1_27)">
                    <ellipse cx="49.5" cy="59.4423" rx="5.10768" ry="5.16963" transform="rotate(86.1611 49.5 59.4423)"
                             fill="#535353" fillOpacity="0.5"/>
                    <path
                        d="M49.8085 64.0397C47.2296 64.2127 45.0108 62.2884 44.8408 59.755C44.6709 57.2216 46.6126 55.018 49.1915 54.845C51.7704 54.6719 53.9892 56.5963 54.1592 59.1297C54.3292 61.6631 52.3874 63.8666 49.8085 64.0397Z"
                        stroke="#2C2727"/>
                </g>
                <g filter="url(#filter7_f_1_27)">
                    <ellipse cx="83.486" cy="97.2087" rx="7.60939" ry="12.696"
                             transform="rotate(47.2092 83.486 97.2087)"
                             fill="#535353" fillOpacity="0.5"/>
                    <path
                        d="M88.3156 102.426C85.7978 104.757 82.9693 106.238 80.4506 106.767C77.9204 107.298 75.7972 106.856 74.5362 105.494C73.2751 104.131 72.9984 101.981 73.7228 99.4989C74.444 97.0284 76.1387 94.3223 78.6565 91.9916C81.1742 89.6609 84.0028 88.1797 86.5215 87.651C89.0517 87.1199 91.1748 87.5614 92.4359 88.9237C93.697 90.286 93.9737 92.4369 93.2492 94.9186C92.5281 97.3891 90.8334 100.095 88.3156 102.426Z"
                        stroke="#2C2727"/>
                </g>
            </g>
            <g className={styles.stars}>
                <g filter="url(#filter8_d_1_27)">
                    <path
                        d="M154.586 92.9775L153.803 99.1392L159.669 102.029L153.319 102.947L152.536 109.109L149.395 103.515L143.045 104.433L147.454 100.057L144.313 94.4633L150.178 97.3532L154.586 92.9775Z"
                        fill="#D9D9D9"/>
                </g>
                <g filter="url(#filter9_d_1_27)">
                    <path
                        d="M53.7604 59.0574L59.1018 65.905L66.9198 62.9571L62.403 70.1371L67.7444 76.9847L59.6115 74.5745L55.0947 81.7545L54.5851 73.085L46.4522 70.6748L54.2701 67.7269L53.7604 59.0574Z"
                        fill="#D9D9D9"/>
                </g>
                <g filter="url(#filter10_d_1_27)">
                    <path
                        d="M111.669 27.8917L115.692 33.3468L121.264 31.2459L118.179 36.7182L122.203 42.1733L116.272 40.1003L113.187 45.5727L112.607 38.8192L106.677 36.7462L112.249 34.6452L111.669 27.8917Z"
                        fill="#D9D9D9"/>
                </g>
            </g>
            <defs>
                <filter id="filter0_d_1_27" x="0" y="0" width="141" height="141" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="12.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.956863 0 0 0 0 0.74902 0 0 0 0 0 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_27"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_27" result="shape"/>
                </filter>
                <filter id="filter1_d_1_27" x="224" y="50" width="67" height="31" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_27"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_27" result="shape"/>
                </filter>
                <filter id="filter2_d_1_27" x="180" y="86" width="51" height="23" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_27"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_27" result="shape"/>
                </filter>
                <filter id="filter3_d_1_27" x="164" y="34" width="41" height="30" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_27"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_27" result="shape"/>
                </filter>
                <filter id="filter4_d_1_27" x="10" y="10" width="121" height="121" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="7.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_27"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_27" result="shape"/>
                </filter>
                <filter id="filter5_f_1_27" x="78.0396" y="29.6458" width="26.9209" height="24.7084"
                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_1_27"/>
                </filter>
                <filter id="filter6_f_1_27" x="40.3304" y="50.3342" width="18.3391" height="18.2163"
                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_1_27"/>
                </filter>
                <filter id="filter7_f_1_27" x="68.8293" y="82.933" width="29.3134" height="28.5516"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_1_27"/>
                </filter>
                <filter id="filter8_d_1_27" x="139.045" y="89.9775" width="24.6236" height="24.1314"
                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_27"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_27" result="shape"/>
                </filter>
                <filter id="filter9_d_1_27" x="42.4522" y="56.0574" width="29.2922" height="30.6971"
                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_27"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_27" result="shape"/>
                </filter>
                <filter id="filter10_d_1_27" x="102.677" y="24.8917" width="23.5255" height="25.681"
                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_27"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_27" result="shape"/>
                </filter>
            </defs>
        </svg>


    </div>;
}

export default ThemeSwitcher;
