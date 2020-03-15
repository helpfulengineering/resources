---
path: "/projects/software/web_medical_call_center"
title: "Web Medical Call Center"
---

# Web medical "call" center
| | |
|-|-|
| Proposal Stage |  Draft    |
| Tags           |      |
| Created Date   |   March 14, 2020   |
| Lead           |      |
| Slack Channel  |      |

## 📃 Idea in brief: Question to be resolved and why

### 💥 Problem

Medical call centers are being overflowed with calls regarding possible COVID-19 infection, however the majority of these calls don’t lead to positive cases and many of the calls are left unanswered, and possible positive cases are being addressed in a later stage. 

### 👨‍🔬Hypothesis

This proposal tries to merge the ideas from Dario Dap and Bruno Silva.

Create a web application that allows users to do a self-diagnosis test (through heart rate and blood oxygen saturation measurements and/or a simple form with relevant questions). With the results of these tests a level of infection is computed and users are queued to talk with healthcare professionals via web chat or video. This way high probability cases can be addressed first. 


### 🤔 Assumptions

1. The existence of a __reliable__ form or method that can provide a level of infection. 
2. Healthcare professionals available to talk with “callers” 


## 💻Implementation Suggestion

### V1
Platform with two main actors: 

 * Patients 
	Phone number based authentication to ensure that one person doesn’t make multiple diagnosis.
	
	Can perform a self-diagnosis test by: a) filling a form b) undergoing some kind of test such as blood oxygen saturation (to be discussed). Then, they are queued to talk with a healthcare professional.
 * Healthcare professionals
Should be authenticated.
		
	Tasks: 
		 - Engage in a chat (text, audio or video) with the patients that took the test.
		 - If necessary, request a given patient to perform the test again.

Server: 
* Store results of self-diagnosis tests to keep track of patients diagnosis and current virus situation. 
* Compute level of infection and queue patients based on this value. 


### What it is
(what are we testing and the hypothesis we’re testing)

### What it is not

Not a self-diagnosis tool. The goal is prioritize those who have a higher probability of infection and connect them with healthcare professionals.

### Design
(Screenshot/drawing/link)

### Data/Experiments
(Detail all the things about the experiment/trial setting especially any data requirements)

V2 (..repeat the process)

## 💪 Impact of Potential Solution
* Reduce the stress from medical call centers.
* Address patients with high probability of infection.
* If used by a large number of people, it is possible to obtain a larger picture of the situation

## 🙌 Criteria for Success
(Main KPIs, metrics to evaluate and results to achieve)

## 😅 Known Issues
* Possibility of users answering with false and more alarming symptoms so that they can be addressed first.

## ✅ "I've read this" section
Add in the table below the people you definitely want their eyes on this proposal. Sometimes there are no comments to be made but it's good to know people have read the proposal

| Name | Status |
|-|-|
|  |  Read/Not Read    |