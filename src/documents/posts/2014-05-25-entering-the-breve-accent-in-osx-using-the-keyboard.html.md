%%%
layout: post
title: Entering the Breve accent in MacOS X using the Keyboard
date: 2014-05-25 01:50
comments: true
tags: Tweaks
%%%

Today I had the need to enter English text into a document that used breve and macron accents.  These symbols are generally
used to denote "short" and "long" vowel pronunciations for introductory English learning material, and look like these:

&#259; &amacr;

In Mac OS X, it is possible out of the box to enter modified letters simply by holding the base key on the keyboard until
a popup is displayed.  Then one would simply select the desired letter.

![Popup](/stuff/2014/05/a-character-popup.png)

However, notice that this popup contains a version of the letter a with the macron accent but not one with the breve accent.
I needed a way to enter this character using the keyboard.

Mac OS X, like many other operating systems, has a system called "dead keys", which allows the user to enter a key that,
when used by itself does not produce a character. Instead, this key modifies the next character pressed. For example, it is
possible to type Option-E to produce the dead key for ´, which would modify the next key by applying an acute accent.

[Option-E][a] &rarr; &aacute;

The following screen shot shows the layout of these dead keys on my keyboard, as seen through the keyboard viewer tool.

![U.S.](/stuff/2014/05/us-opt.png)

The keys displayed here in orange are the dead keys.  But notice that our breve accent is not one of the dead keys!
How can I get the breve accent?

It turns out that by switching the keyboard layout from U.S. to one called U.S. Extended, different dead keys appear when
the option key is pressed:

![U.S. Extended](/stuff/2014/05/us-ext-opt.png)

Now it is possible to access the breve accent by using Option-B.

[Option-B][a] &rarr; &#259;

My next question at this point is this: is there a way to enter the connecting double breve: o&#861;o ?

It doesn't really look like it yet.  I looked, but it doesn't seem to be available on the keyboard, even using the U.S.
Extended keyboard layout.  In HTML it's possible to achieve using the &amp;#861; character between the two characters
being linked.  And for use in documents / presentations, I'll just have to copy and paste from the generated HTML for now.

[HTML] o&amp;#861;o &rarr; o&#861;o

