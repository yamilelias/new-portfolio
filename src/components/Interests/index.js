import React from 'react';
import Section from '../Shared/Section';

const Interests = () => {
  return (
    <Section id="interests">
      <Section.Header text="Interests"/>
      <p>Apart from being a web developer, I enjoy most of my time being
        outdoors. In the winter, I am an avid skiier and novice ice
        climber. During the warmer months here in Colorado, I enjoy
        mountain biking, free climbing, and kayaking.</p>
      <p className="mb-0">When forced indoors, I follow a number of
        sci-fi and fantasy genre movies and television shows, I am an
        aspiring chef, and I spend a large amount of my free time
        exploring the latest technolgy advancements in the front-end web
        development world.</p>
    </Section>
  );
};

export default Interests;
