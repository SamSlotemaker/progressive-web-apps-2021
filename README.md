# Progressive web apps
This is the repo for the HvA Web Development Minor course: Progressive web apps
![img](https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-03-14-16-42/crunch-once-again-in-the-spotlight-after-damning-report-on-the-last-of-us-2-developer-naughty-dog-1584204146148.jpg/EG11/thumbnail/750x422/format/jpg/quality/60)


## Table of contents
* [Description](#Description)
* [Concept](#Concept)
* [Installation](#Concept)
* [External Data](#External_Data)
* [Sources](#Sources)

## Live Demo
Visit the live demo [Here](https://samslotemaker.github.io/web-app-from-scratch-2021/)

## :book:Description
A concept web app, to learn the difference between client- and serverside rendering

## :pencil:Concept
Collecting certain games and platforms from the external API, then showing them in an overview and detailpage, where users are able to collect extra information on popular games. 
Users need to be able to filter games on certain properties, i.e. genre. And they need to be able to favorite games so that they can find them later on. 

### Code standards
#### Modules
Keep modules based on a single entity, in the folder that describes their purpose. 

#### Function names
Camelcase, describe action and outcome. 

Functions that render: render'Component', i.e. `renderDetails`, `renderGameSection`
Functions that return a Component: create'Component', i.e. `createGameList`, `createGenreFilter`


### Actor diagram
![actor-diagram 2](https://user-images.githubusercontent.com/60625329/109555063-61a8b080-7ad5-11eb-992c-4704f44a7e14.png)


### Interaction diagram
![interaction-diagram2](https://user-images.githubusercontent.com/60625329/109555051-5f465680-7ad5-11eb-83ba-e42c8ba97ed3.png)


## :gear:Installation
### Prerequisites
You need to have [GIT](https://git-scm.com/downloads) installed to clone this repo

### Installing
To view the project on your own device, you can clone the repository
```git clone https://github.com/SamSlotemaker/web-app-from-scratch-2021.git```

## :book:External Data
Data will be collected from an open API called [rawG.io](https://rawg.io/apidocs), a large videogame library with over 500.000+ games, where you can collect deetailed info about every single one.
An example of the data can be fetched by sending a `GET` request. 
```JS
 GET https://api.rawg.io/api/games
 ```

<details>
<summary>
GET response
</summary>

```JSON
{
"id": 3498,
"slug": "grand-theft-auto-v",
"name": "Grand Theft Auto V",
"released": "2013-09-17",
"tba": false,
"background_image": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg",
"rating": 4.48,
"rating_top": 5,
"ratings": [
{
"id": 5,
"title": "exceptional",
"count": 2647,
"percent": 59.02
},
{
"id": 4,
"title": "recommended",
"count": 1482,
"percent": 33.04
},
{
"id": 3,
"title": "meh",
"count": 281,
"percent": 6.27
},
{
"id": 1,
"title": "skip",
"count": 75,
"percent": 1.67
}
],
"ratings_count": 4438,
"reviews_text_count": 27,
"added": 14162,
"added_by_status": {
"yet": 349,
"owned": 8535,
"beaten": 3699,
"toplay": 389,
"dropped": 677,
"playing": 513
},
"metacritic": 97,
"playtime": 69,
"suggestions_count": 422,
"updated": "2020-09-23T07:10:53",
"user_game": null,
"reviews_count": 4485,
"saturated_color": "0f0f0f",
"dominant_color": "0f0f0f",
"platforms": [
{
"platform": {
"id": 4,
"name": "PC",
"slug": "pc",
"image": null,
"year_end": null,
"year_start": null,
"games_count": 296561,
"image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
},
"released_at": "2013-09-17",
"requirements_en": {
"minimum": "Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.",
"recommended": "Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:"
},
"requirements_ru": null
},
{
"platform": {
"id": 186,
"name": "Xbox Series S/X",
"slug": "xbox-series-x",
"image": null,
"year_end": null,
"year_start": 2020,
"games_count": 129,
"image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
},
"released_at": "2013-09-17",
"requirements_en": null,
"requirements_ru": null
},
{
"platform": {
"id": 187,
"name": "PlayStation 5",
"slug": "playstation5",
"image": null,
"year_end": null,
"year_start": 2020,
"games_count": 154,
"image_background": "https://media.rawg.io/media/games/d44/d443ae8ffc72fdb77a27207a196788e5.jpg"
},
"released_at": "2013-09-17",
"requirements_en": null,
"requirements_ru": null
},
{
"platform": {
"id": 18,
"name": "PlayStation 4",
"slug": "playstation4",
"image": null,
"year_end": null,
"year_start": null,
"games_count": 5558,
"image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
},
"released_at": "2013-09-17",
"requirements_en": null,
"requirements_ru": null
},
{
"platform": {
"id": 16,
"name": "PlayStation 3",
"slug": "playstation3",
"image": null,
"year_end": null,
"year_start": null,
"games_count": 3617,
"image_background": "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg"
},
"released_at": "2013-09-17",
"requirements_en": null,
"requirements_ru": null
},
{
"platform": {
"id": 14,
"name": "Xbox 360",
"slug": "xbox360",
"image": null,
"year_end": null,
"year_start": null,
"games_count": 2701,
"image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
},
"released_at": "2013-09-17",
"requirements_en": null,
"requirements_ru": null
},
{
"platform": {
"id": 1,
"name": "Xbox One",
"slug": "xbox-one",
"image": null,
"year_end": null,
"year_start": null,
"games_count": 4243,
"image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
},
"released_at": "2013-09-17",
"requirements_en": null,
"requirements_ru": null
}
],
"parent_platforms": [
{
"platform": {
"id": 1,
"name": "PC",
"slug": "pc"
}
},
{
"platform": {
"id": 2,
"name": "PlayStation",
"slug": "playstation"
}
},
{
"platform": {
"id": 3,
"name": "Xbox",
"slug": "xbox"
}
}
],
"genres": [
{
"id": 4,
"name": "Action",
"slug": "action",
"games_count": 107875,
"image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
}
],
"stores": [
{
"id": 438095,
"store": {
"id": 11,
"name": "Epic Games",
"slug": "epic-games",
"domain": "epicgames.com",
"games_count": 356,
"image_background": "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg"
}
},
{
"id": 290375,
"store": {
"id": 3,
"name": "PlayStation Store",
"slug": "playstation-store",
"domain": "store.playstation.com",
"games_count": 7227,
"image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
}
},
{
"id": 290378,
"store": {
"id": 2,
"name": "Xbox Store",
"slug": "xbox-store",
"domain": "microsoft.com",
"games_count": 3853,
"image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
}
},
{
"id": 290377,
"store": {
"id": 7,
"name": "Xbox 360 Store",
"slug": "xbox360",
"domain": "marketplace.xbox.com",
"games_count": 1908,
"image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
}
},
{
"id": 290376,
"store": {
"id": 1,
"name": "Steam",
"slug": "steam",
"domain": "store.steampowered.com",
"games_count": 48292,
"image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
}
}
],
"clip": {
"clip": "https://media.rawg.io/media/stories-640/c10/c10ef05b12482e4d2c647c4e26138d5b.mp4",
"clips": {
"320": "https://media.rawg.io/media/stories-320/dc5/dc5b17c957b3529d821bb97defcf9307.mp4",
"640": "https://media.rawg.io/media/stories-640/c10/c10ef05b12482e4d2c647c4e26138d5b.mp4",
"full": "https://media.rawg.io/media/stories/4a7/4a78913e6ee817ca1e34c7df8169eca4.mp4"
},
"video": "e6YNTl404pI",
"preview": "https://media.rawg.io/media/stories-previews/4f1/4f13714c6626d211ab02e10b1866fb91.jpg"
},
"tags": [
{
"id": 31,
"name": "Singleplayer",
"slug": "singleplayer",
"language": "eng",
"games_count": 100765,
"image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
},
{
"id": 40847,
"name": "Steam Achievements",
"slug": "steam-achievements",
"language": "eng",
"games_count": 20628,
"image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
},
{
"id": 7,
"name": "Multiplayer",
"slug": "multiplayer",
"language": "eng",
"games_count": 23700,
"image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
},
{
"id": 13,
"name": "Atmospheric",
"slug": "atmospheric",
"language": "eng",
"games_count": 11410,
"image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
},
{
"id": 40836,
"name": "Full controller support",
"slug": "full-controller-support",
"language": "eng",
"games_count": 9684,
"image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
},
{
"id": 42,
"name": "Great Soundtrack",
"slug": "great-soundtrack",
"language": "eng",
"games_count": 3104,
"image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
},
{
"id": 24,
"name": "RPG",
"slug": "rpg",
"language": "eng",
"games_count": 11059,
"image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
},
{
"id": 18,
"name": "Co-op",
"slug": "co-op",
"language": "eng",
"games_count": 6171,
"image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
},
{
"id": 36,
"name": "Open World",
"slug": "open-world",
"language": "eng",
"games_count": 3391,
"image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
},
{
"id": 411,
"name": "cooperative",
"slug": "cooperative",
"language": "eng",
"games_count": 2608,
"image_background": "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg"
},
{
"id": 8,
"name": "First-Person",
"slug": "first-person",
"language": "eng",
"games_count": 10757,
"image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
},
{
"id": 149,
"name": "Third Person",
"slug": "third-person",
"language": "eng",
"games_count": 3578,
"image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
},
{
"id": 4,
"name": "Funny",
"slug": "funny",
"language": "eng",
"games_count": 11622,
"image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
},
{
"id": 37,
"name": "Sandbox",
"slug": "sandbox",
"language": "eng",
"games_count": 3099,
"image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
},
{
"id": 123,
"name": "Comedy",
"slug": "comedy",
"language": "eng",
"games_count": 5698,
"image_background": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg"
},
{
"id": 150,
"name": "Third-Person Shooter",
"slug": "third-person-shooter",
"language": "eng",
"games_count": 1283,
"image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
},
{
"id": 62,
"name": "Moddable",
"slug": "moddable",
"language": "eng",
"games_count": 498,
"image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
},
{
"id": 144,
"name": "Crime",
"slug": "crime",
"language": "eng",
"games_count": 1680,
"image_background": "https://media.rawg.io/media/games/470/470d21d6971de8f13ec0e1664a120cc0.jpg"
}
],
"esrb_rating": {
"id": 4,
"name": "Mature",
"slug": "mature"
},
"short_screenshots": [
{
"id": -1,
"image": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
},
{
"id": 1827221,
"image": "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"
},
{
"id": 1827222,
"image": "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg"
},
{
"id": 1827223,
"image": "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg"
},
{
"id": 1827225,
"image": "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg"
},
{
"id": 1827226,
"image": "https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg"
},
{
"id": 1827227,
"image": "https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg"
}
]
},
{
"id": 4200,
"slug": "portal-2",
"name": "Portal 2",
"released": "2011-04-18",
"tba": false,
"background_image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
"rating": 4.62,
"rating_top": 5,
"ratings": [
{
"id": 5,
"title": "exceptional",
"count": 2636,
"percent": 70.05
},
{
"id": 4,
"title": "recommended",
"count": 953,
"percent": 25.33
},
{
"id": 3,
"title": "meh",
"count": 102,
"percent": 2.71
},
{
"id": 1,
"title": "skip",
"count": 72,
"percent": 1.91
}
],
"ratings_count": 3730,
"reviews_text_count": 21,
"added": 12357,
"added_by_status": {
"yet": 398,
"owned": 7735,
"beaten": 3563,
"toplay": 217,
"dropped": 344,
"playing": 100
},
"metacritic": 95,
"playtime": 11,
"suggestions_count": 590,
"updated": "2020-08-03T02:17:38",
"user_game": null,
"reviews_count": 3763,
"saturated_color": "0f0f0f",
"dominant_color": "0f0f0f",
"platforms": [
{
"platform": {
"id": 1,
"name": "Xbox One",
"slug": "xbox-one",
"image": null,
"year_end": null,
"year_start": null,
"games_count": 4243,
"image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
},
"released_at": "2011-04-18",
"requirements_en": null,
"requirements_ru": null
},
{
"platform": {
"id": 16,
"name": "PlayStation 3",
"slug": "playstation3",
"image": null,
"year_end": null,
"year_start": null,
"games_count": 3617,
"image_background": "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg"
},
"released_at": "2011-04-19",
"requirements_en": null,
"requirements_ru": null
},
{
"platform": {
"id": 4,
"name": "PC",
"slug": "pc",
"image": null,
"year_end": null,
"year_start": null,
"games_count": 296561,
"image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
},
"released_at": "2011-04-19",
"requirements_en": null,
"requirements_ru": {
"minimum": "Core 2 Duo/Athlon X2 2 ГГц,1 Гб памяти,GeForce 7600/Radeon X800,10 Гб на винчестере,интернет-соединение",
"recommended": "Core 2 Duo/Athlon X2 2.5 ГГц,2 Гб памяти,GeForce GTX 280/Radeon HD 2600,10 Гб на винчестере,интернет-соединение"
}
},
{
"platform": {
"id": 14,
"name": "Xbox 360",
"slug": "xbox360",
"image": null,
"year_end": null,
"year_start": null,
"games_count": 2701,
"image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
},
"released_at": "2011-04-19",
"requirements_en": null,
"requirements_ru": null
},
{
"platform": {
"id": 6,
"name": "Linux",
"slug": "linux",
"image": null,
"year_end": null,
"year_start": null,
"games_count": 45613,
"image_background": "https://media.rawg.io/media/games/929/9295e55ce69cf5337c567983cf8b4137.jpeg"
},
"released_at": "2011-04-19",
"requirements_en": null,
"requirements_ru": null
},
{
"platform": {
"id": 5,
"name": "macOS",
"slug": "macos",
"image": null,
"year_end": null,
"year_start": null,
"games_count": 65364,
"image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
},
"released_at": "2011-04-19",
"requirements_en": null,
"requirements_ru": null
}
],
"parent_platforms": [
{
"platform": {
"id": 1,
"name": "PC",
"slug": "pc"
}
},
{
"platform": {
"id": 2,
"name": "PlayStation",
"slug": "playstation"
}
},
{
"platform": {
"id": 3,
"name": "Xbox",
"slug": "xbox"
}
},
{
"platform": {
"id": 5,
"name": "Apple Macintosh",
"slug": "mac"
}
},
{
"platform": {
"id": 6,
"name": "Linux",
"slug": "linux"
}
}
],
"genres": [
{
"id": 2,
"name": "Shooter",
"slug": "shooter",
"games_count": 34292,
"image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
},
{
"id": 7,
"name": "Puzzle",
"slug": "puzzle",
"games_count": 59278,
"image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
}
],
"stores": [
{
"id": 465889,
"store": {
"id": 2,
"name": "Xbox Store",
"slug": "xbox-store",
"domain": "microsoft.com",
"games_count": 3853,
"image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
}
},
{
"id": 33916,
"store": {
"id": 7,
"name": "Xbox 360 Store",
"slug": "xbox360",
"domain": "marketplace.xbox.com",
"games_count": 1908,
"image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
}
},
{
"id": 4526,
"store": {
"id": 3,
"name": "PlayStation Store",
"slug": "playstation-store",
"domain": "store.playstation.com",
"games_count": 7227,
"image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
}
},
{
"id": 13134,
"store": {
"id": 1,
"name": "Steam",
"slug": "steam",
"domain": "store.steampowered.com",
"games_count": 48292,
"image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
}
}
],
"clip": {
"clip": "https://media.rawg.io/media/stories-640/fde/fde8aaeeab956f6b705bbb4161b09004.mp4",
"clips": {
"320": "https://media.rawg.io/media/stories-320/b26/b265f65b9f16dc20245863636d4094b2.mp4",
"640": "https://media.rawg.io/media/stories-640/fde/fde8aaeeab956f6b705bbb4161b09004.mp4",
"full": "https://media.rawg.io/media/stories/671/67196dea179367b70212bdaed88ba451.mp4"
},
"video": "dVVZaZ8yO6o",
"preview": "https://media.rawg.io/media/stories-previews/faf/faf0bb37b806db65f1c76395c8f36c7c.jpg"
},
"tags": [
{
"id": 31,
"name": "Singleplayer",
"slug": "singleplayer",
"language": "eng",
"games_count": 100765,
"image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
},
{
"id": 40847,
"name": "Steam Achievements",
"slug": "steam-achievements",
"language": "eng",
"games_count": 20628,
"image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
},
{
"id": 7,
"name": "Multiplayer",
"slug": "multiplayer",
"language": "eng",
"games_count": 23700,
"image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
},
{
"id": 7808,
"name": "steam-trading-cards",
"slug": "steam-trading-cards",
"language": "eng",
"games_count": 7586,
"image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
},
{
"id": 13,
"name": "Atmospheric",
"slug": "atmospheric",
"language": "eng",
"games_count": 11410,
"image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
},
{
"id": 40849,
"name": "Steam Cloud",
"slug": "steam-cloud",
"language": "eng",
"games_count": 9543,
"image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
},
{
"id": 40836,
"name": "Full controller support",
"slug": "full-controller-support",
"language": "eng",
"games_count": 9684,
"image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
},
{
"id": 18,
"name": "Co-op",
"slug": "co-op",
"language": "eng",
"games_count": 6171,
"image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
},
{
"id": 118,
"name": "Story Rich",
"slug": "story-rich",
"language": "eng",
"games_count": 8696,
"image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
},
{
"id": 411,
"name": "cooperative",
"slug": "cooperative",
"language": "eng",
"games_count": 2608,
"image_background": "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg"
},
{
"id": 8,
"name": "First-Person",
"slug": "first-person",
"language": "eng",
"games_count": 10757,
"image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
},
{
"id": 32,
"name": "Sci-fi",
"slug": "sci-fi",
"language": "eng",
"games_count": 9091,
"image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
},
{
"id": 30,
"name": "FPS",
"slug": "fps",
"language": "eng",
"games_count": 6776,
"image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
},
{
"id": 4,
"name": "Funny",
"slug": "funny",
"language": "eng",
"games_count": 11622,
"image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
},
{
"id": 9,
"name": "Online Co-Op",
"slug": "online-co-op",
"language": "eng",
"games_count": 2459,
"image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
},
{
"id": 189,
"name": "Female Protagonist",
"slug": "female-protagonist",
"language": "eng",
"games_count": 5034,
"image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
},
{
"id": 123,
"name": "Comedy",
"slug": "comedy",
"language": "eng",
"games_count": 5698,
"image_background": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg"
},
{
"id": 75,
"name": "Local Co-Op",
"slug": "local-co-op",
"language": "eng",
"games_count": 3605,
"image_background": "https://media.rawg.io/media/games/88c/88c5b4d7c80276c03ff62aebb1a99ad4.jpg"
},
{
"id": 11669,
"name": "stats",
"slug": "stats",
"language": "eng",
"games_count": 3517,
"image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
},
{
"id": 40852,
"name": "Steam Workshop",
"slug": "steam-workshop",
"language": "eng",
"games_count": 1058,
"image_background": "https://media.rawg.io/media/games/f3e/f3eec35c6218dcfd93a537751e6bfa61.jpg"
},
{
"id": 40838,
"name": "Includes level editor",
"slug": "includes-level-editor",
"language": "eng",
"games_count": 1319,
"image_background": "https://media.rawg.io/media/games/806/8060a7663364ac23e15480728938d6f3.jpg"
},
{
"id": 25,
"name": "Space",
"slug": "space",
"language": "eng",
"games_count": 24546,
"image_background": "https://media.rawg.io/media/games/5f4/5f4780690dbf04900cbac5f05b9305f3.jpg"
},
{
"id": 40833,
"name": "Captions available",
"slug": "captions-available",
"language": "eng",
"games_count": 1021,
"image_background": "https://media.rawg.io/media/games/33b/33b825c76382931df0fd8ecddf5caebe.jpg"
},
{
"id": 40834,
"name": "Commentary available",
"slug": "commentary-available",
"language": "eng",
"games_count": 217,
"image_background": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg"
},
{
"id": 87,
"name": "Science",
"slug": "science",
"language": "eng",
"games_count": 931,
"image_background": "https://media.rawg.io/media/games/c60/c60be8ddf91ede65c65b13eff2e06c37.jpg"
}
],
"esrb_rating": {
"id": 2,
"name": "Everyone 10+",
"slug": "everyone-10-plus"
},
"short_screenshots": [
{
"id": -1,
"image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
},
{
"id": 99018,
"image": "https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg"
},
{
"id": 99019,
"image": "https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg"
},
{
"id": 99020,
"image": "https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg"
},
{
"id": 99021,
"image": "https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg"
},
{
"id": 99022,
"image": "https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg"
},
{
"id": 99023,
"image": "https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg"
}
]
}
```
</details>

## :heart:Sources
https://rawg.io/
http://projects.jga.me/routie/
https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onhashchange
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c
