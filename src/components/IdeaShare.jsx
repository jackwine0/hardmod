import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../css/IdeaShare.css'; 

const IdeaShare = () => {
  const images = [
    'https://res.cloudinary.com/duicyr28v/image/upload/v1718391780/funi_2_cj7ih8.png',
    'https://res.cloudinary.com/duicyr28v/image/upload/v1718391779/funi_1_kkdlht.jpg',
    'https://res.cloudinary.com/duicyr28v/image/upload/v1718391748/Panton_Chair_Anniversary_Competition_and_Charity_Auction_lwaqmh.jpg',
    'https://res.cloudinary.com/duicyr28v/image/upload/v1718391740/Wood_Rocking_Sofa_Chair__Exceptional_Comfort_and_Style_-_Style_A_mrqmdz.jpg',
    'https://res.cloudinary.com/duicyr28v/image/upload/v1718391741/26_Stylish_Armchairs_For_All_Budgets_xcmozd.jpg',
    'https://res.cloudinary.com/duicyr28v/image/upload/v1718391740/494ebdef-5108-4074-85b4-675dc70b7d35_l4qbfw.jpg',
    'https://res.cloudinary.com/duicyr28v/image/upload/v1718391739/It_s_back_The_Range_chair_that_caused_a_shopping_frenzy_last_year_is_now_available_in_navy_ajjpzi.jpg',
    'https://res.cloudinary.com/duicyr28v/image/upload/v1718391739/Wave_-_Stratum_Bespoke_bgwdal.jpg',
    'https://res.cloudinary.com/duicyr28v/image/upload/v1718276283/Who_wants_an_avocado_inspired_ball_chair_and_swing_chair_in_their_home__foxv9t.jpg',
  ];

  return (
    <div className="parent-container">
      <div className="header">
        <p>Share your setup with</p>
        <h2>#FuniroFurniture</h2>
      </div>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <LazyLoadImage
              src={image}
              width="100%"
              height="auto"
              effect="blur"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IdeaShare;
