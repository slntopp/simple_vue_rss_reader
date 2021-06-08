# RSS Reader

*Little remark: this is my solution made as a challenge for one public company, so repo name was changed to make it harder to be found with search engines*

This repo(same as challenge) consists of two parts:
1. JS Array methods implementations
2. RSS Feed UI

## 1. JS Array methods
You can find them in array.js file. Nothing to add here ^^

## 2. RSS Feed UI
The working web-application can be found at [rss-reader.slnt-opp.xyz](https://rss-reader.slnt-opp.xyz)

But if you wan't to run it by yourself, you can either just:

1. clone this repo
2. run `docker-compose up`

OR

1. clone this repo
2. `cd rss_ui`
3. `yarn`
4. `yarn build`
5. install requirements with `pip install -r requirements.txt`
6. go back to app root
7. `python server.py`
