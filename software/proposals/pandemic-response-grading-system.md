---
path: "/projects/software/your_project_url_slug"
title: "Your Project Name"
---

# The above values are used for the website, please make sure to fill them out.

# PLEASE COPY THE DOCUMENT AND START YOUR PROPOSAL ON YOUR COPY 
| | |
|-|-|
| Proposal Stage | Draft |
| Tags           | response metrics, data mining, feedback  |
| Created Date   | 16-Mar-2020 |
| Lead           | Bryan Harper     |
| Slack Channel  | TBD |

## 📃 Idea in brief: Question to be resolved and why
 

### 💥 Problem
Countries, states, provinces, etc. are all implementing various policies to slow the spread of COVID-19. Part of the problem I see with this is that there is a lack of feedback metrics to gauge the efficacy of these policies aside from COVID testing (something many countries have had issues with). For the engineers out there, a proper analogy is a feedback control system. i.e. there are "inputs" (social distancing, school closure, etc) that are trying to control a "plant/model" (social interaction, hygiene, etc.) to obtain a desired "output" (spread of COVID-19). The only feedback that communities seem to have is COVID-19 testing.

### 👨‍🔬Hypothesis
With more available feedback and metrics that quantify isolation quality, spread risk, etc., communities could better assess how well isolation/quarantine/distancing meassures are working prior to wide spread testing. Quality feedback = quicker convergence to desired results.   

### 🤔 Assumptions
Data necessary is available and accurate enough to yield discernable metrics. 

## 💻Implementation Suggestion
The objective of this project would be to amalgamate multiple data sources to provide additional feedback metrics to communities to use in times of virus outbreaks (unfortunately COVID-19 will not be the last). Metrics such as community dispersion/clustering, peak travel times/rush hour, time spent in high infection risk areas (gyms, pools, close quarters markets, bars/clubs, etc.) This is similar to Mark Xu's google maps suggestion, but I'm broadening it to include any data source that could be accessed, obtained, scraped, mined, etc., with reasonable accuracy. 

### V1
This could be most easily accomplished with a web application since it would be primarily for data request, data processing and data display. There are obviously a number of subsystems within this idea. Subsystems and interfaces will be better defined if the project is selected and pursued. 

### What it is
A utility using publically (or private collaboration) accessible data sets to provide communities with insights about how their social distancing is working.   

### What it is not
A distributed application that relies on user engagement, opt-in, or precise tracking. 

### Design
I am no cloud architecture expert so stick with me here and please make suggestions.
* Front end could be a node.js web app hosted on AWS or cloud provider of choice. 
* Back end could be in something like EC2 with our scalable database of choice. This would have sub-systems responsible for:
    * Scraping and processing data 
    * Building upon the database 
    * Running continuous testing and modeling in the back end for major areas to continuously test operability. 
    * Serving user queries 


### Data/Experiments
I'll treat this section as a bench-mark list for data driven components
1. Historic v. Current Geographic Population Distribution 
    * Generate a visualization and metric for population dispersion and mobility over a fixed period and compare it with historical norms

2. Classification of High Exposure Risk Geographic Areas
    * Identify and categorize high exposure risk areas based on the venu genre and normal population density
        * e.g. We find "Foo Theater" and know that it's a movie theater that has approximately "bar" patrons per day in a tight space... seems risky
        * e.g. We find "Foo Park" and know it's a green space or nature preserve that has approximately "bar" patrons per day, but they're tyypically spread out: seems like less risk


## 💪 Impact of Potential Solution
Quality feedback = Faster convergence to desired results

## 🙌 Criteria for Success
# Data Success Criteria 
* Population locale data accuracy is sufficient relative to COVID-19 spreading. i.e. Given best known transmission models, errors are within **N** (ToDo) bars. 
* High risk location classifier has false positive rate lower than **N%** (ToDo)
* High risk location classifier has accuracy within **N%** (ToDo)
* Data biases are aknowledged and mitigated 

## 😅 Known Issues

## ✅ "I've read this" section
Add in the table below the people you definitely want their eyes on this proposal. Sometimes there are no comments to be made but it's good to know people have read the proposal

| Name | Status |
|-|-|
| Aaron Pik | Not Read |
| Filipe Picoito Jorge | Not Read |
| George Banfill | Not Read |
| Jason Yamada-Hanff | Not Read | 
| Manuel Lopes | Not Read |
| Marco Sousa | Not Read | 
| Mark Xu | Not Read |
| Michael Sparks | Not Read | 
| Shayan Chowdhury | Not Read|