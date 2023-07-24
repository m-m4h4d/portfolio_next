import Image from 'next/image'

export const metadata = {
  title: "Mahad's Dev Portfolio",
  description: "This website is the property of MUHAMMAD MAHAD aka Nacheez. This portfolio was created using Next.js and Tailwind CSS. It is the first project I've created using Next.js and Tailwind CSS. This website is the first of many to come. I hope you enjoy it!",
}

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <div className="left">Mahad&apos;s Portfolio</div>
          <div className="right">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Services</a></li>
              <li><a href="/">Projects</a></li>
              <li><a href="/">Contact Me</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section className="firstSection">
          <div className="leftSection">
            <div>Hi! My name is </div><span className="name">Muhammad Mahad</span>
            <div> and I&apos;m a passionate</div>
            <span id="element"></span>
            <div className="buttons">
              <form action="/Resume-LinkedIn.pdf" method="get" target="_blank">
                <button className="btn">Download Resume</button>
              </form>
              <form action="https://github.com/m-m4h4d" method="get" target="_blank">
                <button className="btn">Visit GitHub</button>
              </form>
            </div>
          </div>
          <div className="rightSection">
            <img src="/b.png" alt="" />
          </div>
        </section>
        <hr />
        <section className="secondSection">
          <span className="text">What I&apos;m capable of</span>
          <h1>Skillset</h1>
          <div className="box">
            <img className="image-top" src="/1.png" alt="" />
            <div className="vertical">
              <div className="vertical-title">
                Automation Engineer
              </div>
              <div className="vertical-description">
                Entry-level Automation Engineer. Skilled in automating a wide variety of tasks ranging from
                simple
                to complex using Python and Bash.
              </div>
            </div>
            <img className="image-top" src="/2.png" alt="" />
            <div className="vertical">
              <div className="vertical-title">
                Software Developer
              </div>
              <div className="vertical-description">
                Self-employed Software Developer. Proficient in OOP, Python, Java, C, C++, Verilog, Bash, code
                optimization, debugging, troubleshooting, Git, and GitHub.
              </div>
            </div>
            <img className="image-top" src="/3.png" alt="" />
            <div className="vertical">
              <div className="vertical-title">
                IT Support Specialist
              </div>
              <div className="vertical-description">
                IT Support Specialist II. Skilled in collaborating with technical teams to
                identify and implement solutions for technical issues.
              </div>
            </div>
            <img className="image-top" src="/4.png" alt="" />
            <div className="vertical">
              <div className="vertical-title">
                Web Designer
              </div>
              <div className="vertical-description">
                Passionate Web Designer. Skilled in website building using HTML, CSS, JavaScript, and React.
              </div>
            </div>
            <img className="image-top" src="/5.png" alt="" />
            <div className="vertical">
              <div className="vertical-title">
                Cloud Engineer
              </div>
              <div className="vertical-description">
                Proficient in Cloud Computing. Skilled in working with vitual machines (VMs) and Google Cloud
                Platform (GCP).
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer">
          <div className="footer-first">
            <h3>Mahad&#39;s Developer Portfolio</h3>
          </div>
          <div className="footer-second">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-third">
            <ul>
              <li>LinkedIn</li>
              <li>GitHub</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="footer-rights">
          Copyright &#169; mahadsdevportfolio.com | All rights reserved
        </div>
      </footer>
      <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
    <script>
        var typed = new Typed('#element', {strings=['Automation Engineer', 'Computer Scientist', 'IT Support Specialist', 'Web Designer', 'Cloud Engineer', 'Software Developer'], typeSpeed=50, });
    </script>
    </>
  )
}
