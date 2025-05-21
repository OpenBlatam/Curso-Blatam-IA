// components/BasicCard.tsx
import React from 'react';
import Image from 'next/image'; // For optimized images if using local/remote paths
import Link from 'next/link';   // For the action link

interface BasicCardProps {
  imageUrl?: string;
  imageAlt?: string;
  title: string;
  description: string;
  actionText?: string;
  actionLink?: string;
  actionExternal?: boolean; // To determine if the link is external
}

const BasicCard: React.FC<BasicCardProps> = ({
  imageUrl,
  imageAlt = 'Card image',
  title,
  description,
  actionText,
  actionLink,
  actionExternal = false,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out max-w-sm">
      {imageUrl && (
        <div className="relative w-full h-48"> {/* Or use aspect-ratio utilities in Tailwind v3+ */}
          <Image
            src={imageUrl}
            alt={imageAlt}
            layout="fill"
            objectFit="cover" // Options: 'cover', 'contain', 'fill', 'none', 'scale-down'
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        {actionText && actionLink && (
          actionExternal ? (
            <a
              href={actionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
            >
              {actionText}
            </a>
          ) : (
            <Link href={actionLink} legacyBehavior>
              <a className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300">
                {actionText}
              </a>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default BasicCard;