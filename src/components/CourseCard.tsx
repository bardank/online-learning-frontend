import React from "react";

interface Props {
  title: string;
}

const CourseCard: React.FC<Props> = ({ title }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src="./assets/images/courseImage.png" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Java Programming Course
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          est? Enim consectetur minima ipsam assumenda.
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Java</div>
          <div className="badge badge-outline">Web Development</div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
