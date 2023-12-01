import createCards from './cards.js';
import createFeatureImage from './featureImage.js';
import createFooter from './footer.js';
import createFullLayoutSection from './fullLayoutSection.js';
import createHomepage from './homepage.js';
import createHeader from './header.js';
import createHero from './hero.js';
import createMetadata from './metadata.js';
import cleanUpHTML from './cleanUpHTML.js';

export const transformers = [
  cleanUpHTML,
  createFullLayoutSection,
  createHero,
  createHomepage,
  createCards,
  createFeatureImage,
];

export const xfTransformers = [
  createFooter,
];

export const xfAsyncTransformers = [
  createHeader,
];

export const preTransformers = [

];

export const postTransformers = [
  createMetadata,
];
