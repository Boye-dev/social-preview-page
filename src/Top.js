import React from 'react';
import patternTop from './patternTop.svg';
import patternBottom from './images/patternBottom.svg';

const Top = ()=>{
return(
<div>
  <div className="cont">
      <img src={patternTop} className="bg-top"/>
        <img src={patternBottom} className="bg-bottom"/>
  <div className="container">
<div className="row">

<div className="col-lg-6">

  <h1 className="head">    10,000+ of our users love our products.</h1>
  <p className="par">  We only provide great products combined with excellent customer service.
    See what our satisfied customers are saying about our services.</p>
</div>

<div className="col-lg-6">
  <div className="rat1">
    <p className="rate1">⭐⭐⭐⭐⭐<span class="rt-txt">Rated 5 Stars in Reviews</span></p>
  </div>
  <div className="rat2">
    <p className="rate2">⭐⭐⭐⭐⭐<span class="rt-txt2"> Rated 5 Stars in Report Guru</span></p>
  </div>
  <div className="rat3">
    <p className="rate3">⭐⭐⭐⭐⭐ <span class="rt-txt">Rated 5 Stars in BestTech</span></p>
  </div>
</div>

</div>
</div>
</div>
</div>
);
}
export default Top;
