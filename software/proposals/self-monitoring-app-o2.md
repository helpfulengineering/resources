---
path: "/projects/software/self-monitoring-app-o2"
title: "Self Monitoring App O2"
---

**Zero2: Self-monitoring app**

### Update 17-mar-2020

We have a hospital that is interested in our solution: "crisis unit of the Lombardy Region (italy) on the Covid-19 emergency contacted us because they want to provide people with mild forms of infection with the device to measure peripheral oxygen saturation, so that patients can monitor themselves and go to the emergency room only in case their conditions worsen. They are interested in testing and eventually roll out our app as soon as we are ready and we have accurate results. There is real need to accelerate the mission 2 stream."

- [Sign up for the team here](https://docs.google.com/spreadsheets/d/1LGEJGk7nFnioGLAseDu19FJNqueTGQdMtTXCLx9Jm-Q/edit#gid=0)
- [Check the trello board here](https://trello.com/b/6v7ox18R/self-monitoring-o2)
- [Check the google doc with 100% of the notes here](https://docs.google.com/document/d/1RsmD6YvheHjNJbWQv5J8DrjaoDcllK2K8nlzDzkdE4w/edit#)
- [The figma design can be found here](https://www.figma.com/file/GElAUPefKu0eM3nkGVAs1B/Help-eng-Monitor-o2)

Currently, we have 3 main projects, with the focus on 1 & 2.
1. Collect qualitative Data
2. Collect quantitative physiological data
3. Collect other data sources to 

We want to update on the first two projets, what we want to get to, and what our challenges are:

#### Collect qualitative data
##### MVP requirements
- A mobile-first web app according to design in [figma](https://www.figma.com/file/GElAUPefKu0eM3nkGVAs1B/Help-eng-Monitor-o2), see requirements in the [trello card](https://trello.com/c/14F9Wf2X)
- A database to write the information to, which can be used for analysis. This DB should be easily scalable, so that the mobile app with more physiological information can write to this, too

##### MVP challenges:
- Decide on DB tech, set up DB
- Decide on frontend tech, set up initial format
- Create copy for welcoming user, decision-tree questionnaire, and advice afterwards


#### Collect quantitative physiological data
###### MVP Requirements
- A mobile app that collects physiological data (specifically: Blood oxygen saturation) + additional information, similar to info in the qualitative web app collector. See the [trello card](https://trello.com/c/Pv3lpjzu) for more information.
- Will, for now, give similar advice as the web app
- This collection of data should also be a separate function/feature. MDs in Italy requested this, as they want to send people with a mild infection home, but they should track their physiology to see if it worsens.
- Writes to the same DB as the web app

###### MVP Challenges
- We need to implement the scientific computations of the 2020 paper directly in the app
- We need to validate whether or not it works
- We need to write to a DB
- We need to get the app in the app/play stores asap after we validated


### Update 15 march 2020

A mobile app to support individuals in checking their health and provide insights to structure a more effective medical help system.

Note: COVID-19 self-diagnostics tools can provide false sense of security in people but we focus on creating predictive models and reducing the margin of errors.

**Contributors**: 

Dario D’Aprile, Yoni Schirris, Catherine Kelso, Chestnut kugelblitz, Jorge Laranjo and many more ...

**Problems** 

From interviews with italian COVID MDs and contribute from Helpful Engineering, we found out that:

Prioritisation framework based on severity of the problem (1mild, 5 high) and confidence in the ability to quickly create an accurate working solution (1low, 5 high). 


| Persona            | Need                     | Outcome                                                                                        | 1 Mild problem, 5 strong problem | 1 No Confidence 5 Confidence |
|--------------------|--------------------------|------------------------------------------------------------------------------------------------|----------------------------------|------------------------------|
| Emergency services | effective diagnosis      | maximise sharing information to medical operator (telemedicine)                                | 5                                | 5                            |
| Emergency services | effective medical help   | maximise data aggregation on the territory and create predictive model                         | 5                                | 5                            |
| Individual         | effective self-diagnosis | minimase errors due to subjective interpretation of question                                   | 4                                | 5                            |
| Health system      | spreading prevention     | maximise velocy in diagnosis                                                                   | 4                                | 5                            |
| Health system      | effective medical help   | maximise detection when desease is severe (14% cases)                                          | 3                                | 5                            |
| Health system      | effective medical help   | maximise detection when desease is critical (3% cases)                                         | 1                                | 5                            |
| Emergency services | effective medical help   | maximise support tool to strict assess quarantine individua                                    | 5                                | 4                            |
| Individual         | effective self-diagnosis | minimase errors due to not strictly clear syntoms                                              | 4                                | 4                            |
| Individual         | effective self-diagnosis | maximise accuracy when common syntoms are not experienced clearly (lack of breath-cough-fever) | 3                                | 4                            |
| Emergency services | spreading prevention     | minimase closure of hospital (A&E)                                                             | 5                                | 3                            |
| Individual         | effective self-diagnosis | minimase errors due to subjective interpretation syntoms                                       | 2                                | 3                            |
| Individual         | quick medical help       | maximise velocy in diagnosis                                                                   | 5                                | 2                            |
| Health system      | spreading prevention     | maximise detection when desease is mild (83% cases) and individual should self isolate         | 5                                | 2                            |
| Health system      | spreading prevention     | minimase errors due to subjective interpretation syntoms                                       | 4                                | 2                            |
| Emergency services | effective medical help   | minimase errors in emergency call                                                              | 3                                | 2                            |
| Health system      | quick medical help       | minimase overcrowding for mild condition                                                       | 5                                | 1                            |
| Health system      | effective medical help   | minimise pressure on health professionals                                                      | 5                                | 1                            |
| Emergency services | effective medical help   | maximise hospital discharge thanks to home monitoring                                          | 4                                | 1                            |
| Emergency services | effective medical help   | minimase waiting list for oxygen saturation monitor devices                                    | 4                                | 1                            |
| Emergency services | effective diagnosis      | minimase time to require clinical test for individual                                          | 2                                | 1                            |


**Data collection **



*   Oxygen saturation level
*   Temperature
*   Age
*   Location (approximate)
*   lasting health condition
*   Other Symptoms: cough, shortness of breath, chest pain

GDPR compliance no PII

**Medical evaluation**



*   sat 94% and above, lower chance of hypoxia 
*   sat 93-89% possible hypoxia consider notifying your PCP if having any of the following symptoms: cough, fever, shortness of breath, chest pain; 
*   Sat &lt; 89% probably hypoxia please notify your provider or seek emergency medical attention if having any of the following symptoms: cough, fever, shortness of breath, chest pain. 
*   drops by at least 3% during a short period in blood oxygen saturation is an alarm

No variation in Oxygen saturation level based on ethnicity

Oxygen saturation level decreases normally with age

Variation with sex?

Disclaimer: 

possible Covid-19 please notify hospital prior to arrival so appropriate measures can be taken

this is not a medically approved device and if having symptoms necessitating medical evaluation please seek medical attention or notifying your provider regardless of reading

**Feasibility initial study**

Build a mobile application that measures heart rate and blood oxygen saturation through use of mobile phone camera (some scientific validation: [[1, 2014]](https://ieeexplore.ieee.org/document/5963704/?arnumber=5963704) [[2, 2015]](https://ieeexplore.ieee.org/abstract/document/6959086) [[3, 2019]](https://www.ncbi.nlm.nih.gov/pubmed/30571649) [[4, 2020]](https://www.sciencedirect.com/science/article/abs/pii/S1746809420300847), code can be found [here](https://github.com/YahyaOdeh/HealthWatcher), APK to test [here](https://drive.google.com/file/d/0Bxq6lYtmxVbtN0J6QklOdmRuZVU/view)).

Would be great if we have a working codebase to start with the working version [here](https://github.com/latinosamuel/HealthWatcher). For now, not accurate, we should e-mail authors of [this paper](https://www.sciencedirect.com/science/article/abs/pii/S1746809420300847) for their code)

More research here: [https://app.slack.com/client/TUTSYURT3/threads/thread/CV83KNDV2-1584169197.458600](https://app.slack.com/client/TUTSYURT3/threads/thread/CV83KNDV2-1584169197.458600)

Advice could be given through a simple algorithm on the device or a restful API: Age + oxygen saturation maps linearly to the advice.

The oxygen saturation measurement + geo-data can be used to map spreading of symptoms globally. This can be combined with Google Maps data to understand outgoingness of people vs spreading of symptoms. \


**Extra Note:**

Pneumonia

[The authors of the Chinese CDC report divided the clinical manifestations of the disease by there severity](https://www.ncbi.nlm.nih.gov/books/NBK554776/):



*   Mild disease: non-pneumonia and mild pneumonia; this occurred in 81% of cases.
*   Severe disease: dyspnea, respiratory frequency ≥ 30/min, blood oxygen saturation (SpO2) ≤ 93%, PaO2/FiO2 ratio [the ratio between the blood pressure of the oxygen (partial pressure of oxygen, PaO2) and the percentage of oxygen supplied (fraction of inspired oxygen, FiO2)] &lt; 300, and/or lung infiltrates > 50% within 24 to 48 hours; this occurred in 14% of cases.
*   Critical disease: respiratory failure, septic shock, and/or multiple organ dysfunction (MOD) or failure (MOF); this occurred in 5% of cases.[[12]](https://www.ncbi.nlm.nih.gov/books/NBK554776/#)

Tools for self diagnostic

[https://111.nhs.uk/Question/Navigation](https://111.nhs.uk/Question/Navigation)

[https://helpfulengineering.slack.com/files/UUZQ0ML4A/F0101PMPW9M/image.png](https://helpfulengineering.slack.com/files/UUZQ0ML4A/F0101PMPW9M/image.png)

App for self diagnostic

[https://github.com/latinosamuel/HealthWatcher](https://github.com/latinosamuel/HealthWatcher)

Othere Idea for the future:

About the pneumonia-hearing mobile phone stethoscope idea:

[https://ieeexplore.ieee.org/abstract/document/6704150](https://ieeexplore.ieee.org/abstract/document/6704150)

[https://www.worldscientific.com/doi/abs/10.1142/S0219519418500392](https://www.worldscientific.com/doi/abs/10.1142/S0219519418500392) (not cited by anyone )

[https://ieeexplore.ieee.org/abstract/document/7344000](https://ieeexplore.ieee.org/abstract/document/7344000) &lt;-- especially relevant

[https://pdfs.semanticscholar.org/aac0/c86d048ee547dc09f919e4175ad0de66ff6b.pdf](https://pdfs.semanticscholar.org/aac0/c86d048ee547dc09f919e4175ad0de66ff6b.pdf)

[https://ieeexplore.ieee.org/abstract/document/7280317](https://ieeexplore.ieee.org/abstract/document/7280317)
