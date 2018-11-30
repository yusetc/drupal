# octhemebs4 starter theme

This theme is a starter to be used with bootstrap 4.x

It uses classy as a base theme, however classy CSS is removed. This allows us to focus on bootstrap and custom css without worrying about overriding classy css while maintaining classy selectors applied by classy vis twig templates.

----
# **IMPORTANT NOTES:** 

1. `/scss/bootstrap-x.x` is not tracked by git. You need to add the folder manually to ensure the latest version
2. SASS will not compile until you complete the setup steps
3. Depending on the environment you are using, you may need to remove the `.git` directory and associated .git files because some development environments don't work well with nested git repos. (for example, pantheon)
----

## To setup

1. Go to the bootstrap website and [download the source files](https://getbootstrap.com/docs/4.1/getting-started/download/)

2. From the directory you downloaded, copy the scss directory to octhemebs4/scss/ and rename it to `bootstrap-4.x.x` where x.x ix the current version number

3. open `octhemebs4/scss/style.scss`  
    a. find where it says `@import "bootstrap-4.x.x/bootstrap",`
    b. rename the bootstrap directory to whatever you created in step 2
    c. uncomment this line
    
4. save `style.scss`

----

## JavaScript files

We are using a CDN for bootstrap JS, the reference can be found in the libraries file
    
----

## The SASS files

### Global styles

1. bootstrap-4.x.x/bootstrap  
    This is all the bootstrap files you set up above. By importing bootstrap sass, we are able to use bootstrap's variables and mixins
    
2. _variables.scss  
    Variables are things values used repeatedly throughout the site.

3. _mixins.scss 
    mixins are for reusable code, some of them accept parameters see [Leveraging Sass mixins for cleaner code](http://thesassway.com/intermediate/leveraging-sass-mixins-for-cleaner-code)
    
4. _typography.scss 
    typography is for setting up the appearance of type. Fonts themselves and the css required to access them should be kept in the `fonts` directory and referenced from `_typography.scss`

5. _html.scss  
    set up some default styles for html elements. 
    
6. _layout.scss 
    Defines the overall site layout. This is for positioning only. 
  
7. _helpers.scss  
    Helpers have nothing to do with Drupal's help region. Helpers are styles that are applied generally across the site to make other things work correctly
    
8. _accessibility.scss  
    Generally, we should be making all our selectors accessible. However, sometimes there are cases where something is done explicitly for accessibility purposes (ie changing contrast). These selectors are defined here
    
### Component styles
Components set specific appearance of things used across the site. The idea is that we can re-use selectors and/or styles. This is in compliance with [Atomic design](http://bradfrost.com/blog/post/atomic-web-design/). Things such as carousels, alerts, jumbotron etc go in components

A component style can include other components/ For example, an icon gets defined. A button uses the icon. we have
```
.icon {font-size: 1.87rem;}
.button {padding: 1rem 2rem;}

```
Then we set the html as `<a class="icon button" href="#">button</a>` OR we can make a specific class such as:

```
.myNewButton {
  @extend icon;
  @extend button;
  }
```

1. components/_icons.scss  
    define icon styles. Often, this will be styles for SVG 

2. components/_buttons-and-links.scss

3. components/_decorations.scss 
    used for things that serve no purpose other than to decorate the site. They can be used with other site elements
    
4. components/_colors.scss  
    Color values should be defined in `scss/_variables.scss`
    `scss/_color.scss` is used setting up selectors related to color, For example, if you need a selector that applies a specific foreground and background would look like:
    
    ```
    .highlighted {
      color: $color-primary; $color-primary is defined in scss/_variables.scss
      background: $color-secondary;
      } 
      
     ```
     * $color-primary is defined in scss/_variables.scss
     * $color-secondary is defined in scss/_variables.scss

### Card styles
Cards are regions of a page. [Bootstrap has several build in styles for cards](https://getbootstrap.com/docs/4.0/components/card/). If you need to theme a card beyond what bootstrap has o offer, put it here

### Menus
Menu styles go here.

### Blocks
Block styles go here. NOTE: in most cases, we should be using components and cards to build block content while the block itself has no style. 


### Regions
Region styles apply to the container. Element within the region should be styled withing the appropriate sheet (ie. `_menu-main-navigation.scss`)

1. regions/_header.scss
2. regions/_main-nav.scss
3. regions/_secondary-nav.scss
4. regions/_footer.scss
5. regions/_content.scss
6. regions/_breadcrumb.scss
7. regions/_highlighted.scss
8. regions/_help.scss

### nodes
If required, node specific styles go in `/scss/nodes/...`

### Forms
all form styles go in here. Note that basic form elements (without selectors) are defined in `/scss/_html.scss`

1. forms/_search.scss
2. forms/user-login-form.scss

### views
put styles specific to a view here. Note that ideally, the appearance of views uses styles relevant to the content being displayed (ie. a component or a card) and not the view itself. Sometimes styling a view is necessary, so it goes here.

### custom display modes
The layout of a display mode should be defined in the display modes css. Customizations to the site theme can go here. Layout is done in the view mode module so that when rendered using a different theme (ie an admin theme) the view mode still displays content roughly as it should.

### special
Special is used in circumstances where the design is unique from other site elements. A typical example would be the front page

### overrides

1. _overrides.scss  
    Use overrides to overide styles from drupal (including classy), bootstrap and contributed modules

2. _ie11-fixes.scss 
    Place ie11 specific styles inside the media query

3. _ms-edge-fixes.scss  
    Place MS edge overrides inside the query

### development

1. _development.scss  
    Use this file for experimenting. Once a style does what you want it to, move the selector to the appropriate sheet. _devemopment.scss is periodically emptied out and should not be used for production

----


