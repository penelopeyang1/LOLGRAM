// Your code here
const apiKey = 'RGAPI-446641c0-1f80-4738-bb89-e50a7ba9bed1';
const baseUrl = 'https://na1.api.riotgames.com/lol';

// FIRST
// Fetch loading screen splash arts function (unchanged)
// async function fetchLoadingScreenSplashArts() {
//     const baseUrl = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/';

//     try {
//         const response = await fetch('https://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion.json');
//         if (!response.ok) {
//             throw new Error('Failed to fetch champion data');
//         }
//         const data = await response.json();

//         const loadingScreenSplashArts = {};

//         // Iterate over each champion and their skins
//         for (const championKey in data.data) {
//             const champion = data.data[championKey];
//             const championName = champion.id;

//             // Fetch loading screen splash art for default skin (skin index 0)
//             const loadingScreenUrl = `${baseUrl}${championName}_0.jpg`;
//             loadingScreenSplashArts[championName] = loadingScreenUrl;
//         }

//         return loadingScreenSplashArts;
//     } catch (error) {
//         console.error('Error fetching loading screen splash arts:', error);
//     }
// }

// // Function to display loading screen splash arts on the webpage
// async function displayLoadingScreenSplashArts() {
//     const loadingScreenSplashArts = await fetchLoadingScreenSplashArts();
//     const container = document.getElementById('loading-screen-container'); // Assuming you have a container element in your HTML with id "loading-screen-container"

//     // Iterate over the fetched splash arts and create <img> elements
//     for (const championName in loadingScreenSplashArts) {
//         const img = document.createElement('img');
//         img.src = loadingScreenSplashArts[championName];
//         img.alt = championName;
//         container.appendChild(img); // Append the <img> element to the container
//     }
// }

// // Call the function to display loading screen splash arts when the page loads
// window.onload = displayLoadingScreenSplashArts;


// SECOND
// Function to fetch champion data and select a random champion
// async function fetchRandomChampion() {
//     try {
//         const response = await fetch('https://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion.json');
//         if (!response.ok) {
//             throw new Error('Failed to fetch champion data');
//         }
//         const data = await response.json();

//         // Get an array of champion names
//         const championNames = Object.keys(data.data);

//         // Select a random champion name
//         const randomChampionName = championNames[Math.floor(Math.random() * championNames.length)];

//         return randomChampionName;
//     } catch (error) {
//         console.error('Error fetching random champion:', error);
//     }
// }

// // Function to fetch loading screen splash art for a specific champion
// async function fetchLoadingScreenSplashArt(championName) {
//     const baseUrl = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/';

//     try {
//         // Fetch loading screen splash art for default skin (skin index 0)
//         const loadingScreenUrl = `${baseUrl}${championName}_0.jpg`;
//         return loadingScreenUrl;
//     } catch (error) {
//         console.error('Error fetching loading screen splash art:', error);
//     }
// }

// // Function to display a random champion splash art on the webpage
// async function displayRandomChampionSplashArt() {
//     const randomChampionName = await fetchRandomChampion();
//     const loadingScreenUrl = await fetchLoadingScreenSplashArt(randomChampionName);

//     // Create an <img> element and set its attributes
//     const img = document.createElement('img');
//     img.src = loadingScreenUrl;
//     img.alt = randomChampionName;

//     // Append the <img> element to the container on the webpage
//     const container = document.getElementById('loading-screen-container'); // Assuming you have a container element in your HTML with id "loading-screen-container"
//     container.appendChild(img);
// }

// // Call the function to display a random champion splash art when the page loads
// window.onload = displayRandomChampionSplashArt;


//THIRD
// Function to fetch champion data and select a random champion
// Function to fetch champion data and select a random champion
// async function fetchRandomChampion() {
//     try {
//         const response = await fetch('https://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion.json');
//         if (!response.ok) {
//             throw new Error('Failed to fetch champion data');
//         }
//         const data = await response.json();

//         // Get an array of champion names
//         const championNames = Object.keys(data.data);

//         // Select a random champion name
//         const randomChampionName = championNames[Math.floor(Math.random() * championNames.length)];

//         return randomChampionName;
//     } catch (error) {
//         console.error('Error fetching random champion:', error);
//     }
// }

// // Function to fetch loading screen splash art for a specific champion
// async function fetchLoadingScreenSplashArt(championName) {
//     const baseUrl = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/';

//     try {
//         // Fetch loading screen splash art for default skin (skin index 0)
//         const loadingScreenUrl = `${baseUrl}${championName}_0.jpg`;
//         return loadingScreenUrl;
//     } catch (error) {
//         console.error('Error fetching loading screen splash art:', error);
//     }
// }

// // Function to display a champion splash art
// async function displayChampionSplashArt() {
//     const randomChampionName = await fetchRandomChampion();
//     const loadingScreenUrl = await fetchLoadingScreenSplashArt(randomChampionName);

//     // Create an <img> element and set its attributes
//     const img = document.createElement('img');
//     img.src = loadingScreenUrl;
//     img.alt = randomChampionName;

//     // Append the <img> element to the container on the webpage
//     const container = document.getElementById('loading-screen-container');
//     container.appendChild(img);
// }

// // Callback function for Intersection Observer
// async function intersectionCallback(entries, observer) {
//     entries.forEach(async (entry) => {
//         if (entry.isIntersecting) {
//             await displayChampionSplashArt();
//         }
//     });
// }

// // Create Intersection Observer
// const observer = new IntersectionObserver(intersectionCallback);

// // Call the function to display initial champion splash art
// displayChampionSplashArt();

// // Observe the last <img> element in the container
// const lastImg = document.querySelector('#loading-screen-container img:last-child');
// if (lastImg) {
//     observer.observe(lastImg);
// }


//FOURTH - best one yet for normal splashes
// Function to fetch all champion names
// async function fetchAllChampionNames() {
//     try {
//         const response = await fetch('https://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion.json');
//         if (!response.ok) {
//             throw new Error('Failed to fetch champion data');
//         }
//         const data = await response.json();

//         // Get an array of all champion names
//         const championNames = Object.keys(data.data);

//         return championNames;
//     } catch (error) {
//         console.error('Error fetching all champion names:', error);
//     }
// }

// // Function to shuffle an array
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// // Function to fetch loading screen splash art for a specific champion
// async function fetchLoadingScreenSplashArt(championName) {
//     const baseUrl = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/';

//     try {
//         // Fetch loading screen splash art for default skin (skin index 0)
//         const loadingScreenUrl = `${baseUrl}${championName}_0.jpg`;
//         return loadingScreenUrl;
//     } catch (error) {
//         console.error('Error fetching loading screen splash art:', error);
//     }
// }

// // Function to display all champion splash arts in random order
// async function displayAllChampionSplashArts() {
//     const championNames = await fetchAllChampionNames();
//     const shuffledChampionNames = shuffleArray(championNames);

//     // Iterate over each champion name and display its splash art
//     shuffledChampionNames.forEach(async (championName) => {
//         const loadingScreenUrl = await fetchLoadingScreenSplashArt(championName);

//         // Create an <img> element and set its attributes
//         const img = document.createElement('img');
//         img.src = loadingScreenUrl;
//         img.alt = championName;

//         // Append the <img> element to the container on the webpage
//         const container = document.getElementById('loading-screen-container');
//         container.appendChild(img);
//     });
// }

// // Call the function to display all champion splash arts in random order
// displayAllChampionSplashArts();


//FIFTH - FOR FETCHING ONE CHAMP SKIN AT A TIME
// Function to fetch champion data and select a random champion
// async function fetchRandomChampion() {
//     try {
//         const response = await fetch('https://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion.json');
//         if (!response.ok) {
//             throw new Error('Failed to fetch champion data');
//         }
//         const data = await response.json();

//         // Get an array of champion names
//         const championNames = Object.keys(data.data);

//         // Select a random champion name
//         const randomChampionName = championNames[Math.floor(Math.random() * championNames.length)];

//         return randomChampionName;
//     } catch (error) {
//         console.error('Error fetching random champion:', error);
//     }
// }

// // Function to fetch loading screen splash art for a specific champion skin
// async function fetchLoadingScreenSplashArt(championName, skinIndex) {
//     const baseUrl = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/';

//     try {
//         // Fetch loading screen splash art for specified skin index
//         const loadingScreenUrl = `${baseUrl}${championName}_${skinIndex}.jpg`;
//         return loadingScreenUrl;
//     } catch (error) {
//         console.error('Error fetching loading screen splash art:', error);
//     }
// }

// // Function to display a random champion skin splash art on the webpage
// async function displayRandomChampionSkinSplashArt() {
//     const randomChampionName = await fetchRandomChampion();
//     // Fetch total number of skins for the champion
//     const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion/${randomChampionName}.json`);
//     const championData = await response.json();
//     const totalSkins = championData.data[randomChampionName].skins.length;
//     // Select a random skin index (excluding the default skin)
//     const randomSkinIndex = Math.floor(Math.random() * (totalSkins - 1)) + 1;
//     const loadingScreenUrl = await fetchLoadingScreenSplashArt(randomChampionName, randomSkinIndex);

//     // Create an <img> element and set its attributes
//     const img = document.createElement('img');
//     img.src = loadingScreenUrl;
//     img.alt = `${randomChampionName} Skin ${randomSkinIndex}`;

//     // Append the <img> element to the container on the webpage
//     const container = document.getElementById('loading-screen-container');
//     container.appendChild(img);
// }

// Call the function to display a random champion skin splash art when the page loads
// window.onload = displayRandomChampionSkinSplashArt;



//SIXTH - FOR FETCHING ONE CHAMP'S SKINS
// // Function to fetch champion data and select a random champion
// async function fetchRandomChampion() {
//     try {
//         const response = await fetch('https://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion.json');
//         if (!response.ok) {
//             throw new Error('Failed to fetch champion data');
//         }
//         const data = await response.json();

//         // Get an array of champion names
//         const championNames = Object.keys(data.data);

//         // Select a random champion name
//         const randomChampionName = championNames[Math.floor(Math.random() * championNames.length)];

//         return randomChampionName;
//     } catch (error) {
//         console.error('Error fetching random champion:', error);
//     }
// }

// // Function to fetch loading screen splash art for a specific champion skin
// async function fetchLoadingScreenSplashArt(championName, skinIndex) {
//     const baseUrl = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/';

//     try {
//         // Fetch loading screen splash art for specified skin index
//         const loadingScreenUrl = `${baseUrl}${championName}_${skinIndex}.jpg`;
//         return loadingScreenUrl;
//     } catch (error) {
//         console.error('Error fetching loading screen splash art:', error);
//     }
// }

// // Function to display all champion skin splash arts on the webpage
// async function displayAllChampionSkinSplashArts() {
//     const randomChampionName = await fetchRandomChampion();
//     // Fetch total number of skins for the champion
//     const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion/${randomChampionName}.json`);
//     const championData = await response.json();
//     const skins = championData.data[randomChampionName].skins;

//     // Loop through each skin and display its splash art
//     for (let i = 0; i < skins.length; i++) {
//         const skin = skins[i];
//         const loadingScreenUrl = await fetchLoadingScreenSplashArt(randomChampionName, skin.num);

//         // Create an <img> element and set its attributes
//         const img = document.createElement('img');
//         img.src = loadingScreenUrl;
//         img.alt = `${randomChampionName} ${skin.name}`;

//         // Append the <img> element to the container on the webpage
//         const container = document.getElementById('loading-screen-container');
//         container.appendChild(img);
//     }
// }

// // Call the function to display all champion skin splash arts when the page loads
// window.onload = displayAllChampionSkinSplashArts;


//SEVENTH - DISPLAY ANY SKIN
// Function to fetch loading screen splash art for a specific champion skin
async function fetchLoadingScreenSplashArt(championName, skinIndex) {
    const baseUrl = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/';

    try {
        // Fetch loading screen splash art for specified skin index
        const loadingScreenUrl = `${baseUrl}${championName}_${skinIndex}.jpg`;
        return loadingScreenUrl;
    } catch (error) {
        console.error('Error fetching loading screen splash art:', error);
    }
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to display all champion skin splash arts on the webpage in a random order
async function displayAllChampionSkinSplashArtsRandomOrder() {
    try {
        const response = await fetch('https://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion.json');
        if (!response.ok) {
            throw new Error('Failed to fetch champion data');
        }
        const data = await response.json();
        const allChampions = data.data;

        console.log('All Champions:', allChampions);

        const allSkins = [];

        // Function to fetch data for a specific champion
        async function fetchChampionData(championName) {
            try {
                const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion/${championName}.json`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch data for ${championName}`);
                }
                const data = await response.json();
                return data.data[championName];
            } catch (error) {
                console.error(`Error fetching data for ${championName}:`, error);
            }
        }

        // Iterate through each champion to get their skins
        for (const championName in allChampions) {
            const championData = await fetchChampionData(championName);
            if (championData.skins) {
                const skins = championData.skins;

                // Iterate through each skin and add it to the array of all skins
                for (const skin of skins) {
                    allSkins.push({ championName, skinIndex: skin.num });
                }
            }
        }
        console.log('All Skins:', allSkins);

        // Shuffle the array of all skins
        const shuffledSkins = shuffleArray(allSkins);

        // Loop through each skin and display its splash art
        for (let i = 0; i < shuffledSkins.length; i++) {
            const { championName, skinIndex } = shuffledSkins[i];
            const loadingScreenUrl = await fetchLoadingScreenSplashArt(championName, skinIndex);

            // Create an <img> element and set its attributes
            const img = document.createElement('img');
            img.src = loadingScreenUrl;
            img.alt = `${championName} Skin ${skinIndex}`;

            // Append the <img> element to the container on the webpage
            const container = document.getElementById('loading-screen-container');
            container.appendChild(img);
        }
    } catch (error) {
        console.error('Error displaying all champion skin splash arts:', error);
    }
}

// Call the function to display all champion skin splash arts in random order when the page loads
window.onload = displayAllChampionSkinSplashArtsRandomOrder;
