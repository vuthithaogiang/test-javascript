var users = [
    {
        id: 1,
        userName: 'Kien Dang'
    },
    {
        id: 2,
        userName: 'Son Dang'
    },
    {
        id: 3,
        userName: 'Kien Dang'
    },
    {
        id: 4,
        userName: 'Thao Giang'
    }
]


var comments = [
    {
        id: 1,
        userId: 1,
        content: 'Bao gio ra video moi anh oi?'
    },
    {
        id: 2,
        userId: 2,
        content: 'Anh vua ra roi.'
    },
    {
        id: 3,
        userId: 1,
        content: 'Em cam on.'

    }
]

function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments);

        }, 1000);
    });
}


function getUsersByIds(userIds) {
    return new Promise(function (resolve) {
        var result = users.filter(function (user) {
            return userIds.includes(user.id);
        });

        setTimeout(function () {
            resolve(result);
        }, 1000);
    });
}

getComments()
    .then (function (comments) {
        var userIds = comments.map(function (comment) {
            return comment.userId;
        });

        return getUsersByIds(userIds)
            .then(function (users) {
                return {
                    users: users,
                    comments: comments
                };
            });
    })

    .then (function (data){
        console.log(data);

        var commentBox = document.getElementById('comment-box');
        console.log(commentBox);

        var html = '';

        data.comments.forEach (function (comment){
            var user = data.users.find(function (user){
                return user.id === comment.userId;
            });
            console.log(user);
           

            html += `<li>${user.userName}: ${comment.content}</li>`;
            console.log(html);

        });

        commentBox.innerHTML = html;

    })
