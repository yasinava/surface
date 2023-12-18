import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import ImageCard from "../imageCard/ImageCard";

const Card = ({ data }) => {
  return (
    <div>
      <div className="card-container">
        <div className="card-container-img">
          <ImageCard data={data} />
        </div>
        <div className="card-container-info">
          {data?.saveUp ? (
            <div className="card-offer">
              <h4>تخفیف {Number(data?.saveUp).toLocaleString()} تومان </h4>
              <span>
                <BiSolidOffer />
              </span>
            </div>
          ) : (
            <div className="card-offer-false"></div>
          )}
          <h2>{data?.title}</h2>
          <div className="card-price">
            {data?.oldPrice && (
              <span>{Number(data?.oldPrice).toLocaleString()} تومان</span>
            )}
            <p>{data?.price.toLocaleString()} تومان</p>
          </div>
          <div className="card-desc">
            <p>{data?.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
