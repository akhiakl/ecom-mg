import React from "react";
import CloseButton from "../ui/CloseButton";

type Props = {};

const AnnouncementBar = (props: Props) => {
  return (
    <div className="flex items-center justify-between gap-4 bg-gray-800 px-4 py-3 text-white">
      <p className="text-sm font-medium">
        Love Ecom mg?
        <a href="#" className="inline-block underline ml-2">
          Check out all products!
        </a>
      </p>

      <CloseButton />
    </div>
  );
};

export default AnnouncementBar;
