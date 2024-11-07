import "./portfolio.css";
import netflixImg from "../../assets/netflix.jpg";
import bbmsImg from "../../assets/blood.jpg";
import teslaImg from "../../assets/tesla.jpg";
import expenseImg from "../../assets/expenseTracker.jpg";
import blogImg from "../../assets/blog.jpg";
import airTravel from "../../assets/airTravel.jpg";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";


const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: project1,
      title: "Kaligandaki Hydropower",
      Post: "https://www.linkedin.com/posts/bimal7_maintenance-kga-hps-activity-7054743634511880192-OJZ7?utm_source=share&utm_medium=member_desktop",
      demo: "",
    },
    {
      id: 2,
      image: project2,
      title: "Vaccum Circuits",
      post: "https://www.linkedin.com/posts/bimal7_vcb-mvpanel-activity-7194339909883600896-eVPK?utm_source=share&utm_medium=member_desktop",
      demo: "https://www.linkedin.com/posts/bimal7_vcb-mvpanel-activity-7194339909883600896-eVPK?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: 1,
      image: project1,
      title: "Kaligandaki Hydropower",
      Post: "https://www.linkedin.com/posts/bimal7_maintenance-kga-hps-activity-7054743634511880192-OJZ7?utm_source=share&utm_medium=member_desktop",
      demo: "",
    },
    {
      id: 2,
      image: project2,
      title: "Vaccum Circuits",
      post: "https://www.linkedin.com/posts/bimal7_vcb-mvpanel-activity-7194339909883600896-eVPK?utm_source=share&utm_medium=member_desktop",
      demo: "https://www.linkedin.com/posts/bimal7_vcb-mvpanel-activity-7194339909883600896-eVPK?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: 1,
      image: project1,
      title: "Kaligandaki Hydropower",
      Post: "https://www.linkedin.com/posts/bimal7_maintenance-kga-hps-activity-7054743634511880192-OJZ7?utm_source=share&utm_medium=member_desktop",
      demo: "",
    },
    {
      id: 2,
      image: project2,
      title: "Vaccum Circuits",
      post: "https://www.linkedin.com/posts/bimal7_vcb-mvpanel-activity-7194339909883600896-eVPK?utm_source=share&utm_medium=member_desktop",
      demo: "https://www.linkedin.com/posts/bimal7_vcb-mvpanel-activity-7194339909883600896-eVPK?utm_source=share&utm_medium=member_desktop",
    },
    // {
    //   id: 3,
    //   image: blogImg,
    //   title: "Blog App",
    //   github: "https://github.com/AryalSubin/Blog_App",
    //   demo: "https://blogproject-93385.firebaseapp.com/",
    // },
    // {
    //   id: 4,
    //   image: bbmsImg,
    //   title: "Blood Bank Mgmt System",
    //   github: "https://github.com/AryalSubin/Blood_Bank_Mgt_System",
    //   demo: "/#portfolio",
    // },
    // {
    //   id: 5,
    //   image: teslaImg,
    //   title: "Tesla clone",
    //   github: "https://github.com/AryalSubin/TESLA_CLONE",
    //   demo: "/#portfolio",
    // },
    // {
    //   id: 6,
    //   image: expenseImg,
    //   title: "Expense Tracker",
    //   github: "https://github.com/AryalSubin/ExpenseTracker",
    //   demo: "https://expense-tracker00.netlify.app/",
    // },
    // {
    //   id: 7,
    //   image: airTravel,
    //   title: "Air Travel",
    //   github: "https://github.com/AryalSubin/AirTravel",
    //   demo: "https://travelair.netlify.app/",
    // },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3> {title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Post
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
