# Friend Finder

----
## Basic Usage


###The user will take a 10 question survey answering  from 1(strongly disagree) to 5(strongly agree). Once they submit the survey, Friend Finder will access its database to find which previous user of the survey answered the closest to the current user and displays that previous user's name and photo to the current user. The current user's information is also stored in the Friend Finder database.

----
## In-Depth


### Once the user submits the survey, their unique answers for each question are matched against each previous user in Friend Finder's API, finding the difference value between each answer. Then, the differences between each unique question are totaled to become the total difference between the current user and that specific previous user. 

###Once the current user's total difference value to each previous user of the survey is stored, Friend Finder then finds the index that the lowest total difference value resides and matches that to the index of a previous user, which becomes the current user's closes match. Friend Finder will display their name and photo to the user and reset the survey, as well as add the current user's inputed information to the Friend Finder database.

 ----
## * To Access API Information:


### Use the API Link on the bottom left of the Home Page