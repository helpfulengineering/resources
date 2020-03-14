| | |
|-|-|
| Proposal Stage |  Draft    |
| Tags           |      |
| Created Date   |      |
| Lead           |  Henrique Mota    |
| Slack Channel  |      |

## 📃 Idea in brief: Question to be resolved and why

Track each user to detect the GPS position on a map (google).
Also track sick users and history location.

### 💥 Problem

This time we need to avoid as much people as we can... so we can share our location  using our phone.
Will be useful also if we add a option (simple button) to report an infection, so based on the history
we can look at potential users nearby and warn them.

This will also be very useful to see how the virus could travel.  

### 👨‍🔬Hypothesis

A simple app to track GPS (lat/lon) and push to a server or google timeline url (a bit more tricky)
to detect your daily locations, or google timeline url (a bit more tricky) to detect your daily locations. 
https://www.google.com/maps/timeline/kml?authuser=0&pb=!1m2!2m1!1s2020-03

A Backend server with a frontend that uses google maps with a key to provide a user the visualization of
other users in an area (food suply, street, specific location, etc)
  

### 🤔 Assumptions

Just install the mobile app and enable the GPS sharing feature. The user needs to have a data plan 
or wifi connection. 


## 💻Implementation Suggestion

Mobile App:
Ract Native or PWA . 

Backend Server:
MongoDb or another DB with lat/long query capabilities
Nodejs + TypeScript + Graphql + Nestjs?

Front End:
Vue or React Or Angular 8


### V1

### What it is

### What it is not

### Design

### Data/Experiments

## 💪 Impact of Potential Solution

Huge

## 🙌 Criteria for Success

Number of users using the app and sharing their current location.
Number of users using the information to avoid areas with people

## 😅 Known Issues

WARNING -> It could have issues related to crime as one can track everyone's location...
We could only provide the last 30m location and in case of infection we could share the data 
with Hospitals/Gov/ETC


## ✅ "I've read this" section

| Name | Status |
|-|-|
|  |  Read/Not Read    |
