import { useState } from "react";
import "./Product.css";
import clockIcon from "./assessts/ClockIcon.png";
import RazorpayIcon from "./assessts/Razorpayicon.png";
import icon1 from "./assessts/Icon.png";
import icon2 from "./assessts/Icon (1).png";
import icon3 from "./assessts/Icon (2).png";
import icon4 from "./assessts/Icon (3).png";
import icon5 from "./assessts/Icon1.png";

const Product = () => {
  const plan = [
    { month: "12", total: "179", mo: "15" },
    { month: "6", total: "149", mo: "25" },
    { month: "3", total: "99", mo: "33" },
  ];
  const [price, setPrice] = useState("179");
  const [discount, setDiscount] = useState("18401");
  const setPrices = (p) => {
    setPrice(p);
    let offer = 18500;
    if (p === "149") {
      offer = 18500 - 25 * 6;
    } else if (p === "99") {
      offer = 18500 - 33 * 3;
    } else {
      offer = 18401;
    }
    setDiscount(offer);
  };
  return (
    <div className="Product-parent">
      <div className="product-page-left">
        <div className="product-left-content">
          Access Curated courses worth <br />
          <span className="red-line">₹18,500</span> at just{" "}
          <span className="blue-color-word">₹99</span> per year
        </div>
        <div className="product-items">
            <div  className="row">
              <div className="icon"><img src={icon2} /></div>
              <div className="sentence"><span>100+</span> Job relevant courses </div>
            </div>
        </div>
        <div className="product-items">
            <div className="row">
              <div className="icon"><img src={icon5} /></div>
              <div className="sentence"><span>20,000+</span> Hours of content</div>
            </div>
        </div>
        <div className="product-items">
            <div className="row">
              <div className="icon"><img src={icon1} /></div>
              <div className="sentence"><span>Exclusive</span> webinar access</div>
            </div>
        </div>
        <div className="product-items">
            <div  className="row">
              <div className="icon"><img src={icon3} /></div>
              <div className="sentence">Scholarship worth <span>₹94,500</span></div>
            </div>
        </div>
        <div className="product-items">
            <div  className="row">
              <div className="icon"><img src={icon4} /></div>
              <div className="sentence"><span>Ad Free</span> learning experience</div>
            </div>
        </div>
      </div>
      <div className="product-page-right">
        <div className="product-page-right-cont">
          <div class="product-right-buttons">
            <div class="circle-cont">
              <div class="circle">1</div>
              <div class="circle-text">Sign In</div>
            </div>
            <div class="circle-cont">
              <div class="circle">2</div>
              <div class="circle-text">Subscribe</div>
            </div>
          </div>
          <div className="product-heading">Select your Subscription plan</div>

          <div class="subscription-plans">
            <div className="plan_row1">
              <div className="offer-exp">Offer Expired</div>
              <div className="plan-exp-row2">
                <div class="outer-circle">
                  <div class="inner-circle"></div>
                </div>
                <div className="offer-exp-text">12 Months Subscription</div>
                <div className="exp-price" style={{ color: "#BEBEBE" }}>
                  Total{" "}
                  <span style={{ fontSize: "16px", fontWeight: 550 }}>₹99</span>
                  <br />
                  <span style={{ fontSize: "14px", color: "#BEBEBE" }}>
                    ₹8 /mo
                  </span>
                </div>
              </div>
            </div>
          <div>
  {plan.map((item, index) => (
    <div className={price === item.total ? "active-row" : "plan_row1"} key={index}>
      {item.total === "179" ? <div className="offer-rec">Recommended</div> : ""}
      <div className="plan-exp-row2">
        <button
                    className={`plan-button ${price === item.total ? "clicked" : ""}`}
                  onClick={() => setPrices(item.total)}>
                  {price === item.total && <span className="tick">✔</span>}
                 </button>
        <div className="offer-exp-text1">{item.month} Months Subscription</div>
        <div className="exp-price" style={{ color: "#3C4852" ,fontSize:"15px"}}>
          Total <span style={{ fontSize: "19px", fontWeight: 600 }}>₹{item.total}</span>
          <br />
          <span style={{ fontSize: "14px", color: "#3C4852" }}>
            ₹{item.mo} /mo
          </span>
        </div>
      </div>
    </div>
  ))}
</div>







          </div>
          <hr style={{ color: "black" }} />

          <div className="plans_fees">
            <p className="subscrip-text">Subscription Fee</p>
            <p className="plans_fees-fee">₹18,500</p>
          </div>
          <div className="offer-applied">
            <div className="offer-applied-row1">
              <p>Limited time offer</p>
              <p>- ₹{discount}</p>
            </div>
            <div className="offer-applied-row2">
              <img src={clockIcon} alt="clock-icon" className="clock-img" />
              <div>Offer valid till 25th March 2023</div>
            </div>
          </div>
          <div className="gst">
            <p className="gst_col1">
              <span>Total </span>(Incl. of 18% GST)
            </p>
            <div className="gst_col2">₹{price}</div>
          </div>
          <div className="end_buttons">
            <button className="cancel_btn">CANCEL</button>
            <button className="pay_btn">PROCEED TO PAY</button>
          </div>
          <div>
            <img
              src={RazorpayIcon}
              alt="razorpay_icon"
              className="razorpay-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
