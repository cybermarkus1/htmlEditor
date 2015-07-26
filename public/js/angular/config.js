/**
 * Configuration module for the app
 * @module configuration
 */
angular.module('config', [])

.constant('CHEATSHEET', [
	{code:'<html></html>', desc: 'Creates an HTML document'},
	{code:'<head></head>', desc: 'Sets off the title and other information that isn’t displayed on the web page itself'},
	{code:'<body></body>', desc: 'Sets off the visible portion of the document'},
	{code:'<body bgcolor="pink">', desc: 'Sets the background color, using name or hex value'},
	{code:'<body text="black">', desc: 'Sets the text color, using name or hex value'},
	{code:'<body link="blue">', desc: 'Sets the color of links, using name or hex value'},
	{code:'<body vlink="#ff0000">', desc: 'Sets the color of followed links, using name or hex value'},
	{code:'<body alink="#00ff00">', desc: 'Sets the color of links on click'},
	{code:'<body ondragstart="return false" onselectstart="return false">', desc: 'Disallows text selection with the mouse and keyboard'},
	{code:'<pre></pre>', desc: 'Creates preformatted text'},
	{code:'<hl></hl>', desc: 'Creates the largest headline'},
	{code:'<h6></h6>', desc: 'Creates the smallest headline'},
	{code:'<b></b>', desc: 'Creates bold text'},
	{code:'<i></i>', desc: 'Creates italic text'},
	{code:'<tt></tt>', desc: 'Creates teletype, or typewriter-style text'},
	{code:'<cite></cite>', desc: 'Creates a citation, usually italic'},
	{code:'<em></em>', desc: 'Emphasizes a word (with italic or bold)'},
	{code:'<strong></strong>', desc: 'Emphasizes a word (with italic or bold)'},
	{code:'<font size="3"></font>', desc: 'Sets size of font, from 1 to 7'},
	{code:'<font color="green"></font>', desc: 'Sets font color, using name or hex value'},
	{code:'<a href="URL"></a>', desc: 'Creates a hyperlink'},
	{code:'<a href="mailto:EMAIL"></a>', desc: 'Creates a mailto link'},
	{code:'<a href="URL"><img src="URL">" </a>', desc: 'Creates an image/link'},
	{code:'<a name="NAME"></a>', desc: 'Creates a target location within a document'},
	{code:'<a href="#NAME"></a>', desc: 'Links to that target location from elsewhere in the document'},
	{code:'<p></p>', desc: 'Creates a new paragraph'},
	{code:'<p align="left">', desc: 'Aligns a paragraph to the left (default), right, or center.'},
	{code:'<br>', desc: 'Inserts a line break'},
	{code:'<blockquote></blockquote>', desc: 'Indents text from both sides'},
	{code:'<dl></dl>', desc: 'Creates a definition list'},
	{code:'<dt>', desc: 'Precedes each definition term'},
	{code:'<dd>', desc: 'Precedes each definition'},
	{code:'<ol></ol>', desc: 'Creates a numbered list'},
	{code:'<ul></ul>', desc: 'Creates a bulleted list'},
	{code:'<li></li>', desc: 'Precedes each list item, and adds a number or symbol depending upon the type of list selected'},
	{code:'<div align="left">', desc: 'A generic tag used to format large blocks of HTML, also used for stylesheets'},
	{code:'<img src="name">', desc: 'Adds an image'},
	{code:'<img src="name" align="left">', desc: 'Aligns an image: left, right, center; bottom, top, middle'},
	{code:'<img src="name" border="1">', desc: 'Sets size of border around an image'},
	{code:'<hr />', desc: 'Inserts a horizontal rule'},
	{code:'<hr size="3" />', desc: 'Sets size (height) of rule'},
	{code:'<hr width="80%" />', desc: 'Sets width of rule, in percentage or absolute value'},
	{code:'<hr noshade />', desc: 'Creates a rule without a shadow'},
	{code:'<table></table>', desc: 'Creates a table'},
	{code:'<tr></tr>', desc: 'Sets off each row in a table'},
	{code:'<td></td>', desc: 'Sets off each cell in a row'},
	{code:'<th></th>', desc: 'Sets off the table header (a normal cell with bold, centered text)'},
	{code:'<table border="1">', desc: 'Sets width of border around table cells'},
	{code:'<table cellspacing="1">', desc: 'Sets amount of space between table cells'},
	{code:'<table cellpadding="1">', desc: 'Sets amount of space between a cell’s border and its contents'},
	{code:'<table width="500" or "80%">', desc: 'Sets width of table, in pixels or as a percentage of document width'},
	{code:'<tr align="left">" or <td align="left">', desc: 'Sets alignment for cell(s) (left, center, or right)'},
	{code:'<tr valign="top">" or <td valign="top">', desc: 'Sets vertical alignment for cell(s) (top, middle, or bottom)'},
	{code:'<td colspan="2">', desc: 'Sets number of columns a cell should span (default=1)'},
	{code:'<td rowspan="4">', desc: 'Sets number of rows a cell should span (default=1)'},
	{code:'<td nowrap>', desc: 'Prevents the lines within a cell from being broken to fit'},
	{code:'<frameset></frameset>" Replaces the <body>', desc: 'tag in a frames document; can also be nested in other framesets'},
	{code:'<frameset rows="value,value">', desc: 'Defines the rows within a frameset, using number in pixels, or percentage of width'},
	{code:'<frameset cols="value,value">', desc: 'Defines the columns within a frameset, using number in pixels, or percentage of width'},
	{code:'<frame>', desc: 'Defines a single frame — or region — within a frameset'},
	{code:'<noframes></noframes>', desc: 'Defines what will appear on browsers that don’t support frames'},
	{code:'<frame src="URL">', desc: 'Specifies which HTML document should be displayed'},
	{code:'<frame name="name">', desc: 'Names the frame, or region, so it may be targeted by other frames'},
	{code:'<frame marginwidth="value">', desc: 'Defines the left and right margins for the frame; must be equal to or greater than 1'},
	{code:'<frame marginheight="value">', desc: 'Defines the top and bottom margins for the frame; must be equal to or greater than 1'},
	{code:'<frame scrolling="value">', desc: 'Sets whether the frame has a scrollbar; value may equal “yes,” “no,” or “auto.” The default, as in ordinary documents, is auto.'},
	{code:'<frame noresize="noresize">', desc: 'Prevents the user from resizing a frame'},
	{code:'<form></form>', desc: 'Creates all forms'},
	{code:'<select multiple name="NAME" size=?></select>', desc: 'Creates a scrolling menu. Size sets the number of menu items visible before you need to scroll.'},
	{code:'<option>', desc: 'Sets off each menu item'},
	{code:'<select name="NAME"></select>', desc: 'Creates a pulldown menu'},
	{code:'<option>', desc: 'Sets off each menu item'},
	{code:'<textarea name="NAME" cols=40 rows=8></textarea name>', desc: 'Creates a text box area. Columns set the width; rows set the height.'},
	{code:'<input type="checkbox" name="NAME">', desc: 'Creates a checkbox. Text follows tag.'},
	{code:'<input type="radio" name="NAME" value="x">', desc: 'Creates a radio button. Text follows tag'},
	{code:'<input type="text" name="NAME" size=20>', desc: 'Creates a one-line text area. Size sets length, in characters.'},
	{code:'<input type="submit" value="NAME">', desc: 'Creates a Submit button'},
	{code:'<button type="submit">Submit</button>', desc: 'Creates an actual button that is clicked'},
	{code:'<input type="image" border=0 name="NAME" src="name.gif">', desc: 'Creates a Submit button using an image'},
	{code:'<input type="reset">', desc: 'Creates a Reset button'}
]);