import { LucideIcon } from "lucide-react";

import { Link } from "react-router-dom";

interface LatestProductProps {
  id: number;
  name: string;
  price: number;
  imgURL: string;
  icon: React.ReactElement<LucideIcon>;
}

export function LatestProduct({
  name,
  price,
  imgURL,
  icon,
}: LatestProductProps) {
  return (
    <div className="flex flex-col justify-center items-start gap-6 overflow-hidden rounded-3xl hover:rounded-3xl">
      <Link
        to={{ pathname: "/products/id" }}
        className="relative w-full h-[400px] inline-block overflow-hidden rounded-3xl hover:rounded-3xl"
      >
        <img
          src={imgURL}
          alt="product image"
          className="w-full h-full object-cover hover:scale-110 duration-500 transition-transform hover:rounded-3xl"
        />
      </Link>
      <div className="flex flex-col justify-center items-start gap-4 w-full h-fit">
        <div className="flex flex-col justify-center items-start gap-4 w-full h-fit">
          <div className="flex flex-row justify-between items-center w-full">
            <h4 className="text-3xl">{name}</h4>
            <div>{icon}</div>
          </div>
          <p className="text-xl text-primary_darkerShade-750">{price}</p>
        </div>
      </div>
    </div>
  );
}
