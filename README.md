
## How to start a new edition

It is now time to start the work for a new edition of PADS. The organization committee has been decided, and it's time to refect new year's information in the website. Of course, we do not want to destroy the history of the website, and "freeze" current year website. Also, we do want to generate a link to the now-previous year edition of PADS.

How complicated it can be?    
It's a 30 seconds job! Just:

* create a new folder `_edition_20xx` for the new year
* open `_config.yml` and:
  - update the `current_year` variable to the `20xx` new year
  - in the `collections` array, create at the top a new entry for the new edition, like:

```yaml
edition_20xx:
  output: true
  permalink: /20xx/:name
```

That's it! If you regenerate, the website already points to the new edition which is, of course, empty. You might want to start from copying the content of the now-past edition from previous year, and start modifying.

## Configuration variables for an edition

The following variables are supported for an edition:

* `output`: if set to `true`, the pages for the corresponding `_edition_20xx` are generated.
* `permalink`: for editions supported by this engine, for consistency it should be set to `/20xx/:name`
* `title`: set it to the name of the conference (to be used in the "other editions" page), like: `17th ACM/IEEE/SCS Workshop on Principles of Advanced and Distributed Simulation`
* `proceedings`: a link to the official proceedings
* `website`: a link to the website of the edition. If not set and `output`: `true`, the the link to the correct edition in this engine is automatically generated.
* `venue`: the location of the conference, to be shown in all edition pages
* `dates`: the dates of the conference, to be shown in all edition pages

## Jekyll dependencies

These are the plugins which are used in this website:

- jekyll-sitemap
- jekyll-seo-tag
- jekyll-relative-links
