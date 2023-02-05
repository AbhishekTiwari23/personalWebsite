export default (req, res) => {
  res.status(200).json({
    myname: {
      firstName: "Abhishek",
      lastName: "Tiwari",
  },
  dob: {
      date_: "23",
      month_: "July",
      Year_: "2002",
  },
  myAddress: {

      city: "New Delhi",
      state: "Delhi",
      country: "India",
  },
  socials: {
      myGithub: "https://github.com/AbhishekTiwari23",
      myLinkedin: "https://www.linkedin.com/in/tiwariabhishek23/",
      myTwitter: "https://twitter.com/ABHISHEKTI23",
      myDev: "https://dev.to/abhishektiwari23",
      myLinkee: "",
      
  },
  college: {
      myBtechCollegeFullName: "Netaji Subhash University of Techology",
      myBtechCollegeShortName: "NSUT",
      myBtechCollegeDegreemajorsfull: "Electronics and communication Engineering",
      myBtechCollegeDegreeSpecialisation: "Internet of Things",
      myBtechBranchName: "EIOT",
      myBtechTimeLine: {
          start: "January 2022",
          end: "March 2025",
      }

  },


  });
};
