interface LatestProductProps {
  id: number;
  name: string;
  price: number;
  imgURL: string;
}

export function LatestProduct({ id, name, price, imgURL }: LatestProductProps) {
  return (
    <div className="flex flex-col justify-center items-start gap-6">
      <div className="relative w-full h-[400px]">
        <img
          src={imgURL}
          alt="product image"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-4 w-full h-fit">
        <div className="flex flex-col justify-center items-start gap-4 w-full h-fit">
          <div className="flex flex-row justify-between items-center w-full">
            <h4 className="text-3xl">{name}</h4>
          </div>
          <p className="text-xl text-primary_darkerShade-750">{price}</p>
        </div>
      </div>
    </div>
  );
}
