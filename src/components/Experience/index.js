import React from 'react';
import Section from '../Shared/Section';
import ResumeContent from './ResumeContent';

const Experience = () => {
  return (
    <Section id="experience">
      <div>
        <Section.Header text="Experience"/>
        <ResumeContent
          title="Senior Web Developer"
          company="Intelitec Solutions"
          date="March 2013 - Present">
          Bring to the table win-win survival strategies to ensure
          proactive domination. At the end of the day, going forward,
          a new normal that has evolved from generation X is on the
          runway heading towards a streamlined cloud solution. User
          generated content in real-time will have multiple
          touchpoints for offshoring.
        </ResumeContent>
        <ResumeContent
          title="Web Developer"
          company="Intelitec Solutions"
          date="December 2011 - March 2013">
          Capitalize on low hanging fruit to identify a ballpark
          value added activity to beta test. Override the digital
          divide with additional clickthroughs from DevOps.
          Nanotechnology immersion along the information highway will
          close the loop on focusing solely on the bottom line.
        </ResumeContent>
        <ResumeContent
          title="Junior Web Designer"
          company="Shout! Media Productions"
          date="July 2010 - December 2011">
          Podcasting operational change management inside of
          workflows to establish a framework. Taking seamless key
          performance indicators offline to maximise the long tail.
          Keeping your eye on the ball while performing a deep dive on
          the start-up mentality to derive convergence on
          cross-platform integration.
        </ResumeContent>
        <ResumeContent
          title="Web Design Intern"
          company="Shout! Media Productions"
          date="September 2008 - June 2010">
          Collaboratively administrate empowered markets via
          plug-and-play networks. Dynamically procrastinate B2C users
          after installed base benefits. Dramatically visualize
          customer directed convergence without revolutionary ROI.
        </ResumeContent>
      </div>
    </Section>
  );
};

export default Experience;
