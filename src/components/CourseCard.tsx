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
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
