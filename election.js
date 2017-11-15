document.addEventListener("DOMContentLoaded", function() {

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'JSON'
  }).done(function(response){
    // console.log(response.candidates);

    var ul = document.getElementById('candidates');

    response.candidates.forEach(function(candidate){
      var li = document.createElement('li');
      // li.innerHTML = "<span><strong>"+ candidate.name +" :</strong></span><span> "+ candidate.votes +"</span>";
      // ul.append(li);
      var spanName = document.createElement('span');
      var strong = document.createElement('strong');
      strong.innerText = candidate.name+": ";
      spanName.append(strong);
      li.append(spanName);
      var spanVotes = document.createElement('span');
      spanVotes.innerText = candidate.votes;
      li.append(spanVotes);
      ul.append(li);
    });


  });


});
