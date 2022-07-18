var form = document.getElementById("myform")


form.addEventListener("submit", function (e) {

    e.preventDefault()
    var inps = document.getElementById("inp").value
    var joinedname = inps.split(" ").join("")
    // alert(inps)
    fetch("https://api.github.com/users/"+joinedname)
    .then((result) => result.json())
    .then((data) =>{
        // console.log(data)
        document.getElementById("res1").innerHTML= ` Name : ${data.name}  <br> Gist : ${data.public_gists} <br> Repo : ${data.public_repos} <br> Followings : ${data.following} <br> Followers : ${data.followers} `
       
    })
    // alert(joinedname)
})