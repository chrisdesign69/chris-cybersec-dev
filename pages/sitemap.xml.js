import React from "react";
import fs from "fs";

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const baseURL = {
    development: "http://localhost:1304",
    production: "https://www.chris-cybersec.dev"
  }[process.env.NODE_ENV];
  // console.log(baseURL);

  // Read the Filesystem
  const staticPages = fs
    .readdirSync("app")
    .filter((staticPage) => {
      // console.log('staticPage', staticPage);
      return ![
        "components",
        "head.js",
        "layout.js",
        "page.js",
        "styles"
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
        
        // console.log(`${baseURL}/${staticPagePath}`)
      return `
      ${baseURL}/${staticPagePath}`;
    });

  // console.log(staticPages);

  const sitemapDate = () => {
    const year = new Date().getFullYear();
    const month =
      new Date().getMonth() < 10
        ? `0${new Date().getMonth() + 1}`
        : `${new Date().getMonth() + 1}`;
    const day =
      new Date().getDate() < 10
        ? `0${new Date().getDate()}`
        : `${new Date().getDate()}`;
    return `${year}-${month}-${day}`;
  };

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    
    <!-- We'll render the Base url here -->
    <url>
    <loc>${baseURL}/ </loc>
    <lastmod>${sitemapDate()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    </url>
    
    



        <!-- We'll render the URLs for our sitemap here. -->
            ${staticPages
              .map((url) => {
                return `
                <url>
                    <loc>${url}</loc>
                    <lastmod>${sitemapDate()}</lastmod>
                    <changefreq>weekly</changefreq>
                    <priority>1.0</priority>
                </url>`;
              })
              .join("")}

        </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return {
    props: {}
  };
};

export default Sitemap;
