
// LIKE SYSYTEM JS

var likeIcons = document.querySelectorAll('.like-svg');
var likeCounters = document.querySelectorAll('.like-counter');

likeIcons.forEach(function(icon, index) {
    var isLiked = false;

    icon.addEventListener('click', function() {
        if (isLiked) {
            icon.style.fill = 'none';
            likeCounters[index].textContent = '0';
        } else {
            icon.style.fill = 'rgb(255, 87, 87)';
            likeCounters[index].textContent = '1';
        }
        isLiked = !isLiked;
    });
});

document.querySelectorAll('.like-container').forEach(function(container) {
    container.addEventListener('click', function() {
        container.classList.toggle('clicked');
        var counter = container.querySelector('.like-counter');
        if (container.classList.contains('clicked')) {
            counter.style.color = 'rgb(255, 87, 87)'; 
        } else {
            counter.style.color = ''; 
        }
    });
});

// LIKE SYSYTEM JS
  

// MODAL START

document.getElementById("open-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open");
    document.body.classList.add("modal-open");
});

document.getElementById("close-my-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open");
    document.body.classList.remove("modal-open");
});

// MODAL END
      

// ROTATE PUSHUP JS

// CREATE BUTTON

function showButtons() {
    var container = document.getElementById("container_under-create");
    var postButtonContainer = document.querySelector('.button-create-post');
    var adButtonContainer = document.querySelector('.button-create-ad');
    
    if (container.style.display === "none") {
        container.style.display = "block";
        postButtonContainer.style.display = "block";
        adButtonContainer.style.display = "block";
    } else {
        container.style.display = "none";
        postButtonContainer.style.display = "none";
        adButtonContainer.style.display = "none";
    }
    
    var createButton = document.querySelector('.button-create');
    var rect = createButton.getBoundingClientRect();
    container.style.top = (rect.top + window.scrollY + createButton.offsetHeight) + 'px';
    container.style.left = rect.left + 'px';
}

// CREATE BUTTON END

document.getElementById("button-pushup").addEventListener("click", function() {
    var pushupContainer = document.getElementById("pushup-under-container");
    if (pushupContainer.style.display === "none" || pushupContainer.style.display === "") {
        pushupContainer.style.display = "block";
    } else {
        pushupContainer.style.display = "none";
    }
});


// PUSHUP JS END

document.getElementById('toggleSidebar').addEventListener('click', function() {
    var sidebar = document.querySelector('.sidebar');
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0px';
    } else {
        sidebar.style.left = '-250px';
    }
});


// END


 

