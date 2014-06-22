[learn-swift](https://github.com/nettlep/learn-swift)
===========

> Learn Apple's Swift programming language interactively through these playgrounds.

### Target Audience

  Programmers familiar with C++ and/or Objective-C.

### What you'll need

  XCode 6 or above (and probably a Mac to run it on.)

### Purpose & Goal

  More than a primer, these playgrounds are intended to get programmers up to
  speed on Swift as fast as possible so they can begin using Swift productively.

  These playgrounds only cover the language. They do not dig into the Swift
  Standard Library or other APIs.

  To increase your understanding, you are encouraged to experiment with them
  along the way. Play the 'what-if' game. These are live playgrounds which offer
  near-realtime feedback of edits.

### Source of Content

  I created these while working my way through the "Laugnage Guide" section of
  Apple's book, "The Swift Programming Language". I feel the information from
  that section is represented here fairly completely and very concisely. Many
  of the samples come directly from the book. Some portions from the book's
  "Language Reference" section were also included where I felt a bit more
  information was helpful.

  If you don't already have the book, it's free. You should probably get it.

### Developing

Using [Swift Playgrounds Builder](https://github.com/jas/swift-playground-builder)
we now have easier to read Playgrounds written in Markdown.

#### Installation

After cloning this repository, install [Node.js](http://nodejs.org/).

The run:

```bash
npm install
```

which will install all of the requirements for developing.

#### Start Developing

The `Sources/` directory contains all of the source Markdown files.
The `Playgrounds/` directory contains all of the final Playground files.

Run [`grunt`](http://gruntjs.com/) in your Terminal to
build the Playground files from the Sources.
Grunt will also watch for any changes and
will automatically build the Playgrounds.
