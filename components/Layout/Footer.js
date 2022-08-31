import Link from "next/link";
import React from "react";

import { productsLinks } from "../../lib/navLinks";
import classes from "./Footer.module.css";

import NewsletterForm from "./NewsletterForm";

const Footer = () => {
  return (
    <div className={classes.footer_wrapper}>
      <div className={classes.footer_top}>
        <div>
          <h4>SHOP</h4>
          <ul>
            {productsLinks.map((link) => (
              <li key={link.text}>
                <Link href={link.url}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>CORPORATE INFO</h4>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/delivery-info">Delivery Information</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions">
                Terms And Conditions Of Sale
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us.</Link>
            </li>
          </ul>
        </div>
        <div className={classes.service_links}>
          <h4>CUSTOMER SERVICE(N/A)</h4>
          <ul>
            <li>Help</li>
            <li>Track Your Order</li>
            <li>Sitemap</li>
            <li>Stores</li>
          </ul>
        </div>
        <div className={classes.news_letter}>
          <h4>NEWSLETTER</h4>
          <p className={classes.paragraph}>
            be the first to know about our newest arrivals, special offers and
            store events near you.
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className={classes.copy_right}>
        <p>
          &copy; Created by{" "}
          <Link href="https://ziadessam.com/">
            <a target="_blank">Ziad Esam</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
