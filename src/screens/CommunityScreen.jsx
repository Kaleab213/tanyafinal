import Cardd from "../components/Cardd";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
// import rectangle1 from "../assets/Rectangle 1.png";
// import rectangle2 from "../assets/Rectangle 2.png";
import community_img1 from "../assets/Images/community_img1.jpg";
import community_img2 from "../assets/Images/community_img2.jpg";
import community_img3 from "../assets/Images/community_img3.jpg";
import community_img4 from "../assets/Images/community_img4.jpg";
import vanillastyle from "../css/stylecss.module.css";

function BlogsScreen() {
  const handleClick = () => {
    window.location.href = "/";
  };
  return (
    <>
      <div
        className={` text-poppins flex justify-between items-center h-fit-content bg-[#97c0ab]`}
      >
        <Navbar isHomeScreen={false} />
      </div>
      <div className="bg-[#F1F8F4] h-[320px] flex justify-center items-center relative">
        <div className="hidden lg:block bg-[#00743A] w-[228px] h-[206px] absolute top-0 left-0">
          <div className="bg-[#579978] w-[194px] h-[165px]">
            <div className="bg-[#fff] w-[170px] h-[136px]"></div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h1
            className="font-[oswald] text-[48px] text-[#000]"
            style={{ fontWeight: "500" }}
          >
            {" "}
            Community Action
          </h1>
          <p
            className="font-[raleway] text-[20px] text-[#00743A]"
            style={{ fontWeight: "400" }}
          >
            Arts made by the students
          </p>
        </div>
        <div className="hidden lg:block bg-[#00743A] h-[228px] w-[206px] absolute bottom-0 right-0 rotate-180">
          <div className="bg-[#579978] h-[194px] w-[165px]">
            <div className="bg-[#fff] h-[170px] w-[136px]"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center max-w-fit-content mt-10">
        <div className="m-10">
          <div className="justify-center items-center md:flex md:justify-center">
            <Cardd img={community_img1} />
            <Cardd img={community_img2} />
          </div>
          <div className="justify-center items-center md:flex md:justify-center">
            <Cardd img={community_img3} />
            <Cardd img={community_img4} />
          </div>
          <div className="flex justify-end"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogsScreen;
