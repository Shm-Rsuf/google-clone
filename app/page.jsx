import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      {/* BODY */}
      <main className="flex flex-col items-center gap-8">
        <div className="flex justify-center items-center mt-24">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
            width={300}
            height={50}
            alt="google image"
            className="w-56 sm:w-64"
          />
        </div>
        <HomeSearch />
      </main>
    </>
  );
};

export default HomePage;
