---
layout: editions
title: "Other Editions"
---

{% assign editions = site.collections | sort: 'label' | reverse %}
{% for edition in editions %}
{% if edition.label != "posts" %}
{%- assign year = edition.label | split: "_" -%}
{%- assign year = year[1] -%}
{%- assign year_int = year | to_integer -%}
{%- assign links = '' | split: ',' -%}
{%- if edition.proceedings %}
    {%- capture newlink %}[Proceedings]({{ edition.proceedings }}){% endcapture -%}
    {%- assign links = links | push: newlink -%}
{%- endif -%}
{%- if edition.website -%}
    {%- capture newlink %}[Website]({{ edition.website }}){% endcapture -%}
    {%- assign links = links | push: newlink -%}
{%- elsif year_int > 2019 -%}
    {%- capture newlink %}[Website]({{ '/' | append : year | relative_url }}){% endcapture -%}
    {%- assign links = links | push: newlink -%}
{%- endif -%}

* **{{ year }}: {% if edition.title %}{{ edition.title }}{% else %}ACM SIGSIM Conference on Principles of Advanced Discrete Simulation{% endif %}**     
  *{{ edition.venue }} ({{ edition.dates }})*    
  {{ links | array_to_sentence_string: " - " }}    
{%- endif -%}
{% endfor %}
