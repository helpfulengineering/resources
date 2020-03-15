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
We are struggling to give visibility and prioritization to project proposals, organize volunteer efforts and redirect them to meaningful tasks. Slack+GSuite is great but it has its limitations.

In parallel, the knowledge and resources shared by Slack will be lost on the history of the chat. We would need to persist it and ease the access over time.

On a third level, in order to get a bigger support from potential sponsors/media it would be effective to have a public platform where our progress can be followed.

At last, we have people offering to start coding right away while the real Hw projects get ready.


### 👨‍🔬Hypothesis
We need a community platform that would:
* Allow volunteers to join, list their skills, time zone and availability.
* Allow volunteers create project proposals, discover existing ones and rate them.
* Allow managers to reach volunteers, assign them tasks and organize teams around. From that point the work can start and be managed in a different tool such as jira or trello.
* Let the managers organize themselves and volunteers based on time zone and availability.
Store and categorize all the shared knowledge/resources out from a chat.


## Implementation Status

* Platform delivered over a low-code tool named [Outsystems](https://www.outsystems.com/)

Current Feature List:
* User management with their skill set.
* Project management with categories.
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

A single source of truth for project management and team organizations.

### What it is not
Not a substitute of Slack, jira, or trello.

### Design
(Example taken from a banking one built a while ago)

![](../assets/community1.png)
![](../assets/community2.png)


V2 (..repeat the process)
Add further functionality when needed. Trello and github integrations, etc. Evolve based on functional needs.

## 💪 Impact of Potential Solution

* Improve the process around project creation and management.
* Improve the process for team creation and management.
* Organize the workload 24h shifts based on time zones.


## 🙌 Criteria for Success
* Reduce the Slack noise by 30%.
* Archive the knowledge by persisting in database.

## 😅 Known Issues

* We need some machine to deploy to.
* We need a DNS entry.
