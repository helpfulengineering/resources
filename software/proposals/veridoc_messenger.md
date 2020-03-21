---
path: "/projects/software/veridoc_messenger"
title: "VeriDoc - Secure, Anonymous Messaging for Verified Doctors"
---

| | |
|-|-|
| Proposal Stage |   Draft   |
| Tags           |   Messaging, communications, identity   |
| Created Date   |   17/03/2020   |
| Lead           |   Benobi (author)   |
| Slack Channel  |   #project-veridoc-messenger   |

## 📃 Idea in brief: Question to be resolved and why

### 💥 Problem

Doctors all over the world on the frontlines are unable to share information and communicate due to red tape - legal restrictions, employer restrictions, liability reasons, privacy concerns...

### 👨‍🔬Hypothesis

If doctors can not communicate freely then information cannot travel as quickly as we need it to and more people will suffer and die under triple and quadruple trial and error. 

VeriDoc ✔️🧑🏽‍⚕️👨🏻‍⚕️is a messaging app for verified doctors all over the world to communicate anonymously.

### 🤔 Assumptions

Doctors around the world (not just in Los Angeles) are looking for a way to communicate and share info from the front lines of the war with Coronavirus.

## 💻Implementation Suggestion

We will fork an existing fully featured, open-source encrypted chat app and build out our own backend for authentication.

Example - Signal app has been forked many times - recently, it was forked by Loki to add blockchain key authentication:
https://github.com/signalapp/
https://github.com/loki-project/session-ios
https://github.com/loki-project/session-android

The app will make use of a verification provider API such as Doximity, PokitDok, or CredSimple to verify physician credentials.

Example API:
https://platform.pokitdok.com/documentation/v4/#claims

MVP will start simple and we will add features based on user feedback.

### V1

* Authentication 
* Pseudonyms
* Encryption
* Notifications
* @mention 
* Topic-Specific Chat Rooms
* Search using #tags 

### What it is

An encrypted messenger for doctors to anonymously share information with one-another.

### What it is not

A marketing platform to sell things to doctors.

### Design

https://drive.google.com/drive/u/0/folders/1I45F1R8yIg3eHShDBYC-MxnSOVE48xIl

### Data/Experiments

## 💪 Impact of Potential Solution

Massive impact in the speed of communications between doctors around the world. Potentially could grow into a platform for patients and doctors to communicate for a subscription fee.

## 🙌 Criteria for Success

Quickly deploy a fork of an existing encrypted messenger app with anonymity. 

## 😅 Known Issues

## ✅ "I've read this" section

| Name | Status |
|-|-|
|  |  Read/Not Read    |
