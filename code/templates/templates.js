window.newsItemTemplate = "<div class='col-6 col-sm-6 col-lg-4'> <h2><%- heading %></h2><div>av <%- author %></div><p> <%- content %></p></div>";

window.addNewsTemplate = "<div class='jumbotron'> \
<h2>Legg til nyhet </h2> \
<form role='form'> \
    <div class='form-group'> \
      <input type='text' id='author' class='form-control' placeholder='Ditt navn'> \
    </div> \
    <div class='form-group'> \
      <label for='headline'>Overskrift</label> \
      <input type='text' id='headline' class='form-control' placeholder='Awsm overskrift'> \
    </div> \
    <div class='form-group'> \
      <label for='newsContent'>Innhold</label> \
      <textarea id='newsContent' class='form-control' rows='3'></textarea> \
    </div> \
    <button type='submit' class='btn btn-primary'>Submit</button> \
</form> \
</div>";