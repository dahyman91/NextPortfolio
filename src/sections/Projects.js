/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from "theme-ui";

import ButtonGroup from "components/button-group";
import Carousel from "react-multi-carousel";

import SectionHeader from "components/section-header";

import BugTracker from "assets/bugTracker.png";
import Ecommerce from "assets/ecommerce.png";
import Stock from "assets/stock.png";
import Portfolio from "assets/portfolio.png";
import Falconi from "assets/falconi.png";

const data = [
  {
    id: 1,
    title: "Bug Tracker (Capstone)",
    description:
      "Fullstack project management tool for teams to organize their workflow. Deployed on Heroku, please be patient while it boots.",
    technologies: "React | Rails | Material UI | Chart-JS",
    image: BugTracker,
    link: "https://peaceful-meadow-98604.herokuapp.com/",
    target: "blank",
  },
  {
    id: 2,
    title: "Ecommerce",
    description:
      "Fullstack Ecommerce site with cart functionality and authenticaion. Deployed on Heroku, please be patient while it boots.",
    technologies: "React | Rails | Material UI",
    image: Ecommerce,
    link: "https://ecommerce-material-ui-project.herokuapp.com/",
    target: "blank",
  },
  {
    id: 3,
    title: "Stock Tracker/Dashboard",
    description:
      "A tool to track stocks and manage a stock portfolio. Built with React, Semantic UI and ChartJS. Deployed on Netlify with JSON Server.",
    technologies: "React | Semantic UI | Chart-JS",
    image: Stock,
    link: "https://financial-dashboard-project.netlify.app/",
    target: "blank",
  },
  {
    id: 4,
    title: "Portfolio Site",
    description:
      "Fully responsive personal portfolio site built using Next.JS for SEO and perfomance optimization. Deployed to Hostgator.",
    technologies: "NextJS | Theme UI",
    image: Portfolio,
    link: "/",
    target: "",
  },
  {
    id: 5,
    title: "Falconi Media Digital Agency Site",
    description:
      "My solo first project. A fully responsive marketing site built for a digital agency integrating the Vimeo api. Deployed to Github pages.",
    technologies: "Bootstrap | Vimeo",
    image: Falconi,
    link: "https://falconimedia.com",
    target: "blank",
  },
];

const responsive = {
  laptop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Projects() {
  return (
    <section
      className="projects"
      sx={{ height: "100vh", position: "relative" }}
    >
      <Container sx={styles.headingContainer}>
        <SectionHeader slogan="Recent Works" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {data.map((item) => (
            <a
              key={item.id}
              target={item.target}
              href={item.link}
              style={{ textDecoration: "none" }}
            >
              <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
                <Heading as="h3" sx={styles.title}>
                  {item.title}
                </Heading>
                <Image sx={styles.image} src={item.image}></Image>
                <Text sx={styles.description}>{item.description}</Text>
                <div className="card-footer">
                  <div>
                    <Heading as="h4" sx={styles.heading}>
                      Technologies:
                    </Heading>
                    <Text sx={styles.designation}>{item.technologies}</Text>
                  </div>
                </div>
              </Box>
            </a>
          ))}
        </Carousel>
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
    width: "100vw",
    margin: "-80px auto 0 auto",
    // mt: "-80px",
    // px: "15px",
    ".carousel-container": {
      width: "90vw",
      maxWidth: [
        "100%",
        null,
        null,
        "750px",
        "1000px",
        "1180px",
        null,
        "calc(50% + 865px)",
      ],
      mr: ["auto", null, null, null, null, null, null, "-220px"],
      ml: "auto",
      ".react-multi-carousel-item": {
        transition: "all 0.25s",
      },
      "@media screen and (min-width: 1620px)": {
        opacity: 1,
        width: "100vw",
        marginTop: "5vh",
      },
    },
  },
  reviewCard: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    p: [
      "30px 20px 35px",
      "30px 25px 35px",
      "30px 20px 35px",
      "35px 30px 40px 40px",
      "30px 30px 35px",
      "35px 30px 40px 40px",
    ],
    bg: "white",
    textAlign: "left",
    m: [
      "28px 5px 10px 5px",
      "28px 20px 10px 20px",
      "28px 15px 10px 15px",
      "28px 15px 10px 15px",
      "30px 20px 10px",
    ],
    "&:hover": {
      boxShadow: "0px 6px 30px rgba(38, 78, 118, 0.1)",
    },
    ".card-footer": {
      display: "flex",
      alignItems: "center",
      marginTop: [5, null, null, "33px"],
    },
    "@media screen and (min-width: 1620px)": {
      mb: "40px",
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    textAlign: "center",
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.6, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3,
  },
  designation: {
    color: "primary",
    fontWeight: "500",
    fontSize: 1,
    lineHeight: 1.2,
  },
  links: {
    display: "flex",
  },
  image: {
    // marginLeft: "5",
    height: "25vh",
    width: "auto",
    // margin: "auto",
    // alignSelf: "center",
  },
  headingContainer: {
    paddingTop: "50px",
    "@media screen and (min-width: 1620px)": {
      paddingTop: "100px",
    },
  },
};
