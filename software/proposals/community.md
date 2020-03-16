---
path: "/projects/software/community"
title: "Community"
---

# Helpful Engineers Community
| | |
|-|-|
| Proposal Stage | In progress |
| Tags           | Community |
| Created Date   | March 14th |
| Lead           | João Neves |
| Slack Channel  | #software-project-proposals, #outsystem-experts |
| Trello Board.  | https://trello.com/b/eTcMxCh6/project-open-air |
| Site URL| https://projectopenair.outsystemscloud.com/ProjectOpenAir |

## 📃 Idea in brief: Question to be resolved and why

### 💥 Problem
The Helpful Engineering community is experiencing an enormous growth! This is an amazing opportunity, 
but its also a big challenge to get everyone organized.

One particular problem is that **good ideas get lost** with this growth. We are struggling to give visibility 
and prioritize project proposals, and volunteers have trouble finding meaningful tasks. Slack and gSuite are not enough...

On a second level, it's also beneficial to have visibility on these projects. Having a single project listing, with information
on eadch project progress,  will attract bigger support from potential sponsors and drive more attention from the media.

We have volunteers to start coding this platform right now. Let's give Helpful Engineering the platform it needs to reach its full potential!

### 👨‍🔬Hypothesis
We need a community platform that would:
* Allow volunteers create project proposals, discover existing ones and rate them.
* Allow volunteers to join, list their skills, time zone and availability.
* Let the managers organize themselves and volunteers based on time zone and availability.
* Store and categorize all the shared knowledge/resources out from a chat.
* Allow managers to reach volunteers, assign them projects and organize teams around. 

## Implementation Status

* Platform delivered over a low-code tool named [Outsystems](https://www.outsystems.com/)

Current Feature List:
* User management with their skill set.
* Project catalog with categories.
* User search based on skills
* Project search based on skills

## 💻Implementation Suggestion

### V1
Community website with the following features:
* CRUD of users.
  * Add location/timezone and skill set.
* CRUD of projects.
  * Project categories.
  * CRUD of rating and commenting on projects.
* Newsflow where you can follow updates.
* Moderator dashboard where you can:
  * Create teams of users and assign them to projects.
  * Organize shifts.
  * Check who is on for `what` at any given time.

### What it is
A single source of truth for all proposals and running project at Helpful Engineering, together their team organizations.

### What it is not
Not a substitute of Slack, jira, or trello.

### Design
(Example taken from a banking one built a while ago)

![](../assets/community1.png)
![](../assets/community2.png)


V2 (..repeat the process)
Add further functionality when needed. Trello and github integrations, etc. Evolve based on functional needs.

## 💪 Impact of Potential Solution
* Improve the process around project creation and catalog
* Improve the process for team creation and assignment to projects
* Organize the workload 24h shifts based on time zones

## 🙌 Criteria for Success
* Volunteers can easily find Helpful Engineering projects they can contribute to
* Project leaders can easily assemble teams to work on their projects
* Slack noise is reduced by 30%
* It's easy to understand the progress of Helpful Engineering projects

## 😅 Known Issues
* We need some machine to deploy to (almost there)
* We need a DNS entry.
