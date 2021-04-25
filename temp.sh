#! /usr/bin/bash
pwd
git --version;
git status;
git add .;
git commit -m "some changes in file";
git push origin master;
git push heroku master;
heroku open;
