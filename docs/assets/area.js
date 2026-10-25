// Area settings for this copy of the site. The setup notebook (setup_area.ipynb) writes this file;
// the pages and the build scripts (site/area.py) both read it. Keep it valid JSON inside the braces.
window.AREA = {
  "stations_source": "raws_public",
  "perimeters": "nifc",
  "pal": {
    "enabled": false
  },
  "crs": 5070,
  "raws_layer": "https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/PublicView_RAWS/FeatureServer/1",
  "id": "NOCO",
  "name": "Northern Colorado",
  "repo": "shelikes2run/NOCO-fire-danger",
  "states": [
    "CO",
    "WY",
    "NE"
  ],
  "timezone": "America/Denver",
  "title": "Northern Colorado Fire Danger Rating Areas",
  "short_title": "NoCo FDRA Fire Danger",
  "subtitle": "Northern Colorado (NoCo) \u00b7 2026 FDOP \u00b7 NFDRS 2016 fuel models",
  "org": "Northern Colorado Fire Danger",
  "site_url": "https://shelikes2run.github.io/NOCO-fire-danger/",
  "bounds": [
    [
      39.3,
      -109.15
    ],
    [
      41.1,
      -101.95
    ]
  ]
};
