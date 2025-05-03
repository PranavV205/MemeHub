import React from "react";
import RollingGallery from "../ui/RollingGallery";
import Link from "next/link";

function RollingG() {
  return (
    <>
      <div className="bg-black min-h-screen flex flex-col items-left">
        <Link href="/Home">
          <div className="text-white text-3xl mb-8 mt-4 p-4 text-center font-dm-sans">
            Memehub
          </div>
        </Link>
        <RollingGallery
          autoplay={true}
          pauseOnHover={true}
          apiEndpoint="https://meme-api-09gx.onrender.com/api/v1/landing/hero"
        />
      </div>
    </>
  );
}

export default RollingG;
