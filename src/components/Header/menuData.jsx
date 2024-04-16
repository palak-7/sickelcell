const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    newTab: true,
    submenu: [
      {
        id: 21,
        title: "Who we are and what we do",
        path: "/who-and-what",
        newTab: false,
      },
      {
        id: 22,
        title: "Mission & Vision",
        path: "/Mission",
        newTab: false,
      },
      {
        id: 23,
        title: "History",
        path: "/history",
        newTab: false,
      },
      {
        id: 24,
        title: "National Staff",
        path: "/leadership",
        newTab: false,
      },
      {
        id: 25,
        title: "Board Members",
        path: "/diversity-inclusion",
        newTab: false,
      },
      {
        id: 26,
        title: "MARAC Advisories",
        newTab: true,
        submenu: [
          {
            id: 261,
            title: "MARAC Encourages Clinical Research Studies",
            path: "/who-and-what",
            newTab: false,
          },
          {
            id: 262,
            title: "MARAC Advisory Statement: Immunizations",
            path: "/Mission",
            newTab: false,
          },
          {
            id: 263,
            title: "MARAC Advisory Statement: Monkeypox",
            path: "/history",
            newTab: false,
          },
          {
            id: 264,
            title:
              "MARAC Advisory: COVID-19 and Sickle Cell Disease (March 2022)",
            path: "/leadership",
            newTab: false,
          },
          {
            id: 265,
            title: "Gene Therapy & Bone Marrow Therapies",
            path: "/diversity-inclusion",
            newTab: false,
          },
          {
            id: 266,
            title: "Temporary Suspension of Clinical Trials",
            path: "/diversity-inclusion",
            newTab: false,
          },
        ],
      },
      {
        id: 27,
        title: "Financials and Accountability",
        path: "/diversity-inclusion",
        newTab: false,
      },
      {
        id: 28,
        title: "Job Openings",
        path: "/diversity-inclusion",
        newTab: false,
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
// const menuData = [
//   {
//     id: 1,
//     title: "Home",
//     path: "/",
//     newTab: false,
//   },
//   {
//     id: 2,
//     title: "About",
//     path: "/about",
//     newTab: false,
//   },
//   {
//     id: 33,
//     title: "Blog",
//     path: "/blog",
//     newTab: false,
//   },
//   {
//     id: 3,
//     title: "Support",
//     path: "/contact",
//     newTab: false,
//   },
//   {
//     id: 4,
//     title: "Pages",
//     newTab: false,
//     submenu: [
//       {
//         id: 41,
//         title: "About Page",
//         path: "/about",
//         newTab: false,
//         submenu: [
//           {
//             id: 41,
//             title: "About Page",
//             path: "/about",
//             newTab: false,
//           },
//           {
//             id: 42,
//             title: "Contact Page",
//             path: "/contact",
//             newTab: false,
//           },
//         ],
//       },
//       {
//         id: 42,
//         title: "Contact Page",
//         path: "/contact",
//         newTab: false,
//       },
//       {
//         id: 43,
//         title: "Blog Grid Page",
//         path: "/blog",
//         newTab: false,
//       },
//       {
//         id: 44,
//         title: "Blog Sidebar Page",
//         path: "/blog-sidebar",
//         newTab: false,
//       },
//       {
//         id: 45,
//         title: "Blog Details Page",
//         path: "/blog-details",
//         newTab: false,
//       },
//       {
//         id: 46,
//         title: "Sign In Page",
//         path: "/signin",
//         newTab: false,
//       },
//       {
//         id: 47,
//         title: "Sign Up Page",
//         path: "/signup",
//         newTab: false,
//       },
//       {
//         id: 48,
//         title: "Error Page",
//         path: "/error",
//         newTab: false,
//       },
//     ],
//   },
// ];
// export default menuData;