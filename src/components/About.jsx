import { useState } from "react";

const About = () => {

  const [theme, setTheme] = useState({});
  const [themeBtnTxt, setThemeBtnTxt] = useState('Enable Dark Mode');

  const darkTheme = {
    color: 'white',
    backgroundColor: 'rgb(40,40,40)'
  };

  const toggleTheme = () => {
    if (theme.color === 'white') {
      setTheme({});
      setThemeBtnTxt('Enable Dark Mode');
    }
    else {
      setTheme(darkTheme);
      setThemeBtnTxt('Enable Light Mode');
    }
  }

  return (
    <div className='container my-3 py-1' style={theme}>
      <h2>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={theme}>
          <h2 className="accordion-header">
            <button className="accordion-button" style={theme} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the first item&apos;s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={theme}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={theme} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the second item&apos;s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={theme}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={theme} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item&apos;s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="my-3">
        <button onClick={toggleTheme} className="btn btn-primary">{themeBtnTxt}</button>
      </div>
    </div>
  )
}

export default About