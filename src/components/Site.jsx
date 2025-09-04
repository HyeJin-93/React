import React from 'react'

const siteText =[
  {
    text:["make","site compliant with","hyeJin"],
    title:"1차 포트폴리오",
    code:"/",
    view:"/",
    info:["site coding","period: 3일","program : HTML5, CSS3, javascript, react 등"],

  },
  {
    text:["make","site compliant with","hyeJin"],
    title:"2차 포트폴리오",
    code:"/",
    view:"/",
    info:["site coding","period: 5일","program : HTML5 2, CSS3 2, javascript 2, react 2 등"],
    
  },
  {
    text:["make","site compliant with","hyeJin"],
    title:"3차 포트폴리오",
    code:"/",
    view:"/",
    info:["site coding","period: 7일","program : HTML5 3, CSS3 3, javascript 3, react 3 등"],
    
  },
  {
    text:["make","site compliant with","hyeJin"],
    title:"4차 포트폴리오",
    code:"/",
    view:"/",
    info:["site coding","period: 10일","program : HTML5 4, CSS3 4, javascript 4, react 4 등"],
    
  },
  {
    text:["make","site compliant with","hyeJin"],
    title:"5차 포트폴리오",
    code:"/",
    view:"/",
    info:["site coding","period: 2일","program : HTML5 5, CSS3 5, javascript 5, react 5 등"],
    
  },
]

const Site = () => {
  return (
    <section id='Site'>
      <div className="site_inner">
        <div className="site_title">
          Site Conding <em>내 작품들</em>
        </div>
        <div className="site_wrap">
          {siteText.map((site,key)=>(
            <div className={`site_item s${key+1}`} key={key}>
            <span className='num'>{key+1}.</span>
            <div className="text">
              <div>{site.text[0]}</div>
              <div>{site.text[1]}</div>
              <div>{site.text[2]}</div>              
            </div>
            <h3 className='title'>{site.title}</h3>
            <div className="btn">
              <a href={site.code}>code</a>
              <a href={site.view}>view</a>
            </div>
            <div className="info">
              <span>{site.info[0]}</span>
              <span>{site.info[1]}</span>
              <span>{site.info[2]}</span>
            </div>
          </div>
          ))}

        </div>
      </div>

    </section>
  )
}

export default Site