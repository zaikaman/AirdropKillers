import Image from 'next/image';

interface ProductCardProps {
  title: string;
  price: string;
  description: string;
  image: string;
  features: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  description,
  image,
  features
}) => {
  return (
    <div className="bg-[#1A1D29] rounded-lg overflow-hidden flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <span className="text-[#818CF8] font-medium">{price}đ</span>
        </div>
        
        <p className="text-gray-400 mb-4">{description}</p>

        <div className="flex-grow">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <svg 
                className="w-5 h-5 text-[#818CF8]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
