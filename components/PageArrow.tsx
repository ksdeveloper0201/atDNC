"use client";

import Link from "next/link";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

interface PageArrowProps {
  currentPage: number;
  totalPages: number;
}

const pageIncrease = () => {
  console.log("pageIncrease");
};
const pageDecrease = () => {
  console.log("pageDecrease");
};

const PageArrow: React.FC<PageArrowProps> = ({
  currentPage,
  totalPages,
}: PageArrowProps) => {
  return (
    <div className="flex text-2xl">
      {currentPage > 1 && (
        <Link href={`?page=${currentPage - 1}`} onClick={pageDecrease}>
          <IoIosArrowDropleftCircle />
        </Link>
      )}
      <div className="mx-8">{currentPage}</div>
      {currentPage < totalPages && (
        <Link href={`?page=${currentPage + 1}`} onClick={pageDecrease}>
          <IoIosArrowDroprightCircle />
        </Link>
      )}
    </div>
  );
};

export default PageArrow;
