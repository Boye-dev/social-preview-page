import React from 'react';
import Contain from './Contain'
import containing from './containing'

const Bottom = ()=>{
  return (
  <div>
<div className="contb">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
<div className="cont-1">
<Contain
name={containing[0].name}
imgUrl={containing[0].imgUrl}
par={containing[0].par}
verified={containing[0].verified}
/>
</div>
      </div>
      <div className="col-lg-4">
<div className="cont-2">
  <Contain
    name={containing[1].name}
    imgUrl={containing[1].imgUrl}
    par={containing[1].par}
    verified={containing[1].verified}

  />
</div>
      </div>
      <div className="col-lg-4">
<div className="cont-3">
  <Contain
    name={containing[2].name}
    imgUrl={containing[2].imgUrl}
    par={containing[2].par}
    verified={containing[2].verified}

  />
</div>
      </div>
    </div>
  </div>
</div>

  </div>


  );
}
export default Bottom;
