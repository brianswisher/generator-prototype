---

# Prototype tools

## System dependancies
> win - cmd.exe | mac - Terminal.app

*Install latest versions for all

[NodeJs](http://nodejs.org/) - accept installer defaults

```
$ node --version
v0.10.17
```

[Bower](http://bower.io/) (javascript package manager)

```
# mac
$ sudo npm install -g bower

# win
> npm install -g bower
```

[PhantomJS](http://phantomjs.org/download.html) (headless webkit browser)

```
# mac/unix
$ phantomJs -v
1.9.1

# win
> cd "C:\Program Files\PhantomJS"
```

win - [RubyInstaller](http://rubyinstaller.org/) (use the 1.9.3 release) | other - [Ruby](http://www.ruby-lang.org)

```
$ ruby --version
ruby 1.8.7
# if that doesn't work try
$ ruby -v
```

Ruby gems [compass (sass)](http://compass-style.org/) & [zen-grids](http://zengrids.com/)

```
$ gem update --system 
Updating installed gems
...

# mac
$ sudo gem install compass zen-grids
# win
> gem install compass zen-grids

...
Successfully installed compass-0.12.2
Successfully installed zen-grids-1.4
2 gems installed

$ gem query
...
compass (0.12.2)
sass (3.2.9)
zen-grids (1.4)
...
# Newer versions (non alpha) are fine
```

[karma](http://karma-runner.github.io/0.10/index.html) (Test Runner for JavaScript)

```
# mac
$ sudo npm install -g karma

# win
> npm install -g karma
```

## Quick start

> win - cmd.exe | mac - Terminal.app

```
cd /p4/phoenix/main/phoenixApp/hwWebApp
# on Windows go to start/run/cmd
# cd \p4\phoenix\main\phoenixApp\hwWebApp
npm install
grunt server
```

Your prototype server will open momentarily.

## Commands

* `grunt` Process everything
* `grunt server` Run all servers (prototype, livereload, weinre, & proxy )
* `grunt test` Runs all unit tests

## Troubleshooting
1. Make sure you are at the root of your project directory.
2. Make sure `npm install` ran & completed, it may take a minute or so. Run it again, it won't hurt anything and should take less time the second time around.
3. Run `gem query` and make sure you have only one version of sass installed. The one you want is "sass (3.3.0.alpha.141, 3.2.5)", unless you are on Windows in which case, just make sure you have one non alpha gem. Run `gem uninstall sass`. You'll be prompted to specify which one.
