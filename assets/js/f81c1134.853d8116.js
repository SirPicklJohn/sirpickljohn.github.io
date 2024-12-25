"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"start-of-season-of-rigor","metadata":{"permalink":"/blog/start-of-season-of-rigor","editUrl":"https://github.com/SirPicklJohn/sirpickljohn.github.io/blog/2023-09-01-start-of-season-of-rigor.md","source":"@site/blog/2023-09-01-start-of-season-of-rigor.md","title":"The [Wonderful] Start to the Season of Rigor...","description":"(This blog post was migrated from my first, old, raw HTML/CSS/JS-only website.)","date":"2023-09-01T00:00:00.000Z","tags":[{"inline":false,"label":"From Old Website","permalink":"/blog/tags/old-website","description":"Posts migrated from my old website."}],"readingTime":3.965,"hasTruncateMarker":true,"authors":[{"name":"Ayden Parsons","title":"Cybersecurity Specialist and CTI Analyst","url":"https://github.com/SirPicklJohn.github.io","page":{"permalink":"/blog/authors/aparsons"},"socials":{"github":"https://github.com/sirpickljohn","linkedin":"https://www.linkedin.com/in/ayden-parsons/"},"imageURL":"https://github.com/SirPicklJohn.png","key":"aparsons"}],"frontMatter":{"slug":"start-of-season-of-rigor","title":"The [Wonderful] Start to the Season of Rigor...","authors":["aparsons"],"tags":["Old Website"]},"unlisted":false,"nextItem":{"title":"The GHSCC CTF, Cyberstart America, Bruteforcing, and other fun :)","permalink":"/blog/ghscc-ctf-cyberstart-america-bruteforcing"}},"content":"(*This blog post was migrated from my first, old, raw HTML/CSS/JS-only website.*)\\r\\n\\r\\nThis post primarily covered some of my cool technical accomplishments during the intense MGHSCC CTF, as well as some other brief cyber or language-related activities. These all happened during a several-month period of intense productivity that I dubbed \\"The Season of Rigor\\".\\r\\n\\r\\n\x3c!-- truncate --\x3e\\r\\n---\\r\\n\\r\\nSOME of what is and what will be going on in my computery-endeavors:\\r\\n\\r\\n- Signed up for the Fall 2023 NCL CTF\\r\\n- Joined OSINT-FR, and the DLI French Course\\r\\n- Hitting \\"high dollar\\" challenges in Cyberstart, racking up points for the final stretch of the GHSCC season\\r\\n\\r\\n### Recent Governor\'s High School Cyber Challenge / Cyberstart Highlights\\r\\n\\r\\n![brute_force.png](./old_website_images/quickbrute_results.png)\\r\\n\\r\\n^Results of my following bruteforce script (with explanations):\\r\\n```bash\\r\\n#!/bin/bash\\r\\n# I chose to use bash after I had some weird trouble with python\\r\\n# Prompt: The program \\"prog-l0bar\\" takes an argument that is a four digit secret code. Crack it with a script.\\r\\n\\r\\nfor i in {0000..9999}\\r\\ndo\\r\\n\u2003./prog-l0bar $i #pipes output and/or variable without \\"|\\"\\r\\ndone\\r\\n# that\'s it!!\\r\\n```\\r\\nThis was a super simple but cheeky-feeling way to finish a challenge :)\\r\\n\\r\\nSome other things I\'ve done to boost up to 82500 points (Rising 6000 or so points in just today, clearing the entirety of HQ level 9 [no easy feat!], now beating 8th place in the final 2018 Girls Go Cyberstart competition [ though I don\'t know how that translates to the GHSCC], and being 72.98% done [181/248 total challenges] with Cyberstart America) include Steganography with binwalk, more reverse engineering, and two particularly fun challenges that required some fun maneuvering:\\r\\n\\r\\n![find+grep=king.png](./old_website_images/find+grep=king.png)\\r\\n\\r\\n^Here, I had to ssh into a foreign system and find a nondescript file that was created November 22nd, 2015 at 20:00 (with no other information). After multiple tries and research, I found that I could use the deadly \\"find | grep\\" combo once again :)\\r\\n\\r\\n![find_the_img_in_elfs_p1.png](./old_website_images/find_the_img_in_elfs_p1.png)\\r\\n\\r\\n^The next challenge (the one I\'m most proud of, and have probably cheesed/circumvented the hardest) required me to ssh into a remote system (remember, this gets rid of most fancy tools on your home system), and find an image file in a ginormous mix of junk files (with all of the files ends stripped).\\r\\n\\r\\nThis was no beginner level challenge, and you couldn\'t just cheesily use \\"strings\\" or \\"grep\\" to find some string that searched the file system for \'flag:\' in one of the files, as the flag is in the actual rendered image. So, instead, I cheesily used \\"file -i *\\" to find the odd one out in the folder with all the junk files in it. That was part one of the challenge...\\r\\n\\r\\n![find_the_img_in_elfs_p2_results.png](./old_website_images/find_the_img_in_elfs_p2_results.png)\\r\\n\\r\\n^Part two of the challenge required me actually rendering the image file to get the flag. But, because I was ssh\'d into a limited remote system, it wasn\'t as easy as opening it with xdg-open, right clicking on it, or using an image viewer. So, I had to go throught he process of learning how to use the \\"scp\\" command to go from my home system, input the exact location of the file I just found with \\"file -i *\\" on the remote system, and take it back to my home system, where I could then render it with xdg-open. Voil\xe0, the flag is the serial number (SN:0207F9) :)\\r\\n\\r\\n### OSINT-FR and DLI:\\r\\n\\r\\n[OSINT-FR Home Page Link](https://osintfr.com/en/home/)\\r\\nI joined a global community of people curious about OSINT, both beginners and (primarily) super-whiz professionals and cyber ninjas, who do everything from develop powerful tools, share resources (online courses, neat articles, etc), tackle issues (e.g. disinformation, child abuse), and more! Au moins, ils parlent Fran\xe7ais, et je peux les utiliser pour l\'am\xe9liorer (particulierement avec la vocabulaire de Cybers\xe9curit\xe9, et le web).\\r\\n\\r\\nI also found some free resources online due to some OSINT of my own :)\\r\\nThose being free \\"FSI\\" (Foreign Service Institute) and \\"DLI\\" (Defense Language Institute) resources online for French, Spanish, and a myriad of other languages. I researched and judged the DLI course to suit my needs more, and will be partaking in that for the foreseeable future (it\'s designed to be 15-20 work weeks of 6 hour class days on the language).\\r\\n\\r\\n### Fall 2023 NCL CTF:\\r\\n\\r\\n[NCL Home Page Link](https://nationalcyberleague.org/)\\r\\nHaving participated in the Spring and Fall 2021 Individual Games, and the Fall 2021 Team Game, I can tell you that NCL is no joke. It has beginner to ultra-hard challenges in OSINT, Log Analysis, Network Traffic Analysis, Cryptography, Scanning, Forensics, Password Cracking, Enumeration and Exploitation, and Web Application Security (website hacking). This is going to be quite the competition, with me knowing much, much, MUCH more than I did than the last time I participated in this CTF. It\'s going to be fun :)"},{"id":"ghscc-ctf-cyberstart-america-bruteforcing","metadata":{"permalink":"/blog/ghscc-ctf-cyberstart-america-bruteforcing","editUrl":"https://github.com/SirPicklJohn/sirpickljohn.github.io/blog/2023-06-29-ghscc-ctf-cyberstart-america-bruteforcing.md","source":"@site/blog/2023-06-29-ghscc-ctf-cyberstart-america-bruteforcing.md","title":"The GHSCC CTF, Cyberstart America, Bruteforcing, and other fun :)","description":"(This blog post was migrated from my first, old, raw HTML/CSS/JS-only website.)","date":"2023-06-29T00:00:00.000Z","tags":[{"inline":false,"label":"From Old Website","permalink":"/blog/tags/old-website","description":"Posts migrated from my old website."}],"readingTime":2.1,"hasTruncateMarker":true,"authors":[{"name":"Ayden Parsons","title":"Cybersecurity Specialist and CTI Analyst","url":"https://github.com/SirPicklJohn.github.io","page":{"permalink":"/blog/authors/aparsons"},"socials":{"github":"https://github.com/sirpickljohn","linkedin":"https://www.linkedin.com/in/ayden-parsons/"},"imageURL":"https://github.com/SirPicklJohn.png","key":"aparsons"}],"frontMatter":{"slug":"ghscc-ctf-cyberstart-america-bruteforcing","title":"The GHSCC CTF, Cyberstart America, Bruteforcing, and other fun :)","authors":["aparsons"],"tags":["Old Website"]},"unlisted":false,"prevItem":{"title":"The [Wonderful] Start to the Season of Rigor...","permalink":"/blog/start-of-season-of-rigor"}},"content":"(*This blog post was migrated from my first, old, raw HTML/CSS/JS-only website.*)\\n\\nThis post recounted my intense efforts towards winning the Michigan Governor\'s High School Cyber Challenge CTF, in addition to reflecting on Cyberstart America.\\n\\n\x3c!-- truncate --\x3e\\n---\\n\\n![hydra_attack.jpg](./old_website_images/hydra_attack.jpg)\\n\\nOver the last few days (in addition to lots and lots of Eagle Rank work), I\'ve been brushing up on my cyber skills in the [\\"Michigan Governor\'s High School Cyber Challenge\\"](https://ghscc-michigan.cyberstart.com/) (GHSCC), run on the Cyberstart America platform.\\n\\nI had a lot of extra points from previous Cyberstart America seasons (where I scored high enough to gain access to the NCSF CTF, then won access to the SEC275: Foundations course from the SANS Institute [then passing the final exam, [becoming certified](https://www.credly.com/badges/4c25f83b-4e9a-49af-acd7-6d99773b868f)]), but through the past couple of days I\'ve jumped from 30,000 or so points, to over 52,000 points (each challenge at the levels I\'m currently playing at are 600-700 points).\\n\\nIn the GHSCC, the top 10 teams (I\'m flying solo :) ) in the Cyberstart Game, when the season ends, will win access to the 2023 SANS Core NetWars Cyber Range/CTF (which I have a keen eye upon winning [not really for any good reason, except it\'s \\\\{hopefully\\\\} more intense than anything I\'ve done in a cyber competition before]). I looked up previous high scores from Cyberstart America to see how many points I needed to earn to be competitive, and found this photo:\\n\\n![Cyberstart-Round-2-5](./old_website_images/Cyberstart-Round-2-5.png)\\n\\nFrom doing socket programming with Python, encoding and decoding, decrypting, website hacking, brute force password hacking with Hydra (referencing the photo at the top of this post), brute force zipfile cracking and directory scanning with Python scripts, to SQL and command injection, I\'ve been putting in the work.\\n\\n*Thursday, 20:42 - J\'aime utiliser les ordinateurs comme \xe7a pour m\'amuser.*\\n\\n21:40 - I just found the [final list](https://medium.com/girls-go-cyberstart/top-100-overall-final-e232859e1913) for a series of Cyberstart ranking lists I found earlier, and this is suddenly terrifying. Top score is 117,700 (approx 170 challenges, give or take a few), and score ten is 75,900 (DANG). I have a lot more work ahead of me ;-; (but, as always, \\"we do not do these things because they are easy; we do them, because they are hard.\\")\\n\\n---\\n\\nNote from the future: I didn\'t end up going anywhere or winning anything special from this *because* I was flying solo, and the competition simply ignored all solo participants and dropped them like litter. A couple of people were frustrated at that. But hey, I still had fun and learned a lot :)"}]}}')}}]);