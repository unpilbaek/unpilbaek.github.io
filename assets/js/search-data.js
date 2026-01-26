// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-shyam-kedar-between-remembrance-and-renewal",
      
        title: "Shyam Kedar — between Remembrance and Renewal",
      
      description: "A 1985 performance of Shyam Kedar by Nikhil Banerjee and Zakir Hussain evokes a mood of nostalgia and hope as the year ends.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/shyam-kedar/";
        
      },
    },{id: "post-agentic-ai-for-automating-scientific-discovery",
      
        title: "Agentic AI for Automating Scientific Discovery",
      
      description: "A synthesis on how agentic AI can automate parts of scientific discovery, based on a lecture from the Agentic AI MOOC.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/agentic-ai-mooc/";
        
      },
    },{id: "news-vitamin-em-returns-to-piedmont-piedmont-center-for-the-arts-piedmont-7-30-pm",
          title: 'Vitamin Em Returns to Piedmont! Piedmont Center for the Arts, Piedmont — 7:30...',
          description: "",
          section: "News",},{id: "news-vitamin-em-at-pacifica-performances-mildred-owens-concert-hall-pacifica-7-30-pm",
          title: 'Vitamin Em at Pacifica Performances Mildred Owens Concert Hall, Pacifica — 7:30 PM...',
          description: "",
          section: "News",},{id: "news-ramya-shankar-wyldflowr-arts-oakland-7-30-pm",
          title: 'Ramya Shankar  Wyldflowr Arts, Oakland — 7:30 PM',
          description: "",
          section: "News",},{id: "news-vitamin-em-at-ocean-view-drive-chamber-music-ocean-view-drive-chamber-music-oakland-7-00-pm",
          title: 'Vitamin Em at Ocean View Drive Chamber Music Ocean View Drive Chamber Music,...',
          description: "",
          section: "News",},{id: "news-oakland-in-c-in-honor-of-terry-riley-s-90th-birthday-wyldflowr-arts-oakland-7-30-pm",
          title: 'Oakland ‘In C’ in honor of Terry Riley’s 90th Birthday! Wyldflowr Arts, Oakland...',
          description: "",
          section: "News",},{id: "news-sameer-gupta-trio-ft-siddique-ahmed-middle-eastern-ragas-meyhouse-jazz-palo-alto-6-30-pm-8-30-pm",
          title: 'Sameer Gupta Trio ft. Siddique Ahmed — Middle Eastern Ragas Meyhouse Jazz, Palo...',
          description: "",
          section: "News",},{id: "news-philip-gelb-residency-day-3-pauline-oliveros-tribute-wyldflowr-arts-oakland-7-30-pm",
          title: 'Philip Gelb Residency Day 3 - Pauline Oliveros Tribute Wyldflowr Arts, Oakland —...',
          description: "",
          section: "News",},{id: "news-vitamin-em-at-sundays-4-crowden-music-center-berkeley-4-00-pm",
          title: 'Vitamin Em at Sundays @ 4 Crowden Music Center, Berkeley — 4:00 PM...',
          description: "",
          section: "News",},{id: "news-vitamin-em-at-throckmorton-theatre-throckmorton-theatre-mill-valley-12-00-pm",
          title: 'Vitamin Em at Throckmorton Theatre  Throckmorton Theatre, Mill Valley — 12:00 PM',
          description: "",
          section: "News",},{id: "news-vitamin-em-at-the-hillside-club-the-hillside-club-7-30-pm",
          title: 'Vitamin Em at The Hillside Club  The Hillside Club — 7:30 PM',
          description: "",
          section: "News",},{id: "news-ramya-shankar-s-the-human-experience-sfiaf-2026-community-music-center-2-00-pm",
          title: 'Ramya Shankar’s The Human Experience (SFIAF 2026) Community Music Center — 2:00 PM...',
          description: "",
          section: "News",},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/unpilbaek", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=sJ0SOHUAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-8628-7740", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/unpilbaek", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/unpil.baek", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/unpil.baek", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/unpilbaek", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
