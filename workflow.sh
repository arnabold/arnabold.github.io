#!/bin/bash

# in hakyll branch

# stack update

stack build

git submodule init

git submodule update

(cd _site && git checkout master)

stack exec site build

(cd _site && git status)

(cd _site && git add --all)

(cd _site && git commit -m "Update (`date '+%F %T %Z'`)")

(cd _site && git push origin master)

 git status

 git add _site
 
 git commit -m "Update _site (`date '+%F %T %Z'`)"
 
 git push origin hakyll
