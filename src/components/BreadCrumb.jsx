import React from "react";
import { useLocation, Link } from "react-router-dom";

export const BreadCrumb = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  // Start the breadcrumb with "Dashboard"
  const breadcrumbItems = [
    <span key="dashboard">
      <Link to="/">Dashboard</Link>
    </span>,
  ];

  // Add the remaining path parts with separators and capitalize the first letter
  pathParts.forEach((part, index) => {
    const path = `/${pathParts.slice(0, index + 1).join("/")}`;
    const capitalizedPart = part.charAt(0).toUpperCase() + part.slice(1); // Capitalizes the first letter
    breadcrumbItems.push(
      <span key={path}>
        {" / "}
        <Link to={path}>{capitalizedPart}</Link>
      </span>
    );
  });

  return (
    <header>
      <h3>{breadcrumbItems}</h3>
    </header>
  );
};
