---
path: "/projects/software/crowdsourcing_contact_tracing_app.md"
title: "Crowdsourcing Contact Tracing"
---

# The above values are used for the website, please make sure to fill them out.

| | |
|-|-|
| Proposal Stage |      |
| Tags           |  Phone-App, Contact-Tracing, self-reporting    |
| Created Date   |  3/16/2020    |
| Lead           |      |
| Slack Channel  |      |

Proposal made by Roy Rinberg on 3/16/20. 

## 📃 Idea in brief: Question to be resolved and why

Crowd sourcing contact-tracing and publishing self-reporting illnesses to the people.

Right now, places like the US do not have enough testing kits to have a government repository to how many people are really sick. However, people can self-identify their symptoms with decent accuracy. This idea is to create a phone app which will store the last 72 hours of location data (stored locally). In the event of potentially being infected (showing symptoms) the user will notify the app, and this location data will be shared with a global database.

### 💥 Problem

Help with self-identifying illness and contat-tracing coronavirus infections. 

### 👨‍🔬Hypothesis
	
1. People who are infected often can diagnose themselves.
2.  People have no way to inform the people who are around them, currently or previously that they have been infected. 
3. Being able to know that someone who has been ill with covid-19 will change people's behaviors to either avoid regions, or clean themselves, surfaces around them. 
4. Contact tracing might produce a lot of noise in cities (which might appear to be entirely covered in covid-19), but in towns and small cities, this could help individuals isolate themselves from potentially dangerous areas.
5. The last 72 hours is enough location data regarding the covid-19 :
	* "HCoV-19 was most stable on plastic and stainless steel and viable virus could be detected up to 103 72 hours post application (Figure 1B), though by then the virus titer was greatly reduced (polypropylene from 103.7 to 100.6 TCID50/mL after 72 hours, stainless steel from 103.7 to 100.6 104 TCID50/mL after 48 hours, 105 mean across three replicates)" https://www.medrxiv.org/content/10.1101/2020.03.09.20033217v1.full.pdf


### 🤔 Assumptions

1. It is not too late to do contact tracing
2. A map of "the last 72 hours that someone who is sick has been" will have hot-zones and cold-zones that are discernible
3. The location data will not be too much data to handle reasonably
4. We will be able to get buy-in from a lot of people
5. Enough people have smart phones that this is helpful


## 💻Implementation Suggestion

### V1
2 features exist as part of the MVP:

1. A mobile app that will locally store people's locations, unless they self-report that they are showing illness.
	* App will notify people if they have been in contact with a region that has had coronavirus (by quering the database) since the last time they have checked in. After this, they can mark that they have "cleaned" themselves, which will reset the corona tracking counter.
		* Rationale for this being that figuring out if people have been in contact with other people, directly, is hard, but you get that for free if you are tracking regions people have been in (as you cannot interact with someone without being in the same place.) 
		* This might potentially fit better as a V2 feature.
	* App will compute what people you have been in contact with what people you have been in contact with in the last 2 weeks. And if you have been ill, it will notify them. 
		* Note: you do not need to store more location data, since you can simply store "interpersonal interactions" as their own computed-data as they happen (computation is based on individuals coexisting in the same place).
		* This should only be stored locally, and completely anonymous
		* This might potentially fit better as a V2 feature.  

	* Privacy feature : People might not want to betray personal information. There should be configurable regions “privacy zones” (i.e. .1 miles around home). Strava has this functionality
2. A web portal that has global map that will show where those who are suspected to be ill have been, starting from 72 hours prior to becoming ill.
	* view 1: local region (i.e. zip code, or 50 mile square radius around a lat/long)

3. A global location database that stores anonymized location data
	* global data will likely be too much to process in the browser, so downsampling will need to be processed for the global view


### What it is
* A webportal with granularity down to 10m (whatever gps/wifi-network-mapping provides) showing places that suspected-ill people have gone
* The goal is to help people know: what areas to avoid, and when to do a full-clean of their things.

### What it is not
* A way to communicate between individuals (this is not a messaging app, and all information will be anonymized)
* A public API endpoint for querying where ill people are (yet?)
* A green stamp for businesses/houses that they are "covid-19-free"
* A way for organizations to track down ill people
* A way for anyone but user to know information about their potential illness.

### Design
High-level design: 
https://www.lucidchart.com/invitations/accept/69660f40-a372-4f56-bb7f-4246684c3fa4

Components: 
1. Global Database:
	* Stores the information for users, by region
		* Needs to be indexable by region
	* Needs an API endpoint for querying it by region (map-tile)
	* Potentially needs to periodically compute a downsampled map, every X-hours for different regions

2. Web App:
	* View 1: local view, which queries the database for location data of sick people in a region
	* View 2: regional/global heatmap view of ill/healthy users (denoting percentages of healthy/ill)
		* Open question- will this be computed on device, or in the cloud/database

3. Phone app:
	* Phone app stores local geo-data in a private cache 
		* Open Question: will this be GPS data which can be costly on energy, or perhaps wifi-networks-geo-location data?
		* May need to do low-battery mode where it stores location data less frequently
	* If user marks themselves as ill, app sends location data to global database.
	* Phone app queries database periodically and checks if user has come into contact with regions that are contaminated 
	* Phone app calculates what users it's come into contact with (coexisted in the same place) (users are stored as uids). Phone stores users for 14 days; if any a user marks themselves as ill, all those who have interacted with them are notified that they are potentially infected. Graph-jumping is possible here, but I'm not sure how deep this recursion should go.
		


### Data/Experiments

V2 (..repeat the process)

Added features to the mobile app: 

* Business coordination : For locations that have their addresses publicly listed on google/yelp, send out emails/texts to those people.

Added feature to the web-app/database:

* web-app has added view: global/regional map, with downsampled hot/cold zones colored by intensity

## 💪 Impact of Potential Solution
1. flattening the curve!
	1. We could help people know to avoid dangerous regions (further helping to flatten the curve) 
	2. We can help people know if they have come into contact with an individual who is suspected of having the corona, so they can clean their things and selves.


## 🙌 Criteria for Success

1. Number of users in a county, by percent of people in the county. Ideally in some regions we can have >50% - this is easier in smaller areas.
2. updates from ill-users are near-real-time at ~every 5 minutes
3. healthy users query their personal location data against the global database efficiently, every n minutes (initial proposal: 5 minutes?).
3. Webportal is up 99.9% of time
4. Database up 99.9% of the time

## 😅 Known Issues
	* None yet

## Observations:
	* Apps like Happn do someting like this (dating app that finds matches based on if you have crossed paths) 

## ✅ "I've read this" section
| Name | Status |
|-|-|
|  |  Read/Not Read    |
