import React from 'react'

const LinkedIn = () => {
  return (
    <svg className="facebook_icon" xmlns="http://www.w3.org/2000/svg" width="50.549" height="50.549" viewBox="0 0 59.549 59.549" style={{cursor:'pointer'}}>
      <defs>
        <filter id="Ellipse_14" x="0" y="0" width="59.549" height="59.549" filterUnits="userSpaceOnUse">
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feFlood flood-color="#fefefe" flood-opacity="0.161" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Component_104_16" data-name="Component 104 – 16" transform="translate(10.5 7.5)">
        <g transform="matrix(1, 0, 0, 1, -10.5, -7.5)" filter="url(#Ellipse_14)">
          <g id="Ellipse_14-2" data-name="Ellipse 14" transform="translate(10.5 7.5)" fill="#fff" stroke="#072446" stroke-width="2">
            <circle cx="19.274" cy="19.274" r="19.274" stroke="none" />
            <circle cx="19.274" cy="19.274" r="18.274" fill="none" />
          </g>
        </g>
        <path id="Icon_awesome-linkedin-in" data-name="Icon awesome-linkedin-in" d="M4.282,15.945H.316V5.3H4.282ZM2.3,3.848A2.146,2.146,0,0,1,0,1.916,2.132,2.132,0,0,1,2.3,0a2.132,2.132,0,0,1,2.3,1.914A2.146,2.146,0,0,1,2.3,3.848Zm16.83,12.1H15.169V10.763c0-1.235-.03-2.819-2.062-2.819-2.062,0-2.378,1.342-2.378,2.73v5.271H6.767V5.3h3.8V6.752h.056a4.374,4.374,0,0,1,3.753-1.719c4.014,0,4.752,2.2,4.752,5.064v5.847Z" transform="translate(10.157 10.79)" fill="#072446" />
      </g>
    </svg>

  )
}

export default LinkedIn
