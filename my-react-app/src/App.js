import React from 'react';
// import Icon from './components/Icon/icon';
// import Button from "./components/Buttons/Button.js"; 
import Avatar from "./components/Avatars/Avatar";

const App = () => {
                      
   return (
                         /*Icon testing*/
  //   <div>
  //     <Icon type="feather" name="heart" />
  //     <Icon type="iconify" name="ic:baseline-home" />
  //   </div>

                  /*Button testing*/

  //   <div className="frame">
  //           <p className="molecules">
  //             <span className="text-wrapper">Molecules</span>
  //           </p>
  //           <p className="buttons">
  //             <Button mode="default" size="small-leftIcon" onClick={onclick} icon={<i className="icon-class">~</i>}>Button</Button>
  //             <Button mode="default" size="medium-leftIcon" onClick={onclick} icon={<i className="icon-class">~</i>}>Button</Button>
  //             <Button mode="default" size="large-leftIcon" onClick={onclick} icon={<i className="icon-class">~</i>}>Button</Button>
  //             <Button mode="hover" size="small-leftIcon" onClick={onclick} icon={<i className="icon-class">~</i>}>Button</Button>
  //             <Button mode="hover" size="medium" onClick={onclick} icon={<i className="icon-class">~</i>}>Button</Button>
  //             <Button mode="hover" size="large" onClick={onclick} icon={<i className="icon-class">~</i>}>Button</Button>
  //             <Button mode="active" size="small-leftIcon" onClick={onclick} icon={<i className="icon-class">~</i>}>Button</Button>
  //             <Button mode="active" size="medium" onClick={onclick} icon={<i className="icon-class">~</i>}>Button</Button>
  //             <Button mode="active" size="large" onClick={onclick} icon={<i className="icon-class">~</i>}>Button</Button>
  //             <Button mode="inactive" size="small" onClick={onclick} icon={<i className="icon-class">~</i>}>Button</Button>
  //             <Button mode="inactive" size="medium" onClick={onclick} icon={<i className="icon-class">~</i>}>Button</Button>
  //             <Button mode="inactive" size="large" onClick={onclick} icon={<i className="icon-class">~</i>}>Button</Button>
  //           </p>
  //         </div>

                         /*AVATAR TESTING*/
  <div className="App">
      <h1>Avatar Testing</h1>

      {/* Render avatars with different sizes */}
      <Avatar src="avatar.jpg" initials="AB" mode="small" size="small" />
      <Avatar src="" initials="CD" mode="default" size="medium" />
      <Avatar src="" initials="CD" mode="large" size="large" />
      <Avatar src="" initials="CD" mode="large" size="large" />
      <Avatar src="" initials="CD" mode="large" size="large" />
      <Avatar src="" initials="CD" mode="large" size="large" />

      {/* Render multiple avatars with overlapping profiles */}
      
      
    </div>
  );
};

export default App;

