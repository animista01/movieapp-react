import React from 'react';

const HeaderMenu = (props) => {
  return (
    <ul>
      <li>
        <a onClick={(event) => props.onSelectList(event, 'popular')}>Popular</a>
      </li>
      <li>
        <a onClick={(event) => props.onSelectList(event, 'top_rated')}>Top</a>
      </li>
      <li>
        <a onClick={(event) => props.onSelectList(event, 'upcoming')}>Upcoming</a>
      </li>
      <li>
        <a onClick={(event) => props.onSelectList(event, 'now_playing')}>Now playing</a>
      </li>
    </ul>
  );
}

export default HeaderMenu;
