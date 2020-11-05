#  Open Core Data Readme

## Tools

* [rclone](https://rclone.org/)


CLONE := /home/fils/src/go/bin/rclone

sync-ocdprod:
             rclone copy -P ./opencore/website ocdmsp:ocdprod/website
             rclone copy -P ./opencore/assets ocdmsp:ocdprod/assets

