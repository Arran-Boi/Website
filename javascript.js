//-----------------------------------------------------
alert("Hello"); //test code for javascipt

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

//-----------------------------------------------------
//CURTAIN MENU
function openNav() {
    document.getElementById("curtain-nav").style.width = "50%";
}

function closeNav() {
    document.getElementById("curtain-nav").style.width = "0%";
}

//alert("Hello");

//Data: assume we have a list of top 5 movies
let topProducts = [{ id: 0, title: "Samsung Galaxy Tablet", description:"TAB A8 (WiFi) Tablet -10.5 4GB Ram 64GB Storage - Wi-Fi Android - Grey", image_url: "MEDIA/tablet.jpg" },
{ id: 1, title: "Apple iPhone", description:" 13 128GB - Midnight", image_url: "MEDIA/iphone.jpg" },
{ id: 2, title: "Lenovo TV", description: " 15.6 IdeaPad Slim 3I ", image_url: "MEDIA/tv.jpg" },
{ id: 3, title: "Microsoft Laptop", description: " 13.5 Surface Laptop 4", image_url: "MEDIA/watch.jpg" }
];

//------------------------------------------------------------------------------------------
//Exercise 1: Two slideshows
//Manual Slideshow
let manualIndex = 0;
function nextProduct() {
    //Increase the index by 1 if the index <= the length of topMovies array
    //if the index == 4, move back to the first movie: index = 0

    if (manualIndex < topProducts.length - 1) {
        manualIndex++;
    } else {
        manualIndex = 0;
    }

    //Extract the title, image url and display on HTML elements
    // Change title
    document.getElementById("manual-slide-title").innerHTML = topProducts[manualIndex].title;
    document.getElementById("manual-slide-img").src = topProducts[manualIndex].image_url;
    document.getElementById("manual-slide-description").innerHTML = topProducts[manualIndex].description;


}

function previousProduct() {

    if (manualIndex > 0) {
        manualIndex--;
    } else {
        manualIndex = topProducts.length = 1;
    }

    document.getElementById("manual-slide-title").innerHTML = topProducts[manualIndex].title;
    document.getElementById("manual-slide-img").src = topProducts[manualIndex].image_url;
    document.getElementById("manual-slide-description").innerHTML = topProducts[manualIndex].description;
}

// AUTOMATIC SLIDESHOW
let autoIndex = 0;
function autoSlideShow() {
    //Change the autoIndex
    if (autoIndex < topProducts.length - 1) {
        autoIndex++;
    } else {
        autoIndex = 0;
    }

    //Extract title and url and display them on HTML elements
    document.getElementById("auto-slide-title").innerHTML = topProducts[autoIndex].title;
    document.getElementById("auto-slide-img").src = topProducts[autoIndex].image_url;
    document.getElementById("auto-slide-description").innerHTML = topProducts[autoIndex].description;

    //wait 2 seconds and display next movie

    setTimeout(autoSlideShow, 2500); //wait 2 seconds

}

//Execute the autoSlideShow function when loading the website

autoSlideShow();


//--------------------------------------------
//Exercise 2: Dropdown menubar

//Populate the "selct" element with all movies in the list
function loadTopProducts() {
    //find the select Element 
    let productSelect = document.getElementById("myProductList");

    //loop through all movies in the list (array) and extract title and add to tthe slect element
    for (var i = 0; i < topProducts.length; i++) {
        //Extract title and add to select element
        //Create new option 
        let optionNode = document.createElement("option");
        //Assign the option "value" & content
        optionNode.value = topProducts[i].id.toString();
        optionNode.textContent = topProducts[i].title.toString();
        //Append this option to the "select" element 
        productSelect.appendChild(optionNode);

    }
    //------------------------------------- ab hier reinkopiert -------------------------------------
    productSelect.selectedIndex = "0";
}

//call to execute this function when loading the webpage
loadTopProducts();

function displayMyProduct() {
    //Get the selected movie "option value"
    let selectedProductIndex = document.getElementById("myProductList").value;
    document.getElementById("selctedProductTitle").innerHTML = topProducts[selectedProductIndex].title;
    document.getElementById("selectedProductDescription").innerHTML = topProducts[selectedProductIndex].description;
    document.getElementById("selectedProductUrl").src = topProducts[selectedProductIndex].image_url;
}








//------------------------------------------------------------------------------------------------------
//ADD NEW Product TO THE LIST
//Add a new movie to the existing list
function AddItemToList() {
    //Get entered item data
    let newItemTitle = document.getElementById("mySelectedProductTitle").value;
    let newItemDescription = document.getElementById("mySelectedProductDescription").value;
    let newItemUrl = document.getElementById("mySelectedProductUrl").value;
    let newId = topProducts.length;
    //Validate input before adding new item
    if ((newItemTitle == "") || (newItemDescription == "") || (newItemUrl == "")) {
        alert("ERROR. DATA IS INCOMPLETE!");
    } else {
        //Add a new item
        topProducts.push({ id: newId, title: newItemTitle, description: parseInt(newItemDescription), image_url: newItemUrl });
        //document.write(allAccounts[1].user + "," + allAccounts[1].pass);
        alert("NEW ITEM ADDED SUCCESSFULLY!");
        //Reload the drop-down list
        //Remove all current options
        document.getElementById("myProductList").options.length = 0;
        //Load updated options
        loadTopProducts();
        //Empty the inputs
        document.getElementById("mySelectedProductTitle").value = "";
        document.getElementById("mySelectedProductDescription:").value = "";
        document.getElementById("mySelectedProductUrl").value = "";
    }
}

//------------------------------------------------------------------------------------------------------
//ADD NEW COMMENT
//Load all existing comments and display them on HTML
//Data: Assume we have a list of existing comments stored in an array "allComments"
let allComments = [{ name: "Ian", comment: "Recommended, good laptop" },
{ name: "Aman", comment: "I don't like WINDOWS" },
{ name: "John", comment: "Love it, good and trusty" },
];
//----------
function loadComments() {
    //Loop through all comments in the array "allComments"
    for (var i = 0; i < allComments.length; i++) {
        let name = allComments[i].name;
        let comment = allComments[i].comment;
        //
        //Create a new HTML node/element <P> to display this comment
        let node = document.createElement("P");
        let textnode = document.createTextNode(name + ": " + comment);
        node.appendChild(textnode);//Append the content (created TextNode) to the HTML Node (child)
        let parrent_node = document.getElementById("comment-list");//Get the id of parent node
        parrent_node.appendChild(node);//Append the above child HTML node to the parent node "comment-list"
    }

}

loadComments();

//Call to run this loadComments function when the webpage is loaded.
function addComment() {
    //Get entered value/data by user
    let enteredCommentName = document.getElementById("comment_name").value;
    let enteredCommentText = document.getElementById("comment_text").value;

    //Add this new comment to the array 
    allComments.push({ name: enteredCommentName, comment: enteredCommentText });
    alert("Thank you for your comment!");

    //Display this new comment on HTML page
    //Create a new child HTML node/element as "<p>" (paragraph) (as a child node)
    let node = document.createElement("P");
    //Create a new TextNode
    let textnode = document.createTextNode(enteredCommentName + ": " + enteredCommentText); //Append the content (created TextNode) to the HTML Node (child) 
    node.appendChild(textnode);
    //Get the id of parent node "comment-list"
    let parrent_node = document.getElementById("comment-list");
    //Append the above child HTML node to the parent node

    parrent_node.appendChild(node);


    document.getElementById("comment_name").value = "";
    document.getElementById("comment_text").value = "";
}


//Execute the loadMovie() when loading the website


//------------------------------------------------------------------------------------------------------
//VOTE: LIKE / DISLIKE
//Assume the current Votes are: 15 likes and 2 dislikes

let currentVotes = { like: 15, dislike: 2 };
//Load the current votes to HTML page
document.getElementById("likeNumber").innerHTML = currentVotes.like;
document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;


let voteStatus = { like: false, dislike: false };

//Click Like button
function like() {
    //Check current status of "like" button (has been clicked or not)
    if (voteStatus.like == false) {
        //Increase a "Like": Increase the like number by 1
        document.getElementById("likeNumber").innerHTML = currentVotes.like + 1;
        //Change the background color of Like button to GREEN
        document.getElementById("likeButton").style.backgroundColor = "green";
        //Change the current status of "like" button: has been clicked
        voteStatus.like = true;
    }
        else {
            //Keep the current number of like
            document.getElementById("likeNumber").innerHTML = currentVotes.like;
            //Change the background color of Like button to WHITE
            document.getElementById("likeButton").style.backgroundColor = "white";
            //Change the current status of "like" button
            voteStatus.like = false;//has been clicked
        }
}

function dislike() {
    //Check current status of "like" button (has been clicked or not)
    if (voteStatus.dislike == false) {
        //Increase a "Like": Increase the like number by 1
        document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike + 1;
        //Change the background color of Like button to GREEN
        document.getElementById("dislikeButton").style.backgroundColor = "red";
        //Change the current status of "like" button: has been clicked
        voteStatus.dislike = true;
    }
        else {
            //Keep the current number of like
            document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
            //Change the background color of Like button to WHITE
            document.getElementById("dislikeButton").style.backgroundColor = "white";
            //Change the current status of "like" button
            voteStatus.dislike = false;//has been clicked
        }
}