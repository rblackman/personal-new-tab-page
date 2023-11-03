# Personal New Tab Page

## Options Format

There are two columns available to contain custom links. Use the following JSON format to specify the links:

```json
[
  {
    "links": [
      {
        "href": "https://facebook.com/",
        "icon": "fb",
        "text": "Facebook"
      },
      {
        "href": "https://www.reddit.com/",
        "icon": "reddit",
        "subLinks": [
          {
            "href": "https://www.reddit.com/r/coys/",
            "text": "COYS"
          },
          {
            "href": "https://www.reddit.com/r/PremierLeague",
            "text": "PL"
          },
          {
            "href": "https://www.reddit.com/r/soccer/",
            "text": "soccer"
          }
        ],
        "text": "Reddit"
      }
    ],
    "title": "Left"
  },
  {
    "links": [
      {
        "href": "https://www.tottenhamhotspur.com/",
        "icon": "spurs",
        "text": "Spurs"
      },
      {
        "href": "http://www.spurscommunity.co.uk/index.php?forums/transfer-rumours.46/",
        "icon": "sc",
        "text": "Spurs Community"
      }
    ],
    "title": "Right"
  }
]
```
