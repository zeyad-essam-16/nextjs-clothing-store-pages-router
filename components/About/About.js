import React from "react";

import Image from "next/image";

import classes from "./About.module.css";

const About = () => {
  return (
    <>
      <div className={classes.page_hero}>
        <h1>About Us</h1>
        <p>Find out more about our vision and what we as a brand stand for</p>
        <div className="background_image">
          <Image
            src="/about-background.jpg"
            alt="about"
            width={1920}
            height={1080}
            layout="responsive"
            objectFit="cover"
            objectPosition="40% 50%"
            priority={true}
          />
        </div>
      </div>
      <div className={classes.about_wrapper}>
        <section className={classes.main_section}>
          <h2>Store Name</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            adipiscing at in tellus integer feugiat scelerisque varius morbi.
            Morbi enim nunc faucibus a pellentesque sit amet porttitor eget.
            Imperdiet dui accumsan sit amet nulla. Sed cras ornare arcu
          </p>
        </section>
        <section className={classes.mini_section}>
          <div>
            <h3>Section Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Viverra adipiscing at in tellus integer feugiat scelerisque varius
              morbi. Morbi enim nunc faucibus a pellentesque sit amet porttitor
              eget
            </p>
          </div>
        </section>
        <section className={classes.mini_section}>
          <div>
            <h3>Section Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Viverra adipiscing at in tellus integer feugiat scelerisque varius
              morbi. Morbi enim nunc faucibus a pellentesque sit amet porttitor
              eget
            </p>
          </div>
        </section>
        <section className={classes.mini_section}>
          <div>
            <h3>Section Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Viverra adipiscing at in tellus integer feugiat scelerisque varius
              morbi. Morbi enim nunc faucibus a pellentesque sit amet porttitor
              eget
            </p>
          </div>
        </section>
        <section className={classes.mini_section}>
          <div>
            <h3>Section Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Viverra adipiscing at in tellus integer feugiat scelerisque varius
              morbi. Morbi enim nunc faucibus a pellentesque sit amet porttitor
              eget
            </p>
          </div>
        </section>
        <section className={classes.mini_section}>
          <div>
            <h3>Section Title</h3>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
              <li>tempor incididunt ut labore et dolor</li>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
              <li>LPurus sit amet luctus venenatis lectusr</li>
              <li>adipiscing tristique risus nec feugiat. </li>
            </ul>
          </div>
        </section>
        <section className={classes.mini_section}>
          <div>
            <h3>Section Title</h3>
            <ul>
              <li>elit ullamcorper. Mi ipsum faucibus vitae</li>
              <li>tincidunt nunc pulvinar sapien et.</li>
              <li>Volutpat odio facilisis mauris sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
              <li>Erat nam at convallis convallis tellus</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
