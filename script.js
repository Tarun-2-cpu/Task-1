document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM is fully loaded and ready!");

    document.body.style.display = 'flex';
    document.body.style.alignItems = 'center';
    document.body.style.justifyContent = 'center';

    const leftDiv = document.createElement('div');
    leftDiv.style.width = '50%';
    leftDiv.style.height = '100vh';
    leftDiv.style.float = 'left';
    leftDiv.style.display = 'flex';
    leftDiv.style.flexDirection = 'column';
    leftDiv.style.alignItems = 'center';
    leftDiv.style.justifyContent = 'space-around';

    const rightDiv = document.createElement('div');
    rightDiv.style.width = '50%';
    rightDiv.style.height = '100vh';
    rightDiv.style.float = 'right';
    rightDiv.style.display = 'flex';
    rightDiv.style.flexDirection = 'column';
    rightDiv.style.alignItems = 'center';
    rightDiv.style.justifyContent = 'center'

    document.body.appendChild(leftDiv);
    document.body.appendChild(rightDiv);


    const images = [
        { id: '1/5', color: 'blue', bg: '#ADD8E6' },
        { id: '2/5', color: 'blue', bg: '#6495ED' },
        { id: '3/5', color: 'blue', bg: '#0096FF' },
        { id: '4/5', color: 'blue', bg: '#0437F2' },
        { id: '5/5', color: 'blue', bg: '#00008B' },

        { id: '1/5', color: 'red', bg: '#FF7F7F' },
        { id: '2/5', color: 'red', bg: '#FF0000' },
        { id: '3/5', color: 'red', bg: '#D22B2B' },
        { id: '4/5', color: 'red', bg: '#880808' },
        { id: '5/5', color: 'red', bg: '#550000' },

        { id: '1/5', color: 'green', bg: '#AAFF00' },
        { id: '2/5', color: 'green', bg: '#32CD32' },
        { id: '3/5', color: 'green', bg: '#228B22' },
        { id: '4/5', color: 'green', bg: '#097969' },
        { id: '5/5', color: 'green', bg: '#023020' }
    ];

    // feature image container
    const featureImage = document.createElement('div')
    featureImage.className = 'feature-image';
    featureImage.style.backgroundColor = '#3A7BCB';
    featureImage.style.width = '100%';
    featureImage.style.height = '300px';
    featureImage.style.borderRadius = '10px';


    // thumbnail container
    const thumbnailContainer = document.createElement('div');
    thumbnailContainer.className = 'thumbnail-container';
    thumbnailContainer.style.display = 'flex';
    thumbnailContainer.style.justifyContent = 'space-around';
    thumbnailContainer.style.alignItems = 'center';
    thumbnailContainer.style.flexWrap = 'wrap';
    thumbnailContainer.style.marginTop = '20px';
    thumbnailContainer.style.gap = '10px';
    thumbnailContainer.style.border = '1px solid #ccc';
    thumbnailContainer.style.width = '100%';
    thumbnailContainer.style.padding = '20px';
    thumbnailContainer.style.borderRadius = '10px';


    // buttons
    const buttonDiv = document.createElement('div')
    buttonDiv.className = 'button-container';
    buttonDiv.style.display = 'flex';
    buttonDiv.style.justifyContent = 'center';
    buttonDiv.style.marginTop = '20px';
    buttonDiv.style.gap = '10px';

    rightDiv.appendChild(buttonDiv);


    ["All", "Red", "Blue", "Green"].forEach(color => {
        const button = document.createElement('button');
        button.textContent = color;
        button.className = color.toLowerCase();
        buttonDiv.appendChild(button);

        button.style.padding = '10px 20px';
        button.style.fontSize = '16px';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.backgroundColor = 'none';
        button.style.color = 'black';
        button.style.transition = 'background-color 0.3s ease';

        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = '#2F5C9C';
        });

        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = 'white';
        });

        button.addEventListener('click', function () {
            console.log(button)

            renderThumbnails(color);

            // let filterImage = images.filter(image => {
            //     return color === "All" || image.color === color.toLowerCase();
            // })
            // console.log(filterImage);

            // thumbnailContainer.innerHTML = '';
            // filterImage.forEach(img => {
            //     const thumbnail = document.createElement('div');
            //     thumbnail.className = img.color;
            //     thumbnail.style.backgroundColor = img.bg;
            //     thumbnail.style.width = '50px';
            //     thumbnail.style.height = '50px';
            //     thumbnail.style.border = '1px solid #ccc';
            //     thumbnail.style.cursor = 'pointer';
            //     thumbnail.textContent = img.id + ' ' + img.color;
            //     thumbnail.style.textAlign = 'center';
            //     thumbnail.style.color = 'white';
            //     thumbnail.style.display = 'flex';
            //     thumbnail.style.alignItems = 'center';
            //     thumbnail.style.justifyContent = 'center';
            //     thumbnail.style.fontSize = '14px';
            //     thumbnail.style.width = '30%';
            //     thumbnail.style.borderRadius = '10px';

            //     console.log(thumbnail);
            //     thumbnailContainer.appendChild(thumbnail);

            //     thumbnail.addEventListener('click', function () {
            //         console.log(img)
            //         featureImage.style.backgroundColor = img.bg;
            //         featureImage.textContent = img.id + ' ' + img.color;
            //         featureImage.style.textAlign = 'center';
            //         featureImage.style.color = 'white';
            //         featureImage.style.display = 'flex';
            //         featureImage.style.alignItems = 'center';
            //         featureImage.style.justifyContent = 'center';
            //         featureImage.style.fontSize = '24px';
            //     })
            // })

            // if (filterImage.length > 0) {
            //     const firstImage = filterImage[0];
            //     featureImage.style.backgroundColor = firstImage.bg;
            //     featureImage.textContent = firstImage.id + ' ' + firstImage.color;
            //     featureImage.style.textAlign = 'center';
            //     featureImage.style.color = 'white';
            //     featureImage.style.display = 'flex';
            //     featureImage.style.alignItems = 'center';
            //     featureImage.style.justifyContent = 'center';
            //     featureImage.style.fontSize = '24px';
            // }
        })
    })

    //dropdown

    const dropdown = document.createElement('select');
    dropdown.className = 'dropdown';
    dropdown.style.marginTop = '20px';
    dropdown.style.display = 'block';
    dropdown.style.width = '150px';
    dropdown.style.height = '30px';
    dropdown.style.textAlign = 'center';
    dropdown.style.fontSize = '16px';
    dropdown.style.border = '1px solid none';
    dropdown.style.borderRadius = '5px';
    dropdown.style.backgroundColor = 'none';
    dropdown.style.cursor = 'pointer';
    dropdown.style.marginBottom = '20px';
    dropdown.style.marginLeft = 'auto';
    dropdown.style.marginRight = 'auto';

    rightDiv.appendChild(dropdown);

    ["All", "Red", "Blue", "Green"].forEach(color => {
        const option = document.createElement('option');
        option.textContent = color;
        option.className = color.toLowerCase();
        dropdown.appendChild(option);

        dropdown.addEventListener('change', function (e) {
            console.log(e.target.value)

            // let filterImage = images.filter(image => {
            //     return e.target.value === "All" || image.color === e.target.value.toLowerCase();
            // })
            // console.log(filterImage);

            // thumbnailContainer.innerHTML = '';
            // filterImage.forEach(img => {
            //     const thumbnail = document.createElement('div');
            //     thumbnail.className = img.color;
            //     thumbnail.style.backgroundColor = img.bg;
            //     thumbnail.style.width = '50px';
            //     thumbnail.style.height = '50px';
            //     thumbnail.style.border = '1px solid #ccc';
            //     thumbnail.style.cursor = 'pointer';
            //     thumbnail.textContent = img.id;
            //     thumbnail.style.textAlign = 'center';
            //     thumbnail.style.color = 'white';
            //     thumbnail.style.display = 'flex';
            //     thumbnail.style.alignItems = 'center';
            //     thumbnail.style.justifyContent = 'center';
            //     thumbnail.style.fontSize = '14px';
            //     thumbnail.style.width = '30%';
            //     thumbnail.style.borderRadius = '10px';


            //     console.log(thumbnail);
            //     thumbnailContainer.appendChild(thumbnail);

            //     thumbnail.addEventListener('click', function () {
            //         console.log(img)

            //         featureImage.style.backgroundColor = img.bg;
            //         featureImage.textContent = img.id;
            //         featureImage.style.textAlign = 'center';
            //         featureImage.style.color = 'white'
            //         featureImage.style.display = 'flex';
            //         featureImage.style.alignItems = 'center';
            //         featureImage.style.justifyContent = 'center';
            //         featureImage.style.fontSize = '24px';
            //     })
            // })

            // if (filterImage.length > 0) {
            //     const firstImage = filterImage[0];
            //     featureImage.style.backgroundColor = firstImage.bg;
            //     featureImage.textContent = firstImage.id + ' ' + firstImage.color;
            //     featureImage.style.textAlign = 'center';
            //     featureImage.style.color = 'white';
            //     featureImage.style.display = 'flex';
            //     featureImage.style.alignItems = 'center';
            //     featureImage.style.justifyContent = 'center';
            //     featureImage.style.fontSize = '24px';
            // }

            renderThumbnails(e.target.value);
        })

    })


    leftDiv.appendChild(featureImage);
    leftDiv.appendChild(thumbnailContainer);

    function renderThumbnails(color) {
        let filterImage = images.filter(image => {
            return color === "All" || image.color === color.toLowerCase();
        });

        thumbnailContainer.innerHTML = '';
        filterImage.forEach(img => {
            const thumbnail = document.createElement('div');
            thumbnail.className = img.color;
            thumbnail.style.backgroundColor = img.bg;
            thumbnail.style.width = '30%';
            thumbnail.style.height = '50px';
            thumbnail.style.border = '1px solid #ccc';
            thumbnail.style.cursor = 'pointer';
            thumbnail.textContent = img.id + ' ' + img.color;
            thumbnail.style.textAlign = 'center';
            thumbnail.style.color = 'white';
            thumbnail.style.display = 'flex';
            thumbnail.style.alignItems = 'center';
            thumbnail.style.justifyContent = 'center';
            thumbnail.style.fontSize = '14px';
            thumbnail.style.borderRadius = '10px';

            thumbnail.addEventListener('click', function () {
                featureImage.style.backgroundColor = img.bg;
                featureImage.textContent = img.id + ' ' + img.color;
                featureImage.style.textAlign = 'center';
                featureImage.style.color = 'white';
                featureImage.style.display = 'flex';
                featureImage.style.alignItems = 'center';
                featureImage.style.justifyContent = 'center';
                featureImage.style.fontSize = '24px';
            });

            thumbnailContainer.appendChild(thumbnail);
        });

        if (filterImage.length > 0) {
            const firstImage = filterImage[0];
            featureImage.style.backgroundColor = firstImage.bg;
            featureImage.textContent = firstImage.id + ' ' + firstImage.color;
            featureImage.style.textAlign = 'center';
            featureImage.style.color = 'white';
            featureImage.style.display = 'flex';
            featureImage.style.alignItems = 'center';
            featureImage.style.justifyContent = 'center';
            featureImage.style.fontSize = '24px';
        }
    }

    renderThumbnails("All");

    applyResponsiveStyles();

    function applyResponsiveStyles() {
        if (window.innerWidth < 768) {
            // Mobile view
            leftDiv.style.width = '100%';
            rightDiv.style.width = '100%';
            leftDiv.style.height = 'auto';
            rightDiv.style.height = 'auto';
            leftDiv.style.float = 'none';
            rightDiv.style.float = 'none';
            document.body.style.flexDirection = 'column';
        } else {
            // Desktop view
            leftDiv.style.width = '50%';
            rightDiv.style.width = '50%';
            leftDiv.style.height = '100vh';
            rightDiv.style.height = '100vh';
            leftDiv.style.float = 'left';
            rightDiv.style.float = 'right';
            document.body.style.flexDirection = 'row';
        }
    }

    window.addEventListener('resize', applyResponsiveStyles);
});


