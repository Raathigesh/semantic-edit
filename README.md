![Logo](https://raw.githubusercontent.com/Raathigesh/SemanticEdit/master/assets/SemanticEditLogo.png)

# SemanticEdit
Real-time Preview Enabled [Semantic UI](http://semantic-ui.com/) Composer

## Demo
Initial Hacky Demo - http://semanticedit.meteor.com/

## How?
Copy the following Semantic-UI markup to [Semantic Edit](http://semanticedit.meteor.com/) editor.

```html
<div class="ui card">
  <div class="image">
    <img src="http://semantic-ui.com/images/avatar2/large/kristy.png">
  </div>
  <div class="content">
    <a class="header">Kristy</a>
    <div class="meta">
      <span class="date">Joined in 2013</span>
    </div>
    <div class="description">
      Kristy is an art director living in New York.
    </div>
  </div>
  <div class="extra content">
    <a>
      <i class="user icon"></i>
      22 Friends
    </a>
  </div>
</div>
```
You could copy and paste any [Semantic UI components](http://semantic-ui.com/elements/button.html).

## But Why?
[Semantic UI](http://semantic-ui.com) is an awesome library with excellent components that you can use to quickly
build web interfaces. But I felt like it would be nicer if we can compose bunch of elements and see in realtime how they
fit together. That's why Semantic Edit.

## What's Under the Hood?
JavaScript! 

SemanticEdit uses the following
- [Semantic UI](http://semantic-ui.com)
- [React JS](https://facebook.github.io/react/)
- [Meteor JS](https://meteor.com/) (Still Not Really! But Have Plans to Integrate User Login & Persistance)
- [WebPack Build System](https://webpack.github.io/)
- [Ace Editor](https://ace.c9.io/#nav=about) & [react-ace](https://www.npmjs.com/package/react-ace)
- [React + WebPack+ FlowRouter Kickstarter Pack](https://github.com/thereactivestack/kickstart-flowrouter)

## That's It?
Source will be available soon and more features too!
