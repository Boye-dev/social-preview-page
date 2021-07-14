import React from 'react';
import colton from './colton.jpg';
import anne from './anne.jpg';
import irene from './irene.jpg';

const Contain = (props)=>{
  return(
    <div className="body">
      <div className="row">
        <div className="col-3">
        <img className="img-head" src={props.imgUrl}/>
      </div>
      <div className="col-6">
        <span className="name">{props.name}</span><br/>
        <span className="verified">{props.verified}</span>
        </div>
      </div>
        <div className="row">
          <div className="col-12">
  <p className="par-b">{props.par}</p>
  </div>
  </div>
</div>
  );
}
export default Contain;
