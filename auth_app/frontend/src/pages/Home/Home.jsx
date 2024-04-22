import React from "react";
import mobile_image from "../../assets/mobile.jpg";

const Home = () => {
  return (
    <div className="d-flex flex-wrap">
      <div className="leftsection">
        <h1 className="display-1">Project Management Tool</h1>
        <p>
          Ecodres redefines project management globally, offering a
          comprehensive suite of tools for seamless collaboration. Teams
          effortlessly organize projects, assign daily tasks, and manage
          members, fostering efficiency and clarity. The Kanban system visually
          tracks project progress, while robust defect lifecycle and test case
          management ensure top-notch quality throughout. Ecodres empowers teams
          to transcend boundaries and deliver results with confidence.
        </p>

        <p>
          In the fast-paced landscape of project management, Ecodres emerges as
          a cornerstone of success. By centralizing project organization and
          task assignment, it cultivates clarity and accountability, driving
          productivity to new heights. Seamlessly integrating global teams,
          Ecodres facilitates efficient communication and collaboration, while
          its comprehensive suite of features ensures teams navigate challenges
          with ease. With Ecodres, innovation, adaptability, and efficiency
          converge, unlocking teams' full potential in the pursuit of
          excellence.
        </p>

        <div>
          <a href="/login" className="btn btn-sm btn-outline-success me-3">
            login
          </a>
          <a href="/register" className="btn btn-sm btn-outline-success ms-3">
            Register
          </a>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center rightsection">
        <img src={mobile_image} className="rounded" alt="pmc" />
      </div>
    </div>
  );
};

export default Home;
