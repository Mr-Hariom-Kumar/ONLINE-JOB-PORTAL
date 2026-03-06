<<Intro>>
A Full Stack job hunting platform built using Express, NodeJS ,React , cloudinary  and MySQL database.
Role based login and authorization (used JWT and bcrypt) for recruiters, Admin and  job seeker.

<<Landing page>>
display a banner with some group of college student picture included in it, advertising about this particular system.
scrolling down give a filter options for active jobs in 5 domain(electrical; ,mechanical,civil,finance,IT,All) and display the jobs options bnased on filter
however a user cannot apply for any of these without being signedin int to the platform.

<<Main Page>>
interface similar to landing page but user have now access to check availavle jobs apply for the jobs navigate to their personal info and can check their saved and applied jobs and their status.

<<Job Application interface (user end)>>
this entire page consist of header imported as component, a parent div consisting two child div with flex property, a footer imported as component
in the left side there will be information about  jobs requirement and necessary dopcumentations separted by a div container having right border as solid black.
in the right side there will be  a form  consisting required necessary details like name, address, phone number, resume,emaul id etc.. and finally a submit button.
these information will be passed to end point api in the backend and get retrieved as body.
But before reaching to actual functions it will be get passed through middleware first which authorize the jobusers and parse body information to readable format
the resume which is in pdf will be saved in cloudinary and its url will be saved in  databses schema  having "resume" attributes.
the attributes having null will be ignored and and required details will be saved to "appliedjobs" table.

<<Recruiter end>>
recruiter can add jobs, withdraw jobs and can dynamically update the status of the jobs.
the recruiters can also explored the applied jobs list data  which will will be directly fetched through "appliedJobs table"
based on that a recruiter can make their independetn decisions and which will be updated in job status  in user end .





Based opn filter 
<<Database Schema>>
A user have 1 to many relationship with jobs.means a user can apply for many jobs but with diffreent mail and phone numbers.
each jobs and users  have  their individual and unique jobid and  userid respectively. 
each job which has been applied by a user will have unique job applied id which will help to keep tracking the job status (whether selected or rejected).
the jobs entity have specialization of 5 domains electrical ,mechanical,civil,finance,IT.



