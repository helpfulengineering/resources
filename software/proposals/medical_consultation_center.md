
# PLEASE COPY THE DOCUMENT AND START YOUR PROPOSAL ON YOUR COPY 
| | |
|-|-|
| Proposal Stage |  Initial   |
| Tags           |  tickets, calls, support    |
| Created Date   |  Mar 2013    |
| Lead           |  chestnutKugelblitz(?) - better to find somebody with management skills. But I can try to handle it  too |
| Slack Channel  |   TBD     |

## 📃 Idea in brief: Question to be resolved and why

The app - medical center which supports CRM features, email/ticket system, video calls via internet, text chats(can be not time-effective!) and cheap calls to fixed and mobile phones.
CRM system should support adding information about a person, his or her medical problems, bacground history, etc.
Ticket system should support templates and answers by templates. 

### 💥 Problem

* Medical centers will be overloaded. Even volonteers can be overloaded.
* Also chaos can be a problem. We need a CRM feature to fix it
* Calls can be expansive. (maybe SMS too?) 

### 👨‍🔬Hypothesis
So, the app (check idea) can be a solution

### 🤔 Assumptions

We can manage to create it!

## 💻Implementation Suggestion

Microservice app with different parts, can be developed in async mode:

* UI - webclient
* mobile apps (packed webUI?)
* CRM backend
* VoIP microservice
* flask(?)
* SQL

### V1
In first version we can skip mobile clients, and provide a basic CRM, ticket-management features

### What it is
TBD

### What it is not
TBD

### Design
Let's discuss it.
* we can use SaaS API, like twilio (not AD!), amazon lambda, amazon S3, amazon rds. Can be vendor-lock problem, especially if service down because quarantine
* we can use stadalone solutions like kubernetes (and easy deploy in each cloud), and asterisk 

### Data/Experiments
TBD

## 💪 Impact of Potential Solution
TBD

## 🙌 Criteria for Success
TBD

## 😅 Known Issues
We need a team, and we have to choose design. 
Good idea to merge with another project: https://github.com/Helpful-Engineers/resources/blob/master/software/proposals/web_medical_call_center.md

## ✅ "I've read this" section
Add in the table below the people you definitely want their eyes on this proposal. Sometimes there are no comments to be made but it's good to know people have read the proposal

| Name | Status |
|chestnutKugelblitz | creator of doc|
|  |  Read/Not Read    |
