---
layout: default
title: "ACM SIGSIM PADS 2021"
---

{% assign edition = site.collections | where: "label", page.collection | first %}
{%- assign year = page.collection | split: "_" -%}
{%- assign year = year[1] -%}

{% include banner.html     picture="miami.jpg" %}

---

The {{ year }} ACM SIGSIM Conference on Principles of Advanced Discrete Simulation (ACM SIGSIM PADS) will take place at {{ edition.location }} on {{ edition.dates }} in {{ edition.venue }}.

The annual PADS conference has a long history dating back to 1985. The conference was formerly known under the name Principles of Advanced and Distributed Simulation, and before that simply Parallel and Distributed Simulation. Over the years PADS has broadened its scope beyond its origins in parallel and distributed simulation and now encompasses virtually all research that lies at the intersection of the computer science and the modeling and simulation fields. Specifically, many research topics not related to parallel or distributed model execution are now included.

SIGSIM PADS provides a unique forum for reporting and discussing research results and important topics of interest to the M&S community. SIGSIM PADS is the flagship conference of ACM's Special Interest Group on Simulation and Modeling (SIGSIM) and is fully sponsored by that organization.

{% assign moreinfo = "The SIGSIM PADS Community is thankful to Prof. Osman Balci for having served for several years as the webmaster of the conference. Thanks Osman for having kept us all connected!" | split: '|' %}
{% include guy.html     
                        picture="OsmanBalci.jpg"
                        additional_lines=moreinfo %}

## TOMACS

ACM SIGSIM PADS and [ACM Transactions on Modeling and Computer Simulation (TOMACS)](https://tomacs.acm.org/) agreed to link both premier outlets for Modeling and Simulation more tightly. Each year a special issue based on significantly extended, selected papers of SIGSIM PADS will appear in TOMACS. A detailed procedure involving the ACM SIGSIM PADS committees and the editorial board of TOMACS has been worked out to ensure a high quality and fast processing of the special issue.

In the opposite direction, authors who have an accepted paper presenting original work in TOMACS, will receive the possibility to present their work at a SIGSIM PADS conference in the next two years after acceptance in TOMACS. If authors plan to do so, they need to inform the ACM SIGSIM PADS program chair and the TOMACS Editor in Chief before the paper submission deadline of the respective year. Please note that the conference fees will not be waived.

## Reproducibility Initiative

Authors submitting contributions to the conference can decide to opt in the initiative. After a paper is accepted, an independent group of evaluators will contact the authors to collect any artifact associated with the publication, in order to replicate the experiments presented in the paper. If the replication succeeds, the paper will be stamped with special badges, showing whether the artifacts were available, functional or reusable or if the results presented in the paper have been reproduced. In no way this initiative is related to acceptance of the paper: contributions which opt-in do not have higher acceptance chances, nor accepted papers associated with artifacts which are not reproducible will be excluded from the proceedings.

For more information, please see the [SIGSIM PADS {{ year }} Computational Results Replication and Artifact Evaluation](04.reproducibility.md) page.

## Important Deadlines

{% include_relative _important_dates.md %}
