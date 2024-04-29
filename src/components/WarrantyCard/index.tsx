import { HiOutlineTrophy } from "react-icons/hi2";
import { MdOutlineLocalShipping, MdOutlineSupportAgent } from "react-icons/md";
import { TbDiscountCheck } from "react-icons/tb";

const WarrantyCard = ({}) => {
  return (
    <section className="w-100 p-5" style={{ backgroundColor: "#FAF3EA" }}>
      <div className="d-flex gap-5 flex-wrap justify-content-center align-items-center">
        <div className="d-flex flex-wrap justify-content-center align-items-center px-3">
          <HiOutlineTrophy size={64} />
          <div className="d-flex flex-column justify-content-center ">
            <h3>High Quality</h3>
            <p>Crafted from top materials</p>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center align-items-center px-3">
          <TbDiscountCheck size={64} />
          <div className="d-flex flex-column justify-content-center ">
            <h3>Warranty Protection</h3>
            <p>Over 2 years</p>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center align-items-center px-3">
          <MdOutlineLocalShipping size={64} />
          <div className="d-flex flex-column justify-content-center ">
            <h3>Free Shipping</h3>
            <p>Order over 150 $</p>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center align-items-center px-3">
          <MdOutlineSupportAgent size={64} />
          <div className="d-flex flex-column justify-content-center ">
            <h3>24 / 7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarrantyCard;
