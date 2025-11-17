
import Image from "next/image";

interface MerchCardProps {
  name: string;
  price: string;
  image: string;
  buttonText?: string;
  onclick?: () => void;
  className?: string;
}

const MerchCrad = ({
  name,
  price,
  image,
  buttonText,
  
}: MerchCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition flex flex-col">
      {/* Product Image */}
      <div className="relative w-full h-56">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Product Info */}
      <div className="p-4 mb-4  flex flex-col flex-grow">
        <h3 className="text-sm font-medium text-gray-800">{name}</h3>
        <p className="text-blue-600 font-semibold mt-1">{price}</p>
        <button className=" bg-blue-600 text-white text-sm py-2 mt-4 px-4 rounded-md hover:bg-blue-700 transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default MerchCrad;
