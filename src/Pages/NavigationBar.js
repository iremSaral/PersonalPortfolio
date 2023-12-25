import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import nb1 from '../assets/img/nav-icon1.svg';
import nb2 from '../assets/img/github.svg';
import nb3 from '../assets/img/nav-icon3.svg';
import logoirem from '../assets/img/logo2.png';
import translation from '../assets/img/translation.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import i18n from '../comp/i18n';
import { useTranslation } from 'react-i18next';

export const NavBar = () => {
  const { t, i18n } = useTranslation()

  const [activeSection, setActiveSection] = useState('home');
  const [lng, setLng] = useState("tr");
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {

    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const experienceSection = document.getElementById('experience');
      const skillsSection = document.getElementById('skills');
      const projectsSection = document.getElementById('projects');
      const contactSection = document.getElementById('contact');
      //Düzenle
      const scrollPosition = window.scrollY;

      if (
        scrollPosition < skillsSection.offsetTop - 150 &&
        activeSection !== 'home'
      ) {
        setActiveSection('home');
      }
      else if (
        scrollPosition >= skillsSection.offsetTop - 200 &&
        scrollPosition < experienceSection.offsetTop &&
        activeSection !== 'skills'
      ) {
        setActiveSection('skills');
      }
      else if (
        scrollPosition >= experienceSection.offsetTop - 200 &&
        scrollPosition < projectsSection.offsetTop &&
        activeSection !== 'experience'
      ) {
        setActiveSection('experience');
      }
      else if (
        scrollPosition >= projectsSection.offsetTop - 200 &&
        scrollPosition < contactSection.offsetTop - 300 &&
        activeSection !== 'projects'
      ) {
        setActiveSection('projects');
      }
      else if (
        scrollPosition >= contactSection.offsetTop - 300 &&
        activeSection !== 'contact'
      ) {
        setActiveSection('contact');
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleLang = async () => {
    const currentLang = i18n.language;
    const newLang = currentLang === 'tr' ? 'en' : 'tr';
    await i18n.changeLanguage(newLang);
    setLng(newLang)
    console.log(i18n.language)

  }

  return (
    <Navbar
      expand="md"
      className={`navbar ${activeSection !== 'home' ? 'scrolled' : ''}`}
      style={{
        backgroundColor: activeSection !== 'home' ? '#0B1320' : 'transparent',
      }}
    >
      <Container>
        <Navbar.Brand href="#cover">
          {' '}
          <img
            src={logoirem}
            style={{ width: '150px', padding: '15px' }}
            alt=""
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => handleSectionChange('home')}
              className={activeSection === 'home' ? 'navbar-link-active' : 'navbar-link'}
              href="#home"
            >
              {t('about')}
            </Nav.Link>
            <Nav.Link
              onClick={() => handleSectionChange('skills')}
              className={activeSection === 'skills' ? 'navbar-link-active' : 'navbar-link'}
              href="#skills"
            >
       {t('skills')}
            </Nav.Link>
            <Nav.Link
              onClick={() => handleSectionChange('experience')}
              className={activeSection === 'experience' ? 'navbar-link-active' : 'navbar-link'}
              href="#experience"
            >
           {t('experience')}
            </Nav.Link>

            <Nav.Link
              onClick={() => handleSectionChange('projects')}
              className={activeSection === 'projects' ? 'navbar-link-active' : 'navbar-link'}
              href="#projects"
            >
             {t('project')}
            </Nav.Link>
            <Nav.Link
              onClick={() => handleSectionChange('contact')}
              className={activeSection === 'contact' ? 'navbar-link-active' : 'navbar-link'}
              href="#contact"
            >
           {t('contact')}
            </Nav.Link>
          </Nav>
          <div>
            <a href="https://www.linkedin.com/in/iremsrl/" className="social-icon-a">
              <img className="social-icon" src={nb1} alt="" />
            </a>
            <a href="https://github.com/iremSaral" className="social-icon-a">
              <img className="social-icon" src={nb2} alt="" />
            </a>
            <a href="https://www.instagram.com/irem_srll" className="social-icon-a">
              <img className="social-icon" src={nb3} alt="" />
            </a>
            <a onClick={handleLang} className="social-icon-a">
              <img className="social-icon" src={translation} alt="" />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
/**       <button  style={{ display: 'inline-flex', border: 'none', background: 'none', cursor: 'pointer' }}>
         

  </button> */