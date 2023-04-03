#!/bin/bash

sudo docker build -t wasla_front .


sudo docker run -p 3000 wasla_front