---
path: "/projects/software/heatpmap_tracking_app"
title: "Heatpmap Tracking App"
---

| | |
|-|-|
| Proposal Stage |   Draft   |
| Tags           |   Location tracking, Google maps, Scheduling   |
| Created Date   |   15/03/2020   |
| Lead           |   Armando Santos   |
| Slack Channel  |   project-danger-zone-heatmap   |

## 📃 Idea in brief: Question to be resolved and why

(Merge of other projects: location_crowdsourcing, tracking_app, whereamI_solution)

There is a lack of info about places and services. There is also lack of info about the time and place where infected people were. This app would provide a heat map that would be a able to keep track of people/places affluence history. This can help with statistics and if there's anyone infected or with symptoms that person could mark the place and time where he was and notify other people to be aware! Also this app could be used to issue notifications to people and tell them the best time when they should go to shopping (for example) by using some kind of scheduling algorithm we could minimize social interaction in critical places like markets.

### 💥 Problem

A lot of countries are in emergency quarantine mode. People are encouraged to stay home
and in critical places they are forbidden to leave. Sooner or later, people will need to
go to the supermarkets or other activities and if they had information about what places
were crouded, they could avoid wasting time, resources and risking being infected by going there.

### 👨‍🔬Hypothesis

App with heatmap functionality that shows the affluence of people nearby public spots like pharmacies, supermarkets, parks, etc. The purpose of the app would be to provide information about the time, place and affluence of every spot as well as keep track of an history for statistics purposes. This information could be useful to notify if people were near a place with a high contamination probability and, could also be useful in developing a scheduling algorithm that would notify people of the most appropriate time to go shopping (for example).

### 🤔 Assumptions

People would adopt and use the app on their phones with GPS on.

## 💻Implementation Suggestion

Google maps or other similar service can provide a lot of the functionalities that we are
looking for. We should decouple the frontend and the backend. The backend should be
separated in modules: tracking info CRUD, heatmap statistics, push notifications,
scheduling algorithm.

### V1

Version 1 should focus primarly on the heatmap and history functionality first.

### What it is

### What it is not

### Design

### Data/Experiments

## 💪 Impact of Potential Solution

Already described.

## 🙌 Criteria for Success

The usage of the app gets a lot of traction.

## 😅 Known Issues

There can be issues related to privacy, but all the information about the users should be
anonym.

## ✅ "I've read this" section

| Name | Status |
|-|-|
|  |  Read/Not Read    |
