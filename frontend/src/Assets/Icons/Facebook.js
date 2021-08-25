import React from 'react'

const Facebook = () => {
  return (
    <svg className="facebook_icon" xmlns="http://www.w3.org/2000/svg" width="50.549" height="50.549" viewBox="0 0 59.549 59.549" fill="red">
      <defs>
        <filter id="Ellipse_15" x="0" y="0" width="50.549" height="50.549" filterUnits="userSpaceOnUse">
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feFlood flood-color="#fefefe" flood-opacity="0.129" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Component_105_16" data-name="Component 105 – 16" transform="translate(10.5 7.5)">
        <g transform="matrix(1, 0, 0, 1, -10.5, -7.5)" filter="url(#Ellipse_15)">
          <g id="Ellipse_15-2" data-name="Ellipse 15" transform="translate(10.5 7.5)" fill="#fff" stroke="#072446" stroke-width="2">
            <circle cx="19.274" cy="19.274" r="19.274" stroke="none" />
            <circle cx="19.274" cy="19.274" r="18.274" fill="none" />
          </g>
        </g>
        <path id="Icon_awesome-facebook-f" data-name="Icon awesome-facebook-f" d="M14.754,10.795l.62-3.473H11.5V5.068c0-.95.542-1.876,2.279-1.876h1.763V.235A24.922,24.922,0,0,0,12.408,0C9.214,0,7.127,1.663,7.127,4.675V7.322H3.577v3.473h3.55v8.4H11.5v-8.4Z" transform="translate(9.878 9.731)" fill="#072446" />
      </g>
    </svg>

  )
}

export default Facebook
