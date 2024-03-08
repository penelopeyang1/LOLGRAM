// Your code here
const apiKey = 'RGAPI-e05593de-136d-4b30-8101-683cb8a07fbc';
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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

            const likeContainer = document.createElement('div');
            likeContainer.classList.add('like-container'); // Add a class to the like container

            // Create a like button
            const likeButton = document.createElement('button');
            likeButton.textContent = 'Like';
            likeButton.classList.add('like-button');

            // Create a like count span
            const likeCount = document.createElement('span');
            // Generate a random like count between 1 and 500
            const initialLikes = getRandomInt(1, 999);
            likeCount.textContent = initialLikes;
            likeCount.classList.add('like-count');

            // Event listener for the like button
            likeButton.addEventListener('click', () => {
                // Increment the like count when the button is clicked
                const currentCount = parseInt(likeCount.textContent);
                likeCount.textContent = currentCount + 1;
            });

            // Create a container div for comments
            const commentContainer = document.createElement('div');
            commentContainer.classList.add('comment-container'); // Add a class to the comment container

            // Create an input field for comments
            const commentInput = document.createElement('input');
            commentInput.type = 'text';
            commentInput.placeholder = 'Add a comment';
            commentInput.classList.add('comment-input');

            // Create a button to submit comments
            const commentButton = document.createElement('button');
            commentButton.textContent = 'Comment';
            commentButton.classList.add('comment-button'); // Add class for styling

            // Create a container for holding comments (both pre-made and newly made)
            const commentsBox = document.createElement('div');
            commentsBox.classList.add('comments-box');
            // console.log(commentsBox)

            // Usage
            // const commentBoxes = document.querySelectorAll('.comments-box');
            // commentBoxes.forEach(commentBox => displayRandomComments(commentBox));

            // Function to create a comment element
            function createCommentElement(commentText) {
                const comment = document.createElement('div');
                comment.textContent = commentText; // Set the text content of the comment
                comment.classList.add('comment'); // Add class for styling
                return comment;
            }

            // Event listener for the comment button
            // commentButton.addEventListener('click', () => {
            //     // Get the value of the comment input
            //     const commentText = commentInput.value.trim();
            //     if (commentText.trim() !== '') {
            //         // Create a new comment element
            //         const comment = document.createElement('div');
            //         comment.textContent = commentText;
            //         comment.classList.add('comment'); // Add class for styling

            //         // Append the comment to the comments box
            //         commentsBox.appendChild(comment);

            //         // Clear the comment input field
            //         commentInput.value = '';
            //     }
            // });

            //event listener for having guest username included with comment
            commentButton.addEventListener('click', () => {
                // Get the value of the comment input
                const commentText = commentInput.value.trim();
                if (commentText.trim() !== '') {
                    // Assuming you have a variable for the username, replace 'Guest_User' with your actual username variable
                    const username = 'Guest_User';

                    // Create a new comment element with the username and comment text
                    const comment = document.createElement('div');
                    comment.textContent = `${username}: ${commentText}`; // Concatenate username with comment text
                    comment.classList.add('comment'); // Add class for styling

                    // Append the comment to the comments box
                    commentsBox.appendChild(comment);

                    // Clear the comment input field
                    commentInput.value = '';
                }
            });

            // Append the input field and button to the comment container
            commentContainer.appendChild(commentInput);
            commentContainer.appendChild(commentButton);

            // Append the like button, like count, and comment container to the like container
            likeContainer.appendChild(likeButton);
            likeContainer.appendChild(likeCount);
            likeContainer.appendChild(commentContainer);
            likeContainer.appendChild(commentsBox);

            // Append the image and text overlay to the container
            container.appendChild(img);
            container.appendChild(textOverlay);
            container.appendChild(likeContainer);

            // Append the container to the main container on the webpage
            const mainContainer = document.getElementById('loading-screen-container');
            mainContainer.appendChild(container);
        }
    } catch (error) {
        console.error('Error displaying all champion skin splash arts:', error);
    }
}

window.onload = displayAllChampionSkinSplashArtsRandomOrder;
