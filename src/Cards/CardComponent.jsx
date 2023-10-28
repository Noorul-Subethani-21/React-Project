import React from "react";
import "./CardComponent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const CardComponent = () => {

  return (
   
    <div className="background ">
        <div className="box">
          <div className="navbar">
       <h3 className='heading'>Step 1 : Niche Products</h3>
      <div className='icons'>
        <FontAwesomeIcon icon={faAngleUp} className='arrow-down-icon' />
      </div>
    </div>
  </div>
  <br />
      <h4 className="head ml-5 ">Baby Products</h4>
      <div className="card-deck ml-3 mt-4">
        <div className=" cards col-md-3 ml-5">
          <div className="card h-10">
            <img src="images/baby1.png " className="card-img-top " alt="..." />
            <div className="card-body">
              <h5 className="card-title">Baby Carriers</h5>
              <p className="card-text">
                Your Little one was carried for 9 months in the womb. while that
                may sometimes have been a challenge for the person doing...
              
              </p>
            </div>
          </div>
        </div>
        <div className="cards col-md-3 ml-5 h-10">
          <div className="card">
            <img
              src="images/baby2.png"
              className="card-img-top mb-2"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Baby Diapers</h5>
              <p className="card-text">
                Diaper changing might seem complicated at first but with a
                little pratices. you'll find the keeping your baby clean and dry
                is easy way to do like it
              </p>
            </div>
          </div>
        </div>
        <div className="cards col-md-3 ml-5 h-10">
          <div className="card">
            <img src="images/baby3.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Baby Skin Care</h5>
              <p className="card-text">
                Your new born's skin is so sensitive.Don't worry rashes are
                common. during baby's in first yesr. Learn how to keep your
                baby's skin
              </p>
              
            </div>
          </div>
        </div>
        <div className="cards col-md-3 ml-5 h-10 mt-5">
          <div className="card">
            <img src="images/baby4.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Bottle Feeding</h5>
              <p className="card-text">
                The practice of feeding an infant a subsititle for breast
                milk.Pediatricians generally advise exclusive breastfeeding for
                all full terms
              </p>
              
            </div>
          </div>
        </div>
        <div className="cards col-md-3 ml-5 h-10 mt-5">
          <div className="card">
            <img src="images/baby5.png" class="card-img-top " alt="..." />
            <div className="card-body">
              <h5 className="card-title">Baby Monitor</h5>
              <p className="card-text">
                Electronic device consisting of a one way radio or video
                trabsmitter with portable receiver for remotely listening or
                observing .
              </p>
              
            </div>
          </div>
          </div>
          <div className="cards col-md-3 ml-5 h-10 mt-5">
            <div className="card">
              <img src="images/baby6.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title ">Baby Teethers</h5>
                <p className="card-text">
                  A Teethers teething toy or chew toy is a device given to
                  teething infants ,Most modern teethers are siliences but can
                  also...
                </p>
                
              </div>
            </div>
          </div>
        </div>

        <div>
        <h4 className="head mt-5 ml-5">Kitchen Tools</h4>
        <div  className="card-deck ml-4 mt-4">
        <div className="cards col-md-3 ml-5">
          <div className="card h-10">
            <img src="images/kitchen1.png " className="card-img-top " alt="..." />
            <div className="card-body">
              <h5 className="card-title">Food Stainers</h5>
              <p className="card-text">
                A Kitchen device  that is most used to starin liquids away from other ingredients but also to occationally shift ingredients
              </p>
              
            </div>
          </div>
        </div>
        <div className=" cards col-md-3 ml-5">
          <div className="card h-10">
            <img src="images/kitchen2.png " className="card-img-top " alt="..." />
            <div className="card-body">
              <h5 className="card-title">Kitchen Knives</h5>
              <p className="card-text">
              A kitchen knife is any knife that is intended to be used in food preparation Kitchen knives can be made from several different materials               </p>
            </div>
          </div>
        </div>
        <div className="cards col-md-3 ml-5">
          <div className="card h-10">
            <img src="images/kitchen3.png " className="card-img-top " alt="..." />
            <div className="card-body">
              <h5 className="card-title mt-3">Peelers</h5>
              <p className="card-text">
               A Peelers is a kitchen tool consisting of a meta blade with a slot sharp edge attached to a handle used to remove .sharp edge attached to a handle used to remove 
              </p>
        
            </div>
          </div>
        </div>
        </div>


        </div>
      </div>
    
  );
};

export default CardComponent;
