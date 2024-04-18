const menuData = [
  {
    id: 1,
    title: "About Us",
    newTab: true,
    submenu: [
      {
        id: 11,
        title: "Who we are and what we do",
        path: "/who-and-what",
        newTab: false,
      },
      {
        id: 12,
        title: "Mission & Vision",
        path: "/Mission",
        newTab: false,
      },
      {
        id: 13,
        title: "History",
        path: "/history",
        newTab: false,
      },
      {
        id: 14,
        title: "National Staff",
        path: "/leadership",
        newTab: false,
      },
      {
        id: 15,
        title: "Board Members",
        path: "/diversity-inclusion",
        newTab: false,
      },
      {
        id: 16,
        title: "MARAC Advisories",
        newTab: true,
        submenu: [
          {
            id: 161,
            title: "MARAC Encourages Clinical Research Studies",
            path: "/who-and-what",
            newTab: false,
          },
          {
            id: 162,
            title: "MARAC Advisory Statement: Immunizations",
            path: "/Mission",
            newTab: false,
          },
          {
            id: 163,
            title: "MARAC Advisory Statement: Monkeypox",
            path: "/history",
            newTab: false,
          },
          {
            id: 164,
            title:
              "MARAC Advisory: COVID-19 and Sickle Cell Disease (March 2022)",
            path: "/leadership",
            newTab: false,
          },
          {
            id: 165,
            title: "Gene Therapy & Bone Marrow Therapies",
            path: "/diversity-inclusion",
            newTab: false,
          },
          {
            id: 166,
            title: "Temporary Suspension of Clinical Trials",
            path: "/diversity-inclusion",
            newTab: false,
          },
        ],
      },
      {
        id: 17,
        title: "Financials and Accountability",
        path: "/diversity-inclusion",
        newTab: false,
      },
      {
        id: 18,
        title: "Job Openings",
        path: "/diversity-inclusion",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "Sickle Cell Disease",
    newTab: true,
    submenu: [
      {
        id: 21,
        title: "Defination",
        newTab: false,
        submenu: [
          {
            id: 211,
            title: "What is Sickle Cell Disease (SCD)?",
            path: "/who-and-what",
            newTab: false,
          },
          {
            id: 212,
            title: "What is Sickle Cell Trait (SCT)?",
            path: "/Mission",
            newTab: false,
          },
          {
            id: 213,
            title: "Complications & Treatments",
            path: "/history",
            newTab: false,
          },
          {
            id: 214,
            title: "Glossary",
            path: "/leadership",
            newTab: false,
          },
          {
            id: 215,
            title: "FAQs",
            path: "/diversity-inclusion",
            newTab: false,
          },
        ],
      },
      {
        id: 22,
        title: "Links & Resources",
        path: "/Mission",
        newTab: false,
      },
      {
        id: 23,
        title: "Get Connected",
        path: "/history",
        newTab: false,
      },
      {
        id: 24,
        title: "oneSCDVoice",
        path: "/leadership",
        newTab: false,
      },
      {
        id: 25,
        title: "Education & Research",
        newTab: false,
        submenu: [
          {
            id: 251,
            title: "SCD Educational Repository",
            path: "/who-and-what",
            newTab: false,
          },
          {
            id: 252,
            title: "Research",
            path: "/who-and-what",
            newTab: false,
          },
        ],
      },
      {
        id: 26,
        title: "Our Stories",
        newTab: true,
        path: "/our-story",
      },
      {
        id: 27,
        title: "Covid-19",
        newTab: false,
        submenu: [
          {
            id: 271,
            title: "Information and Resources",
            path: "/who-and-what",
            newTab: false,
          },
          {
            id: 272,
            title: "Template Letters",
            path: "/who-and-what",
            newTab: false,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Gene Therapy",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "SCDAA Statement on Approval",
        path: "/about",
        newTab: false,
      },
      {
        id: 32,
        title: "Warrior FAQs",
        path: "/contact",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Our Initiatives",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "SCDAA and MedicAlert Pilot Program",
        path: "/events/university-chapters",
        newTab: false,
      },
      {
        id: 42,
        title: "Mental Health and Wellness",
        path: "/events/school-chapters",
        newTab: false,
      },
      {
        id: 43,
        title: "Community Health Worker Training",
        path: "/events/school-chapters",
        newTab: false,
      },
      {
        id: 42,
        title: "The P.O.W.E.R ECHO Project",
        path: "/events/school-chapters",
        newTab: false,
      },
      {
        id: 42,
        title: "Leadership Academy",
        path: "/events/school-chapters",
        newTab: false,
      },
      {
        id: 42,
        title: "Donate Blood for Sickle Cell",
        path: "/events/school-chapters",
        newTab: false,
      },
      {
        id: 42,
        title: "National Sickle Cell Advocacy Network",
        path: "/events/school-chapters",
        newTab: false,
      },
      {
        id: 42,
        title: "Volunteer",
        path: "/events/school-chapters",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Events",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Giving Tuesday",
        path: "/resources/financial-tools",
        newTab: false,
      },
      {
        id: 52,
        title: "Masterclass",
        path: "/sip-calculator",
        newTab: false,
      },
      {
        id: 53,
        title: "National SCD Policy Forum",
        path: "/emi-calculator",
        newTab: false,
      },
      {
        id: 54,
        title: "Walk With The Stars",
        path: "/emi-calculator",
        newTab: false,
      },
      {
        id: 55,
        title: "World Sickle Cell Day",
        path: "/emi-calculator",
        newTab: false,
      },
      {
        id: 56,
        title: "National Sickle Cell Awareness Month",
        path: "/emi-calculator",
        newTab: false,
      },
      {
        id: 57,
        title: "Annual National Convention",
        path: "/emi-calculator",
        newTab: false,
      },
      {
        id: 58,
        title: "P.O.W.E.R ECHO Trainings",
        path: "/emi-calculator",
        newTab: false,
      },
    ],
  },
  {
    id: 6,
    title: "News",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "SCDAA in the Press",
        path: "/about",
        newTab: false,
      },
      {
        id: 62,
        title: "Sickle Cell News",
        path: "/contact",
        newTab: false,
      },
      {
        id: 63,
        title: "Media Partnerships",
        path: "/contact",
        newTab: false,
      },
    ],
  },
];
export default menuData;
