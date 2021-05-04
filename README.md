# PADS Website

## How to start a new edition

It is now time to start the work for a new edition of PADS. The organizing committee has been appointed, and it's time to reflect new year's information in the website. Of course, we do not want to destroy the history of the website, and "freeze" current year website. Also, we do want to generate a link to the now-previous year edition of PADS.

How complicated can it be?    
It's a 30 seconds job! Just:

* create a new folder `_20xx` for the new year
* open `_config.yml` and:
  - update the `current_year` variable to the `20xx` new year
  - in the `collections` array, create at the top a new entry for the new edition, like:

```yaml
'20xx':
  output: true
  permalink: /:collection/:title
```

That's it! If you regenerate it, the website already points to the new edition which is, of course, empty. You might want to start from copying the content of the now-past edition from previous year, and start modifying.

### A note on "Important Dates"

The important dates table typically appears in many pages. To ensure consistency, the demo content relies on a dedicated file (`_important_dates.md`) which is then included into all other relevant pages. This ensures that if a change is made to the dates, it is immediately reflected in all the other pages.

## Configuration variables for an edition

The following variables are supported for an edition:

* `output`: if set to `true`, the pages for the corresponding `_20xx` edition are generated.
* `permalink`: for editions supported by this engine, for consistency it should be set to `/20xx/:name`
* `title`: set it to the name of the conference (to be used in the "other editions" page), like: `17th ACM/IEEE/SCS Workshop on Principles of Advanced and Distributed Simulation`
* `proceedings`: a link to the official proceedings
* `website`: a link to the website of the edition. If not set and `output`: `true`, the the link to the correct edition in this engine is automatically generated.
* `venue`: the location of the conference, to be shown in all edition pages
* `dates`: the dates of the conference, to be shown in all edition pages

Any additional variable can be included in `_config.yml` to ease the management.

## Menu Order and Unpiblished Pages

The order of links in the menu follows the names of the pages in an edition folder. Files can be renamed to sort them accordingly.

If you need to prepare a page, but you do not want to show it in the menu, you can name the corresponding file starting with a "_": It will not be rendered in the website.

## Jekyll Dependencies and Local Preview

The website is statically built using [Jekyll](https://jekyllrb.com/).
These are the plugins which are used in this website. They are supported out of the box on GitHub pages. 

- jekyll-sitemap
- jekyll-seo-tag
- jekyll-relative-links

If you want a local preview of the website, just launch this command in the cloned folder:

```bash
jekyll serve
```
