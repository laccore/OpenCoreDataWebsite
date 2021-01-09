#  Open Core Data Readme

## Notes

Made a dev and www for the two different servers.  Would rather not 
use a git branch since we are looking at two servers for now that would 
later be merged

## Tools

* [rclone](https://rclone.org/)

CLONE := /home/fils/src/go/bin/rclone

sync-ocdprod:
             rclone copy -P ./opencore/website ocdmsp:ocdprod/website
             rclone copy -P ./opencore/assets ocdmsp:ocdprod/assets

