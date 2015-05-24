# Bluprint

This is a Wordpress Theme that uses Susy custom grid system, FontAwesome, Sass. Built with NPM, Bower and Gulp.

##### Tags

Translation-Ready, Custom-Background, Theme-Options, Custom-Menu, Post-Formats, Threaded-Comments

##### Prerequisites

- Requires at least: Wordpress 4.0
- Tested up to: Wordpress 4.2.2
- Stable tag: 1.0.0
- License: GNU GPLv2 or later @ http://www.gnu.org/licenses/gpl-2.0.html

### Description

Hi. I'm a starter theme called Bluprint based on Underscores starter theme. I'm a theme meant for hacking so don't use me as a Parent Theme. Instead try turning me into the next, most awesome, WordPress theme out there. That's what I'm here for.

### Getting Started

You would have to manually edit this theme before uploading it to your server. Simply download `Bluprint` from GitHub, then you want to copy the `Bluprint` directory and change the name to something else (like, say, `awesometheme`), and then you'll need to do a five-step find and replace on the name in all the templates.

1. Search for `'bluprint'` (inside single quotations) to capture the text domain.
2. Search for `bluprint_` to capture all the function names.
3. Search for `Text Domain: bluprint` in style.css.
4. Search for `<code>&nbsp;</code>Bluprint` (with a space before it) to capture DocBlocks.
5. Search for `bluprint-` to capture prefixed handles.

**OR**

* Search for: `'bluprint'` and replace with: `'awesometheme'`
* Search for: `bluprint_` and replace with: `awesometheme_`
* Search for: `Text Domain: bluprint` and replace with: `Text Domain: awesometheme` in style.css.
* Search for: `<code>&nbsp;</code>Bluprint` and replace with: `<code>&nbsp;</code>Awesometheme`
* Search for: `bluprint-` and replace with: `awesometheme-`

Then, update the stylesheet header in `style.css` and the links in `footer.php` with your own information.
There's a `custom` folder within the `sass` folder, this is for all your custom styling, grid formation, variables, and mixins.

Don't forget to initialize NPM & Bower

```
npm init
```
and

```
bower init
```

Follow the input fields to update it with your project information.

Once you've done that, install the dependencies for npm and bower

```
npm install --save-dev
```
and

```
bower install --save-dev
```

If you plan on using this theme for your local development environment, make sure you adjust the `gulpfile.js`. On line `17`, change the proxy address to your vhost domain.

> For example, your vhost is setup as a localhost. Once you run the `gulp` command, `BrowserSync` will automatically load up a new page directed at localhost.

Next, update or delete this readme.

Almost done! Now, you've reached the final step: creating an awesome wordpress themes.

### Installation
	
1. In your admin panel, go to Appearance > Themes and click the Add New button.
2. Click Upload and Choose File, then select the theme's .zip file. Click Install Now.
3. Click Activate to use your new theme right away.

#### Frequently Asked Questions

**Does this theme support any plugins?**

Bluprint includes support for Infinite Scroll in Jetpack.

#### Changelog

Version 1.0.0 - May 18 2015 - Initial release date

### Tech

Bluprint uses a number of open source projects to work properly:
* [Sublime Text 2](http://www.sublimetext.com) - awesome text editor
* [iTerm](http://iterm2.com) - awesome terminal
* [Susy](http://susy.oddbird.net) - grid system without the bulk of a framework
* [FontAwesome](http://fortawesome.github.io/Font-Awesome) - amazing responsive icons as fonts
* [NPM](https://www.npmjs.com) - package manager
* [Bower](http://bower.io) - package manager
* [Gulp](http://gulpjs.com) - task manager

### Credits

* Contributor(s): [Rae Capri](http://RaeCapri.com), © 2015 Rae Capri, [GPLv2 or later](http://www.gnu.org/licenses/gpl-2.0.html)
* Based on [Underscores](http://underscores.me), © 2012-2015 Automattic, Inc., [GPL2](https://www.gnu.org/licenses/gpl-2.0.html)
* [normalize.css](http://necolas.github.io/normalize.css), © 2012-2015 Nicolas Gallagher and Jonathan Neal, [MIT](http://opensource.org/licenses/MIT)