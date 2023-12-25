import React from 'react'
import { Card } from '../comp/ProjectCard';
import sanotimer from '../assets/img/sanotimer.png';
import chart from '../assets/img/chart2.png';
import survey from '../assets/img/survey2.png';
import employee from '../assets/img/employee2.png';
import sportsmatch from '../assets/img/sportsmatch2.png';
import { MdReadMore } from "react-icons/md";
import { useTranslation } from 'react-i18next';

import '../comp/ProjectCard.css'
export const Projects = () => {


  const { t, i18n } = useTranslation();

  return (
    <div id='projects' style={{ marginTop: '100px', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <h2>{t('project')}</h2>
      <div class="container text-center" >
        <div class="row ">
          <div className="col-lg-4"> <Card img={sanotimer} title={t('sanotimer')}
            link={'https://github.com/iremSaral/SanoTimer'}
            tech={'React-Native | FireBase | JavaScript | C++ | Nodecu8266 '}
            text={t('sano_desc')} /></div>
          <div className="col-lg-4"> <Card img={chart} title={t('chart')}
            link={'https://github.com/iremSaral/Bar-LineCharAnimation'}
            tech={'JavaFx'}
            text={t('chart_desc')} /></div>
          <div className='col-lg-4' > <Card img={employee} title={t('emp')}
            link={'https://github.com/iremSaral/EmployeeManage'}
            tech={' React.js | JavaScript | MySql | Node.js'}
            text={t('emp_desc')} /></div>

        </div>
        <div class='row' style={{ justifyContent: 'center', marginTop: '40px' }}>
          <div className="col-lg-4"> <Card img={survey} title={t('survey')}
            link={'https://github.com/iremSaral/Bar-LineCharAnimation'}
            tech={' React.js | JavaScript | MySql | Node.js'}
            text={t('survey_desc')} /></div>

          <div className="col-lg-4"> <Card img={sportsmatch} title={'SportsMatch'}
            link={'https://github.com/goktugfevzi/SportsMatch'}
            tech={' React Native | FireBase |'}
            text={t('sportsmatch_desc')} /></div>
          <div className="col-lg-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px' }}>
            <a className='card-btn' style={{ marginTop: '20px', fontSize: '16px', textAlign: 'center' }} href='https://github.com/iremSaral'>
          { t('more')}
            </a>
          </div>

        </div>
      </div>

    </div>
  )
}

