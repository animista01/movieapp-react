import React from 'react';

const Paginator = (props) => {
  function isDisable(){
    return (props.page == 1);
  }
  return (
    <div>
      <span>
        <button disabled={isDisable()} onClick={(event) => props.onPaginate(event, 'back')}>Prev</button>
        {props.page} of {props.total_pages}
        <button onClick={(event) => props.onPaginate(event, 'next')}>Next</button>
      </span>
      <br />
      <br />
    </div>
  );
}

export default Paginator;
