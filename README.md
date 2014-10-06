AngularJS Translations, powered by Symfony2 [![Build Status](https://travis-ci.org/boxuk/angular-symfony-translation.svg)](https://travis-ci.org/boxuk/angular-symfony-translation) [![Code Climate](https://codeclimate.com/github/boxuk/angular-symfony-translation/badges/gpa.svg)](https://codeclimate.com/github/boxuk/angular-symfony-translation) [![Coverage Status](https://img.shields.io/coveralls/boxuk/angular-symfony-translation.svg)](https://coveralls.io/r/boxuk/angular-symfony-translation)
===========================================

> Integrates BazingaJS Translation bundle with AngularJS.

When integrating an Angular application with Symfony2, you can quickly find
yourself in an awkward situation when it comes to dealing with translations.

You have all of your translations server-side and exposed to your JS using
the excellent [Bazinga JS Translations Bundle](https://github.com/willdurand/BazingaJsTranslationBundle),
but how do you access those translations from your Angular app (including your view
partials)?

This Angular module provides functionality to access translations exposed
by the above mentioned Symfony2 bundle from within your Angular app.

## Key points:

* Works with both `1.x` and `2.x` versions of the Bazinga JS Translation bundle.
* Provides `trans` and `transChoice` filters with the same method signatures as
  the methods provided by the BazingaJS bundle.
* Uses an adapter so you can use `2.x` syntax regardless of whether you're using
  `1.x` or `2.x`.

## Installation

* `bower install --save angular-symfony-translation`
or
* `npm install --save angular-symfony-translation`

Include `dist/angular-symfony-translation.js` before your Angular app
(either as a `<script>` tag or as part of your build script).

List the module as a dependency of your app:

```javascript
angular.module('myApplication', ['boxuk.translation']);
```

## Usage

The following assumes you already have [Bazinga JS Translations Bundle](https://github.com/willdurand/BazingaJsTranslationBundle)
setup and working.

This module exposes an API that matches what is provided by version
**2.x** of the BazingaJS bundle. If you're using a **1.x** release, you can
still use this module with no further modifications as the module will handle
transforming method calls for the older API.

### General documentation:

The filters provided by this module match the BazingaJS bundle as closely as
possible. As such, the documentation provided by that bundle should be consulted
for more detail on usage, e.g. parameters, pluralization, etc.

This documentation will cover the **differences in usage** and nothing else.

### In a view partial:

#### `trans` filter:

```html
<!-- Basic usage -->
<p>{{ 'key' | trans }}</p>

<!-- With custom params and domain -->
<p>{{ 'key' | trans: { 'foo': 'bar' }: 'my_domain' }}</p>
```


#### `transChoice` filter:

```yaml
# app/Resources/messages.en.yml
salmon: "{0} No salmon today, sorry.|{1} We have a single salmon!|[1,Inf] Woah, there's %count% salmon. That's a lot of salmon."
```

```html
<!-- Basic usage -->
<p>{{ 'salmon' | transChoice: 5: {'count': 5} }}</p>

<!-- With custom domain -->
<p>{{ 'salmon' | transChoice: 5: {'count': 5}: 'my_domain' }}</p>
```

## System overview

Probably only relevant if you're planning on developing this further:

![System diagram](/docs/system-overview.png)
