import React from "react";

// Data for all footer sections (except the brand one)
const footerSections = [
  {
    title: "PRODUCTS",
    links: [
      "Rovo",
      "Jira",
      "Jira Align",
      "Jira Service Management",
      "Confluence",
      "Loom",
      "Trello",
      "Bitbucket",
    ],
    cta: "See all products",
  },
  {
    title: "RESOURCES",
    links: [
      "Technical support",
      "Purchasing & licensing",
      "Atlassian Community",
      "Knowledge base",
      "Marketplace",
      "My account",
    ],
    cta: "Create support ticket",
  },
  {
    title: "LEARN",
    links: [
      "Partners",
      "Training & certification",
      "Documentation",
      "Developer resources",
      "Enterprise services",
    ],
    cta: "See all products",
  },
];

// Company links for the brand section
const companyLinks = [
  "Company",
  "Careers",
  "Events",
  "Blogs",
  "Investor Relations",
  "Atlassian Foundation",
  "Press kit",
  "Contact us",
];

// Component for a footer column (PRODUCTS / RESOURCES / LEARN)
const FooterColumn = ({ title, links, cta }) => (
  <div className="flex flex-col justify-between text-sm flex-1 font-semibold text-gray-800">
    <ul className="flex flex-col gap-5">
      <li className="font-bold text-gray-900">{title}</li>
      {links.map((text) => (
        <li key={text} className="hover:underline">
          <a href="#">{text}</a>
        </li>
      ))}
    </ul>

    {cta && (
      <a className="flex items-center gap-1 mt-12 group" href="#">
        <span className="group-hover:underline">{cta}</span>
        <img
          className="group-hover:translate-x-1 duration-300"
          src="/Guard/Right-Arrow-Black.svg"
          alt=""
        />
      </a>
    )}
  </div>
);

// Component for the brand + company links (the first column)
const FooterBrandSection = () => (
  <div className="flex-1">
    {/* Logo */}
    <div className="mb-6">
        <img
          className="h-6"
          src="/Guard/logos-atlassian-mini-icon-onecolor-blue.svg"
          alt="Guard"
        />
    </div>

    {/* Company Links */}
    <ul className="flex flex-col gap-5 text-sm font-semibold text-gray-800">
      {companyLinks.map((link) => (
        <li key={link} className="hover:underline">
          <a href="#">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

// Main Footer component
const Footer = () => (
  <footer className="w-full flex flex-col items-center">
    {/* Top Section */}
    <div
      id="footerContainer"
      className="w-[95%] lg:w-[85%] max-w-[1200px] bg-gray-100 rounded-lg py-10 px-6 gap-16"
    >
      <div
        id="footerNav"
        className="flex w-full flex-col lg:flex-row gap-16"
      >
        <FooterBrandSection />
        {footerSections.map((section) => (
          <FooterColumn key={section.title} {...section} />
        ))}
      </div>
    </div>

    {/* Bottom Section */}
    <div
      id="footerDetails"
      className="flex flex-col lg:flex-row justify-between items-center w-[95%] lg:w-[85%] max-w-[1200px] rounded-lg py-10 px-6 gap-6 text-sm text-gray-800 font-semibold"
    >
      <div className="text-center lg:text-left">
       Copyright © 2025 Atlassian
      </div>
      <ul className="flex gap-4">
        <li className="hover:underline cursor-pointer">Privacy Policy</li>
        <li className="hover:underline cursor-pointer">Terms</li>
        <li className="hover:underline cursor-pointer">Impressum</li>
      </ul>
    </div>
  </footer>
);

export default Footer;
