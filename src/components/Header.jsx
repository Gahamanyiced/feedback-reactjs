import React from 'react';

function Header({text,bgColor,textColor}) {
  const headerStlyes= {
    backgroundColor:bgColor,
    color:textColor,
  }
  return (
    <header style={headerStlyes}>
      <div className="container">
        <h2>Feedback UI</h2>
      </div>
    </header>
  );
}
Header.defaultProps ={
  text:'Fedback UI',
  bgColor:'rgba(0,0,0,0.4)',
  textColor:'#ff6a95'
}
export default Header;
