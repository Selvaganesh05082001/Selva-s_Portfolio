import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from './components/Header.jsx';
import Gallery from './components/Gallery.jsx';



export default function App(){ 
  const profile = "/assets/1.webp";
  const cv = "/SelvaganeshCV.pdf";
   useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (1s)
      once: true,     // animation runs only once
    });
  }, []);
  return (
    <div>
      <header className="header">
        <h1>Selvaganesh R</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#bio">Bio</a>
          <a href="#experience">Experience</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <img src={profile} alt="Selvaganesh" className="profile-img"/>
        <h2>Selvaganesh R</h2>
        <p>System Administrator | Cloud Engineer | Tech Enthusiast</p>
        <div className="buttons">
          <a href={cv}><button className="btn btn-primary">Download Resume</button></a>
          <a href="#experience"><button className="btn btn-outline">View Experience</button></a>
        </div>
      </section>

      <main className="container">
        <section id="bio" className="card">
          <h3>Personal Bio</h3>
          <p><strong>DOB:</strong> 05/08/2001 • <strong>Native:</strong> Tirunelveli • <strong>Son of </strong> Ramachandran and Sudali • <strong>Blood Group</strong> A +ve </p>
          <p><strong>Height:</strong> 166 cm • <strong>Weight:</strong> 68 kg • <strong>Marital Status:</strong> Unmarried</p>
          <p>Favourite Food: Biryani • Favourite Color: Black • Favourite Hero: Ajith • Hobby: Bike Riding</p>
        </section>

        <section id="experience" className="card">
          <h3>Professional Experience</h3>
          <article>
            <h4>Praba's VCare Health Clinic Pvt Ltd — System Administrator (2025 – Present)</h4>
            <ul>
              <li>Managed IT infrastructure for 3,000+ users across 80+ branches.</li>
              <li>Performing Windows/Linux patch updates, monthly server maintenance, and endpoint update verification</li>
              <li>Creating patching checklists, validating UAT updates, and ensuring endpoint health.</li>
              <li>Automated daily IT tasks using Bash & Batch scripts (USB block, clean-up tasks, user creation)</li>
              <li>Configured NAS, Zimbra mail, FortiGate VPN, and supported MPLS/VLAN operations.</li>
              <li>Reduced manual workload by 40% through patch-related automation and routine scripting</li>
              <li>Ensured 99.9% uptime for branch-level IT operations.</li>
            </ul>
          </article>

          <article>
            <h4>Tech Fruit Solutions Pvt Ltd — Technical Support Engineer (2024 – 2025)</h4>
            <ul>
              <li>Provided L1/L2 support for 80+ corporate users.</li>
              <li>Supported Microsoft 365 updates, Windows patching, and endpoint security checks</li>
              <li>Managed HPE switches (VLAN/PoE) and GajShield firewall.</li>
              <li>Maintained IT documentation, including patch status, asset details, and compliance reports</li>
              <li>Provided support for OS installation, Outlook issues, Teams, and basic networking</li>
            </ul>
          </article>

          <article>
            <h4>Dhatchan Academy — Administrative Service Officer (IT Infrastructure) (2021 – 2024)</h4>
            <ul>
              <li>Managed Linux infrastructure for 40+ users and deployed dual-boot systems.</li>
              <li>Configured routers/APs, applied MAC filtering & site blocking policies.</li>
              <li>Deployed Raspberry Pi for lightweight automation tasks and backups.</li>
              <li>Created documentation and trained staff for basic troubleshooting.</li>
            </ul>
          </article>
        </section>

        <Gallery />

        <section id="projects" className="card">
          <h3>Projects & Short Films</h3>
          <ul>
            <li>Local Infrastructure (AlmaLinux): Apache + MySQL + NAS.</li>
            <li>PXE OS Deployment: Automated Windows deployment via PXE.</li>
            <li>AWS Cloud Deployment: EC2 + S3 for backups.</li>
            <li>Automation Scripts – Developed Bash/PowerShell scripts for USB blocking, user
creation, application installs, and asset data collection</li>
            <li>Short Films: <a href="https://www.youtube.com/watch?v=29YrTjURTPw" target="_blank" rel="noreferrer">Short Film 1</a> • <a href="https://www.youtube.com/watch?v=Tc71eW4_5A8" target="_blank" rel="noreferrer">Short Film 2</a></li>
            
          </ul>
        </section>

        <section id="contact" className="card" style={{marginBottom:40}}>
          <h3>Contact</h3>
          <p>Email: <a href="mailto:selvaganesh05082001@gmail.com">selvaganesh05082001@gmail.com</a> • Phone: +91 75399 98403</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/selvaganesh05082001/" target="_blank" rel="noreferrer">LinkedIn</a></p>
          <p>Instagram: <a href="https://www.instagram.com/_mr_selva_ramachandran_/" target="_blank" rel="noreferrer">Instagram</a></p>
        </section>

      </main>





      <footer>
        © 2025 Selvaganesh R — Built with ❤️
      </footer>
      </div>
  )
}
