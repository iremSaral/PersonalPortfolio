
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BsPersonWorkspace } from "react-icons/bs";
import '../App.css';
import { useTranslation } from 'react-i18next';

export const Experience = () => {

  const { t, i18n } = useTranslation();

  return (
    <div id='experience' style={{ marginTop: '100px' }}  >
      <h2 style={{ textAlign: 'center' }}>{t('experience')}</h2>
      <VerticalTimeline lineColor='#A04053' >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#0B1320', color: '#fff' }}
          contentArrowStyle={{ borderRight: '5px solid  #A04053' }}
          date={t("dateBay")}
          iconStyle={{ background: '#0B1320', color: '#fff', boxShadow: '0 0 0 2px #A04053' }}
          icon={<BsPersonWorkspace />}
        >          <h4 className="vertical-timeline-element-subtitle">Baykar Makina Tic. A.Ş. </h4>
          <h4 className="vertical-timeline-element-title">{t('ınternS')} | </h4>

          <p>
            Front-End developer ,React.js, TypeScript, OData, Sql
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#0B1320', color: '#fff' }}
          contentArrowStyle={{ borderRight: '5px solid  #A04053' }}
          date={t("dateLogo")}
          iconStyle={{ background: '#0B1320', color: '#fff', boxShadow: '0 0 0 2px #A04053' }}
          icon={<BsPersonWorkspace />}

        >
          <h4 className="vertical-timeline-element-subtitle">Logo Yazılım  </h4>
          <h4 className="vertical-timeline-element-title">{t('ınternS')} |</h4>
          <p>
            MySql, Jira, React.js, JavaScript, Stash
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#0B1320', color: '#fff' }}
          contentArrowStyle={{ borderRight: '5px solid  #A04053' }}
          date={t('dateE')}
          iconStyle={{ background: '#0B1320', color: '#fff', boxShadow: '0 0 0 2px #A04053' }}
          icon={<BsPersonWorkspace />}
        >
          <h4 className="vertical-timeline-element-title">Elektroland Defense Industry Inc. |</h4>
          <h4 className="vertical-timeline-element-subtitle">{t('ınternM')}</h4>
          <p>
            Android Development, Java, Python
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

