// Your code here
const apiKey = 'RGAPI-446641c0-1f80-4738-bb89-e50a7ba9bed1';
const baseUrl = 'https://na1.api.riotgames.com/lol';

//display random loading screen skin splashes and names
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

// Helper Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function displayAllChampionSkinSplashArtsRandomOrder() {
    try {
        // Fetch champion data
        const response = await fetch('https://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion.json');
        if (!response.ok) {
            throw new Error('Failed to fetch champion data');
        }
        const data = await response.json();
        const allChampions = data.data;

        // Array to store all skins
        const allSkins = [];

        // Function to fetch data for a specific champion
        async function fetchChampionData(championName) {
            try {
                const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion/${championName}.json`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch data for ${championName}`);
                }
                const data = await response.json();
                const championInfo = data.data[championName];
                const skins = championInfo.skins.map(skin => ({
                    name: skin.name,
                    num: skin.num
                }));
                return { championName, skins };
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
                    allSkins.push({ championName, skinIndex: skin.num, skinName: skin.name });
                }
            }
        }

        // Shuffle the array of all skins
        const shuffledSkins = shuffleArray(allSkins);

        // Loop through each skin and display its splash art
        for (const { championName, skinIndex, skinName } of shuffledSkins) {
            const loadingScreenUrl = await fetchLoadingScreenSplashArt(championName, skinIndex);

            // Create a container div for the image and text overlay
            const container = document.createElement('div');
            container.classList.add('image-container'); // Add a class to the container

            // Create an <img> element and set its attributes
            const img = document.createElement('img');
            img.src = loadingScreenUrl;
            img.alt = `${championName} Skin ${skinIndex}`;
            img.classList.add('splash'); // Add a class to the img element

            // Create a text overlay div
            const textOverlay = document.createElement('div');
            textOverlay.classList.add('text-overlay'); // Add a class to the text overlay

            if (skinName === 'default') {
               textOverlay.textContent = `${championName}`;
            } else {
                textOverlay.textContent = `${skinName}`; // Set the text content
            }
            // Append the image and text overlay to the container
            container.appendChild(img);
            container.appendChild(textOverlay);

            // Append the container to the main container on the webpage
            const mainContainer = document.getElementById('loading-screen-container');
            mainContainer.appendChild(container);
        }
    } catch (error) {
        console.error('Error displaying all champion skin splash arts:', error);
    }
}

window.onload = displayAllChampionSkinSplashArtsRandomOrder;

//Fetching skin names:
// Function to fetch loading screen splash art for a specific champion skin
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

// // Helper Function to shuffle an array
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// // Function to display all champion skin splash arts on the webpage in a random order
// async function displayAllChampionSkinSplashArtsRandomOrder() {
//     try {
//         const response = await fetch('https://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion.json');
//         if (!response.ok) {
//             throw new Error('Failed to fetch champion data');
//         }
//         const data = await response.json();
//         const allChampions = data.data;

//         // console.log('All Champions:', allChampions);

//         const allSkins = [];

//         // Function to fetch data for a specific champion
//         async function fetchChampionData(championName) {
//             try {
//                 const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion/${championName}.json`);
//                 if (!response.ok) {
//                     throw new Error(`Failed to fetch data for ${championName}`);
//                 }
//                 const data = await response.json();
//                 return data.data[championName];
//             } catch (error) {
//                 console.error(`Error fetching data for ${championName}:`, error);
//             }
//         }

//         // Iterate through each champion to get their skins
//         for (const championName in allChampions) {
//             const championData = await fetchChampionData(championName);
//             if (championData.skins) {
//                 const skins = championData.skins;

//                 // Iterate through each skin and add it to the array of all skins
//                 for (const skin of skins) {
//                     allSkins.push({ championName, skinIndex: skin.num });
//                 }
//             }
//         }
//         // console.log('All Skins:', allSkins);

//         // Shuffle the array of all skins
//         const shuffledSkins = shuffleArray(allSkins);

//         // Loop through each skin and display its splash art
//         for (let i = 0; i < shuffledSkins.length; i++) {
//             const { championName, skinIndex } = shuffledSkins[i];
//             // console.log('Processing skin:', championName, skinIndex);
//             const championData = allChampions[championName]; // Get champion data from the previously fetched data
//             // console.log('All Champions:', allChampions);
//             console.log('Champion Data for Aatrox:', allChampions['Aatrox']);

//             if (championData && championData.skins && championData.skins.length >= skinIndex) {
//                 const skin = championData.skins[skinIndex - 1]; // Skin index starts from 1, but array index starts from 0
//                 const skinName = skin.name; // Get the actual skin name
//                 // console.log(championName);
//                 // console.log('Inside if statement');


//                 const loadingScreenUrl = await fetchLoadingScreenSplashArt(championName, skinIndex);
//                 // console.log('Loading screen URL:', loadingScreenUrl);

//                 // Create a container div for the image and text overlay
//                 const container = document.createElement('div');
//                 container.classList.add('image-container'); // Add a class to the container

//                 // Create an <img> element and set its attributes
//                 const img = document.createElement('img');
//                 img.src = loadingScreenUrl;
//                 img.alt = `${championName} ${skinName}`; // Use the actual skin name
//                 img.classList.add('splash'); // Add a class to the img element

//                 // Create a text overlay div
//                 const textOverlay = document.createElement('div');
//                 textOverlay.classList.add('text-overlay'); // Add a class to the text overlay
//                 textOverlay.textContent = `${championName} ${skinName}`; // Set the text content

//                 // Append the image and text overlay to the container
//                 container.appendChild(img);
//                 container.appendChild(textOverlay);

//                 // Append the container to the main container on the webpage
//                 const mainContainer = document.getElementById('loading-screen-container');
//                 mainContainer.appendChild(container);
//             } else {
//                 // console.log('Skipping skin:', championName, skinIndex);
//             }
//         }
//     } catch (error) {
//         console.error('Error displaying all champion skin splash arts:', error);
//     }
// }

// // Call the function to display all champion skin splash arts in random order when the page loads
// window.onload = displayAllChampionSkinSplashArtsRandomOrder;
