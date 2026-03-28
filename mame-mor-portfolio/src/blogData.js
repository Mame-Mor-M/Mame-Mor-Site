const blogs = [

    {
        title: 'Touché Tempo - Alpha Build 3',
        date: '03/28/2026',
        summary: "After a month and 2 playtests Touché Tempo has grown more into the game we intially planned. We were able to add feint mechanics, dodge regeneration, outlines, custom difficulty settings such as enabling and disabling key icons, accessibility settings, a new level, and so much more!",
        media: [
            { type: 'video', src: 'https://github.com/Mame-Mor-M/Mame-Mor-Site/releases/download/PortfolioVids/Settings.mp4' },
            { type: 'video', src: 'https://github.com/Mame-Mor-M/Mame-Mor-Site/releases/download/PortfolioVids/Vs-Prince.mp4' }
        ]
    },

    {
        title: 'Touché Tempo - Early Alpha Build',
        date: '02/19/2026',
        summary: "Over the last month, I alongside a team of 5 other students began working on a rhythm game called Touché Tempo. After a month of development much of the core gameplay mechanics are established. Above you can see the current state of the game with two playable levels, an enemy attack feint system, synchronized beat events (to the music), health, win + lose conditions, and visual feedback elements. Right now we are playing around with how forgiving the game should be, a wrong input is currently a guaranteed loss in 'health' (dodges) which may be too challenging on the player.",
        media: [
            { type: 'video', src: 'https://github.com/Mame-Mor-M/Mame-Mor-Site/releases/download/PortfolioVids/Vs-Drunkard.mp4' },
            { type: 'video', src: 'https://github.com/Mame-Mor-M/Mame-Mor-Site/releases/download/PortfolioVids/Vs-Swan.mp4' }
        ]
    },
    {
        title: 'C++ & SFML - Endzone Remake',
        date: '12/15/2025',
        summary: "Today I started playing around with SFML and decided to make a new, up-to-date version of Endzone in C++ (can be found in my projects section). I've made some progress and I can't wait to get this one fully released",
        media: []
    },

    {
        title: 'Tower Defense - Pooling Enemies/Friendlies',
        date: '08/28/2025',
        summary: "Strategy games, and specifically those with large quantities of game objects are interesting to make, today, I tried my hand at this. I created an enemy spawning system for a tower defense game. Enemies are 'spawned' in on the gray circle markers after reaching the center triangle and their spawn delay timer is completed. In reality, no spawning or destruction of enemies is done, rather I created an activate/deactivation system to avoid performance issues for longer levels. Upon the level starting a random set of the objects are initialized as civilians under a % chance, and the rest as enemies.",
        media: [{ type: 'video', src: 'https://github.com/Mame-Mor-M/Mame-Mor-Site/releases/download/PortfolioVids/Mob-Spawning.mp4' }]
    },


    {
        title: 'Black Hole Slingshot',
        date: '06/29/2025',
        summary: 'Physics based mechanics are always fun to play around with, and the idea of creating a blackhole which slingshots the player came to mind. The intention is for players to use momentum to traverse an endless map. Today I got worked on spawning a black hole on click/tap mechanic down and made the player orbit the black hole when they enter its trigger radius. There are still some inconsistencies with the player and black hole interactions regarding orbit speed, center gravity, and maintaining momentum, but overall I am happy with the prototype.',
        media: [
            { type: 'image', src: '/blogAssets/BlackHolePrototype.gif' },
            { type: 'image', src: '/blogAssets/Slingshot.gif' }
        ]
    },

    {
        title: 'Tavern Game - Wagon & Delivery Updates',
        date: '05/26/2025 - 05/30/2025',
        summary: 'The wagon is now driveable rather than being a physics based push & pull system [left video]. This made it easier to control, and fit the gameplay style a little more. For driveability I added enter and exit functionality, and controlled how the player moves via a player state class which adjusts input and camera behaviors. At this point there are still a few bugs regarding exiting the vehicle, and momentum. To exit the wagon, a simple fix of removing player mesh visibility and positioning them beside the vehicle will do the trick. \n \n Included in this update was an unrest bar which fills up as you complete delivery tasks, a delivery board attached to the wagon, money which updates as you finish orders, a bare-bones inventory system, receiving items through dialogue, and a crouch feature. I am still working around the core-gameplay loop to make it more fun and rewarding but generally the player goal is to maximize the town unrest bar and use money to purchase delivery goods which may do so.',
        media: [
            { type: 'video', src: 'https://github.com/Mame-Mor-M/Mame-Mor-Site/releases/download/PortfolioVids/Wagon-Tasks.mp4' },
            { type: 'video', src: 'https://github.com/Mame-Mor-M/Mame-Mor-Site/releases/download/PortfolioVids/Wagon-Delivery.mp4' }
        ]
    },

    {
        title: 'Tavern Game - Dialogue and Picking up Objects',
        date: '05/16/2025 - 05/26/2025',
        summary: "This week is when I started turning this project into an actual game. I wanted add some sort of start and end task to my game so I included a small quest. Talk to an npc, accept their delivery task, physically bring objects to the dropoff point, and talk to the NPC to close the quest. \n \n From a Technical standpoint I created a flexible dialogue system which allows me to enter text in the Unity Editor and choose whether or not the NPC gives items, has a delivery task, or just talks to the player without any dialogue choices. I achieved this system using booleans and tag splitting with #'s defining a dialogue choice and +'s triggering package drops. The dialogue script also inherits from whatever GameObject exists in the dropoff collision list.",
        media: [
            { type: 'video', src: 'https://github.com/Mame-Mor-M/Mame-Mor-Site/releases/download/PortfolioVids/Pickup-Dropoff.mp4' },
            { type: 'image', src: '/blogAssets/DialogueSystem.gif' }
        ]
    },

    {
        title: 'Multiplayer Testing in Unity',
        date: '05/11/2025',
        summary: 'I wanted to try out creating a multiplayer experience to see if I could turn my tavern game into a coop experience. This was my first time working with multiplayer and it came with a handful of client-side and server-side synchronization issues, specifically with the NPCs and movement. NPCs would have different movement depending on the player, giving them NetworkBehaviors did the trick, but seeing as I used NavMeshAgents, assigning NPCs to move to a certain location was really buggy. \n \n On top of this, the second player inputs were working for movement, but moving the mouse as the second player turned around the host players camera, again this was fixed by making the camera script a network entity and synching it to certain player instances rather than the whole server having one camera. In the end I scrapped the co-op idea but, it was cool to play around with. ',
        media: [
            { type: 'video', src: 'https://github.com/Mame-Mor-M/Mame-Mor-Site/releases/download/PortfolioVids/Multiplayer-GOOD.mp4' },
            { type: 'video', src: 'https://github.com/Mame-Mor-M/Mame-Mor-Site/releases/download/PortfolioVids/Multiplayer-BAD.mp4' }
        ]
    },

    {
        title: 'NPC Movement in Unity',
        date: '05/09/2025',
        summary: "NPCs were present in the previous update but they didn't exactly have any behaviors, this is what I changed in this update. Using NavMesh agents and a script for random point selection within a radius, I created NPC movement behavior allowing them to 'walk' to a certain point, then select a new area to roam. Included was the ability to designate NPC's to a certain 'room'. The idea here was for a inn/cruise type of game where NPCs are given a room to stay in. I was able to get NPCs into an available room on interact, and to give them more personality, I created a couple text files with a list of first and last namse, as well as a few scripts to assign NPCs with properties such as a name, social class, and happiness. \n\n Development here went fairly smooth, but, there was a stack overflow issue I ran into which was caused by spamming the interact button on NPCs. To avoid it I added an upper bound on how many NPCs could be assigned to a room, and a delay between each interact button press. ",
        media: [
            { type: 'video', src: 'https://github.com/Mame-Mor-M/Mame-Mor-Site/releases/download/PortfolioVids/NPC-Movement.mp4' }
        ]
    },

    {
        title: 'Gravity & NPCs in Unity',
        date: '05/08/2025',
        summary: "Here's the start of my blog posts, I'll be adding updates talking about whatever I'm currently working on. \n\n A few days ago I thought about doing something fun to practice coding and build on my game development techniques, so I landed on creating a game on Unity, one where I could test out a bunch of mechanics and maybe someday turn into an actual game. I created a basic scene layout with a small building, a couple stand-still NPCs, two gravity triggers, and a red cube. I wanted to play around with a space game idea, and first I needed to be able to manipulate gravity. This was fairly convenient to do, the easiest way I found was to manually control gravity with my own acceleration script and turn off Unity's global gravity on every rigidbody. Then upon entering a gravity wells trigger, your rigidbody would have a different downward acceleration. I used two scripts here since non-player objects behaved weirdly with artificial gravity, you can see in the video that as soon as the red cube hits the ground, gravity no longer applies, this is something I plan on fixing pretty soon.",
        media: [
            { type: 'video', src: 'https://github.com/Mame-Mor-M/Mame-Mor-Site/releases/download/PortfolioVids/Gravity-NPC.mp4' }
        ]
    }
];

export default blogs;
