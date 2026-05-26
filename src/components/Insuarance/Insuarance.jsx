import React from 'react'
import './Insuarance.css'

const Insuarance = () => {
  const providers = [
    { title: 'CIC', type: 'accepted', text: 'Accepted' },
    { title: 'APA Insurance', type: 'accepted', text: 'Accepted' },
    { title: 'Kenya Alliance', type: 'accepted', text: 'Accepted' },
    { title: 'Jubilee', type: 'accepted', text: 'Accepted' },
    { title: 'SHA', type: 'accepted', text: 'Accepted' },
    { title: 'Mtiba', type: 'corporate', text: '👥 Digital Health Cover' },
    { title: 'Liaison', type: 'accepted', text: 'Accepted' },
    { title: 'MUA', type: 'accepted', text: 'Accepted' },
    { title: 'SAHAM', type: 'accepted', text: 'Accepted' },
    { title: 'Birdview', type: 'accepted', text: 'Accepted' },
    { title: 'Takaful', type: 'accepted', text: 'Accepted' },
    { title: 'Miney', type: 'accepted', text: 'Accepted' },
    { title: 'AAR', type: 'accepted', text: 'Accepted' },
    { title: 'PACIS', type: 'accepted', text: 'Accepted' },
    { title: 'First Assurance', type: 'accepted', text: 'Accepted' },
    { title: 'Heritage', type: 'accepted', text: 'Accepted' },
    { title: 'Kenindia', type: 'accepted', text: 'Accepted' },
    { title: 'Transnep Insurance', type: 'accepted', text: 'Accepted' },
    { title: 'ICEA', type: 'accepted', text: 'Accepted' },
  ];
  return (
    <section id="insurance" className="insurance-section">
      <div className="insurance-container">
        <div className="header">
          <h2>Insurance & Medical Covers Accepted</h2>

          <p>
            We partner with leading insurance providers to make quality healthcare
            accessible and affordable for you and your family.
          </p>

          <div className="underline"></div>
        </div>
        
        {/* SLIDER */}
        <div
          className="insurance-slider"
          style={{
            "--w": "220px",
            "--gap": "10px",
            "--duration": "28s",
            "--duration-rev": "34s",
          }}
        >
          <div className="marquee-row">
            <div className="list">
              {providers.map((p, i) => (
                <div className="insurance-card" style={{ "--pos": `${i + 1}` }} key={`t-${i}`}>
                  <h3>{p.title}</h3>
                  <div className={`status ${p.type}`}>
                    {p.type === 'accepted' ? (
                      <>
                        <span className="dot"></span>
                        {p.text}
                      </>
                    ) : (
                      p.text
                    )}
                  </div>
                </div>
              ))}

              {providers.map((p, i) => (
                <div className="insurance-card" style={{ "--pos": `${i + 1 + providers.length}` }} key={`t-dup-${i}`}>
                  <h3>{p.title}</h3>
                  <div className={`status ${p.type}`}>
                    {p.type === 'accepted' ? (
                      <>
                        <span className="dot"></span>
                        {p.text}
                      </>
                    ) : (
                      p.text
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="marquee-row reverse">
            <div className="list">
              {providers.map((p, i) => (
                <div className="insurance-card" style={{ "--pos": `${i + 1}` }} key={`b-${i}`}>
                  <h3>{p.title}</h3>
                  <div className={`status ${p.type}`}>
                    {p.type === 'accepted' ? (
                      <>
                        <span className="dot"></span>
                        {p.text}
                      </>
                    ) : (
                      p.text
                    )}
                  </div>
                </div>
              ))}

              {providers.map((p, i) => (
                <div className="insurance-card" style={{ "--pos": `${i + 1 + providers.length}` }} key={`b-dup-${i}`}>
                  <h3>{p.title}</h3>
                  <div className={`status ${p.type}`}>
                    {p.type === 'accepted' ? (
                      <>
                        <span className="dot"></span>
                        {p.text}
                      </>
                    ) : (
                      p.text
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      {/* DISCLAIMER */}
      <div className="insurance-disclaimer">

        <div className="disclaimer-box">
          <div className="icon">i</div>
          <p>
            Insurance coverage may vary depending on your plan.
            Please contact your insurer or our billing office for
            verification and more details.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Insuarance