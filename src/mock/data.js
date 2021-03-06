import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Chris Whitton',
  subtitle: 'MERN Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Chris Shopping Cart App',
    info: 'Uses React and Context for state management',
    info2: '',
    url: 'https://chriswhittonshoppingcart.netlify.app/',
    repo: 'https://github.com/PROCHRISDeveloper7/Shopping-Cart-App-master', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chrischat.png',
    title: 'Chris Chat Room',
    info: 'Coded in Vanilla JS with Node Express and Websockets',
    info2: '',
    url: 'https://chris-chatroom.herokuapp.com/',
    repo: 'https://github.com/PROCHRISDeveloper7/chris-chatroom', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chrisflix.png',
    title: 'Chris Flix Film App',
    info: 'A simple streamlined clone of Netflix. Uses fetch for API calls and stores your favourite films',
    info2: '',
    url: 'https://chris-flix.netlify.app/',
    repo: 'https://github.com/PROCHRISDeveloper7/chrisFlix-film-app-master', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
