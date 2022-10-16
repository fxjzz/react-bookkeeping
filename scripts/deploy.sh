#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:fxjzz/react-bookkeeping-website.git &&
git push -f -u origin main &&
cd -